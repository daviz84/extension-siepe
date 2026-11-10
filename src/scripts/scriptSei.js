//script usado para monitorar processo SEI e receber notificação de atualização no whatsapp

/*
async function buscaAtualização() {

    let url = "https://sei.pe.gov.br/sei/modulos/pesquisa/md_pesq_processo_exibir.php?6axV45_4s79etb-ZDLNpKFeyrxxqEXsZQaM4tFDswWzALoI048GigTUvLicMiEx8XMAn_Ly7WsKJxzByHDZ8ulFaz1BkZSMoOxeXRpLQK13htkASAHQkt_-JLu4zNdUM"
    let res = await fetch(url)

    //a página do SEI utiliza a codificação ISO-8859-1 (Latin-1). Por padrão, o método res.text() do JavaScript tenta ler a resposta como UTF-8.
    // PEGADINHA DO ENCODING RESOLVIDA AQUI:
    // Em vez de res.text(), pegamos os dados puros (arrayBuffer) e decodificamos explicitamente em iso-8859-1
    let buffer = await res.arrayBuffer()
    let decoder = new TextDecoder('iso-8859-1')
    let resHtml = decoder.decode(buffer)

    const parser = new DOMParser()
    let doc = parser.parseFromString(resHtml, "text/html")

    let numProcesso = doc.querySelectorAll("#tblCabecalho td")[1].textContent
    let firstElement = doc.querySelector("#tblHistorico tbody .andamentoAberto")
    let td = firstElement.querySelectorAll("td")[2]

    let infraCaptionUm = doc.querySelectorAll(".infraCaption")[0]
    let infraCaptionDois = doc.querySelectorAll(".infraCaption")[1]

    if ((td.textContent != "AGUARDANDO DELIBERAÇÃO DA CPP" || !infraCaptionDois.textContent.split("(")[1].includes("49") || !infraCaptionUm.textContent.split("(")[1].includes("18")) && numProcesso == '1400005116.000647/2025-00') {

        callMeBot("PROCESSO ATUALIZADO!")
        console.log("testeee")
        return false

    } else {

        console.log("SEM ATUALIZAÇÕES")

    }

}

async function callMeBot(mensagem) {

    //no-cors indica ao navegador que eu não quero ler a resposta, já que o site não aceita o retorno
    await fetch(`https://api.callmebot.com/whatsapp.php?phone=558796590132&text=${mensagem}&apikey=5938520`, { mode: 'no-cors' })


}

let intervalo = setInterval(async () => {

    let res = await buscaAtualização()

    if (res == false) clearInterval(intervalo)

}, 30000);

*/