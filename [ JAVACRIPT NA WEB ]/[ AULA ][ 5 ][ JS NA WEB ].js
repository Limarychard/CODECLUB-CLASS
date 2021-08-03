// EVENTOS 

const element = document.querySelector('button')

/* const myFunction = () => {
    alert('Fui pressionado')
}  // ESSA É UMA FORMA DE FAZER COM QUE UM EVNETO ACONTEÇA */

element.onclick = () => {
    alert('Fui pressionado')
}


const elementInput = document.querySelector('input')

elementInput.onkeypress = (event) => {
    console.log(event.target.value)
}

// .key CONSIGO PEGAR TODAS AS TECLAS QUE FORAM DIGITADAS 

// .target.value CONSIGO PEGAR O VALOR DO MEU INPUT 