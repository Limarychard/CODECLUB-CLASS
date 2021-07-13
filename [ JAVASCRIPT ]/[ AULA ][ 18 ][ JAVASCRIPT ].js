/*  CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE 

if = SE
else = SE NÃO 
else if = mas se...

*/

const temperature = 40

if(temperature >= 36 && temperature <= 39) {
    console.log('A pessoa está saudável')
} else if (temperature > 39){
    console.log('A pessoa está com febre')
} else {
    console.log('A pessoa está com a temperatura muito baixa, procure um médico')
}