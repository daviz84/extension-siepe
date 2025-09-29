setTimeout(() => {



async function buscaPendencias() {

    let textFetchStr = ""

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
}, 3000)
