//  Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//      São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 9

console.log(score)

switch(score){
    case 1:
        console.log("Você foi horrivél")
    break;

    case 2: 
        console.log("Você foi péssimo")
    break;

    case 3: 
        console.log("Se esforce mais")
    break;

    case 4: 
        console.log("Rasóavel") 
    break;

    case 5: 
        console.log("OK")
    break;

    case 6: 
        console.log("Ainda pode melhorar") 
    break;

    case 7: 
        console.log("Muito bom") 
    break;

    case 8: 
        console.log("Ótimo") 
    break;

    case 9: 
        console.log("Excelente")
    break;

    case 10: 
        console.log("Perfeito")
    break;

    default:

    break;
}

