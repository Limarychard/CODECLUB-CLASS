//  Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const time = () => {

    let current_data = new Date();
    let day = current_data.getDate();
    let month = (current_data.getMonth() + 1);
    let year = current_data.getUTCFullYear();
    let hour = current_data.getHours();
    let minutes = current_data.getMinutes();
    let seconds = current_data.getSeconds();

    return console.log(`Estamos em ${year}`)
}

time()