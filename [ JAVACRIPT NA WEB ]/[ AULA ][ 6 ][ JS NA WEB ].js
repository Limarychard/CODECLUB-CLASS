const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

const clickButton = () =>{
    alert('O botão foi clicado')
}

input.addEventListener('focus', () => { 
    console.log('Dei um foco')
})

//.addEventListener ELE ESTÁ ADICIONANDO UMA FUNÇÃO QUE ESTA OUVINDO UM EVENTO

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click', clickButton)
// change toda vez que eu mudar uma opção ele vai disparar o evento para mim 
// focus quando eu der foco no meu input, ele vai fazer alguma coisa... 
// .value significa o valor 
// click toda vez que tiver um clique acontece algo