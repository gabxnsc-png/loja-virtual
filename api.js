
async function buscarProdutos() {
    const areaProdutos = document.getElementById("produtos-api");

    areaProdutos.innerHTML = "<p>Carregando produtos...</p>";

    try {
        const resposta = await fetch(
            "https://fakestoreapi.com/products?limit=6"
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os produtos.");
        }

        const produtos = await resposta.json();

        areaProdutos.innerHTML = "";

        produtos.forEach(produto => {
            const preco = produto.price * 5;

            const coluna = document.createElement("div");
            coluna.className = "col-md-4 mb-4";

            const card = document.createElement("div");
            card.className = "card h-100";

            const imagem = document.createElement("img");
            imagem.src = produto.image;
            imagem.alt = produto.title;
            imagem.className = "card-img-top";
            imagem.style.objectFit = "contain";
            imagem.style.padding = "20px";

            const corpo = document.createElement("div");
            corpo.className = "card-body d-flex flex-column";

            const titulo = document.createElement("h5");
            titulo.textContent = produto.title;

            const valor = document.createElement("p");
            valor.className = "preco";
            valor.textContent = preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

            const botao = document.createElement("button");
            botao.className = "btn btn-primary mt-auto";
            botao.textContent = "Adicionar ao Carrinho";

            botao.addEventListener("click", () => {
                adicionarCarrinho(produto.title, preco);
            });

            corpo.appendChild(titulo);
            corpo.appendChild(valor);
            corpo.appendChild(botao);

            card.appendChild(imagem);
            card.appendChild(corpo);
            coluna.appendChild(card);

            areaProdutos.appendChild(coluna);
        });

    } catch (erro) {
        areaProdutos.innerHTML =
            "<p>Erro ao carregar produtos. Verifique sua internet.</p>";

        console.error(erro);
    }
}

buscarProdutos();
