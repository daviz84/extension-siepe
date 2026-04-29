let body = document.querySelector("body")

body.addEventListener("click", () => {
    let alunos = ""
    let linhasAlunos = document.querySelectorAll(".mat-row")

    linhasAlunos.forEach(aluno => {

        let nomeAluno = aluno.querySelector(".cdk-column-nome").querySelector("span").textContent.trim()
        let serieAluno = aluno.querySelector(".cdk-column-noSerie").textContent.trim()
        let nisAluno = aluno.querySelector(".cdk-column-nuNis").textContent.trim()


        alunos += `${nomeAluno}	 ${serieAluno}	 ${nisAluno}\n`

    })

    navigator.clipboard.writeText(alunos).then(() => console.log("certo")).catch((err) => console.log(err))

    console.log(alunos)


})
