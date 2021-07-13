/* CONTROLE DE FLUXO - CONDICIONAIS - SWITH CASE 

switch (key) {
    case value:

        break;

    default: 
        break;
}

*/ 

const temperature = 36 

switch (temperature) {
    case 30: 
        console.log('A pessoa está com a temperatura MUITO abaixo do normal')
    break

    case 33: 
        console.log('A pessoa está com a temperatura abaixo do normal')
    break

    case 36: 
        console.log('A pessoa está com a temperatura normal')
    break

    case 39:
        console.log('A pessoa está com a temperatura MUITO alta')
    break

    default: 
        console.log('Temperatura não encontrada')
    break
}
