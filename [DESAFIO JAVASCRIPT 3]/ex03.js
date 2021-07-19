//  Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

const time = () => {

    let current_data = new Date();
    let day = current_data.getDate();
    let month = (current_data.getMonth() + 1);
    let year = current_data.getUTCFullYear();
    let hour = current_data.getHours();
    let minutes = current_data.getMinutes();
    let seconds = current_data.getSeconds();

    return console.log(`Agora são ${hour}:${minutes}:${seconds}`)
}

time()

