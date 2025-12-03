// Criando elementos HTML no JavaScript dinamicamente
function criarItemCardapio(titulo, descricao, foto){

    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'
    
    // add a classe

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    // add elementos na div mãe

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}

async function buscarBolos() {
  const url = "https://todolist-api-623t.onrender.com";

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
  console.log("Lista de bolos:", lista);
  for(const item of lista){
  criarItemCardapio(lista.titulo, lista.descricao, lista.foto);}
});

