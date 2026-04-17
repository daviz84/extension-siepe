let options = document.querySelectorAll("#ddlDisciplinaConteudoCurricular > option")
let codDisciplinas = []
let paginaHTMLcopy = ""

options.forEach(opt => {

    codDisciplinas.push(opt.value)


})

async function requisi() {

    for (i = 0; i <= codDisciplinas.length; i++) {


        let pagina = await fetch(`https://www.siepe.educacao.pe.gov.br/diarioclasse/conteudocurricular/organizado/ConteudosMinistradosOrganizado.ew?idTurma=260003280&idSerie=2484&idDisciplina=${codDisciplinas[i]}`)

        let paginaHtml = await pagina.text()

        paginaHTMLcopy += paginaHtml + "\n\n\n\n\n"

        requisi()


    }

}

console.log(paginaHTMLcopy)



