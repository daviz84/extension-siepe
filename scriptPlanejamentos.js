let iframe = document.getElementsByClassName("LimitadorConteudo")[0]

observer = new MutationObserver((mutations) => {

    if (document.getElementById("divPlanejamentoBimestral")) {

        let corpoPlanejamento = document.querySelector('#divPlanejamentoBimestral .ClearFix')
        let tabelaAprovacao = document.getElementsByClassName('tabelaAprovacao')[0]

        if(!document.querySelector('#divPlanejamentoBimestral .ClearFix > .barraBotoesInferior')){
        
            let barraBotoesInferior = document.querySelector('#ListarPlanejamentoBimestral > .barraBotoesInferior')
            barraBotoesInferior.style = ""
            corpoPlanejamento.appendChild(barraBotoesInferior)
        
        } else {

            corpoPlanejamento.removeChild(document.querySelector('#divPlanejamentoBimestral .ClearFix > .barraBotoesInferior'))
            let barraBotoesInferior = document.querySelector('#ListarPlanejamentoBimestral > .barraBotoesInferior')
            barraBotoesInferior.style = ""
            corpoPlanejamento.appendChild(barraBotoesInferior)

        
        }

        corpoPlanejamento.appendChild(tabelaAprovacao)

        observer.disconnect()
        observer.observe(iframe, { attributes: true, childList: true, subtree: true })

    }




})

observer.observe(iframe, { attributes: true, childList: true, subtree: true })



