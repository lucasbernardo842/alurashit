//parametros de função
//            par1  par2
function soma(num1, num2){
    return num1 + num2;

}
console.log(soma(2 , 2))
console.log(soma(1500 , 231513))

// parâmetros x argumentos

// ordem dos parâmetros 

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Lucas", 19))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(515, 5))
console.log(multiplica(soma(5,3), soma(512,3)))