/* OPERADORES LÓGICOS //       PARA FAZER O SINAL | -> é preciso Alt + 124 NO Keypad
 
&&  -> E    // FILHO OBEDIENTE              TENDO UM FALSE O RESULTADO SERÁ FALSE
    true && true = true
    true && false = false 
    false && false = true

||  -> Ou   // FILHO ESPERTINHO         TENDO UM TRUE O RESULTADO SERÁ TRUE
    true  || true = true
    true  || false = true
    false  || false = false 

!   -> Negação // FILHO DO CONTRA / REBELDE
    !true = false
    !false = true 

*/

console.log(true && false)

console.log(true || false || false || false)

console.log(!false)

/*   O que é necessário para alguém fazer uma transferência bancária ?  // Aqui é uma lógica E 
    
    - Ter saldo em conta 
    - Minha conta não esteja bloqueada
    - A conta destino precisa estar correta

    O que é necessário para um celular desbloquear a tela ? // Aqui nós usamos uma lógica OU

    - Digitar a senha correta 
    - Fazer o reconhecimento por digital 
    - Fazer o reconhecimento facial 

*/

console.log( !(!(true & true & true) && !(false && true || true)))
