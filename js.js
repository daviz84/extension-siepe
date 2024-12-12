let textFetchStr = ""

let matriculas_alunos = [12188018,
    12187809,
    12187823,
    12188022,
    12188014,
    12187829,
    12187824,
    12188021,
    12187810,
    12188032,
    12187984,
    12187827,
    12187813,
    12187981,
    12188033,
    12187987,
    12188008,
    12187989,
    12187988,
    12187850,
    12187804,
    12187799]

async function buscaPendencias() {

    matriculas_alunos.forEach(async (mat) => {

        const result = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/alunos/matricula/pendenciaitinerario/componentesReprovados/${mat}?pendencia=&idCategoriaItinerarioFormativo=&request.preventCache=1734008531900`)

        let textFetch = await result.text()
        textFetchStr = `${textFetchStr} \n ${textFetch}`


        console.log(textFetchStr)
    })

    
}

