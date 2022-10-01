function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] Verifique os dados e tente novamente! ')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 11){
                // criança
                img.setAttribute('src', 'imagens/crianca-h(1).jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovem-h(1).jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-h(1).jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-h(1).jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 11){
                // criança
                img.setAttribute('src', 'imagens/crianca-m(1).jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovem-m(1).jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m(1).jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-m(1).jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
