let layoutRodapeGestao = document.getElementsByClassName('FixCabecalho')[0]

layoutRodapeGestao.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasId" aria-controls="offcanvasScrolling"></input> </div>` + layoutRodapeGestao.innerHTML

let divoffcanvas = document.createElement('div')
divoffcanvas.innerHTML = `
<div id="offcanvasId" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    aria-labelledby="offcanvasScrollingLabel">

    <div class="offcanvas-header align-items-end">
        <input type="button" class="botaoAlteraJanela btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></input>
    </div>

    <div id="alertDanger" hidden class="m-4 alert alert-danger alert-dismissible fade show" role="alert">
        <p id="descAlert"></p>
        <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="m-4 form-floating">
        <select id="selectPesquisa" class="form-select" id="floatingSelect" aria-label="">
            <option id="selectDados" value="dados">Retirar faltas estudantes</option>
        </select>
        <label for="floatingSelect">Opções</label>
    </div>

    <div class="offcanvas-body">

        <div class="card mb-5">
            <input id="botaoIniciaPlanejamento" type="button" class="btn btn-secondary m-1 border border-light" value="INICIAR PLAJENAMENTO"></input>
            <input id="botaoEncerraPlanejamento" type="button" class="btn btn-danger m-1 border border-light" value="ENCERRAR PLAJENAMENTO"></input>
        </div>

        <div class="card mb-5">

            <div class="form-floating col-10 m-4">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Dados brutos</label>
            </div>


            <table class="table table-hover table-striped" id="tabelaDados">
                <thead>
                    <tr>
                        <th scope="col">ALUNOS</th>
                        <th scope="col">FALTAS</th>
                    </tr>
                </thead>

                <tbody id="tbodytabelaDados">



                </tbody>

            </table>

            <input id="botaoIniciaFrequencia" type="button" class="btn btn-success m-1 border border-light" value="FORMATAR TABELA"></input>
            <input id="botaoEncerraFrequencia" type="button" class="btn btn-danger m-1 border border-light" value="LIMPAR"></input>
            <input id="botaoTiraFaltas" type="button" class="btn btn-warning m-1 border border-light" value="TIRAR TODAS AS FALTAS"></input>
            <input id="botaoAddFaltas" type="button" class="btn btn-warning m-1 border border-light" value="ADICIONAR FALTAS EM TODOS"></input>

            <div class="m-3">
                <p>O TOTAL DE FREQUÊNCIA NA SEMANA DE CADA DISCIPLINA É DE 2.50%</p>
                <p>TODAS FALTAS RETIRADAS NA SEMANA AUMENTA 2.50% NA FREQUÊNCIA DO ALUNO</p>          
            </div>

        </div>

        <div class="card mb-5">

            <div class="m-3">
                <p>O DELIMITADOR É DE ACORDO COM A QUANTIDADE DE AULAS NA SEMANA E O CURSO</p>

                <p>BASE CURRICULAR:</p>
                <p>10 FALTAS = 75% = 1 AULA NA SEMANA</p>
                <p>20 FALTAS = 75% = 2 AULAS NA SEMANA</p>
                <p>30 FALTAS = 75% = 3 AULAS NA SEMANA</p>
                </br>
                </br>
                <p>ITINERÁRIO:</p>
                <p>10 FALTAS = 75% = 40H/A AULA NA SEMANA</p>
                <p>05 FALTAS = 75% = 20H/A AULAS NA SEMANA</p>
            
            </div>

            <div class="input-group m-4 w-50">
                <span class="input-group-text" id="inputGroup-sizing-default">DELIMITADOR</span>
                <input id="faltasTirar" type="number" value="0" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="form-floating col-10 m-4">
                <textarea class="form-control" placeholder="Leave a comment here" id="txtAreaFormataFaltas" style="cursor: pointer"></textarea>
                <label for="floatingTextarea">Faltas dos alunos</label>
            </div>

            <input id="botaoIniciaFormatacaoFaltas" type="button" class="btn btn-secondary m-1 border border-light" value="FORMATAR"></input>

        </div>

    </div>

</div>

`

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
let botaoAddFaltas = document.querySelector("#botaoAddFaltas")

// EVENTOS 

botaoIniciaFrequencia.addEventListener("click", () => { iniciarObserverFrequencia() })

botaoEncerraFrequencia.addEventListener("click", () => { encerraObserver() })

botaoIniciaFormatacaoFaltas.addEventListener("click", () => { formataTabelaFaltas() })

txtAreaFormataFaltas.addEventListener("click", () =>{ navigator.clipboard.writeText(txtAreaFormataFaltas.value)})

botaoIniciaPlanejamento.addEventListener("click", () =>{iniciarObserverPlanejamento()})

botaoEncerraPlanejamento.addEventListener("click", () =>{encerraObserver()})

botaoTiraFaltas.addEventListener("click", () =>{tirarFaltas()})

botaoAddFaltas.addEventListener("click", () =>{adicionaFaltas()})


function tirarFaltas(){

document.querySelectorAll(".campoFrequenciaDisciplinaFNJ").forEach(bt => {

    if(bt.checked) bt.click();

    
})

}

function adicionaFaltas(){

document.querySelectorAll(".campoFrequenciaDisciplinaFNJ").forEach(bt => {

    if(!bt.checked) bt.click();

    
})

}



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
        dadosAlunos[linhaData[0]] = { 'nome': linhaData[0], 'freq': parseInt(linhaData[1]), 'pend': true}

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

                if(dadosAlunos[aluno].freq <= parseInt(faltasTirar.value)){

                    dadosAlunos[aluno].pend = false

                }

                atualizaTabela()

            } else {

                let tdChk = chk.parentElement
                let trChk = tdChk.parentElement

                let aluno = trChk.querySelector("td > a").innerText
                let freq = dadosAlunos[aluno].freq

                dadosAlunos[aluno].freq = freq + 1

                if(dadosAlunos[aluno].freq >= parseInt(faltasTirar.value)){

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
