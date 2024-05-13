document.head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`

let layoutCabecalhoGestao = document.getElementsByClassName('LayoutCabecalhoGestao')[0]
layoutCabecalhoGestao.innerHTML = `

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
    min-width: 900px !important;
}
#cardTabela{

width: 100%;

}

</style>

<div class="formataBotao"> <input class="botaoAlteraJanela btn btn-primary mt-1" type="button" value="ÁREA DEV" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></input> </div>` + layoutCabecalhoGestao.innerHTML

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
        </select>
        <label for="floatingSelect">Opções</label>
    </div>

    <div class="offcanvas-body">

        <div class="card">
            <table hidden class="table " id="tabelaEndereco">
                <thead>
                    <tr>
                        <th scope="col">Nome completo do aluno</th>
                        <th scope="col">Matrícula</th>
                        <th scope="col">Turma</th>
                        <th scope="col">Turno</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Município</th>
                        <th scope="col">Área do aluno</th>
                    </tr>
                </thead>
                <tbody id="tbodytabelaEndereco">

                </tbody>

            </table>

            <table class="table" id="tabelaDados">
                <thead>
                    <tr>
                        <th scope="col">Matrícula</th>
                        <th scope="col">Nome completo do aluno</th>
                        <th scope="col">Nome da mãe</th>
                        <th scope="col">Nome da pai</th>
                        <th scope="col">Responsável</th>
                        <th scope="col">CPF responsável</th>
                        <th scope="col">Nome responsável</th>
                        <th scope="col">TURMA....</th>
                    </tr>
                </thead>
                <tbody id="tbodytabelaDados">

                </tbody>

            </table>



            <div class="p-2 d-flex">

                <div class="form-floating">
                    <textarea class="form-control" id="txtAreaMatriculas"></textarea>
                    <label id="lblMatriculas" for="txtAreaMatriculas">MATRICULAS</label>
                </div>


                <div class="d-flex align-items-end">
                    <input class="btn btn-primary ms-1" id="botaoProx" type="button" value="PESQUISAR">
                </div>
            </div>

            <div class="m-2">

                <div class="btn-group" role="group">
                    <input type="checkbox" class="btn-check btn-sm" id="btncheckOutros" autocomplete="off">
                    <label class="btn btn-outline-primary btn-sm" for="btncheckOutros" style="font-size: 9px">Somente "outros"</label>
                </div>

            </div>

        </div>

    </div>

</div>`

document.body.append(divoffcanvas)

// DE CONTROLE

let intext
let varControle = 0
let txtAreaMatriculas = document.getElementById('txtAreaMatriculas')
let lblMatriculas = document.getElementById('lblMatriculas')
let offcanvas = document.getElementById('offcanvasId')
let botoesAlteraJanela = document.getElementsByClassName('botaoAlteraJanela')
let alertDanger = document.getElementById('alertDanger')
let descAlert = document.getElementById('descAlert')
let closeAlert = document.getElementById('closeAlert')
let selectPesquisa = document.getElementById('selectPesquisa')
let tabelaEndereco = document.getElementById('tabelaEndereco')
let tabelaDados = document.getElementById('tabelaDados')
let btncheckOutros = document.getElementById("btncheckOutros")



for (i = 0; i <= botoesAlteraJanela.length - 1; i++) {

    botoesAlteraJanela[i].addEventListener('click', () => {

        offcanvas.classList.toggle('show')

    })

}

txtAreaMatriculas.addEventListener('input', () => {

    if (txtAreaMatriculas.value.length != 0) {
        lblMatriculas.hidden = true

    } else {

        lblMatriculas.hidden = false

    }

})

document.getElementById('botaoProx').addEventListener('click', () => {

    prox()

})

closeAlert.addEventListener('click', () => {

    alertDanger.hidden = true


})

selectPesquisa.addEventListener('input', () => {

    if (selectPesquisa.value == "dados") {

        tabelaEndereco.hidden = true
        tabelaDados.hidden = false


    } else {

        tabelaEndereco.hidden = false
        tabelaDados.hidden = true


    }


})


// FUNÇÕES


function prox() {

    setTimeout(() => {


        try {

            intext = document.getElementById('txtAreaMatriculas').value.split('\n')
            let iframeDocument = document.getElementById("iframeCorpo").contentWindow.document
            iframeDocument.getElementsByName('txtCodigo')[0].value = intext[varControle]


            if (varControle <= intext.length - 1 && intext[varControle] != "") {


                pesquisar()

                setTimeout(() => {

                    buscar()

                }, 600)

            }



        } catch (err) {

            descAlert.innerText = `${err}`
            alertDanger.hidden = false


        }

    }, 350);




}

