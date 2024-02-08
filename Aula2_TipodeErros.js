function calcularSquadRoot(radicand) {
    console.log('O radicante é :', radicand); 
 return (radicand) ** (1/2); 

}
function calculetePytgoras(side1, side2 ) {
    console.log(
        'Os tamanhos de catetos do meu triangulo sao :', 
    side1,
    side2
    ); 

    const sum  = side1 ** 2 + side2 ** 2;
    console.log('O valor da variavel sum é:  ', sum); 

    return  calcularSquadRoot(sum); 

}
console.log(`A hipotenusa de um angulo de 3 e 4 lados ${calculetePytgoras(3, 4)})` 

);