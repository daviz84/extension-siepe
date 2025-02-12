async function lerArquivo(arquivo) {

    let response = await fetch(`chrome-extension://${chrome.runtime.id}/src/${arquivo}`)

    let responseText = await response.text()

    console.log(responseText)

    return responseText

}

async function incluiRecursos() {

    let layoutRodapeGestao = document.getElementsByClassName('FixCabecalho')[0]

    layoutRodapeGestao.innerHTML = await lerArquivo("botaoAreaDev.html") + layoutRodapeGestao.innerHTML

    let divoffcanvas = document.createElement('div')
    divoffcanvas.innerHTML = await lerArquivo("planejamentoHtml.html")

    // TELA DE TRABALHO DA EXTENSÃO
    document.body.append(divoffcanvas)

    let offcanvas = document.getElementById('offcanvasId')
    let tbodytabelaDados = document.getElementById('tbodytabelaDados')
    let floatingTextarea = document.getElementById("floatingTextarea")
    let iframe = document.getElementsByClassName("LimitadorConteudo")[0]
    let botaoIniciaFrequencia = document.getElementById('botaoIniciaFrequencia')
    let botaoEncerraFrequencia = document.getElementById('botaoEncerraFrequencia')
    var dadosAlunos = {}
    var observer
    let contagemMutations = 0
    let faltasTirar = document.getElementById("faltasTirar")
    let txtAreaFormataFaltas = document.getElementById("txtAreaFormataFaltas")
    let botaoIniciaPlanejamento = document.querySelector("#botaoIniciaPlanejamento")
    let botaoEncerraPlanejamento = document.querySelector("#botaoEncerraPlanejamento")

    // EVENTOS 

    botaoIniciaFrequencia.addEventListener("click", () => { iniciarObserverFrequencia() })

    botaoEncerraFrequencia.addEventListener("click", () => { encerraObserver() })

    botaoIniciaFormatacaoFaltas.addEventListener("click", () => { formataTabelaFaltas() })

    txtAreaFormataFaltas.addEventListener("click", () => { navigator.clipboard.writeText(txtAreaFormataFaltas.value) })

    botaoIniciaPlanejamento.addEventListener("click", () => { iniciarObserverPlanejamento() })

    botaoEncerraPlanejamento.addEventListener("click", () => { encerraObserver() })


    function iniciarObserverPlanejamento() {

        if (confirm("SCRIPT PLANEJAMENTO?")) {

            observer = new MutationObserver((mutations) => {

                if (document.getElementById("divPlanejamentoBimestral")) {

                    let corpoPlanejamento = document.querySelector('#divPlanejamentoBimestral .ClearFix')
                    let tabelaAprovacao = document.getElementsByClassName('tabelaAprovacao')[0]

                    if (!document.querySelector('#divPlanejamentoBimestral .ClearFix > .barraBotoesInferior')) {

                        let barraBotoesInferior = document.querySelector('#ListarPlanejamentoBimestral > .barraBotoesInferior')
                        barraBotoesInferior.style = ""
                        corpoPlanejamento.appendChild(barraBotoesInferior)

                    } else {

                        corpoPlanejamento.removeChild(document.querySelector('#divPlanejamentoBimestral .ClearFix > .barraBotoesInferior'))
                        let barraBotoesInferior = document.querySelector('#ListarPlanejamentoBimestral > .barraBotoesInferior')
                        barraBotoesInferior.style = ""
                        corpoPlanejamento.appendChild(barraBotoesInferior)

                    }

                    corpoPlanejamento.appendChild(tabelaAprovacao)

                    observer.disconnect()
                    observer.observe(iframe, { attributes: true, childList: true, subtree: true })

                }
            })

            observer.observe(iframe, { attributes: true, childList: true, subtree: true })

        }

    }

    function iniciarObserverFrequencia() {

        botaoIniciaFrequencia.disabled = true
        formataTxtArea()
        atualizaTabela()

        observer = new MutationObserver((mutations) => {


            mutations.forEach((mut) => {

                if (mut.target.id == "txtDataFrequenciaDisciplina") {

                    //EXECUTADOS PARA CADA MODIFICAÇÃO
                    adicionaEventos()
                    alteraVisibilidade()

                }

                alteraVisibilidade()
                observer.disconnect()
                observer.observe(iframe, { attributes: true, childList: false, subtree: true })

            })

            alteraVisibilidade()



        })

        //EXECUTADOS NA PRIMEIRA VEZ

        adicionaEventos()
        alteraVisibilidade()
        alert("EVENTOS ADICIONADOS")
        observer.observe(iframe, { attributes: true, childList: false, subtree: true })


    }

    function encerraObserver() {
        // PARA AMBOS CASOS (faltas e planejamentos)
        if (confirm("DESEJA ENCERRAR O MONITORAMENTO?")) {
            observer.disconnect()
            dadosAlunos = {}
            floatingTextarea.value = ""
            floatingTextarea.disabled = false
            botaoIniciaFrequencia.disabled = false

            linhasTabelaFaltas = tbodytabelaDados.querySelectorAll("tr")
            linhasTabelaFaltas.forEach((linha) => {
                linha.remove()
            })

            for (aluno in dadosAlunos) {

                dadosAlunos[aluno] = undefined
            }
        }
    }

    function formataTxtArea() {

        content = document.getElementById("floatingTextarea").value
        content = content.split("\n")

        content.forEach((linhaData, i) => {

            linhaData = linhaData.split(" | ")
            dadosAlunos[linhaData[0]] = { 'nome': linhaData[0], 'freq': parseInt(linhaData[1]), 'pend': true }

        })

        floatingTextarea.disabled = true
    }

    function atualizaTabela() {

        let linhasTabelaFaltas = tbodytabelaDados.querySelectorAll("tr")
        linhasTabelaFaltas.forEach((linha) => {

            linha.remove()

        })


        for (aluno in dadosAlunos) {

            console.log(aluno)

            if (dadosAlunos[aluno].pend == true) {

                let linha = document.createElement("tr")
                let tdNome = document.createElement("td")
                let tdFaltas = document.createElement("td")

                tdNome.innerText = dadosAlunos[aluno]['nome']
                tdFaltas.innerText = dadosAlunos[aluno]['freq']

                linha.appendChild(tdNome)
                linha.appendChild(tdFaltas)

                tbodytabelaDados.appendChild(linha)


            }
        }
    }

    function alteraVisibilidade() {

        tabelaDiarioClasse = document.querySelectorAll(".TabelaDiarioClasse")[0]

        tabelaDiarioClasseLinhas = tabelaDiarioClasse.querySelectorAll("tbody > tr")

        tabelaDiarioClasseLinhas.forEach((linha) => {

            if (linha.id.includes("trMotivo")) {

                linha.style.display = "none"

            } else {

                aluno = linha.querySelector("td > a")

                let nomeAluno = aluno.innerText
                let td = aluno.parentElement
                let tr = td.parentElement

                if (!dadosAlunos[nomeAluno] || dadosAlunos[nomeAluno]["pend"] == false) {

                    tr.style.display = "none"
                    // tr.remove()

                }
            }
        })
    }

    function atualizaBotaoGravar() {

        btnGravarFrequenciaDisciplina = document.getElementById("btnGravarFrequenciaDisciplina")

        btnGravarFrequenciaDisciplina.addEventListener("click", () => {

            alert("ATUALIZANDO")


        })


    }

    function adicionaEventos() {

        chkFNJ = document.querySelectorAll(".campoFrequenciaDisciplinaFNJ")

        chkFNJ.forEach((chk) => {

            chk.addEventListener("input", function () {

                if (chk.checked == false) {

                    let tdChk = chk.parentElement
                    let trChk = tdChk.parentElement

                    let aluno = trChk.querySelector("td > a").innerText
                    let freq = dadosAlunos[aluno].freq

                    dadosAlunos[aluno].freq = freq - 1

                    if (dadosAlunos[aluno].freq <= parseInt(faltasTirar.value)) {

                        dadosAlunos[aluno].pend = false

                    }

                    atualizaTabela()

                } else {

                    let tdChk = chk.parentElement
                    let trChk = tdChk.parentElement

                    let aluno = trChk.querySelector("td > a").innerText
                    let freq = dadosAlunos[aluno].freq

                    dadosAlunos[aluno].freq = freq + 1

                    if (dadosAlunos[aluno].freq >= parseInt(faltasTirar.value)) {

                        dadosAlunos[aluno].pend = true

                    }


                    atualizaTabela()



                }


            })

        })


    }

    function formataTabelaFaltas() {

        tabelaDiarioClasseFaltas = document.querySelectorAll(".TabelaDiarioClasse")[0]

        if (document.querySelectorAll(".TabelaDiarioClasse").length > 1) {

            tabelaDiarioClasseFaltas = document.querySelectorAll(".TabelaDiarioClasse")[1]


        }

        tabelaDiarioClasseFaltasLinhas = tabelaDiarioClasseFaltas.querySelectorAll("tbody > tr:not([id])")

        tabelaDiarioClasseFaltasLinhas.forEach((linha) => {


            qtdFaltas = linha.querySelector(".campoFaltaNaoJustificada")
            console.log(qtdFaltas)

            if (parseInt(qtdFaltas.value) > parseInt(faltasTirar.value)) {

                aluno = linha.querySelector("td > a")

                let nomeAluno = aluno.innerText

                txtAreaFormataFaltas.value += `${nomeAluno} | ${parseInt(qtdFaltas.value)}\n`

            }

        })


    }



}

incluiRecursos() 