// PREDF SIEPE


function pesquisar() {

    try {

        let iframeDocument = document.getElementById("iframeCorpo").contentWindow.document
        let formulario = iframeDocument.getElementsByName('frmConsultarAluno')[0]


        with (formulario) {
            actionType.value = "pesquisar";
            submit();
        }



    } catch (err) {

        descAlert.innerText = `${err}`
        alertDanger.hidden = false


    }



}

function buscar() {

    try {

        let iframeDocument = document.getElementById("iframeCorpo").contentWindow.document
        let formulario = iframeDocument.getElementsByName('frmConsultarAluno')[0]
        let turmaAluno = iframeDocument.querySelectorAll('.faixa_bg .texto label')[8].innerText


        iframeDocument.getElementById('chkAluno0').checked = true

        with (formulario) {
            actionType.value = "buscar";
            submit();


        }

        setTimeout(() => {

            pegaDados(turmaAluno)

        }, 1400);



    } catch (err) {

        descAlert.innerText = `${err}`
        alertDanger.hidden = false


    }




}

function voltar() {

    try {


        let iframeDocument = document.getElementById("iframeCorpo").contentWindow.document
        let formulario = iframeDocument.getElementsByName('frmDetalharAluno')[0]


        with (formulario) {

            actionType.value = "voltar";
            submit();

        }

        setTimeout(() => {
            prox()
        }, 1200);

    } catch (err) {

        descAlert.innerText = `${err}`
        alertDanger.hidden = false


    }


}

function pegaDados(turmaAlunoBusca) {

    try {


        let iframeDocument = document.getElementById("iframeCorpo").contentWindow.document
        let tabelaDadosUm = iframeDocument.getElementsByClassName('campos')[0].querySelectorAll("tbody > tr > .texto")
        let tabelaDadosDois = iframeDocument.getElementsByClassName('campos')[1].querySelectorAll("tbody > tr > .texto")
        let tabelaDadosTres = iframeDocument.getElementsByClassName('campos')[2].querySelectorAll("tbody > tr > .texto")
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
        let tr = document.createElement('tr')


        switch (document.getElementById('selectPesquisa').value) {

            case 'endereco':

                nameAluno.innerText = tabelaDadosUm[3].innerText.trim()

                matAluno.innerText = tabelaDadosUm[0].innerText.trim()

                turmaAluno.innerText = turmaAlunoBusca

                turnoAluno.innerText = 'INTEGRAL'

                enderecoAluno.innerText = tabelaDadosDois[1].innerText.trim()

                cidadeAluno.innerText = tabelaDadosDois[5].innerText.trim()

                zonaAluno.innerText = tabelaDadosDois[4].innerText.trim()

                tr.append(nameAluno, matAluno, turmaAluno, turnoAluno, enderecoAluno, cidadeAluno, zonaAluno)

                document.getElementById('tbodytabelaEndereco').appendChild(tr)

                varControle++
                voltar()

                break;



            case 'dados':

                nameAluno.innerText = tabelaDadosUm[3].innerText.trim()

                matAluno.innerText = tabelaDadosUm[0].innerText.trim()

                maeAluno.innerText = tabelaDadosUm[7].innerText.trim()

                paiAluno.innerText = tabelaDadosUm[11].innerText.trim()

                resp.innerText = tabelaDadosTres[0].innerText.trim()

                turmaAluno.innerText = turmaAlunoBusca

                let cpfResp = document.createElement('td')

                let nomeResp = document.createElement('td')

                if (resp.innerText == "Outro") {


                    cpfResp.innerText = tabelaDadosTres[4].innerText.trim()
                    nomeResp.innerText = tabelaDadosTres[3].innerText.trim()



                } else {

                    cpfResp.innerText = tabelaDadosTres[3].innerText.trim()
                    nomeResp.innerText = tabelaDadosTres[2].innerText.trim()


                }

                tr.append(matAluno, nameAluno, maeAluno, paiAluno, resp, cpfResp, nomeResp, turmaAluno)


                if (btncheckOutros.checked == true) {

                    if (resp.innerText == "Outro") {

                        document.getElementById('tbodytabelaDados').appendChild(tr)

                    } else {

                    }

                } else {

                    document.getElementById('tbodytabelaDados').appendChild(tr)

                }



                varControle++
                voltar()

                break;



        }


        // navigator.clipboard.writeText(`${nameAluno}	${matAluno}	TURMA	INTEGRAL	${enderecoAluno}	${cidadeAluno}	${zonaAluno}`);


    } catch (err) {

        descAlert.innerText = `${err}`
        alertDanger.hidden = false


    }




}






