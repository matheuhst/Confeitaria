// Criando elementos HTML no JavaScript dinamicamente
function criarItemCardapio(titulo, descricao, preco, foto){

    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const h3Preco = document.createElement('h3')
    h3Preco.textContent = preco
    
    // add a classe

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    // add elementos na div mãe

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)
    divItemCardapio.appendChild(h3Preco)

    divC.appendChild(divItemCardapio)
}

async function buscarBolos() {
  const url = "https://confeitaria-api-0ifv.onrender.com/cardapio";

  try {
    const response = await fetch(url, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dados = await response.json(); // Converte para JSON
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar bolos:", erro);
    return null;
  }
}

buscarBolos().then(lista => {
  for(let i = 0; i < lista.length; i++){
    criarItemCardapio(lista[i].nome, lista[i].descricao, lista[i].preco, lista[i].foto);
}
});

