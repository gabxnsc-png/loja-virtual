
function mostrarPagina(pagina) {
    const secoes = document.querySelectorAll(
        "#inicio, #produtos, #produtos-api-secao, #carrinho"
    );

    secoes.forEach(secao => {
        secao.style.display = "none";
    });

    if (pagina === "inicio") {
        document.getElementById("inicio").style.display = "block";
    }

    if (pagina === "produtos") {
        document.getElementById("produtos").style.display = "block";
        document.getElementById("produtos-api-secao").style.display = "block";
    }

    if (pagina === "carrinho") {
        document.getElementById("carrinho").style.display = "block";
    }

    window.scrollTo(0, 0);
}
