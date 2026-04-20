// COLAR NO CONSOLE DA PÁGINA "Apontamento de desempenho e frequência das turmas" DO SIEPE

let options = document.querySelectorAll("#ddlDisciplinaConteudoCurricular > option")
let codDisciplinas = []
let style = "<style>   table {     width: 100%;     border-collapse: collapse;   }   th {     background-color: #4CAF50; /* Cor de fundo do cabeçalho */     color: white; /* Cor do texto do cabeçalho */     padding: 10px;   }   td {     border: 1px solid #ddd;     padding: 8px;   }   /* Cor alternada para linhas pares */   tr:nth-child(even) {     background-color: #f2f2f2;   }   /* Cor ao passar o mouse */   tr:hover {     background-color: #ddd;   } </style>                  "

options.forEach(opt => {

    codDisciplinas.push({value: opt.value, disciplina: opt.textContent})

})

async function requisi() {

    for (i = 0; i <= codDisciplinas.length; i++) {

        let paginaHTMLcopy = ""

        let conteudosMinistrados = await fetch(`https://www.siepe.educacao.pe.gov.br/diarioclasse/conteudocurricular/organizado/ConteudosMinistradosOrganizado.ew?idTurma=260003280&idSerie=2484&idDisciplina=${codDisciplinas[i].value}`)
        let conteudosMinistradosHtml = await conteudosMinistrados.text()

        let conteudosTrabalhados = await fetch(`https://www.siepe.educacao.pe.gov.br/diarioclasse/conteudocurricular/organizado/ConteudosMinistradosAulaOrg.ew?idTurma=260003280&idSerie=2484&idDisciplina=${codDisciplinas[i].value}`)
        let conteudosTrabalhadosHtml = await conteudosTrabalhados.text()
    
        paginaHTMLcopy += conteudosMinistradosHtml + `\n\n<hr>\n\n` + conteudosTrabalhadosHtml + style

        console.log(`concluído ${i}`)

        baixarArquivoHTML(paginaHTMLcopy, codDisciplinas[i].disciplina)


    }

}

await requisi()

function baixarArquivoHTML(conteudo, disciplina) {
    // 1. Conteúdo do seu arquivo HTML
    const conteudoHTML = conteudo;

    // 2. Criar um Blob com o conteúdo e tipo MIME
    const blob = new Blob([conteudoHTML], { type: 'text/html' });

    // 3. Criar link temporário para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${disciplina}.html`; // Nome do arquivo

    // 4. Simular clique e remover o link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}