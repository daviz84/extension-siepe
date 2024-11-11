document.head.innerHTML += `

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

tbody td{

text-align: center;

}

</style>`

// POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL

let layoutCabecalhoGestao = document.getElementsByClassName('LayoutCabecalhoGestao')[0]

// POSICIONA O BOTÃO NO INÍCIO DA DIV E NÃO NO FINAL
layoutCabecalhoGestao.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasId" aria-controls="offcanvasId"></input> </div>` + layoutCabecalhoGestao.innerHTML

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
            <option id="selectEndereco" value="saude">Dados de saúde</option>
            <option id="selectHistorico" value="historico">Dados de históricos</option>
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

            <div id="pesquisasCadastro">

                <table class="table" id="tabelaDados">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Nome completo do aluno</th>
                            <th scope="col">Data Nascimento</th>
                            <th scope="col" class="px-3">CPF</th>
                            <th scope="col">Nome da mãe</th>
                            <th scope="col">Nome da pai</th>
                            <!--<th scope="col">Responsável</th>-->
                            <!--<th scope="col">CPF responsável</th>-->
                            <!--<th scope="col">Nome responsável</th>-->
                            <th scope="col" class="px-3">TURMA</th>
                            <!--<th scope="col" class="px-3">Bols. Fam.</th>-->
                            <th scope="col" class="px-3">NIS</th>
                            <th scope="col" class="px-3">Codigo sistema</th>
                        </tr>
                    </thead>
                    <tbody id="tbodytabelaDados">

                    </tbody>

                </table>

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

                <table hidden class="table"  id="tabelaSaude">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Nome completo do aluno</th>
                            <th scope="col">Número cartão do sus</th>
                            <th scope="col" class="px-3">TURMA</th>
                        </tr>
                    </thead>
                    <tbody id="tbodytabelaSaude">

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
                        <input type="text" name="dadosAluno" hidden>

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

            <div id="tabelaHistorico" hidden>

                <h1>PESQUISAR HISTÓRICO</h1>

                <form id="formRequestHistorico" class="card m-1">

                    <div class="col-4 p-2">

                        <input type="text" name="ordenacao" hidden>
                        <input type="text" name="codigoAluno" hidden>
                        <input type="text" name="nomeAluno" hidden>
                        <input type="text" name="semestre" hidden>
                        <input type="text" name="curso" hidden>
                        <input type="text" name="serie" hidden>
                        <input type="text" name="turma" hidden>
                        <input type="text" name="actionType" hidden>
                        <input type="text" name="dadosAluno" hidden>

                        <div class="d-flex my-2">

                            <div class="form-floating">
                                <textarea class="form-control h-100" id="txtAreaMatriculasHistorico"></textarea>
                                <label id="lblMatriculas" for="txtAreaMatriculasHistorico">MATRICULAS</label>
                            </div>

                            <div class="d-flex flex-column align-items-end mx-1">
                                <input class="btn btn-primary col-12 mb-1" id="botaoSubmitHistorico" type="submit" value="PESQUISAR">
                                <input class="btn btn-danger col-12 mb-1" id="botaoExcluirHistorico" value="LIMPAR">
                            </div>

                        </div>
                    
                    
                    </div>

                <div class="">

                    <div class="btn-group" role="group" id="btn-group-btncheckOutrosHistorico">
                        <input type="checkbox" class="btn-check btn-sm" id="btncheckOutrosHistorico" autocomplete="off">
                        <label class="btn btn-outline-primary btn-sm" for="btncheckOutrosHistorico" style="font-size: 9px">Adicionar iframe</label>
                    </div>

                </div>


                </form>



                <div style="display: flex;">

                    <div id="carouselHistorico" class="carousel slide" style="min-width: 60%;">

                     

                        <div class="carousel-historico-inner" id="carousel-historico-inner" style="height: 600px">


                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselHistorico" data-bs-slide="prev" style="width: 100px">
                            <input class="btn btn-danger h-100" id="botaoExcluir" value="↩" style="width: 100px">
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselHistorico" data-bs-slide="next" style="width: 100px">
                            <input class="btn btn-primary h-100" id="botaoExcluir" value="↪" style="width: 100px">
                        </button>
                
                    </div>

                    <div>
                        <table class="table" id="alunosHistorico">
                            <thead>
                                <tr>
                                    <th scope="col">Nome completo do aluno</th>
                                    <th scope="col">9° ANO</th>
                                    <th scope="col">1° ANO</th>
                                    <th scope="col">2° ANO</th>
                                    <th scope="col">3° ANO</th>
                                    
                                </tr>
                            </thead>

                            <tbody id="alunosHistoricoBody">

                            </tbody>

                        </table>
                    </div>



                </div>

            </div>

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
let alertDanger = document.getElementById('alertDanger')
let descAlert = document.getElementById('descAlert')
let closeAlert = document.getElementById('closeAlert')
let selectPesquisa = document.getElementById('selectPesquisa')
let tabelaEndereco = document.getElementById('tabelaEndereco')
let tabelaDados = document.getElementById('tabelaDados')
let tabelaSaude = document.getElementById('tabelaSaude')
let tabelaHistorico = document.getElementById('tabelaHistorico')
let pesquisasCadastro = document.getElementById('pesquisasCadastro')
let btncheckOutros = document.getElementById("btncheckOutros")
let btnGroupBtncheckOutros = document.getElementById('btn-group-btncheckOutros')
let progressBarUm = document.getElementById('progress-bar-1')
let barGroupProgress = document.getElementById('bar-group-progress')
let botaoExcluir = document.getElementById('botaoExcluir')
let tbodytabelaDados = document.getElementById('tbodytabelaDados')
let tbodytabelaEndereco = document.getElementById('tbodytabelaEndereco')
let tbodytabelaSaude = document.getElementById('tbodytabelaSaude')

