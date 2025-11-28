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

criarItemCardapio(
    'Bolo de Chocolate',
    'Um clássico irresistível com camadas de chocolate',
    'https://pt.petitchef.com/imgupl/recipe/bolo-de-chocolate-humido-e-fofinho--lg-454177p704082.webp'
)
