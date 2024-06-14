if (document.URL.includes('seb/registra-frequencia-escola')) {

    document.head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

<style>

.formataBotao {

    display: flex;
    flex-direction: row;
    position: fixed;
    width: 75%;
    justify-content: end;
    align-items: start;


}

.offcanvas{
    width: 30% !important;
    min-width: 450px !important;
}

.statusAluno {

    background-color: rgba(255, 255, 255, 0.411);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border: 1px dashed white;

}

.divFormatada{

    display: flex; 
    gap: 5px

}

</style>

`

    toolbar = document.getElementsByClassName("div-componente-interno")[0]

    toolbar.innerHTML = `<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1 btn-lg" id="botaoAlteraJanela" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></input> </div>` + toolbar.innerHTML

    document_Um = document.getElementById("container-1")

    document_Um.style.maxWidth = "100%"
    document_Um.style.marginRight = "0px"
    document_Um.style.marginLeft = "0px"
    document_Um.style.paddingRight = "0px"
    document_Um.style.paddingLeft = "0px"

    document_Dois = document.getElementById("container-2")

    document_Dois.style.maxWidth = "100%"
    document_Dois.style.marginRight = "0px"
    document_Dois.style.marginLeft = "0px"
    document_Dois.style.paddingRight = "0px"
    document_Dois.style.paddingLeft = "0px"


    document_Tres = document.getElementById("container-3")

    document_Tres.style.maxWidth = "100%"
    document_Tres.style.marginRight = "0px"
    document_Tres.style.marginLeft = "0px"
    document_Tres.style.paddingRight = "0px"
    document_Tres.style.paddingLeft = "0px"

    //REMOVE O STYLE ATUAL PARA INJETAR O MODIFICADO (NECESSÁRIO PELO BOOTSTRAP)
    document.querySelector("link[href='/seb/styles.87b8b25c5debe806658a.css']").remove()

    // CRIA E ADICIONA O OFFCANVAS LATERAL NA PAGINA
    let divoffcanvas = document.createElement('div')
    divoffcanvas.innerHTML = `
<div id="offcanvasId" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"aria-labelledby="offcanvasScrollingLabel">

<div class="offcanvas-header d-flex flex-column align-items-end">
    <input type="button" class="botaoAlteraJanela btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></input>
</div>

<div class="col-5 m-4 form-floating">
    <select id="selectOperacao" class="form-select" id="floatingSelect" aria-label="">
        <option id="formatarTabela" value="formatarTabela">Formatar tabela</option>
        <option id="updateDados" value="inserirDados">Atualização de dados trimestral</option>
        <option id="setDatabase" value="gerarArquivo">Gerar arquivo</option>
    </select>
    <label for="floatingSelect">Opções</label>
</div>

<div class="mx-3">
    <div hidden class="progress mb-2" id="bar-group-progress">
        <div id="progress-bar-1" class="progress-bar progress-bar-striped" style="width: 0%"></div>
    </div>
</div>

<div class="offcanvas-body">

    <div id="alertUpdate" class="m-4 alert alert-danger alert-dismissible fade show" role="alert" hidden>
        <p id="descAlert">IMPORTAR UM NOVO ARQUIVO IRÁ SUBSTITUIR O ARMAZENADO NO LOCALSTORAGE</p>
        <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div id="cardFormatarTabela" class="card">

        <div id="formFormatarTabela" class="card m-1" style="height: 105px">

            <input id="botaoFormatarTabela" class="btn m-1 btn-primary h-100" value="FORMATAR TABELA">

        </div>
    
        <div id="formUpdate" class="card m-1" hidden>

            <div class="p-2">

                <div class="input-group">
                    <input id="inputArquivo" name="inputArquivo" type="file" class="form-control">
                </div>

                <div class="d-flex my-2">

                    <div class="d-flex flex-column align-items-end mx-1">
                        <input class="btn btn-primary col-12 mb-1" id="botaoSubmit" value="IMPORTAR">
                        <input class="btn btn-danger col-12 mb-1" id="botaoExcluir" value="LIMPAR">
                    </div>

                </div>
            
            </div>

        </div>

        <div id="formGerar" class="card m-1" style="height: 500px" hidden>

            <div class="p-2">

                <div class="form-floating">
                    <textarea class="form-control h-400" id="txtAreaAlunos"></textarea>
                    <label id="lblAlunos" for="txtAreaAlunos">JSON</label>
                </div>

                <div class="d-flex my-2">

                    <div class="d-flex flex-column align-items-end mx-1">
                        <input class="btn btn-primary col-12 mb-1" id="botaoGerar" value="GERAR">
                        <input class="btn btn-danger col-12 mb-1" id="botaoExcluir" value="LIMPAR">
                    </div>

                </div>
            
            </div>

        </div>

    </div>

</div>

</div>`

    document.body.append(divoffcanvas)

    //INSTANCIAÇÃO DOS ELEMENTOS E VARIÁVEIS DE CONTROLE
    let offcanvas = document.getElementById('offcanvasId')
    let botoesAlteraJanela = document.getElementsByClassName('botaoAlteraJanela')
    let selectOperacao = document.getElementById('selectOperacao')
    let formFormatarTabela = document.getElementById("formFormatarTabela")
    let formUpdate = document.getElementById('formUpdate')
    let formGerar = document.getElementById('formGerar')
    let botaoSubmit = document.getElementById('botaoSubmit')
    let botaoFormatarTabela = document.getElementById("botaoFormatarTabela")
    let descAlert = document.getElementById("descAlert")
    let alertUpdate = document.getElementById("alertUpdate")
    let botoesFechar = document.querySelectorAll(".btn-close")
    let txtAreaAlunos = document.getElementById("txtAreaAlunos")
    let botaoGerar = document.getElementById("botaoGerar")


    // EVENTOS
    for (i = 0; i <= botoesAlteraJanela.length - 1; i++) {

        botoesAlteraJanela[i].addEventListener('click', () => {

            offcanvas.classList.toggle('show')

        })

    }

    document.getElementById("selectOperacao").addEventListener("input", () => {

        switch (selectOperacao.value) {

            case "formatarTabela":
                formGerar.hidden = true
                formUpdate.hidden = true
                formFormatarTabela.hidden = false
                break

            case "inserirDados":
                formFormatarTabela.hidden = true
                formUpdate.hidden = false
                formGerar.hidden = true
                alertUpdate.hidden = false
                break

            case "gerarArquivo":
                formFormatarTabela.hidden = true
                formGerar.hidden = false
                formUpdate.hidden = true
                break

        }

    })

    botaoSubmit.addEventListener("click", () => {

        importarDatabase()
    })

    botaoFormatarTabela.addEventListener("click", () => {

        formatarTabela()

    })

    botoesFechar.forEach((btn) => {

        btn.addEventListener("click", () => {

            btn.parentElement.classList.remove("show")
            btn.parentElement.hidden = true

        })


    })

    botaoGerar.addEventListener("click", () =>{

        gerarJson()


    })


    //PARTE FUNCIONAL DO CÓDIGO

    function importarDatabase() {
        const input = document.getElementById('inputArquivo');
        const arquivo = input.files[0];

        let fileReader = new FileReader()

        fileReader.onload = function (e) {

            resultado = fileReader.result

            localStorage.setItem("alunos", resultado)
            input.value = ""
            alertUpdate.hidden = false
            alertUpdate.classList.remove("alert-danger")
            alertUpdate.classList.add("alert-success")
            alertUpdate.classList.add("show")
            descAlert.innerText = "IMPORTADO COM SUCESSO"
        }

        try {

            fileReader.readAsText(arquivo)


        } catch (e) {
            alertUpdate.classList.add("alert-danger")
            alertUpdate.classList.add("show")
            alertUpdate.hidden = false
            descAlert.innerText = e

        }


    }

    function formatarTabela() {

        if (localStorage.getItem("alunos") == null) {

            alertUpdate.classList.add("alert-danger")
            alertUpdate.classList.add("show")
            descAlert.innerText = "AINDA NÃO EXISTEM DADOS DOS ESTUDANTES NO LOCALSTORAGE"
            alertUpdate.hidden = false


        } else {

            let alunosPresenca = JSON.parse(localStorage.getItem("alunos"))

            let nomesAlunosPresenca = {}

            alunosPresenca.forEach(aluno => {

                nomesAlunosPresenca[aluno.nome] = { "nomeSerie": aluno.nomeSerie, "ok": aluno.ok }

            })


            let linhasTabela = document.querySelectorAll(".mat-table tbody tr")


            linhasTabela.forEach(linha => {

                nomeAluno = linha.querySelector(".mat-column-nome")
                serieAluno = linha.querySelector(".mat-column-noSerie")


                if (nomesAlunosPresenca[nomeAluno.innerText]) {


                    if (nomesAlunosPresenca[nomeAluno.innerText]["nomeSerie"] == serieAluno.innerText) {

                        serieAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: green"> ✔ </div>  ${serieAluno.innerText}</div>`

                    } else {

                        serieAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: red"> ⚠ </div>  ${serieAluno.innerText}</div>`

                    }

                    if (nomesAlunosPresenca[nomeAluno.innerText]["ok"] == true) {

                        nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: green"> ✔ </div>  ${nomeAluno.innerText}</div>`

                    } else {

                        nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: red"> ⚠ </div>  ${nomeAluno.innerText}</div>`

                    }


                } else {

                    nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: yellow"> ≠ </div>  ${nomeAluno.innerText}</div>`

                }

            });



        }



    }

    function gerarJson(){

        txtAreaAlunos.value = localStorage.getItem("alunos")

        

    }

}