selectPesquisa.addEventListener('input', () => {

    if (selectPesquisa.value == "dados") {

        tabelaEndereco.hidden = true
        tabelaDados.hidden = false
        tabelaSaude.hidden = true
        btnGroupBtncheckOutros.hidden = false
        tabelaHistorico.hidden = true
        pesquisasCadastro.hidden = false



    } else if (selectPesquisa.value == "endereco") {

        tabelaEndereco.hidden = false
        tabelaDados.hidden = true
        tabelaSaude.hidden = true
        btnGroupBtncheckOutros.hidden = true
        tabelaHistorico.hidden = true
        pesquisasCadastro.hidden = false



    } else if (selectPesquisa.value == "saude") {

        tabelaSaude.hidden = false
        tabelaEndereco.hidden = true
        tabelaDados.hidden = true
        btnGroupBtncheckOutros.hidden = true
        tabelaHistorico.hidden = true
        pesquisasCadastro.hidden = false


    } else if (selectPesquisa.value == "historico") {
        tabelaHistorico.hidden = false
        tabelaSaude.hidden = true
        tabelaEndereco.hidden = true
        tabelaDados.hidden = true
        btnGroupBtncheckOutros.hidden = true
        pesquisasCadastro.hidden = true



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

function pegaDados(iframeDocument, turmaAlunoRes, codigo_sistema) {

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
    let bolsaFamilia = document.createElement('td')
    let cpfAluno = document.createElement('td')
    let dataNascimento = document.createElement('td')
    let nisAluno = document.createElement('td')
    let tdcodigo_sistema = document.createElement('td')

    let tr = document.createElement('tr')


    // DADOS PADRÃO PARA TODOS OS CASOS



    nameAluno.innerText = tabelaDados['Nomecivil']
    matAluno.innerText = tabelaDados['Matrícula']
    turmaAluno.innerText = turmaAlunoRes
    tdcodigo_sistema.innerText = codigo_sistema.split(';')[1]


    switch (document.getElementById('selectPesquisa').value) {


        case 'endereco':

            // turnoAluno.innerText = 'INTEGRAL'

            enderecoAluno.innerText = tabelaDados['Endereço']

            cidadeAluno.innerText = tabelaDados['Município']

            zonaAluno.innerText = tabelaDados['Bairro']

            tr.append(nameAluno, matAluno, turmaAluno, enderecoAluno, cidadeAluno, zonaAluno)

            document.getElementById('tbodytabelaEndereco').appendChild(tr)

            break;



        case 'dados':

            maeAluno.innerText = tabelaDados['Filiação1']

            paiAluno.innerText = tabelaDados['Filiação2']

            resp.innerText = tabelaDados['Responsável']

            cpfResp.innerText = tabelaDados['CPF']

            nomeResp.innerText = tabelaDados['Nome']

            bolsaFamilia.innerText = tabelaDados["RecebeBolsaFamília"]

            cpfAluno.innerText = tabelaDados["CPF2"]

            dataNascimento.innerText = tabelaDados["Datadenascimento"]

            nisAluno.innerText = tabelaDados["NIS2"]

            tr.append(matAluno, nameAluno, dataNascimento, cpfAluno, maeAluno, paiAluno, turmaAluno, nisAluno, tdcodigo_sistema)


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

            document.getElementById('tbodytabelaSaude').appendChild(tr)
            tr.append(matAluno, nameAluno, numSus, turmaAluno)

    }


    // navigator.clipboard.writeText(`${nameAluno}	${matAluno}	TURMA	INTEGRAL	${enderecoAluno}	${cidadeAluno}	${zonaAluno}`);





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

