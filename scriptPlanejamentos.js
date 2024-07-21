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

        <div class="card">

            <div hidden class="input-group m-4 w-50">
                <span class="input-group-text" id="inputGroup-sizing-default">RETIRAR</span>
                <input id="faltasTirar" type="number" value="0" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>

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


// EVENTOS 

botaoIniciaFrequencia.addEventListener("click", () => { iniciarObserverFrequencia() })

botaoEncerraFrequencia.addEventListener("click", () => { encerraObserver() })


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

    formataTxtArea()
    atualizaTabela()

    observer = new MutationObserver((mutations) => {


        mutations.forEach((mut) =>{

            if(mut.target.id == "txtDataFrequenciaDisciplina"){

                //EXECUTADOS PARA CADA MODIFICAÇÃO
                adicionaEventos()

            }

            alteraVisibilidade()
            observer.disconnect()
            observer.observe(iframe, { attributes: true, childList: false, subtree: true })

        })



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

        linhasTabelaFaltas = tbodytabelaDados.querySelectorAll("tr")
        linhasTabelaFaltas.forEach((linha) => {
            linha.remove()
        })

        for (aluno in dadosAlunos){

            dadosAlunos[aluno] = undefined
        }
    }
}

function formataTxtArea() {

    content = document.getElementById("floatingTextarea").value
    content = content.split("\n")

    content.forEach((linhaData, i) => {

        linhaData = linhaData.split(" | ")
        dadosAlunos[linhaData[0]] = { 'nome': linhaData[0], 'freq': parseInt(linhaData[1]) }

    })

    floatingTextarea.disabled = true
}

function atualizaTabela() {

    let linhasTabelaFaltas = tbodytabelaDados.querySelectorAll("tr")
    linhasTabelaFaltas.forEach((linha) =>{

        linha.remove()

    })


    for (aluno in dadosAlunos) {

        if(aluno != (undefined || "")){

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

    tabelaDiarioClasseLinhas = document.querySelectorAll(".TabelaDiarioClasse tbody > tr")

    tabelaDiarioClasseLinhas.forEach((linha) => {

        if (linha.id.includes("trMotivo")) {

            linha.style.display = "none"

        } else {

            aluno = linha.querySelector("td > a")

            let nomeAluno = aluno.innerText
            let td = aluno.parentElement
            let tr = td.parentElement

            if (!dadosAlunos[nomeAluno]) {

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

        chk.addEventListener("input", function() {

            if(chk.checked === false){

                let tdChk = chk.parentElement
                let trChk = tdChk.parentElement
    
                let aluno = trChk.querySelector("td > a").innerText
                console.log(aluno)
                let freq = dadosAlunos[aluno].freq
    
                dadosAlunos[aluno].freq = freq - 1
    
    
                console.log(dadosAlunos[aluno])
                atualizaTabela()

            } else{

                let tdChk = chk.parentElement
                let trChk = tdChk.parentElement
    
                let aluno = trChk.querySelector("td > a").innerText
                console.log(aluno)
                let freq = dadosAlunos[aluno].freq
    
                dadosAlunos[aluno].freq = freq + 1
    
    
                console.log(dadosAlunos[aluno])
                atualizaTabela()



            }


        })

    })


}