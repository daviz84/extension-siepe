setTimeout(() => {

    console.log("Script de parciais carregado")
    const botaoSubmitParciais = document.querySelector('#botaoSubmitParciais')


    const codigosCidadao = []

    botaoSubmitParciais.addEventListener("click", () => {
        const divsAlunosPendencias = document.querySelectorAll(".dgrid-row")
        const divDisciplinasParcialTbody = document.querySelector('#tabelaDisciplinasParcial tbody')

        divsAlunosPendencias.forEach(div => {

            let nomeAluno = div.querySelector('.dgrid-column-nome_aluno')
            codigosCidadao.push({ id: div.id.split('-')[2], nome: nomeAluno.textContent })

        })
        console.log("Botão de buscar parciais clicado")
        iniciaLoop()
    })

    async function iniciaLoop() {
        const divDisciplinasParcialTbody = document.querySelector('#tabelaDisciplinasParcial tbody')

        for (const idAluno of codigosCidadao) {

            const pends = await buscaMaterias(idAluno.id)

            const tr = document.createElement('tr')
            const tdNomeAluno = document.createElement('td')
            const tdDisciplinas = document.createElement('td')
            const tdMatricula = document.createElement('td')
            tdMatricula.textContent = idAluno.id
            tdNomeAluno.innerText = idAluno.nome

            tdDisciplinas.textContent = ''

            for (const escola in pends) {

                for (const pendencia of pends[escola]) {
                    tdDisciplinas.innerHTML += `</br>${pendencia}`

                }

            }

            tr.append(tdMatricula, tdNomeAluno, tdDisciplinas)
            divDisciplinasParcialTbody.append(tr)


        }


    }

    async function buscaMaterias(idAluno) {

        const pendencias = {}

        const resultPromise = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/consultas/operacionais/detalharProgressaoParcialHistoricoAluno/historico?idAluno=${idAluno}&auge.preventCache=1751029985476&rangeStartParam=0&rangeCountParam=10`)

        const result = await resultPromise.json()

        for (const componente of result.items) {

            const idHistorico = componente.idHistorico

            const resPromise = await fetch(`https://www.siepe.educacao.pe.gov.br/ws/eol/aluno/consultas/operacionais/detalharProgressaoParcialAluno/componentes?idCidadao=${idAluno}&idHistoricoEstabelecimento=${idHistorico}&auge.preventCache=1751030105092&rangeStartParam=0&rangeCountParam=10`)

            const res = await resPromise.json()

            for (const pendencia of res.items) {

                const idHistorico = pendencia.idHistorico

                if (!pendencias[idHistorico]) {

                    pendencias[idHistorico] = []
                    pendencias[idHistorico].push(JSON.stringify([pendencia.descricao_disciplina, pendencia.resultado, componente.serie_equivalente]))


                } else {
                    pendencias[idHistorico].push(JSON.stringify([pendencia.descricao_disciplina, pendencia.resultado, componente.serie_equivalente]))


                }

            }


        }

        return pendencias
    }


}, 3000);

