
let camposNotas = []
let qtdFaltas = 0

setTimeout(() => {


	let qtdDisciplinas = document.querySelectorAll('.trDisciplina')
	let tabelaBoletim

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

			tabelaBoletim = td.closest(".cabecalhoDisciplinas")


		})

		document.querySelectorAll('.tdFNJPeriodo' + i).forEach((td) => {

			td.classList.remove('esconder')


			if (td.innerText !== '') {

				qtdFaltas = qtdFaltas + parseFloat(td.innerText)

			}

			tabelaBoletim = td.closest(".cabecalhoDisciplinas")


		})

		console.log(qtdFaltas)


	}

}, 5000);
