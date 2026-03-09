// Pega o parâmetro da URL
const parametros = new URLSearchParams(window.location.search);
const item = parametros.get("item");

// Banco de dados fake
const produtos = {
    chocolate: {
        nome: "Bolo de Chocolate",
        descricao: "Um clássico irresistível com camadas de chocolate.",
        imagem: "https://static.itdg.com.br/images/640-400/81db64065b43b8554888bff9a6d1eb8b/73267-195930-original.jpg",
        preco: "R$ 32,00",
        ingredientes: "Farinha de trigo, açúcar, chocolate em pó ou cacau em pó, ovos, leite, manteiga ou óleo, fermento químico em pó, sal, essência de baunilha"
    },
    morango: {
        nome: "Bolo de Morango",
        descricao: "Fresco e frutado, perfeito para qualquer ocasião.",
        imagem: "https://tudobolos.com.br/wp-content/uploads/2024/09/irresistivel-bolo-de-morango-com-chantilly.webp",
        preco: "R$ 30,00",
        ingredientes: "farinha de trigo, açúcar, ovos, leite, manteiga ou óleo, fermento químico em pó, morangos, creme de leite, leite condensado, essência de baunilha"
    },
    cenoura: {
        nome: "Bolo de Cenoura",
        descricao: "Delícia tradicional com cobertura de chocolate.",
        imagem: "https://imagem.band.com.br/novahome/055caa6d-7528-44bc-ac32-3add84bdc0b0.jpg",
        preco: "R$ 25,00",
        ingredientes: "Cenoura, farinha de trigo, açúcar, ovos, óleo, fermento químico em pó, chocolate em pó, manteiga, leite, açúcar para a cobertura"
    },
    maracuja: {
        nome: "Bolo de Maracujá",
        descricao: "Azedo do jeito que qualquer fã de maracujá adora. Experimente!",
        imagem: "https://truffle-assets.tastemadecontent.net/85b033e6-bolo-mousse-de-maracuja_l_thumb.jpg",
        preco: "R$ 30,00",
        ingredientes: "Farinha de trigo, açúcar, ovos, leite, manteiga ou óleo, fermento químico em pó, polpa de maracujá, leite condensado, creme de leite"
    },
    limao: {
        nome: "Bolo de Limão",
        descricao: "Melhor opção para sentir o que é azedo e doce na medida certa!",
        imagem: "https://i.ytimg.com/vi/iS6RhbjBdVY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAR7pEyLMbfJJ1cnbl4DfM9J2toOw",
        preco: "R$ 30,00",
        ingredientes: "Farinha de trigo, açúcar, ovos, leite, manteiga ou óleo, fermento químico em pó, limão, leite condensado, açúcar de confeiteiro"
    },
    laranja: {
        nome: "Bolo de Laranja",
        descricao: "Um sabor clássico, agora em sabor doce e macio!",
        imagem: "https://www.sococo.com.br/app/uploads/2022/01/shutterstock_98381816-1.jpg",
        preco: "R$ 20,00",
        ingredientes: "Farinha de trigo, açúcar, ovos, suco de laranja, óleo ou manteiga, fermento químico em pó, raspas de laranja, açúcar de confeiteiro"
    },
        ninho: {
        nome: "Bolo de Lete Ninho",
        descricao: "O perfeito para ocasiões especiais!",
        imagem: "https://teamodoce.com.br/wp-content/uploads/2025/07/Bolo-de-Leite-Ninho-de-Liquidificador.webp",
        preco: "R$ 45,00",
        ingredientes: "Leite ninho, farinha de trigo, açúcar, ovos, leite, manteiga ou óleo, fermento químico em pó, leite condensado, creme de leite, essência de baunilha"
    },
};

// Se existir o item
if (produtos[item]) {
    document.getElementById("nomeProduto").textContent = produtos[item].nome;
    document.getElementById("descricaoProduto").textContent = produtos[item].descricao;
    document.getElementById("imagemProduto").src = produtos[item].imagem;
    document.getElementById("precoProduto").textContent = produtos[item].preco;
    document.getElementById("ingredientesProduto").textContent = produtos[item].ingredientes;
}
