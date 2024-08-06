if (document.URL.includes('seb/registra-frequencia-escola')) {

    document.head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

<style>

.formataBotao {

    display: block;
    unicode-bidi: isolate;

}

.offcanvas{
    width: 30% !important;
    min-width: 450px !important;
}

.offcanvas *{
    font-size: 1.2rem !important;
}

.statusAluno {

    min-width: 40px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border: 2px dashed;
    border-radius: 20%;
    font-size: 10px;
    vertical-align: middle;

}

.divFormatada{

    display: flex; 
    gap: 5px

}

</style>

`

    toolbar = document.getElementsByClassName("div-componente-interno")[0]
    bodyMain = document.getElementById("container-1")

    toolbar.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1 btn-lg" id="botaoAlteraJanela" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></input> </div>` + toolbar.innerHTML

    // bodyMain.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1 btn-lg" id="botaoAlteraJanela" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></input> </div>` + bodyMain.innerHTML


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
    document.querySelector("link[href='/seb/styles.a8f19adb82ba740eae42.css']").remove()

    // CRIA E ADICIONA O OFFCANVAS LATERAL NA PAGINA
    let divoffcanvas = document.createElement('div')
    divoffcanvas.innerHTML = `
<div id="offcanvasId" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"aria-labelledby="offcanvasScrollingLabel">

<div class="offcanvas-header d-flex flex-column align-items-end">
    <input type="button" class="botaoAlteraJanela btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></input>
</div>

<div class="d-flex justify-content-between"> 

    <div class="col-4 m-4 form-floating">
        <select id="selectOperacao" class="form-select" id="floatingSelect" aria-label="">
            <option id="formatarTabela" value="formatarTabela">Formatar tabela</option>
            <option id="updateDados" value="inserirDados">Atualização de dados trimestral</option>
            <option id="setDatabase" value="gerarArquivo">Gerar arquivo</option>
        </select>
        <label for="floatingSelect">Opções</label>
    </div>

    <div class="d-flex"> 

        <div id="alertErros" class="m-4 alert alert-danger alert-dismissible fade show" role="alert">
            <strong id="descAlertErros">0</strong>
        </div>

        <div id="alertFora" class="m-4 alert alert-warning alert-dismissible fade show" role="alert">
            <strong id="descAlertFora">0</strong>
        </div>
    
    </div>

</div>


<div class="mx-3">
    <div hidden class="progress mb-2" id="bar-group-progress">
        <div id="progress-bar-1" class="progress-bar progress-bar-striped" style="width: 0%"></div>
    </div>
</div>

<div class="offcanvas-body">

    <div id="alertUpdate" class="m-4 alert alert-danger alert-dismissible fade show" role="alert" hidden>
        <p id="descAlert">IMPORTAR UM NOVO ARQUIVO IRÁ SUBSTITUIR O ARMAZENADO NO LOCALSTORAGE</p>
        <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div id="cardFormatarTabela" class="card">

        <div id="formFormatarTabela" class="card m-1" style="height: 155px">

            <input id="botaoFormatarTabela" class="btn m-1 btn-primary h-100" value="FORMATAR TABELA">
            <input id="botaoLimparFormatacaoTabela" class="btn m-1 btn-danger h-50" value="LIMPAR FORMATAÇÃO TABELA">

        </div>
    
        <div id="formUpdate" class="card m-1" hidden>

            <div class="p-2">

                <div class="input-group">
                    <input id="inputArquivo" name="inputArquivo" type="file" class="form-control">
                </div>

                <div class="d-flex my-2">

                    <div class="d-flex flex-column align-items-end mx-1">
                        <input class="btn btn-primary col-12 mb-1" id="botaoSubmit" value="IMPORTAR">
                        <input class="btn btn-danger col-12 mb-1" id="botaoExcluir" value="LIMPAR">
                    </div>

                </div>
            
            </div>

        </div>

        <div id="formGerar" class="card m-1" style="height: 650px" hidden>

            <div class="p-2">

                <div class="form-floating">
                    <textarea class="form-control h-300" id="txtAreaAlunos" disabled></textarea>
                    <label id="lblAlunos" for="txtAreaAlunos">JSON</label>

                    <textarea class="form-control h-200" id="txtAreaAlunosNovos"></textarea>
                    <label id="lblAlunos" for="txtAreaAlunosNovos">JSON</label>
                </div>

                <div class="d-flex my-2">

                    <div class="d-flex flex-column align-items-end mx-1">
                        <input class="btn btn-dark col-12 mb-1" id="botaoGerarJson" value="GERAR JSON">
                        <a class="btn btn-success col-12 mb-1" id="botaoBaixarJson">BAIXAR JSON</a>
                        <input class="btn btn-danger col-12 mb-1" id="botaoExcluir" value="LIMPAR">
                    </div>

                </div>
            
            </div>

        </div>

    </div>

</div>

</div>`

    document.body.append(divoffcanvas)

    //INSTANCIAÇÃO DOS ELEMENTOS E VARIÁVEIS DE CONTROLE
    let nomesAlunosPresenca = {}
    let nomesAlunosNew = []
    let offcanvas = document.getElementById('offcanvasId')
    let botoesAlteraJanela = document.getElementsByClassName('botaoAlteraJanela')
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
    let txtAreaAlunosNovos = document.getElementById("txtAreaAlunosNovos")
    let botaoBaixarJson = document.getElementById("botaoBaixarJson")
    let descAlertErros = document.getElementById("descAlertErros")
    let descAlertFora = document.getElementById("descAlertFora")
    let contagemErros = 0
    let contagemFora = 0
    let ngx_overlay = document.getElementsByClassName("ngx-overlay")[0]


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

    txtAreaAlunosNovos.addEventListener("input", () =>{


        gerarAquivoDownload()

    })

    ngx_overlay.addEventListener((''))


    //PARTE FUNCIONAL DO CÓDIGO

    function formataObjAluno(objAluno) {

        let dadosFormatados
        //FORMATA
        dadosFormatados = `"${nomeAlunoPropriedade}":{\n`
        dadosFormatados += (JSON.stringify(nomesAlunosPresenca[nomeAlunoPropriedade])).replace('{', "")
        dadosFormatados = dadosFormatados.replaceAll('"nomeSerie"', '"nomeSerie"')
        dadosFormatados = dadosFormatados.replaceAll('"nascimentoAluno"', '\n"nascimentoAluno"')
        dadosFormatados = dadosFormatados.replaceAll('"pend"', '\n"pend"')
        dadosFormatados = dadosFormatados.replaceAll('}', '},\n\n')

        return dadosFormatados

    }

    function importarDatabase() {

        // LIMPA CASO UMA NOVA DATABASE SEJA INCLUIDA
        txtAreaAlunos.value = ""
        txtAreaAlunosNovos.value = ""

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

        //limparFormatacao()

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


            if (!nomesAlunosPresenca[nomeAluno]) {

                nomesAlunosPresenca[nomeAluno] = { "nomeSerie": serieAluno, "nascimentoAluno": nascimentoAluno, "pend": {"type": "nome cpf pdm"}, "new": true }

            }

        })


        for (nomeAlunoPropriedade in nomesAlunosPresenca) {

            //EXECUTADA PARA INCLUIR OS ALUNOS QUE AINDA NÃO ESTÃO NO TXTAREA DE GERAR ARQUIVO

            if (!txtAreaAlunos.value.includes(nomeAlunoPropriedade)) {

                let dadosFormatados

                dadosFormatados = formataObjAluno(nomesAlunosPresenca[nomeAlunoPropriedade])

                if (nomesAlunosPresenca[nomeAlunoPropriedade]["new"]) {

                    delete nomesAlunosPresenca[nomeAlunoPropriedade]["new"]

                    //FORMATA
                    dadosFormatados = formataObjAluno(nomesAlunosPresenca[nomeAlunoPropriedade])

                    nomesAlunosNew.push(dadosFormatados)

                } else {
                    txtAreaAlunos.disabled = false
                    txtAreaAlunos.value += dadosFormatados // PREENCHE O TXT AREA A CADA PAGINA DE ALUNOS
                    txtAreaAlunos.disabled = true
                }

            }

        }

        nomesAlunosNew.forEach((aluno) => {

            if (!txtAreaAlunosNovos.value.includes(aluno)) {


                txtAreaAlunosNovos.value += aluno
            }

        })

        gerarAquivoDownload()
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

        if (txtAreaAlunosNovos.value.length == 0) {

            conteudo = `{${txtAreaAlunos.value.trim().slice(0, -1)}}`

        } else {

            conteudo = `{${txtAreaAlunos.value.trim()}\n\n${txtAreaAlunosNovos.value.trim().slice(0, -1)}}`

        }

        let blob = new Blob([conteudo], { type: "application/json" })
        let url = window.URL.createObjectURL(blob)
        botaoBaixarJson.href = url
        botaoBaixarJson.download = `alunos_presenca_${new Date().toLocaleString()}`
        //window.URL.revokeObjectURL(url)

    }

}

