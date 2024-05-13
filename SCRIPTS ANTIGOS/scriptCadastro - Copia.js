document.head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<style>
.formataBotao {

    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: -1;
    heigth: 100%;
    width: 1100px;
    justify-content: end;
    align-items: start;


}
.offcanvas{
    min-width: 100% !important;
}
#cardTabela{

width: 100%;

}

</style>`

// POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL
let layoutCabecalhoGestao = document.getElementsByClassName('LayoutCabecalhoGestao')[0]

// POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL
layoutCabecalhoGestao.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></input> </div>` + layoutCabecalhoGestao.innerHTML

let divoffcanvas = document.createElement('div')
divoffcanvas.innerHTML = `
<div id="offcanvasId" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    aria-labelledby="offcanvasScrollingLabel">

    <div class="offcanvas-header d-flex flex-column align-items-end w-100">
        <input type="button" class="botaoAlteraJanela btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></input>
    </div>

    <div id="alertDanger" hidden class="m-4 alert alert-danger alert-dismissible fade show" role="alert">
        <p id="descAlert"></p>
        <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="col-3 m-4 form-floating">
        <select id="selectPesquisa" class="form-select" id="floatingSelect" aria-label="">
            <option id="selectDados" value="dados">Dados pessoais</option>
            <option id="selectEndereco" value="endereco">Endereço</option>
        </select>
        <label for="floatingSelect">Opções</label>
    </div>

    <div class="mx-3">
        <div hidden class="progress mb-2" id="bar-group-progress">
            <div id="progress-bar-1" class="progress-bar progress-bar-striped" style="width: 0%"></div>
        </div>
    </div>

    <div class="offcanvas-body">

        <div class="card">

            <table hidden class="table " id="tabelaEndereco">
                <thead>
                    <tr>
                        <th scope="col">Nome completo do aluno</th>
                        <th scope="col">Matrícula</th>
                        <th scope="col">Turma</th>
                        <!-- <th scope="col">Turno</th> -->
                        <th scope="col">Endereço</th>
                        <th scope="col">Município</th>
                        <th scope="col">Área do aluno</th>
                    </tr>
                </thead>
                <tbody id="tbodytabelaEndereco">

                </tbody>

            </table>

            <table class="table" id="tabelaDados">
                <thead>
                    <tr>
                        <th scope="col">Matrícula</th>
                        <th scope="col">Nome completo do aluno</th>
                        <th scope="col">Nome da mãe</th>
                        <th scope="col">Nome da pai</th>
                        <th scope="col">Responsável</th>
                        <th scope="col">CPF responsável</th>
                        <th scope="col">Nome responsável</th>
                        <th scope="col" class="px-3">TURMA</th>
                    </tr>
                </thead>
                <tbody id="tbodytabelaDados">

                </tbody>

            </table>

            <form id="formRequest" class="card m-1">

                <div class="col-4 p-2">

                    <input type="text" name="ordenacao" hidden>
                    <input type="text" name="parecer" hidden>
                    
                    <input type="text" name="txtCodigo" hidden>
                    <input type="text" name="txtAluno" hidden>
                    <input type="text" name="idAlunoMatriculaStatus" hidden>
                    <input type="text" name="curso" hidden>
                    <input type="text" name="serie" hidden>
                    <input type="text" name="turma" hidden>
                    <input type="text" name="actionType" hidden>
                    <input type="text" name="chkAluno" hidden>

                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">ANO</span>
                        <input name="txtAno" type="text" class="form-control" value="2024">
                    </div>

                    <div class="d-flex my-2">

                        <div class="form-floating">
                            <textarea class="form-control h-100" id="txtAreaMatriculas"></textarea>
                            <label id="lblMatriculas" for="txtAreaMatriculas">MATRICULAS</label>
                        </div>


                        <div class="d-flex flex-column align-items-end mx-1">
                            <input class="btn btn-primary col-12 mb-1" id="botaoSubmit" type="submit" value="PESQUISAR">
                            <input class="btn btn-danger col-12 mb-1" id="botaoExcluir" value="LIMPAR">
                        </div>

                    </div>

                    <div class="">

                        <div class="btn-group" role="group" id="btn-group-btncheckOutros">
                            <input type="checkbox" class="btn-check btn-sm" id="btncheckOutros" autocomplete="off">
                            <label class="btn btn-outline-primary btn-sm" for="btncheckOutros" style="font-size: 9px">Somente "outros"</label>
                        </div>

                    </div>
                
                
                </div>

            </form>



        </div>

    </div>

</div>`

// TELA DE TRABALHO DA EXTENSÃO
document.body.append(divoffcanvas)


// ELEMENTOS E VARIÁVEIS DE CONTROLE

