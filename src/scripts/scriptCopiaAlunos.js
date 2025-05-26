
function buscar() {

    const alunosFormatados = []

    const trs = document.querySelectorAll(".mat-table tr")

    trs.forEach(tr => {


        const nome = tr.querySelector(".mat-column-nome").textContent
        const serie = tr.querySelector(".mat-column-noSerie").textContent
        const nascimento = tr.querySelector(".mat-column-dataNascimento").textContent



        alunosFormatados.push({ nome, serie, nascimento })

    })

    console.table(alunosFormatados)

}

//REMOVE O STYLE ATUAL PARA INJETAR O MODIFICADO (NECESSÁRIO PELO BOOTSTRAP)
document.querySelector("link[href='/seb/styles.924e48e39d77e43bccf3.css']").remove()

const divBotao = document.querySelector(".mat-elevation-z4")
const botao = document.createElement("button")


botao.addEventListener("click", () => {

    const tbody = document.querySelector(".mat-table > tbody")
    const range = document.createRange()
    range.selectNode(tbody)

    const selection = window.getSelection()// o selection é um objeto da própria página que pode-se adicionar ranges
    selection.removeAllRanges(); // remove a seleção já existente se assim houver
    selection.addRange(range);

})

botao.innerText = "BOTÃO COPIA ALUNOS"
botao.classList.add("btn")
botao.classList.add("btn-primary")

divBotao.append(botao)


