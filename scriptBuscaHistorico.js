let progressBarUm = document.getElementById('progress-bar-1')
let barGroupProgress = document.getElementById('bar-group-progress')

formRequestHistorico.addEventListener('submit', (event) => {


    event.preventDefault()
    iniciaLoop()
    barGroupProgress.toggleAttribute("hidden")


})

async function iniciaLoop() {

    intext = document.getElementById('txtAreaMatriculasHistorico').value.split('\n')
    let alunoAtual = 0


    for (matricula of intext) {

        alunoAtual++
        await requisitarPesquisa(matricula, "pesquisar", "")
        progressBarUm.style.width = `${100 * alunoAtual / intext.length}%`

    }

    barGroupProgress.toggleAttribute("hidden")



}

async function requisitarPesquisa(codMatricula, actionType) {

    let formRequest = document.getElementById("formRequestHistorico") // BUSCA FORMULÁRIO
    let formRequestFormData = new FormData(formRequest) // TRANSFORMA EM MANIPULÁVEL


    formRequestFormData.set("actionType", actionType) // TIPO DE REQUISIÇÃO
    formRequestFormData.set("codigoAluno", codMatricula) // MATRICULA PARA BUSCAR O CODIGO DO ALUNO NO SISTEMA

    let formRequestObj = Object.fromEntries(formRequestFormData) // TRANSFORMA EM OBJETO - CHAVE & VALOR
    let corpoRequestToX = new URLSearchParams(formRequestObj).toString() // TRANSFORMA OS DADOS EM FORMATO x-www-form-urlencoded


    // REQUISIÇÃO ASSÍNCRONA
    let request = await fetch("/eol/aluno/consultarAlunosEmitirHistoricoEscolarAction.do", {
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
            await tratarPesquisa(txtrequest)

            break

    }

}

async function tratarPesquisa(txtDocument) {

    let parser = new DOMParser()

    // TRANSFORMA A PÁGINA DE TEXTO PARA UM OBJETO DOM
    let documentDOM = parser.parseFromString(txtDocument, "text/html")

    let chkCodigo = documentDOM.getElementsByName("idCidadao")[0].value

    window.open(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/historicoescolar/${chkCodigo}/`, '_blank')

    

}