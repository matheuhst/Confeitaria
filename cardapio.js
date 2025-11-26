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
    img.scr = foto
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
    'https://media.istockphoto.com/id/1370520449/pt/foto/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=r3419R_hRAsXjrNulCRpdqp_z9FbuN7p1btwvSJvc0g='
)
