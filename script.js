function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario = document.querySelector('input#ano')
    var resultado = document.querySelector('div#resultado')

    if (formulario.value.length == 0 || Number(formulario.value) > ano) {
        window.alert('[ERRO] Verifique o ano digitado e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(formulario.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero= 'Homem'
            if (idade >=0 && idade <10) {       
                img.setAttribute('src', 'homem1.png')
            }else if (idade <21) {
                img.setAttribute('src', 'homem2.png')
            } else if (idade <50){
                img.setAttribute('src', 'homem3.png')
            } else {
                img.setAttribute('src', 'homem4certo.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'  
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'mulher1.png')
            }else if (idade <21) {
                img.setAttribute('src', 'mulher2.png')
            } else if (idade <50){
                img.setAttribute('src', 'mulher3.png')
            } else {
                img.setAttribute('src', 'mulher4.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = ` Foi detectado ${genero} de ${idade} anos!`
        resultado.appendChild(img)
    } 

}