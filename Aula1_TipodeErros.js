function calcularSquadRoot(radicand) {
 return (radicand) ** (1/2); 

}
function calculetePytgoras(side1, side2 ){
    const sum  = side1 ** 2 + side2 ** 2;
    return  calcularSquadRoot(sum); 

}
console.log(`A hipotenusa de um angulo de 3 e 4 lados ${calculetePytgoras(3, 4)})` 

); 