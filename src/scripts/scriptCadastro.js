
async function lerArquivo(arquivo) {

    let response = await fetch(`chrome-extension://${chrome.runtime.id}/src/html/${arquivo}`)

    let responseText = await response.text()

    console.log(responseText)

    return responseText

}

async function incluiRecursos() {

    // POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL

    let layoutCabecalhoGestao = document.getElementsByClassName('LayoutCabecalhoGestao')[0]

    // POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL
    layoutCabecalhoGestao.innerHTML = await lerArquivo("botaoAreaDev.html") + layoutCabecalhoGestao.innerHTML

    let divoffcanvas = document.createElement('div')
    divoffcanvas.innerHTML = await lerArquivo("cadastroHtml.html")

    // TELA DE TRABALHO DA EXTENSÃO
    document.body.append(divoffcanvas)

    // ELEMENTOS E VARIÁVEIS DE CONTROLE

    let intext
    let txtAreaMatriculas = document.getElementById('txtAreaMatriculas')
    let lblMatriculas = document.getElementById('lblMatriculas')
    let selectPesquisa = document.getElementById('selectPesquisa')
    let tabelaEndereco = document.getElementById('tabelaEndereco')
    let tabelaDados = document.getElementById('tabelaDados')
    let tabelaSaude = document.getElementById('tabelaSaude')
    let tabelaHistorico = document.getElementById('tabelaDisciplinasPendentes')
    let tabelaAtestados = document.getElementById('tabelaAtestados')
    let divPendenciaItin = document.getElementById('divPendenciaItin')
    let pesquisasCadastro = document.getElementById('pesquisasCadastro')
    let btncheckOutros = document.getElementById("btncheckOutros")
    let btnGroupBtncheckOutros = document.getElementById('btn-group-btncheckOutros')
    let progressBarUm = document.getElementById('progress-bar-1')
    let barGroupProgress = document.getElementById('bar-group-progress')
    let botaoExcluir = document.getElementById('botaoExcluir')
    let tbodytabelaDados = document.getElementById('tbodytabelaDados')
    let tbodytabelaEndereco = document.getElementById('tbodytabelaEndereco')
    let tbodytabelaSaude = document.getElementById('tbodytabelaSaude')
    let contadorBolsaFamilia = document.getElementById('contadorBolsaFamilia')
    let btnPesquisarTabelaPendenciaItin = document.querySelector("#botaoSubmitPendIti")
    let divDisciplinasParciais = document.querySelector("#divDisciplinasParciais")

    selectPesquisa.addEventListener('input', () => {

        if (selectPesquisa.value == "dados") {

            tabelaEndereco.hidden = true
            tabelaSaude.hidden = true
            btnGroupBtncheckOutros.hidden = false
            tabelaHistorico.hidden = true
            divPendenciaItin.hidden = true
            tabelaAtestados.hidden = true
            divDisciplinasParciais.hidden = true
			tabelaDados.hidden = false
			pesquisasCadastro.hidden = false
			divLinkBoletins.hidden = true

        } else if (selectPesquisa.value == "endereco") {

            tabelaEndereco.hidden = false
            tabelaSaude.hidden = true
            btnGroupBtncheckOutros.hidden = true
            tabelaHistorico.hidden = true
            divPendenciaItin.hidden = true
            tabelaAtestados.hidden = true
            divDisciplinasParciais.hidden = true
			tabelaDados.hidden = true
			pesquisasCadastro.hidden = false
			divLinkBoletins.hidden = true

        } else if (selectPesquisa.value == "saude") {

            tabelaSaude.hidden = false
            tabelaEndereco.hidden = true
            btnGroupBtncheckOutros.hidden = true
            tabelaHistorico.hidden = true
            divPendenciaItin.hidden = true
            tabelaAtestados.hidden = true
            divDisciplinasParciais.hidden = true
			tabelaDados.hidden = true
			pesquisasCadastro.hidden = false
			divLinkBoletins.hidden = true

        } else if (selectPesquisa.value == "historico") {
            tabelaHistorico.hidden = false
            tabelaSaude.hidden = true
            tabelaEndereco.hidden = true
            btnGroupBtncheckOutros.hidden = true
            divPendenciaItin.hidden = true
            tabelaAtestados.hidden = true
            divDisciplinasParciais.hidden = true
			pesquisasCadastro.hidden = true
			divLinkBoletins.hidden = true

        } else if (selectPesquisa.value == "pendIti") {
            tabelaHistorico.hidden = true
            tabelaSaude.hidden = true
            tabelaEndereco.hidden = true
            btnGroupBtncheckOutros.hidden = true
            divPendenciaItin.hidden = false
            tabelaAtestados.hidden = true
            divDisciplinasParciais.hidden = true
			pesquisasCadastro.hidden = true
			divLinkBoletins.hidden = true

        } else if (selectPesquisa.value == "parciais") {
            tabelaHistorico.hidden = true
            tabelaSaude.hidden = true
            tabelaEndereco.hidden = true
            btnGroupBtncheckOutros.hidden = true
            divPendenciaItin.hidden = true
            tabelaAtestados.hidden = false
            divDisciplinasParciais.hidden = false
			pesquisasCadastro.hidden = true
			divLinkBoletins.hidden = true

        } else {

            tabelaHistorico.hidden = true
            tabelaSaude.hidden = true
            tabelaEndereco.hidden = true
            btnGroupBtncheckOutros.hidden = true
            divPendenciaItin.hidden = true
            divDisciplinasParciais.hidden = true
			tabelaDados.hidden = true
            tabelaAtestados.hidden = false
			pesquisasCadastro.hidden = false
			divLinkBoletins.hidden = true
            

        }
    })

    botaoExcluir.addEventListener("click", () => {

        txtAreaMatriculas.value = ""

        while (tbodytabelaDados.childNodes.length != 0 || tbodytabelaEndereco.childNodes.length != 0 || tbodytabelaSaude.childNodes.length != 0) {

            tbodytabelaDados.childNodes.forEach(child => {

                child.remove()


            })

            tbodytabelaEndereco.childNodes.forEach(child => {

                child.remove()


            })

            tbodytabelaSaude.childNodes.forEach(child => {

                child.remove()


            })

        }

    })

    txtAreaMatriculas.addEventListener('input', () => {

        if (txtAreaMatriculas.value.length != 0) {
            lblMatriculas.hidden = true

        } else {

            lblMatriculas.hidden = false

        }

    })

    btnPesquisarTabelaPendenciaItin.addEventListener("click", () => {
        buscaPendencias()
    })


    //CONTROLE FORMULÁRIO

    formRequest.addEventListener('submit', (event) => {

        event.preventDefault()
        iniciaLoop()
        barGroupProgress.toggleAttribute("hidden")



    })

    async function iniciaLoop() {

        intext = document.getElementById('txtAreaMatriculas').value.split('\n')
        let alunoAtual = 0

        for (matricula of intext) {

            alunoAtual++
            await requisitarPesquisa(matricula, "pesquisar", "")
            progressBarUm.style.width = `${100 * alunoAtual / intext.length}%`

        }

        barGroupProgress.toggleAttribute("hidden")



    }

    async function requisitarPesquisa(codMatricula, actionType, infosAluno) {

        let formRequest = document.getElementById("formRequest") // BUSCA FORMULÁRIO
        let formRequestFormData = new FormData(formRequest) // TRANSFORMA EM MANIPULÁVEL


        formRequestFormData.set("actionType", actionType) // TIPO DE REQUISIÇÃO
        formRequestFormData.set("txtCodigo", codMatricula) // MATRICULA PARA BUSCAR O CODIGO DO ALUNO NO SISTEMA
        formRequestFormData.set("chkAluno", infosAluno.codigo_sistema) // ATRIBUTO DO FORMULÁRIO NECESSÁRIO PARA BUSCAR OS DADOS DO ALUNO
        formRequestFormData.set("dadosAluno", 'matricula')

        let formRequestObj = Object.fromEntries(formRequestFormData) // TRANSFORMA EM OBJETO - CHAVE & VALOR
        let corpoRequestToX = new URLSearchParams(formRequestObj).toString() // TRANSFORMA OS DADOS EM FORMATO x-www-form-urlencoded


        // REQUISIÇÃO ASSÍNCRONA
        let request = await fetch("/eol/aluno/consultarAlunoAction.do", {
            method: "POST",
            headers: {
                'Accept': 'text/html',
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            body: corpoRequestToX

        })
        let txtrequest = await request.text()

        switch (actionType) {

            // INICIA FLUXO DE PESQUISA DE CODIGO - BUSCA DE DADOS DO ALUNO
            case 'pesquisar':

                // CHAMADA DA FUNÇÃO RECURSIVA
                await requisitarPesquisa(codMatricula, "buscar", await tratarPesquisa(txtrequest, codMatricula, actionType, infosAluno))

                break

            // APENAS BUSCA DE DADOS DO ALUNO
            case 'buscar':

                console.log(await tratarBusca(txtrequest, codMatricula, actionType, infosAluno))
                break

        }

        console.log({ 'Bolsa Família': contadorBolsaFamilia })

    }

    // TRATA A RESPOSTA DE TEXTO RECEBIDA PARA BUSCA DE INFORMAÇÕES
    async function tratarPesquisa(txtDocument, codMatricula, actionType, infosAluno) {

        let parser = new DOMParser()

        // TRANSFORMA A PÁGINA DE TEXTO PARA UM OBJETO DOM
        let documentDOM = parser.parseFromString(txtDocument, "text/html")


        // TRATAMENTO PARA RETORNO DE CODIGO OU ERROS
        if (documentDOM.getElementById('chkAluno0') != null) {

            return { "codigo_sistema": documentDOM.getElementById('chkAluno0').value, "turma_aluno": documentDOM.querySelectorAll('.faixa_bg .texto label')[8].innerText }

        } else {

            if (confirm(`O ALUNO DE MATRÍCULA ${codMatricula} NÃO FOI ENCONTRADO. DESEJA TENTAR NOVAMENTE?`)) {

                await requisitarPesquisa(codMatricula, actionType, infosAluno)

            }


        }

    }

    // TRATA A RESPOSTA DE TEXTO RECEBIDA PARA BUSCA DE INFORMAÇÕES
    async function tratarBusca(txtDocument, codMatricula, actionType, infosAluno) {

        let parser = new DOMParser()

        // TRANSFORMA A PÁGINA DE TEXTO PARA UM OBJETO DOM
        let documentDOM = parser.parseFromString(txtDocument, "text/html")


        // TRATAMENTO PARA RETORNO DE INFORMAÇÕES GERAIS OU ERROS
        if (documentDOM.getElementsByClassName('campos')[0] != null) {

            // INICIA A MANIPULAÇÃO DOS DADOS DO ALUNO A SEREM FILTRADOS

            pegaDados(documentDOM, infosAluno.turma_aluno, infosAluno.codigo_sistema)



            // VISUALIZAÇÃO NO CONSOLE (OPCIONAL)
            return [infosAluno.codigo_sistema, formataTabela(documentDOM).Nomecivil]

        } else {

            if (confirm(`O ALUNO DE CÓDIGO ${infosAluno.codigo_sistema} NÃO FOI ENCONTRADO. DESEJA TENTAR NOVAMENTE?`)) {

                await requisitarPesquisa(codMatricula, actionType, infosAluno)

            }

        }


    }

    async function pegaDados(iframeDocument, turmaAlunoRes, codigo_sistema) {

        //let parser = new DOMParser()
        let tabelaDados = formataTabela(iframeDocument)

        let nameAluno = document.createElement('td')
        let matAluno = document.createElement('td')
        let turmaAluno = document.createElement('td')
        let turnoAluno = document.createElement('td')
        let enderecoAluno = document.createElement('td')
        let cidadeAluno = document.createElement('td')
        let zonaAluno = document.createElement('td')
        let maeAluno = document.createElement('td')
        let paiAluno = document.createElement('td')
        let resp = document.createElement('td')
        let cpfResp = document.createElement('td')
        let nomeResp = document.createElement('td')
        let numSus = document.createElement('td')
        let saudeAluno = document.createElement('td')
        let usaMedicacaoControlada = document.createElement('td')
        let medicacaoControlada = document.createElement('td')
        let alergia = document.createElement('td')
        let possuiDeficiencia = document.createElement('td')
        let tipoDeficiencia = document.createElement('td')
        let bolsaFamilia = document.createElement('td')
        let cpfAluno = document.createElement('td')
        let dataNascimento = document.createElement('td')
        let nisAluno = document.createElement('td')
        let tdcodigo_sistema = document.createElement('td')
        let telefoneResp = document.createElement('td')
        let rgAluno = document.createElement('td')
        let ctrEnergia = document.createElement('td')
        let stringBoletimCodigos = ""
        let aLinkBoletim = document.querySelector("#aLinkBoletim")
        let botaoGeraLinkdocument = document.querySelector("#botaoGeraLink")
        let txtLinkBoletim = document.querySelector("#txtLinkBoletim")
        let divLinkBoletins = document.querySelector("#divLinkBoletins") 
		let naturalidadeAluno = document.createElement('td')
		let cpfMae = document.createElement('td')

        botaoGeraLinkdocument.addEventListener("click", () => {

            let codigosAlunosBoletim = document.querySelectorAll(".codigo_sistema")

            codigosAlunosBoletim.forEach((cod) => {

                stringBoletimCodigos += `${cod.textContent}_`


            })

            txtLinkBoletim.value = `https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/BoletimEscolar?matriculas=${stringBoletimCodigos}&ano=2025`
            aLinkBoletim.href = `https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/BoletimEscolar?matriculas=${stringBoletimCodigos}&ano=2025`

        })




        let tr = document.createElement('tr')


        // DADOS PADRÃO PARA TODOS OS CASOS



        nameAluno.innerText = tabelaDados['Nomecivil']
        matAluno.innerText = tabelaDados['Matrícula']
        turmaAluno.innerText = turmaAlunoRes
        tdcodigo_sistema.innerText = codigo_sistema.split(';')[1]
        tdcodigo_sistema.classList.add("codigo_sistema")


        switch (document.getElementById('selectPesquisa').value) {


            case 'endereco':

                // turnoAluno.innerText = 'INTEGRAL'

                enderecoAluno.innerText = tabelaDados['Endereço']

                cidadeAluno.innerText = tabelaDados['Município']

                zonaAluno.innerText = tabelaDados['Bairro']

                ctrEnergia.innerHTML = tabelaDados['Númerodacontadeenergia']
                ctrEnergia.innerText = ctrEnergia.textContent

                tr.append(nameAluno, matAluno, turmaAluno, enderecoAluno, cidadeAluno, zonaAluno, ctrEnergia)

                document.getElementById('tbodytabelaEndereco').appendChild(tr)

                break;

            case 'dados':

				divLinkBoletins.hidden = false

                maeAluno.innerText = tabelaDados['Filiação1']

                paiAluno.innerText = tabelaDados['Filiação2']

                resp.innerText = tabelaDados['Responsável']

                cpfResp.innerText = tabelaDados['CPF']

                nomeResp.innerText = tabelaDados['Nome']

                bolsaFamilia.innerText = tabelaDados["RecebeBolsaFamília"]

                cpfAluno.innerText = tabelaDados["CPF2"]

                dataNascimento.innerText = tabelaDados["Datadenascimento"]

                nisAluno.innerText = tabelaDados["NIS2"]

                telefoneResp.innerText = tabelaDados["Telefone"]

				cpfMae.innerText = tabelaDados["CPFdafiliação1"]

                if (tabelaDados["RG2"] !== " ") {

                    rgAluno.innerText = tabelaDados["RG2"]
                    rgAluno.innerText += ` | ${tabelaDados["Órgãoexpedidor2"]}`
                    rgAluno.innerText += ` | ${tabelaDados["UF2"]}`

                } else {
                    rgAluno.innerText = tabelaDados["CPF2"]
                }

				naturalidadeAluno.innerText = `${tabelaDados["Municípionascimento"]} - ${tabelaDados["UFnascimento"]}`

                if (tabelaDados["RecebeBolsaFamília"] === 'Sim') contadorBolsaFamilia.value = (Number(contadorBolsaFamilia.value) + 1)

                tr.append(matAluno, nameAluno, dataNascimento, naturalidadeAluno, cpfAluno, maeAluno, paiAluno, turmaAluno, nisAluno, tdcodigo_sistema, telefoneResp, rgAluno, cpfResp)


                if (btncheckOutros.checked == true) {

                    if (resp.innerText == "Outro") {

                        document.getElementById('tbodytabelaDados').appendChild(tr)

                    } else {

                    }

                } else {

                    document.getElementById('tbodytabelaDados').appendChild(tr)

                }

                break;

            case "saude":

                numSus.innerText = tabelaDados.CNS
                dataNascimento.innerText = tabelaDados["Datadenascimento"]
                let saudeParaFormatar = document.createElement("p")
                saudeAluno.innerHTML = tabelaDados["Saúdedoaluno/Outrosresultadosdeexames"]
                tabelaDados["Fazusodemedicaçãocontroladaoudeusocontínuo"] ? usaMedicacaoControlada.innerText = tabelaDados["Fazusodemedicaçãocontroladaoudeusocontínuo"] : ""
                tabelaDados["Medicaçãocontroladaoudeusocontínuo"] ? medicacaoControlada.innerText = tabelaDados["Medicaçãocontroladaoudeusocontínuo"] : ""
                tabelaDados["Possuialgumaalergia(Medicação,alimentose/ououtros)"] ? alergia.innerText = tabelaDados["Possuialgumaalergia(Medicação,alimentose/ououtros)"] : ""
                tabelaDados["Possuideficiência"] ? possuiDeficiencia.innerText = tabelaDados["Possuideficiência"] : ""
                tabelaDados["Deficiência"] ? tipoDeficiencia.innerText = tabelaDados["Deficiência"] : ""

                document.getElementById('tbodytabelaSaude').appendChild(tr)
                tr.append(matAluno, nameAluno, numSus, turmaAluno, dataNascimento, saudeAluno, usaMedicacaoControlada, medicacaoControlada, alergia, possuiDeficiencia, tipoDeficiencia)

            case "atestados":

                const td = await buscaAtestados(codigo_sistema.split(';')[0])
                if (td.atestados === false) return null

                tr.append(matAluno, nameAluno, turmaAluno, td)

                document.getElementById('tbodytabelaAtestados').appendChild(tr)

                break;

        }


    }

    function formataTabela(documentDOM) {

        let tabelaObj = {}
        let tabelas = documentDOM.querySelectorAll(".campos")

        for (let o = 0; o <= tabelas.length - 1; o++) {

            let resultadoQuerySelector = tabelas[o].querySelectorAll("tbody > tr:not(tr[bgcolor='#EDEDED']) > td:not(td[bgcolor='#EDEDED'])")

            let anterior

            for (let pos = 1, i = 0; i <= resultadoQuerySelector.length - 1; i++, pos++) {

                let td = resultadoQuerySelector[i]

                if (pos % 2 > 0 && td.classList.contains("tittexto")) {

                    let conteudoTdImpar = td.innerHTML.toString().replace(/[\n: {\2,}]/g, "")

                    if (!tabelaObj.hasOwnProperty(conteudoTdImpar)) { // RETORNA NÃO EXISTIR
                        tabelaObj[conteudoTdImpar] = " "
                        anterior = conteudoTdImpar



                    } else {
                        conteudoTdImpar += "2"

                        tabelaObj[conteudoTdImpar] = " "
                        anterior = conteudoTdImpar

                    }

                } else if (pos % 2 == 0 && td.classList.contains("texto")) {

                    let conteudoTdPar = td.innerHTML.toString().replace(/\t|\n {2,}|\n\t{1,}|&nbsp;/g, "")
                    tabelaObj[anterior] = conteudoTdPar


                } else {

                    let conteudoTdFora = td.innerHTML.toString().replace(/[\n: {\2,}]/g, "")
                    tabelaObj[conteudoTdFora] = conteudoTdFora

                    pos++

                }


            }

        }

        //console.log(tabelaObj)

        return tabelaObj


    }

    async function buscaPendencias() {

        let matriculas_alunos = document.querySelector("#txtAreaCosSist").value.split('\n')

        let tBodytabelaPendenciaItin = document.querySelector("#tabelaPendenciaItin tbody")

        matriculas_alunos.forEach(async (mat) => {

            const result = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/alunos/matricula/pendenciaitinerario/componentesReprovados/${mat}?pendencia=&idCategoriaItinerarioFormativo=&request.preventCache=1734008531900`)

            let textFetch = await result.json()

            textFetch.forEach((pend, i) => {

                let tdNomeAluno = document.createElement('td')
                let tdPendTurma = document.createElement('td')
                let linhaPend = document.createElement('tr')

                tdNomeAluno.innerText = textFetch[i].aluno
                tdPendTurma.innerText = `${textFetch[i].turma} - ${textFetch[i].componente}`

                linhaPend.append(tdNomeAluno, tdPendTurma)
                tBodytabelaPendenciaItin.append(linhaPend)


            })

        })


    }

    async function buscaProfessoresTurmas() {

        let professoresTurmas = document.querySelector("#professoresTurmas")

        let codsTurmas = []
        let turmasElements = []

        document.querySelectorAll("input[name=chkTurma]").forEach(input => {

            input.codigoTurma = input.value
            codsTurmas.push(input)

        })

        //NÃO USAR FOREACH POIS A FUNÇÃO ASSÍNCRONA FUNCIONARÁ INDEPENDENTE
        for (let i = 0; i <= codsTurmas.length - 1; i++) {

            let codigo = codsTurmas[i]

            const result = await fetch(`https://www.siepe.educacao.pe.gov.br/eol/servidor/atribuicaoaulas/saldoclasses/ImprimirQuadroHorario.ew?t=${codigo.codigoTurma}`)

            let resultText = await result.text()

            let parser = new DOMParser()

            // TRANSFORMA A PÁGINA DE TEXTO PARA UM OBJETO DOM
            let documentDOM = parser.parseFromString(resultText, "text/html")


            let turmaUnidade = documentDOM.querySelectorAll(".UnidadeInformacoes > tbody > tr")[1]
            let trTurmaUnidade = document.createElement("tr")
            trTurmaUnidade.textContent = turmaUnidade.textContent
            let stringTurma = turmaUnidade.textContent.split(" ")[1]

            let elementTurma = document.querySelector(`#${stringTurma}`)

            if (elementTurma) {

                let tableProfs = documentDOM.querySelectorAll(".ImpressaoQuadroHorarios")[1]

                tableProfs.querySelectorAll("tbody > tr").forEach((linha, i) => {

                    let linhaOrganizada = document.createElement("tr")
                    let tds = linha.querySelectorAll("td")


                    linhaOrganizada.append(tds[1], tds[0], tds[2], tds[3], tds[4])

                    elementTurma.append(linha)

                })

            } else {

                let tableTurma = document.createElement("table")
                let tbodyTurma = document.createElement("tbody")
                tbodyTurma.id = stringTurma
                tableTurma.classList.add("tableTurma")

                tbodyTurma.append(trTurmaUnidade)
                tableTurma.append(tbodyTurma)

                let tableProfs = documentDOM.querySelectorAll(".ImpressaoQuadroHorarios")[1]

                tableProfs.querySelectorAll("tbody > tr").forEach((linha, i) => {

                    let linhaOrganizada = document.createElement("tr")
                    let tds = linha.querySelectorAll("td")


                    linhaOrganizada.append(tds[1], tds[0], tds[2], tds[3], tds[4])

                    tbodyTurma.append(linhaOrganizada)

                })

                tableTurma.nameTurma = stringTurma
                turmasElements.push(tableTurma)

            }

            turmasElements.sort((a, b) => a.nameTurma - b.nameTurma)

            turmasElements.forEach((turma, i) => {
                console.log(turma)

                professoresTurmas.append(turma)
            })


        }

    }

    function adicionaLinhas() {
        let listaTurmas = document.querySelectorAll(".tableTurma")

        listaTurmas.forEach((turma) => {

            let linhasTurma = turma.querySelectorAll("tbody tr")
            let bodyTurma = turma.querySelector("tbody")

            let tamanhoTotal = linhasTurma.length

            while (tamanhoTotal < 25) {

                let trNova = document.createElement("tr")
                let tdNova = document.createElement("td")
                tdNova.textContent = "------------------------------------------------------"
                trNova.append(tdNova)
                bodyTurma.append(trNova)
                tamanhoTotal = tamanhoTotal + 1

            }

        })
    }

    async function buscaAtestados(idCidadao) {

        const test = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/alunos/matricula/atestado/?dataInicio=null&dataFim=null&idMotivoFaltaJustificada=&idCidadao=${idCidadao}&auge.preventCache=1744376798290&rangeStartParam=0&rangeCountParam=10`)

        const testRef = await test.json()

        const atestados = testRef["items"]
        const list = document.createElement("ul")
        const td = document.createElement("td")
        td.atestados = false

        atestados.forEach((atestado) => {
            let dataStr = atestado.data_fim_formatada.split("/")
            let dataStrForm = `${dataStr[2]}/${dataStr[1]}/${dataStr[0]}/`

            const data_fim = new Date(dataStrForm)
            const data_hoje = new Date()

            if (data_fim.getFullYear() == data_hoje.getFullYear()) {
                td.atestados = true

                const listItem = document.createElement("li")
                listItem.textContent = atestado.data_fim_formatada
                list.append(listItem)

            }

        })

        td.appendChild(list)

        return td

    }


}

incluiRecursos()
