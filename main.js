 let nomeUsuario = 'geovana';
 alert (nomeUsuario);
function soma(num1,num2){
    return num1+num2;
}
console.log(soma (1,2));

function areaQuadrado(lado){
    return lado**2
}
console.log(areaQuadrado(6))

let areaTriangulo=function(base,altura){
    return (base*altura)/2
}
console.log(areaTriangulo(10,20))

let mediaAritmetica1=parseInt(prompt('numero 1'));
let mediaAritmetica2=parseInt(prompt('numero 2'));
let mediaAritmetica3=parseInt(prompt('numero 3'));
function media(num1,num2,num3){
    return(num1+num2+num3)/3;
}
document.write(media(mediaAritmetica1,mediaAritmetica2,mediaAritmetica3));