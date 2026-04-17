let body = document.querySelector("body")
let botao = document.createElement("input")
let peAreaAlt = document.querySelector("#cont-botoes")

botao.type = "button"
botao.value = "COPIAR"
botao.style.position = "relative"
botao.style.zIndex = "10"
botao.classList.add("p-button")
botao.classList.add("p-component")
botao.classList.add("p-button-primary")

if(peAreaAlt) peAreaAlt.append(botao)



// ----- X -------

let data = ""
let nomeTenis = ""
let valorTenis = ""
let vendedor = ""
let cnpj = ""
let chaveAcesso = ""
let nomeComprador = ""
let cpfComprador = ""

body.appendChild(botao)

botao.onclick = async function () {

    if (!document.URL.includes("meutenis.pe.gov.br")) {

        if (document.URL.includes(".pe.gov.br")) {

            data = document.querySelectorAll("li")[0].textContent.split(" ")[8];
            nomeTenis = document.querySelectorAll(".txtTit")[0].textContent;
            valorTenis = document.querySelectorAll(".totalNumb")[1].textContent;
            vendedor = document.querySelector(".txtTopo").textContent;
            cnpj = document.querySelector(".text").textContent.split("\t")[22];
            chaveAcesso = document.querySelectorAll(".ui-li-static")[1].textContent.split(":")[2];
            nomeComprador = document.querySelectorAll("li")[2].textContent.split(" - ")[1];
            cpfComprador = document.querySelectorAll("li")[2].textContent.split(" - ")[0];

        } else if (document.URL.includes(".ce.gov.br")) {

            data = document.querySelectorAll("li")[0].textContent.split(" ")[6];
            nomeTenis = document.querySelectorAll(".txtTit")[0].textContent;
            valorTenis = document.querySelectorAll(".txtTit")[1].querySelector("span").textContent;
            vendedor = document.querySelector(".txtTopo").textContent;
            cnpj = document.querySelector(".text").textContent.split(":")[1];
            chaveAcesso = document.querySelectorAll(".ui-li-static")[1].textContent.split(":")[2];
            nomeComprador = document.querySelectorAll("li")[3].textContent.split(": ")[1]
            cpfComprador = document.querySelectorAll("li")[2].textContent.split(": ")[1]

        } else {

            data = document.querySelectorAll("span")[18].textContent.split(" ")[0]
            nomeTenis = document.querySelectorAll("#Prod span")[1].textContent
            valorTenis = document.querySelectorAll("span")[20].textContent
            vendedor = document.querySelectorAll("span")[22].textContent
            cnpj = document.querySelectorAll("span")[21].textContent
            chaveAcesso = document.querySelectorAll("span")[12].textContent
            nomeComprador = document.querySelectorAll("span")[26].textContent
            cpfComprador = document.querySelectorAll("span")[25].textContent

        }

        // Monta o texto que você quer copiar (ex: valores separados por tabulação para Excel)
        let textoParaCopiar = [
            data,
            nomeTenis,
            valorTenis,
            vendedor,
            cnpj,
            chaveAcesso,
            nomeComprador,
            cpfComprador
        ]

        if (navigator.clipboard) {

            navigator.clipboard.writeText(JSON.stringify(textoParaCopiar)).then(() => {
                console.log("Dados copiados com sucesso!");
                botao.value = "COPIADO!";
                setTimeout(() => botao.value = "COPIAR", 2000);
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
                alert("Erro ao copiar. Verifique o console.");
            });

        } else {

            console.log(JSON.stringify(textoParaCopiar))
            copiarNoHTTP(JSON.stringify(textoParaCopiar))

        }

        console.log([
            data,
            nomeTenis,
            valorTenis,
            vendedor,
            cnpj,
            chaveAcesso,
            nomeComprador,
            cpfComprador
        ])

    } else {

        let dadosNota = JSON.parse(await pegarTexto())

        let buyDate = document.querySelector('input[name="buyDate"]'); // ou o seletor específico
        buyDate.value = dadosNota[0];
        buyDate.dispatchEvent(new Event('input', { bubbles: true }));

        let shoesName = document.querySelector('input[name="shoesName"]'); // ou o seletor específico
        shoesName.value = dadosNota[1].slice(0, 50)

        shoesName.dispatchEvent(new Event('input', { bubbles: true }));

        // CAMPO COM MÁSCARA - USA FOCO PARA AJUSTAR

        let shoesValor = document.querySelector('input[placeholder="R$ 139,90"]') 

        if(shoesValor == null) shoesValor = document.querySelector('input[placeholder="R$ 150,00"]')

        shoesValor.focus()
        shoesValor.value = dadosNota[2]
        shoesValor.dispatchEvent(new Event('input', { bubbles: true }));
        shoesValor.blur()

        let storeName = null
        storeName = document.querySelector('input[name="storeName"]'); // ou o seletor específico
        storeName.value = dadosNota[3]
        storeName.dispatchEvent(new Event('input', { bubbles: true }));

        let storeCnpj = document.querySelector('input[name="storeCnpj"]'); // ou o seletor específico
        storeCnpj.value = dadosNota[4]
        storeCnpj.dispatchEvent(new Event('input', { bubbles: true }));

        let accessKey = document.querySelector('input[name="accessKey"]'); // ou o seletor específico
        accessKey.value = dadosNota[5]
        accessKey.dispatchEvent(new Event('input', { bubbles: true }));

        let buyerName = document.querySelector('input[name="buyerName"]'); // ou o seletor específico
        buyerName.value = dadosNota[6]
        buyerName.dispatchEvent(new Event('input', { bubbles: true }));

        let buyerCpf = document.querySelector('input[name="buyerCpf"]'); // ou o seletor específico
        buyerCpf.value = dadosNota[7]
        buyerCpf.dispatchEvent(new Event('input', { bubbles: true }));





        // O segredo está aqui: disparar o evento que o v-model escuta




    }


};

async function pegarTexto() {
    try {
        const texto = await navigator.clipboard.readText();
        return texto
    } catch (err) {
        console.error('Falha ao ler a área de transferência:', err);
    }
}

function copiarNoHTTP(texto) {
    // Cria um elemento textarea temporário
    const textArea = document.createElement("textarea");
    textArea.value = texto;

    // Garante que o elemento não seja visível mas esteja no DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);

    // Seleciona e copia o conteúdo
    textArea.focus();
    textArea.select();

    try {
        const sucesso = document.execCommand('copy');
        if (sucesso) {
            console.log('Copiado no HTTP!');
        }
    } catch (err) {
        console.error('Erro ao copiar no HTTP', err);
    }

    // Remove o elemento temporário
    document.body.removeChild(textArea);
}