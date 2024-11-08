//let progressBarUm = document.getElementById('progress-bar-1')
let formRequestHistorico = document.getElementById('formRequestHistorico')
//let barGroupProgress = document.getElementById('bar-group-progress')
let carouselHistorico = document.getElementById("carouselHistorico")
let carousel_historico_inner = document.getElementById("carousel-historico-inner")
let contagemCards = 0
let alunosUltimoAno = []


formRequestHistorico.addEventListener('submit', (event) => {


    event.preventDefault()
    iniciaLoop()
    // barGroupProgress.toggleAttribute("hidden")


})

async function iniciaLoop() {

    intext = document.getElementById('txtAreaMatriculasHistorico').value.split('\n')
    let alunoAtual = 0


    for (matricula of intext) {

        alunoAtual++
        await requisitarPesquisa(matricula, "pesquisar", "")
        //progressBarUm.style.width = `${100 * alunoAtual / intext.length}%`

    }

    //barGroupProgress.toggleAttribute("hidden")



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
    let chkNome = documentDOM.getElementsByTagName("table")[2].querySelectorAll("tr label")[1].innerText

    //window.open(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/historicoescolar/${chkCodigo}/`, '_blank')

    // -----------------x------------- VERIFICA DADOS DO HISTORICO EM HTML 
    const requestHistoricoHtml = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/historicoescolar/${chkCodigo}/html`)
    const documentDOMHTML = parser.parseFromString(await requestHistoricoHtml.text(), "text/html")
    let resultadosSeries = documentDOMHTML.getElementsByClassName('resultadoSerie')

    if (resultadosSeries[resultadosSeries.length - 2]) {

        let tdEscola = parser.parseFromString(resultadosSeries[resultadosSeries.length - 2].innerHTML, "text/html")

        alunosUltimoAno.push({ aluno: chkNome, escola: tdEscola.querySelector('span').textContent })
        console.table(alunosUltimoAno)

    }

    // -----------------x------------- VERIFICA DADOS DO HISTORICO EM HTML 

    let carousel_item = document.createElement("div")
    carousel_item.classList.add("carousel-item")
    carousel_item.classList.add("carousel-item")

    if (contagemCards == 0) {
        carousel_item.classList.add("active")
        contagemCards = contagemCards + 1

    }

    let centraliza_card = document.createElement("div")

    let card_historico = document.createElement("div")
    card_historico.classList.add("card")
    card_historico.style.height = "600px"

    let card_body = document.createElement("div")
    card_body.classList.add("card-body")
    card_body.style.display = "flex"
    card_body.style.alignItems = "center"
    card_body.style.flexDirection = "column"


    let card_title = document.createElement("div")
    card_title.classList.add("card-title")


    let card_title_button = document.createElement("input")
    card_title_button.type = "button"
    card_title_button.classList.add("btn")
    card_title_button.classList.add("btn-primary")
    card_title_button.style.color = "blank"
    card_title_button.value = `${chkNome}`

    card_title_button.addEventListener("click", () => {

        navigator.clipboard.writeText(card_title_button.value)



    })

    let iframe_aluno = document.createElement("iframe")
    iframe_aluno.src = `https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/documentos/historicoescolar/${chkCodigo}/pdf`
    iframe_aluno.style.height = "100%"
    iframe_aluno.style.width = "85%"

    // mesclando

    card_title.appendChild(card_title_button)
    card_body.appendChild(card_title)
    card_body.appendChild(iframe_aluno)
    card_historico.appendChild(card_body)
    centraliza_card.appendChild(card_historico)
    carousel_item.appendChild(centraliza_card)

    carousel_historico_inner.appendChild(carousel_item)



}