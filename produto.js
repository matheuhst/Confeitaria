// Pega o parâmetro da URL
const parametros = new URLSearchParams(window.location.search);
const item = parametros.get("item");

// Banco de dados fake
const produtos = {
    chocolate: {
        nome: "Bolo de Chocolate",
        descricao: "Um clássico irresistível com camadas de chocolate.",
        imagem: "https://pt.petitchef.com/imgupl/recipe/bolo-de-chocolate-humido-e-fofinho--lg-454177p704082.webp"
    },
    morango: {
        nome: "Bolo de Morango",
        descricao: "Fresco e frutado, perfeito para qualquer ocasião.",
        imagem: "https://tudobolos.com.br/wp-content/uploads/2024/09/irresistivel-bolo-de-morango-com-chantilly.webp"
    },
    cenoura: {
        nome: "Bolo de Cenoura",
        descricao: "Delícia tradicional com cobertura de chocolate.",
        imagem: "https://imagem.band.com.br/novahome/055caa6d-7528-44bc-ac32-3add84bdc0b0.jpg"
    }
};

// Se existir o item
if (produtos[item]) {
    document.getElementById("nomeProduto").textContent = produtos[item].nome;
    document.getElementById("descricaoProduto").textContent = produtos[item].descricao;
    document.getElementById("imagemProduto").src = produtos[item].imagem;
}