async function lerArquivo(arquivo) {

    let response = await fetch(`chrome-extension://${chrome.runtime.id}/src/${arquivo}`)

    let responseText = await response.text()

    console.log(responseText)

    return responseText

}

async function incluiRecursos() {

    if (document.URL.includes('seb/registra-frequencia-escola')) {

        document.head.innerHTML += await lerArquivo("presencaStyleHtml.html")

        toolbar = document.getElementsByClassName("div-componente-interno")[0]
        bodyMain = document.getElementById("container-1")

        toolbar.innerHTML = await lerArquivo("botaoAreaDev.html") + toolbar.innerHTML

        document_Um = document.getElementById("container-1")

        document_Um.style.maxWidth = "100%"
        document_Um.style.marginRight = "0px"
        document_Um.style.marginLeft = "0px"
        document_Um.style.paddingRight = "0px"
        document_Um.style.paddingLeft = "0px"

        document_Dois = document.getElementById("container-2")

        document_Dois.style.maxWidth = "100%"
        document_Dois.style.marginRight = "0px"
        document_Dois.style.marginLeft = "0px"
        document_Dois.style.paddingRight = "0px"
        document_Dois.style.paddingLeft = "0px"


        document_Tres = document.getElementById("container-3")

        document_Tres.style.maxWidth = "100%"
        document_Tres.style.marginRight = "0px"
        document_Tres.style.marginLeft = "0px"
        document_Tres.style.paddingRight = "0px"
        document_Tres.style.paddingLeft = "0px"

        //REMOVE O STYLE ATUAL PARA INJETAR O MODIFICADO (NECESSÁRIO PELO BOOTSTRAP)
        document.querySelector("link[href='/seb/styles.9154eca58f8ac122454a.css']").remove()


        // CRIA E ADICIONA O OFFCANVAS LATERAL NA PAGINA
        let divoffcanvas = document.createElement('div')
        divoffcanvas.innerHTML = await lerArquivo("presencaHtml.html")

        document.body.append(divoffcanvas)

        //INSTANCIAÇÃO DOS ELEMENTOS E VARIÁVEIS DE CONTROLE
        let nomesAlunosPresenca = {}
        let nomesAlunosNew = {}
        let nomesAlunosTemporario = {}
        let offcanvas = document.getElementById('offcanvasId')
        //let botoesAlteraJanela = document.getElementsByClassName('botaoAlteraJanela')
        let selectOperacao = document.getElementById('selectOperacao')
        let formFormatarTabela = document.getElementById("formFormatarTabela")
        let formUpdate = document.getElementById('formUpdate')
        let formGerar = document.getElementById('formGerar')
        let botaoSubmit = document.getElementById('botaoSubmit')
        let botaoFormatarTabela = document.getElementById("botaoFormatarTabela")
        let botaoLimparFormatacaoTabela = document.getElementById("botaoLimparFormatacaoTabela")
        let descAlert = document.getElementById("descAlert")
        let alertUpdate = document.getElementById("alertUpdate")
        let botoesFechar = document.querySelectorAll(".btn-close")
        let txtAreaAlunos = document.getElementById("txtAreaAlunos")
        let botaoGerarJson = document.getElementById("botaoGerarJson")
        let botaoBaixarJson = document.getElementById("botaoBaixarJson")
        let descAlertErros = document.getElementById("descAlertErros")
        let descAlertFora = document.getElementById("descAlertFora")
        let contagemErros = 0
        let contagemFora = 0
        let ngx_overlay = document.getElementsByClassName("ngx-overlay")[0]
        let tabelaDados = document.getElementById("tabelaDados")
        let tbodytabelaDados = document.getElementById("tbodytabelaDados")
        let botaoAtualizarJson = document.getElementById("botaoAtualizarJson")
        let flexSwitchCheckIncluirPendencias = document.getElementById("flexSwitchCheckIncluirPendencias")


        // EVENTOS
        for (i = 0; i <= botoesAlteraJanela.length - 1; i++) {

            botoesAlteraJanela[i].addEventListener('click', () => {

                offcanvas.classList.toggle('show')

            })

        }

        document.getElementById("selectOperacao").addEventListener("input", () => {

            switch (selectOperacao.value) {

                case "formatarTabela":
                    formGerar.hidden = true
                    formUpdate.hidden = true
                    formFormatarTabela.hidden = false
                    break

                case "inserirDados":
                    formFormatarTabela.hidden = true
                    formUpdate.hidden = false
                    formGerar.hidden = true
                    alertUpdate.hidden = false
                    alertUpdate.classList.add("show")
                    break

                case "gerarArquivo":
                    formFormatarTabela.hidden = true
                    formGerar.hidden = false
                    formUpdate.hidden = true
                    break

            }

        })

        botaoSubmit.addEventListener("click", () => {

            importarDatabase()
        })

        botaoFormatarTabela.addEventListener("click", () => {

            limparFormatacao()
            formatarTabela()

        })

        botaoLimparFormatacaoTabela.addEventListener("click", () => {

            limparFormatacao()

        })

        botoesFechar.forEach((btn) => {

            btn.addEventListener("click", () => {

                btn.parentElement.classList.remove("show")
                btn.parentElement.hidden = true

            })


        })

        botaoGerarJson.addEventListener("click", () => {

            gerarJson()

        })

        /** 
        botaoAtualizarJson.addEventListener("click", () => {
    
            gerarAquivoDownload()
    
        })
        */

        ngx_overlay.addEventListener((''))


        //PARTE FUNCIONAL DO CÓDIGO

        function formataObjAluno(objAluno, nomeAlunoPropriedade) {

            let dadosFormatados
            //FORMATA PARA A NOTAÇÃO JSON
            dadosFormatados = `"${nomeAlunoPropriedade}":{\n`
            dadosFormatados += (JSON.stringify(nomesAlunosPresenca[nomeAlunoPropriedade])).replace('{', "")
            dadosFormatados = dadosFormatados.replaceAll('"nomeSerie"', '"nomeSerie"')
            dadosFormatados = dadosFormatados.replaceAll('"nascimentoAluno"', '\n"nascimentoAluno"')
            dadosFormatados = dadosFormatados.replaceAll('"pend"', '\n"pend"')
            dadosFormatados = dadosFormatados.replaceAll('}', '},\n\n')
            dadosFormatados = dadosFormatados.replaceAll('},\n\n},', '}},\n\n')

            return dadosFormatados

        }

        function importarDatabase() {

            // LIMPA CASO UMA NOVA DATABASE SEJA INCLUIDA
            txtAreaAlunos.value = ""

            const input = document.getElementById('inputArquivo');
            const arquivo = input.files[0];

            let fileReader = new FileReader()

            fileReader.onload = function (e) {

                resultado = fileReader.result

                localStorage.setItem("alunos", resultado)
                input.value = ""
                alertUpdate.hidden = false
                alertUpdate.classList.remove("alert-danger")
                alertUpdate.classList.add("alert-success")
                alertUpdate.classList.add("show")
                descAlert.innerText = "IMPORTADO COM SUCESSO"
            }

            try {

                fileReader.readAsText(arquivo)


            } catch (e) {
                alertUpdate.classList.add("alert-danger")
                alertUpdate.classList.add("show")
                alertUpdate.hidden = false
                descAlert.innerText = e

            }


        }

        function formatarTabela() {

            if (localStorage.getItem("alunos") == null) {

                alertUpdate.classList.add("alert-danger")
                alertUpdate.classList.add("show")
                descAlert.innerText = "AINDA NÃO EXISTEM DADOS DOS ESTUDANTES NO LOCALSTORAGE"
                alertUpdate.hidden = false


            } else {

                let alunosPresenca = JSON.parse(localStorage.getItem("alunos"))

                nomesAlunosPresenca = alunosPresenca

                let linhasTabela = document.querySelectorAll(".mat-table tbody tr")

                linhasTabela.forEach(linha => {

                    nomeAluno = linha.querySelector(".mat-column-nome")
                    serieAluno = linha.querySelector(".mat-column-noSerie")


                    if (nomesAlunosPresenca[nomeAluno.innerText]) {


                        if (nomesAlunosPresenca[nomeAluno.innerText]["nomeSerie"] == serieAluno.innerText) {

                            serieAluno.innerHTML = `<div class="divFormatada divFormatadaSerie"><div class="statusAluno" style="color: green"> OK </div> <div class="serieAluno"> ${serieAluno.innerText}</div></div>`

                        } else {

                            serieAluno.innerHTML = `<div class="divFormatada divFormatadaSerie"><div class="statusAluno" style="color: red"> MODIF </div> <div class="serieAluno"> ${serieAluno.innerText}</div></div>`

                        }

                        if (nomesAlunosPresenca[nomeAluno.innerText]["pend"] == false) {

                            nomeAluno.innerHTML = `<div class="divFormatada divFormatadaNome"><div class="statusAluno" style="color: green"> OK </div> <div class="nomeAluno"> ${nomeAluno.innerText}</div></div>`


                        } else {
                            nomeAluno.innerHTML = `<div class="divFormatada divFormatadaNome"><div class="statusAluno" style="color: red"> ${nomesAlunosPresenca[nomeAluno.innerText]["pend"].type} </div> <div class="nomeAluno"> ${nomeAluno.innerText}</div></div>`
                            contagemErros++
                        }


                    } else {

                        contagemFora++
                        nomeAluno.innerHTML = `<div class="divFormatada divFormatadaNome"><div class="statusAluno" style="color: yellow"> NOVO </div> <div class="nomeAluno"> ${nomeAluno.innerText}</div></div>`
                        serieAluno.innerHTML = `<div class="divFormatada divFormatadaSerie"><div class="statusAluno" style="color: yellow"> NOVO </div> <div class="serieAluno"> ${serieAluno.innerText}</div></div>`

                    }

                });

            }

            descAlertErros.innerText = contagemErros
            descAlertFora.innerText = contagemFora



        }

        function gerarJson() {

            if (localStorage.getItem("alunos") == null) {

                //EXECUTADA PARA A PRIMEIRA VEZ GERANDO OS DADOS DOS ALUNOS

                nomesAlunosPresenca = {}

            } else {

                //EXECUTADA PARA GERAR O ARQUIVO A PARTIR DE DADOS INCLUÍDOS NO INPUT E ADICIONAR NOVOS ALUNOS

                let alunosPresenca = JSON.parse(localStorage.getItem("alunos"))

                nomesAlunosPresenca = alunosPresenca

            }

            let linhasTabela = document.querySelectorAll(".mat-table tbody tr")

            linhasTabela.forEach(linha => {

                let nomeAluno = ""
                let serieAluno = ""
                let nascimentoAluno = ""


                if (linha.querySelectorAll(".divFormatada").length > 0) {

                    nomeAluno = linha.querySelector(".mat-column-nome .divFormatada .nomeAluno").innerText
                    serieAluno = linha.querySelector(".mat-column-noSerie .divFormatada .serieAluno").innerText
                    nascimentoAluno = linha.querySelector(".mat-column-dataNascimento").innerText

                } else {

                    nomeAluno = linha.querySelector(".mat-column-nome").innerText
                    serieAluno = linha.querySelector(".mat-column-noSerie").innerText
                    nascimentoAluno = linha.querySelector(".mat-column-dataNascimento").innerText


                }


                if ((!nomesAlunosPresenca[nomeAluno]) || (nomesAlunosPresenca[nomeAluno]["pend"] != false && flexSwitchCheckIncluirPendencias.checked == true)) {

                    nomesAlunosNew[nomeAluno] = { "nomeSerie": serieAluno, "nascimentoAluno": nascimentoAluno, "pend": { "type": "nome cpf pdm" } }
                    nomesAlunosTemporario[nomeAluno] = { "nomeSerie": serieAluno, "nascimentoAluno": nascimentoAluno, "pend": { "type": "nome cpf pdm" } }

                }

            })

            txtAreaAlunos.value = ""

            for (aluno in nomesAlunosPresenca) {

                //PREENCHE TXTAREA COM OS DADOS DO LOCALSTORAGE

                txtAreaAlunos.value += formataObjAluno(nomesAlunosPresenca[aluno], aluno)

            }


            for (nomeAlunoPropriedade in nomesAlunosTemporario) {

                //POPULA A TABELA COM OS DADOS DOS ALUNOS NOVOS

                let tr = document.createElement("tr")
                let tdNome = document.createElement("td")
                tdNome.classList.add("idAlunoNome")
                let tdSerie = document.createElement("td")
                let tdNasc = document.createElement("td")
                tdNasc.classList.add("tdNasc")
                let tdPendencias = document.createElement("td")
                let tdAcao = document.createElement("td")

                let botaoExcluir = document.createElement("div")
                botaoExcluir.classList.add("btn")
                botaoExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`

                if (nomesAlunosPresenca[nomeAlunoPropriedade]) {

                    botaoExcluir.classList.add("btn-danger")

                } else {

                    botaoExcluir.classList.add("btn-warning")

                }

                botaoExcluir.addEventListener("click", () => {

                    tr.remove()
                    delete nomesAlunosNew[tdNome.innerText]
                    formataObjAlunoTabela()

                })


                tdAcao.append(botaoExcluir)
                let divChecks = document.createElement("div")
                divChecks.classList.add("divChecks")

                let chkNome = document.createElement("input")
                let chkCPF = document.createElement("input")
                let chkPPM = document.createElement("input")
                let labelchkNome = document.createElement("label")
                labelchkNome.innerText = "NOME"
                let labelchkCPF = document.createElement("label")
                labelchkCPF.innerText = "CPF"
                let labelchkPPM = document.createElement("label")
                labelchkPPM.innerText = "PPM"
                chkNome.classList.add("form-check-input")
                chkNome.classList.add("pend")
                chkNome.type = "checkbox"
                chkNome.value = "NOME"
                chkCPF.classList.add("form-check-input")
                chkCPF.classList.add("pend")
                chkCPF.type = "checkbox"
                chkCPF.value = "CPF"

                chkPPM.classList.add("form-check-input")
                chkPPM.classList.add("pend")
                chkPPM.type = "checkbox"
                chkPPM.value = "PPM"


                let inputSerie = document.createElement("input")
                inputSerie.classList.add("inputSerie")

                divChecks.append(chkNome)
                divChecks.append(labelchkNome)
                divChecks.append(chkCPF)
                divChecks.append(labelchkCPF)
                divChecks.append(chkPPM)
                divChecks.append(labelchkPPM)
                tdPendencias.append(divChecks)

                tdNome.innerText = nomeAlunoPropriedade
                inputSerie.value = nomesAlunosNew[nomeAlunoPropriedade]["nomeSerie"]

                tdSerie.append(inputSerie)

                tdNasc.innerText = nomesAlunosNew[nomeAlunoPropriedade]["nascimentoAluno"]
                tdPendencias.append(divChecks)

                tr.append(tdNome)
                tr.append(tdSerie)
                tr.append(tdNasc)
                tr.append(tdPendencias)
                tr.append(tdAcao)

                tbodytabelaDados.append(tr)

            }

            chksPend = document.querySelectorAll(".pend")

            chksPend.forEach(chk => {


                chk.addEventListener("click", () => {

                    formataObjAlunoTabela()

                })

            })

            nomesAlunosTemporario = {}
            formataObjAlunoTabela()
        }

        function limparFormatacao() {

            celulasFormatadas = document.querySelectorAll(".divFormatada")

            celulasFormatadas.forEach((div) => {

                if (div.classList.contains("divFormatadaNome")) {

                    div.parentElement.innerText = div.querySelector(".nomeAluno").innerText

                } else if (div.classList.contains("divFormatadaSerie")) {


                    div.parentElement.innerText = div.querySelector(".serieAluno").innerText

                }

            })

        }

        function gerarAquivoDownload() {

            let conteudo = ""

            conteudo = `{${txtAreaAlunos.value.trim()}\n\n${JSON.stringify(nomesAlunosNew).slice(1, -1)}}`

            let blob = new Blob([conteudo], { type: "application/json" })
            let url = window.URL.createObjectURL(blob)
            botaoBaixarJson.href = url
            botaoBaixarJson.download = `alunos_presenca_${new Date().toLocaleString()}`
            //window.URL.revokeObjectURL(url)

        }

        function formataObjAlunoTabela() {

            linhas = tbodytabelaDados.querySelectorAll("tr")

            linhas.forEach((linha) => {

                nome = linha.querySelector(".idAlunoNome").innerText
                nomeSerie = linha.querySelector(".inputSerie").value
                dataNascimento = linha.querySelector(".tdNasc").innerText
                pendTipos = ""
                pendInputs = linha.querySelectorAll(".pend")

                pendInputs.forEach((chk) => {

                    if (chk.checked == true) {

                        pendTipos = pendTipos + `${chk.value}<br>`

                    }

                })

                nomesAlunosNew[nome]["nomeSerie"] = nomeSerie
                nomesAlunosNew[nome]["nascimentoAluno"] = dataNascimento
                nomesAlunosNew[nome]["pend"] = { "type": pendTipos }

                if (pendTipos == "") {

                    nomesAlunosNew[nome]["pend"] = false

                }


            })

            gerarAquivoDownload()

        }

    }



}

incluiRecursos()