let intext
let txtAreaMatriculas = document.getElementById('txtAreaMatriculas')
let lblMatriculas = document.getElementById('lblMatriculas')
let offcanvas = document.getElementById('offcanvasId')
let botoesAlteraJanela = document.getElementsByClassName('botaoAlteraJanela')
let alertDanger = document.getElementById('alertDanger')
let descAlert = document.getElementById('descAlert')
let closeAlert = document.getElementById('closeAlert')
let selectPesquisa = document.getElementById('selectPesquisa')
let tabelaEndereco = document.getElementById('tabelaEndereco')
let tabelaDados = document.getElementById('tabelaDados')
let btncheckOutros = document.getElementById("btncheckOutros")
let btnGroupBtncheckOutros = document.getElementById('btn-group-btncheckOutros')
let progressBarUm = document.getElementById('progress-bar-1')
let barGroupProgress = document.getElementById('bar-group-progress')
let botaoExcluir = document.getElementById('botaoExcluir')
let tbodytabelaDados = document.getElementById('tbodytabelaDados')
let tbodytabelaEndereco = document.getElementById('tbodytabelaEndereco')


for (i = 0; i <= botoesAlteraJanela.length - 1; i++) {

    botoesAlteraJanela[i].addEventListener('click', () => {

        offcanvas.classList.toggle('show')

    })

}

selectPesquisa.addEventListener('input', () => {

    if (selectPesquisa.value == "dados") {

        tabelaEndereco.toggleAttribute('hidden')
        tabelaDados.toggleAttribute('hidden')
        btnGroupBtncheckOutros.toggleAttribute('hidden')


    } else {

        tabelaEndereco.toggleAttribute('hidden')
        tabelaDados.toggleAttribute('hidden')
        btnGroupBtncheckOutros.toggleAttribute('hidden')


    }


})

botaoExcluir.addEventListener("click", () => {

    txtAreaMatriculas.value = ""

    while(tbodytabelaDados.childNodes.length != 0 || tbodytabelaEndereco.childNodes.length != 0){

        tbodytabelaDados.childNodes.forEach(child => {

            child.remove()
        
        
        })

        tbodytabelaEndereco.childNodes.forEach(child => {

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

        let tabelaDadosUm = documentDOM.getElementsByClassName('campos')[0].querySelectorAll("tbody > tr > .texto")

        // INICIA A MANIPULAÇÃO DOS DADOS DO ALUNO A SEREM FILTRADOS
        pegaDados(documentDOM, infosAluno.turma_aluno)


        // VISUALIZAÇÃO NO CONSOLE (OPCIONAL)
        return [infosAluno.codigo_sistema, tabelaDadosUm[3].innerText.trim()]

    } else {

        if (confirm(`O ALUNO DE CÓDIGO ${infosAluno.codigo_sistema} NÃO FOI ENCONTRADO. DESEJA TENTAR NOVAMENTE?`)) {

            await requisitarPesquisa(codMatricula, actionType, infosAluno)

        }

    }


}

function pegaDados(iframeDocument, turmaAlunoRes) {

    let tabelaDadosUm = iframeDocument.getElementsByClassName('campos')[0].querySelectorAll("tbody > tr > .texto")
    let tabelaDadosDois = iframeDocument.getElementsByClassName('campos')[1].querySelectorAll("tbody > tr > .texto")
    let tabelaDadosTres = iframeDocument.getElementsByClassName('campos')[2].querySelectorAll("tbody > tr > .texto")
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
    let tr = document.createElement('tr')


    // DADOS PADRÃO PARA TODOS OS CASOS
    nameAluno.innerText = tabelaDadosUm[3].innerText.trim()
    matAluno.innerText = tabelaDadosUm[0].innerText.trim()
    turmaAluno.innerText = turmaAlunoRes


    switch (document.getElementById('selectPesquisa').value) {


        case 'endereco':

            // turnoAluno.innerText = 'INTEGRAL'

            enderecoAluno.innerText = tabelaDadosDois[1].innerText.trim()

            cidadeAluno.innerText = tabelaDadosDois[5].innerText.trim()

            zonaAluno.innerText = tabelaDadosDois[4].innerText.trim()

            tr.append(nameAluno, matAluno, turmaAluno, enderecoAluno, cidadeAluno, zonaAluno)

            document.getElementById('tbodytabelaEndereco').appendChild(tr)

            break;



        case 'dados':

            maeAluno.innerText = tabelaDadosUm[7].innerText.trim()

            paiAluno.innerText = tabelaDadosUm[11].innerText.trim()

            resp.innerText = tabelaDadosTres[0].innerText.trim()

            let cpfResp = document.createElement('td')

            let nomeResp = document.createElement('td')

            if (resp.innerText == "Outro") {


                cpfResp.innerText = tabelaDadosTres[4].innerText.trim()
                nomeResp.innerText = tabelaDadosTres[3].innerText.trim()



            } else {

                cpfResp.innerText = tabelaDadosTres[3].innerText.trim()
                nomeResp.innerText = tabelaDadosTres[2].innerText.trim()


            }

            tr.append(matAluno, nameAluno, maeAluno, paiAluno, resp, cpfResp, nomeResp, turmaAluno)


            if (btncheckOutros.checked == true) {

                if (resp.innerText == "Outro") {

                    document.getElementById('tbodytabelaDados').appendChild(tr)

                } else {

                }

            } else {

                document.getElementById('tbodytabelaDados').appendChild(tr)

            }

            break;



    }


    // navigator.clipboard.writeText(`${nameAluno}	${matAluno}	TURMA	INTEGRAL	${enderecoAluno}	${cidadeAluno}	${zonaAluno}`);





}