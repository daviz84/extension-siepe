document.head.innerHTML += `

<style>
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


let alunosPresenca = [
    {
        "id": 47075509,
        "nome": "ADDONNYS LUCENA CARVALLHO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-11-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 28980733,
        "nome": "ADEILMA DA SILVA DIAS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46647178,
        "nome": "ADRIELLY DA SILVA VIEIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-09-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22203697,
        "nome": "AGNYS SOFIA DA SILVA COSTA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-12-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-07 11:05:57",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45700867,
        "nome": "ALEX DE SOUZA QUEIROZ",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 73430182,
        "nome": "ALICIA MIRELLE ALVES SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-02-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 23269956,
        "nome": "ALINE DA SILVA CASTRO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-10-15T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22668171,
        "nome": "ALINE DE BRITO LEITE",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-02-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46320307,
        "nome": "ALINE EVELIN SOUZA SANTOS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 25419261,
        "nome": "ALISON EVERTON BISPO MONTEIRO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44524950,
        "nome": "AMANDA TAIS DOS SANTOS SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-05-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 23042952,
        "nome": "ANA BEATRIZ RAMALHO DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-02-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22936008,
        "nome": "ANA CECILIA FERREIRA DAMACENA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-05T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22914812,
        "nome": "ANA CLARA COSTA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43953624,
        "nome": "ANA CLARA DA SILVA SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 45680719,
        "nome": "ANA CLARA DE ALMEIDA BENTO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-01-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45681560,
        "nome": "ANA ELOISA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-05-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 45939734,
        "nome": "ANA HELOISA SANTOS RODRIGUES",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-03-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 69310630,
        "nome": "ANA JULIA CARDOSO BATISTA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-03-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 30056500,
        "nome": "ANA MARIA DO NASCIMENTO SOUZA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-09-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 64476961,
        "nome": "ANA MARIA SILVA DE SA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46074915,
        "nome": "ANA MIKAELY SIQUEIRA SANTOS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-08-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 78615526,
        "nome": "ANA PAULA OLIVEIRA SIQUEIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-07-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 10:52:30",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44313128,
        "nome": "ANA VITORIA LOPES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-05-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45167086,
        "nome": "ANDREIA CRISTINA DOS SANTOS SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-06-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44035842,
        "nome": "ANTONIA BEATRIZ VALEIRO DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44517972,
        "nome": "ANTONIA EMILY ALVES SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-02-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 43960150,
        "nome": "ANTONIA TAISLALANE SILVA SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-12-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 43752176,
        "nome": "ANTONIO ANDRE DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-06-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45969778,
        "nome": "ANTONIO CARLOS SANTANA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-08-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 78153022,
        "nome": "ANTONIO DAVI FERREIRA DA SILVS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-05-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 40447661,
        "nome": "ANTONIO DE OLIVEIRA VIEIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-11-08T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22932579,
        "nome": "ANTONIO FELIPE DE OLIVEIRA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38340019,
        "nome": "ANTONIO RENAN DA SILVA SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 47122609,
        "nome": "ANTONIO RENAN SILVA SOUZA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-08-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41731777,
        "nome": "ANTONIO RENE DA SILVA SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-08-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 37226834,
        "nome": "ANTONIO WELLINGTON OLIVEIRA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-07-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 33298289,
        "nome": "ARIELLY DE SA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 10453004,
        "nome": "AWANNY VITORIA ALVES BARBOSA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 36533418,
        "nome": "BERNARDO FRANCISCO DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-06-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46647105,
        "nome": "BRAIANE ARAUJO SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-15T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 32935589,
        "nome": "BRENO FELIX SOARES SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 40241507,
        "nome": "CAMILA LETICIA MOURA DINIZ",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-02-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 83722639,
        "nome": "CARLOS DANIEL DE FREITAS ALCANTARA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2006-07-20T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 08:46:17",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 36533675,
        "nome": "CARLOS EDUARDO CASTRO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 39658916,
        "nome": "CAROLAYNE DE SIQUEIRA SARAIVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-01-08T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45680037,
        "nome": "CICERA MAISA SILVA FORTUNATO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-12-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46932791,
        "nome": "CICERA ROBERTA SANTANA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-05T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:00:30",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22462244,
        "nome": "CICERO LUAN DE MACEDO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 29338800,
        "nome": "CICERO VANDEILSON PEREIRA COSTA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-08-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-07 09:39:52",
        "frequencia": {
            "codigoMotivoUm": "24a",
            "codigoSubMotivoUm": "24",
            "valorFrequenciaUm": 65,
            "mesReferenciaUm": 4,
            "descricaoMotivoUm": "A escola não sabe/não informou o motivo",
            "codigoMotivoDois": "24a",
            "codigoSubMotivoDois": "24",
            "valorFrequenciaDois": 65,
            "mesReferenciaDois": 5,
            "descricaoMotivoDois": "A escola não sabe/não informou o motivo"
        },
        "ok": true
    },
    {
        "id": 22030284,
        "nome": "CINTHIA HELLEN FREIRE NASCIMENTO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43667615,
        "nome": "CLARA DE ARRUDA PEREIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-03-05T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 32225220,
        "nome": "CLARA KETLLEN DE SOUZA GOMES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-04-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22597262,
        "nome": "CLARICE MARIA BATISTA DOS SANTOS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22460328,
        "nome": "CLARICE MONTEIRO DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43748597,
        "nome": "CLAUDIA RAYA LINDINALVA DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 39988764,
        "nome": "CLEYTON ELIZEU DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-09-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 23269257,
        "nome": "DALILA MARIA DIAS DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-05-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46813479,
        "nome": "DALTON HELIO DA SILVA NASCIMENTO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-03-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 27901765,
        "nome": "DANIEL NOGUEIRA CAVALCANTE",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45606729,
        "nome": "DAYSA MARIA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22620007,
        "nome": "DENISE DE SA DIAS SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-08-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45156798,
        "nome": "DIEGO ALVES DE SOUZA SA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-04-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 41057857,
        "nome": "DIEGO IRISVAN DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-05-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 65454903,
        "nome": "DOUGLAS GABRIEL DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-12-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22906148,
        "nome": "DOUGLAS HENRIQUE DA SILVA CRUZ",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-08-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 31881936,
        "nome": "EDGAR COELHO DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46422514,
        "nome": "EDHVANNY DOS SANTOS CAVALCANTE",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:07:38",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46051180,
        "nome": "EDSON SIQUEIRA SANTOS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-09-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:08:27",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42002168,
        "nome": "EDUARDO DE SOUZA MORAES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44557248,
        "nome": "EDUARDO FERREIRA DA SILVA SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-06-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44522810,
        "nome": "ELEN CLARICE ALVES VALERIANO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-09-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:10:33",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 26507409,
        "nome": "ELIANE BARROS ELOIA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-30T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22545493,
        "nome": "ELIELMA DA SILVA TAVARES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46746787,
        "nome": "ELISVANDO DA SILVA BATISTA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2006-11-23T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44828387,
        "nome": "ELLEN BEATRIZ DOS SANTOS CRUZ",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-10-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 35771750,
        "nome": "ELOIZA LARA AMORIM SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-01-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:13:13",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44306132,
        "nome": "EMANUELA GOMES DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 34387380,
        "nome": "EMERSON DE SOUZA SANTOS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-10-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46927948,
        "nome": "ERIC FELIX NELO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46969186,
        "nome": "ERICA DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-10-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43381140,
        "nome": "ERIELTON SOUZA LIMA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 32200705,
        "nome": "EVERALDO DE JESUS NETO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-09-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 30089121,
        "nome": "EVILY TAYANE LIMA QUEIROZ",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-20T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 42785762,
        "nome": "FRANCINILDO BATISTA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-08-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41153868,
        "nome": "FRANCISCA BIANCA BARROS NASCIMENTO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42040957,
        "nome": "FRANCISCA CARLA DE SIQUEIRA SARAIVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-03-08T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 40194510,
        "nome": "FRANCISCO CLEBERSON ANDRADE DE LIMA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-06-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22692606,
        "nome": "FRANCISCO CLECIO LEITE DE SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-02-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22642803,
        "nome": "FRANCISCO HENRIQUE DE OLIVEIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-02-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44525662,
        "nome": "FRANCISCO JEFERSON DE OLIVEIRA ARRUDA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-04-15T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 37592023,
        "nome": "FRANCISCO LEVI ANDRADE DOS SANTOS",
        "nomeSerie": "Educação de Jovens e Adultos - EJA - Ensino Médio",
        "codigoSerie": 21,
        "dataNascimento": "2006-10-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-10 09:21:28",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 25038272,
        "nome": "FRANCISCO NASARIO DA SILVA FILHO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-07-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22496930,
        "nome": "GABRIEL GLEDSON PEREIRA NUNES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-12-20T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 29711461,
        "nome": "GABRIEL JOSE DA SILVA NETO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-05-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 26149623,
        "nome": "GABRIELA BARBOSA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-11-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 34390609,
        "nome": "GABRIELA LUCENA RODRIGUES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 10470310,
        "nome": "GABRIELE MARIA DOS SANTOS SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 27183214,
        "nome": "GEIFSON DOS SANTOS ELOIA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 35463425,
        "nome": "GENICLECIO DOS SANTOS PEREIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44503871,
        "nome": "GEOVANE MACEDO PEREIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-01-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 32210005,
        "nome": "GEYME CARVALHO DOS SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-02-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22152824,
        "nome": "GIOVANNA BARBOSA DO NASCIMENTO",
        "nomeSerie": "Educação de Jovens e Adultos - EJA - Ensino Médio",
        "codigoSerie": 21,
        "dataNascimento": "2006-04-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-07 10:18:30",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22148897,
        "nome": "GRACIELY PEREIRA DE HOLANDA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42000281,
        "nome": "HALEILSON DA SILVA SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-02-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42875429,
        "nome": "HELOA MARIA FABRICIO DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-10-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45243924,
        "nome": "ISABELA VIEIRA COSTA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-12-05T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 37960167,
        "nome": "ISTEFFANY DE SOUZA MELO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-04-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 33993415,
        "nome": "IZAQUE LUCAS ALVES DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43091493,
        "nome": "JACIANNE DE ANDRADE SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-06-11T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46980344,
        "nome": "JACILNE ANGELO DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-03-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 08:30:32",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22091184,
        "nome": "JAILSON DA SILVA FERREIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38658694,
        "nome": "JAIRLANE VIEIRA DOS SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22973102,
        "nome": "JAISSON DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41162395,
        "nome": "JAKELINE ESTEFANI AMORIM SOUSA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 21863291,
        "nome": "JANAILSON DE SA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-03-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42181422,
        "nome": "JANIELLY DE SIQUEIRA SARAIVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-01-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41459415,
        "nome": "JOAO GUILHERME VIEIRA LOURENCO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-06-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 45654944,
        "nome": "JOAO PAULO DE LIMA ALVES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-08-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 10475047,
        "nome": "JOAO PEDRO DE SIQUEIRA RODRIGUES",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-11-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 32254727,
        "nome": "JOAO VITOR DA SILVA OLIVEIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-09-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 36544748,
        "nome": "JONATAS ANTONIO DE OLIVEIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42235156,
        "nome": "JOSE ANTONY SOUZA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46635957,
        "nome": "JOSE CUSTAVO DE SOUZA ALCANTARA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 22145080,
        "nome": "JOSE ELVIS LEITE DE SOUSA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2006-12-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22845641,
        "nome": "JOSE RAI DA SILVA ALVES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-05-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 27580839,
        "nome": "JOSE RICARDO LOPES ALVES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-10-30T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41910181,
        "nome": "JOSE RONILDO DA SILVA LIMA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-15T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 25414207,
        "nome": "JOSE VITOR FERREIRA DOS SANTOS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 25399860,
        "nome": "JOSE WELITON DA COSTA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 32194733,
        "nome": "JOSE WESLEY SANTOS OLIVEIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-02-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 40287824,
        "nome": "JULIANA FRANCISCA SOARES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-12-23T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 23019709,
        "nome": "KAREM ADRIELLY FERREIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-02-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 40772979,
        "nome": "KAUA FELIPE DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 35508007,
        "nome": "KAUANY ALVES DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-03-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45863639,
        "nome": "KAYKE FREITAS BENTO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-08-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44295180,
        "nome": "KAYLANE FERREIRA DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-01-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22591786,
        "nome": "LARISSA MARIA GOMES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-08-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22458583,
        "nome": "LARISSA VIEIRA CRUZ",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-12-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41714301,
        "nome": "LEONARDO TAVARES DE OLIVEIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-01-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 28655648,
        "nome": "LINDOMAR BATISTA FERREIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-05-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 43844784,
        "nome": "LIVIA KAILLANNE SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 08:54:25",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44922584,
        "nome": "LIVIA MARIA DA COSTA FREITAS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-10-19T01:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 08:53:10",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 45964005,
        "nome": "LUAN VITOR DOS SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-07 09:39:10",
        "frequencia": {
            "codigoMotivoUm": "24a",
            "codigoSubMotivoUm": "24",
            "valorFrequenciaUm": 71,
            "mesReferenciaUm": 4,
            "descricaoMotivoUm": "A escola não sabe/não informou o motivo",
            "codigoMotivoDois": "24a",
            "codigoSubMotivoDois": "24",
            "valorFrequenciaDois": 71,
            "mesReferenciaDois": 5,
            "descricaoMotivoDois": "A escola não sabe/não informou o motivo"
        },
        "ok": false
    },
    {
        "id": 28298515,
        "nome": "LUCAS ANTONIO SILVA BATISTA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 22737357,
        "nome": "LUCAS DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-03-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 31484441,
        "nome": "LUCAS HENRIQUE DA SILVA FEITOZA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41423865,
        "nome": "LUCIANA LOPES BEZERRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45535752,
        "nome": "LUIZ CARLOS GOMES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-01-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 33292945,
        "nome": "LUIZ EDUARDO DE SOUZA GALVAO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-04-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22961950,
        "nome": "LUIZ HENRIQUE FERREIRA MARINHO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-06T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42020115,
        "nome": "MAIARA DE LIMA MENDES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-10-06T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 40250481,
        "nome": "MAICON EVERTON ALVES ALMEIDA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-10-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 22785671,
        "nome": "MARCELO HENRIQUE GOMES LUANDA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46243825,
        "nome": "MARCOS IURI MAMEDIO AMORIM",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-09-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44148834,
        "nome": "MARIA ALANE BELISARIO DA SILVA NASCIMENTO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 39381273,
        "nome": "MARIA ANIELLY ALENCAR SOARES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-12-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44335969,
        "nome": "MARIA APARECIDA DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-03-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44460730,
        "nome": "MARIA APARECIDA SILVA FERREIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-06-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44539895,
        "nome": "MARIA AWANNY PEREIRA BARBOZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-01-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42799746,
        "nome": "MARIA EDUARDA DA CONCEICAO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-09-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 42216053,
        "nome": "MARIA EDUARDA DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-08-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 36522263,
        "nome": "MARIA EDUARDA SILVA TAVARES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22650629,
        "nome": "MARIA ELOISA DA COSTA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-03-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 34737684,
        "nome": "MARIA ELOISA SILVA SANTOS",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-02-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 36884898,
        "nome": "MARIA ELZIVANIA BARROS DE OLIVEIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41413473,
        "nome": "MARIA ERICA BARROS SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46064989,
        "nome": "MARIA GABRIELE SILVA FERREIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22930216,
        "nome": "MARIA IZABELA BATISTA DE SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-20T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 73242173,
        "nome": "MARIA JAISLANY DE SOUZA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-01-30T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 09:47:08",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41356610,
        "nome": "MARIA JOYCE PEREIRA DE OLIVEIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-08-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46425263,
        "nome": "MARIA JULIANA AMARAL DE OLIVEIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-12-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42494572,
        "nome": "MARIA LAYZA DA SILVA SOUSA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-30T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 21873197,
        "nome": "MARIA NAILANE GONSALVES DOS SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-03-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 22937609,
        "nome": "MARIA NAJILA PEREIRA SOARES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-08-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 83469725,
        "nome": "MARIA NATALIA DE OLIVEIRA TAVARES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-08-30T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 26848783,
        "nome": "MARIA PALOMA SILVA SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-01-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42793098,
        "nome": "MARIA RAYANNY ALVES DO NASCIMENTO",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-03-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 27590391,
        "nome": "MARIA SANTA ALVES DE MELO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-05-17T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 35444519,
        "nome": "MARIA TAUANNY DE SA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42522626,
        "nome": "MARIA TAYNA DOS SANTOS SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-01-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41746380,
        "nome": "MARIA VIVIAN DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-05-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 67467283,
        "nome": "MATEUS DE OLIVEIRA ALENCAR",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-05-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 37602288,
        "nome": "MATEUS LIRA ALVES",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-09-29T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38315222,
        "nome": "MATEUS PEREIRA MORAIS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-11-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42815748,
        "nome": "MATEUS WILLIAN SANTOS AMARANTE",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-04-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 80556864,
        "nome": "MATHEUS ALVES DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 10:09:24",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44894676,
        "nome": "MIRIAM ARAUJO GOMES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-09-12T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 34004731,
        "nome": "NAIANNE LINO DIAS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-02-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45653954,
        "nome": "NAIARA DA SILVA NOGUEIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-11-05T01:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 42620210,
        "nome": "NAYARA LAIS DA SILVA PEREIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-06-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44319049,
        "nome": "NAYELE DA SILVA BATISTA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45606519,
        "nome": "NAYLI BEZERRA DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-08-06T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 72599791,
        "nome": "NICOLE DIAS NUNES",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-08-08T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-11 10:12:00",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 26506231,
        "nome": "NICOLE NEILMA DE ALBUQUERQUE",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-08-04T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 23212348,
        "nome": "PAULA ELENA DOS SANTOS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-07-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46296687,
        "nome": "PAULO CESAR DE LIMA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-07-31T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 35410889,
        "nome": "PAULO FLORIANO SOUZA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-01-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 63822640,
        "nome": "PEDRO EDUARDO MACEDO DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-09-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38304380,
        "nome": "PEDRO HENRIQUE DOS SANTOS SOUZA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-02-08T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 20465227,
        "nome": "PEDRO HENRIQUE SOARES DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-04-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41393198,
        "nome": "PIETRA HELOISE DE FREITAS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-11T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22603489,
        "nome": "RAFAEL JOSE DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-23T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 25433343,
        "nome": "RAFAELA DE SOUZA DIAS",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-11-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45680260,
        "nome": "RAFAELA SANTOS DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-09-14T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41457607,
        "nome": "RAI JOSE RODRIGUES DA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-03-19T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 77825159,
        "nome": "RAIMUNDO NONATO DE SA SILVA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-10-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 30784340,
        "nome": "RAISLANE BATISTA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-11-11T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 22981095,
        "nome": "RAQUELY PEREIRA DE SOUZA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-07-18T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46956319,
        "nome": "RAYRA CRISLEY DE LUSTOZA SOUZA SANTOS",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-12-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-13 08:28:21",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 42227872,
        "nome": "RENATA DA SILVA LIMA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-04-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 36168015,
        "nome": "RIAN DA SILVA NARCISO",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-08-25T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38655195,
        "nome": "RODRIGO BELARMINO NOBREGA",
        "nomeSerie": "Educação de Jovens e Adultos - EJA - Ensino Médio",
        "codigoSerie": 21,
        "dataNascimento": "2006-05-21T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 10449936,
        "nome": "RYAN ALVES DE SOUZA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-01T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 47147662,
        "nome": "SAMARA KELVYA SILVA UMBILINO",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-02-07T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 33655729,
        "nome": "SAMIA MORAIS OLIVEIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-07-26T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 28282771,
        "nome": "SAMUEL FRANCISCO DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-09-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 45655272,
        "nome": "SARON DE SIQUEIRA PEREIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-04-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46798103,
        "nome": "SEBASTIAO VITOR BATISTA PEREIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2007-01-20T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 44512837,
        "nome": "TAINARIA ARAUJO FERREIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2006-08-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 29000400,
        "nome": "TAIS MONTEIRO GOMES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-01-27T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 38298217,
        "nome": "TAMIRES DA SILVA AMORIM",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-09-11T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44840251,
        "nome": "THAIS EMANUELY SOARES LIMA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-10T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "dataOperacao": "2024-06-13 08:45:53",
        "frequencia": {
            "valorFrequenciaUm": 99,
            "mesReferenciaUm": 4,
            "valorFrequenciaDois": 99,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46433089,
        "nome": "THAIS HELENA FEITOSA SARAIVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-03-22T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 27928717,
        "nome": "UERICK LIMA DE OLIVEIRA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-06-02T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 41399052,
        "nome": "VITOR MANOEL VICENTE DA SILVA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2008-07-03T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 44733870,
        "nome": "VITORIA DE SOUZA PEREIRA",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-01-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 26472167,
        "nome": "VITORIA VERONICA DA SILVA",
        "nomeSerie": "3ª série do ensino médio",
        "codigoSerie": 18,
        "dataNascimento": "2006-10-24T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 35465479,
        "nome": "WELITON ALDENOR DE ARRUDA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2008-08-28T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 31508998,
        "nome": "WILIANA DOS SANTOS BEZERRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-10-13T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": true
    },
    {
        "id": 46939215,
        "nome": "WILLAMY SOUZA TORRES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-23T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46933444,
        "nome": "WILLIAM DA SILVA PEREIRA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2007-12-16T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 46811476,
        "nome": "WILLIANY SOUZA TORRES",
        "nomeSerie": "2ª série do ensino médio",
        "codigoSerie": 17,
        "dataNascimento": "2007-10-23T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    },
    {
        "id": 43953635,
        "nome": "YASMIM KELLE FELIX COSTA",
        "nomeSerie": "1ª série do ensino médio",
        "codigoSerie": 16,
        "dataNascimento": "2009-03-09T00:00:00",
        "codigoSituacao": 3,
        "codigoEntidade": 26004593,
        "tipoFuncionamentoEscola": 1,
        "frequencia": {
            "mesReferenciaUm": 4,
            "mesReferenciaDois": 5
        },
        "ok": false
    }
]

let nomesAlunosPresenca = {}

alunosPresenca.forEach(aluno => {

    nomesAlunosPresenca[aluno.nome] = {"nomeSerie": aluno.nomeSerie, "ok": aluno.ok}

})


let linhasTabela = document.querySelectorAll(".mat-table tbody tr")


linhasTabela.forEach(linha => {

    nomeAluno = linha.querySelector(".mat-column-nome")
    serieAluno = linha.querySelector(".mat-column-noSerie")

    
    if(nomesAlunosPresenca[nomeAluno.innerText]){


        if(nomesAlunosPresenca[nomeAluno.innerText]["nomeSerie"] == serieAluno.innerText){

            serieAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: green"> ✔ </div>  ${serieAluno.innerText}</div>`

        } else{

            serieAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: red"> ⚠ </div>  ${serieAluno.innerText}</div>`

        }

        if(nomesAlunosPresenca[nomeAluno.innerText]["ok"] == true){

            nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: green"> ✔ </div>  ${nomeAluno.innerText}</div>`

        } else{

            nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: red"> ⚠ </div>  ${nomeAluno.innerText}</div>`

        }

        
    } else{

        nomeAluno.innerHTML = `<div class="divFormatada"><div class="statusAluno" style="color: yellow"> ≠ </div>  ${nomeAluno.innerText}</div>`

    }
    
});