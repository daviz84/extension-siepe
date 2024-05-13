if (document.URL.includes('ws/eol/aluno/documentos/BoletimEscolar')) {

	let camposNotas = []


	setTimeout(() => {


		let qtdDisciplinas = document.querySelectorAll('.trDisciplina')

		for (let i = 1; i <= 4; i++) {


			document.querySelectorAll('.tdMediaPeriodo' + i).forEach((td) => {

				td.classList.remove('esconder')


				if (td.innerText !== '') {

					if (parseFloat(td.innerText) < 6) {



						td.style.backgroundColor = '#80ACEE'
						td.classList.add('baixa')

					} else {


					}

				}

			})

		}

	}, 1000);

}