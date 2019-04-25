// Comentário Simples

/*
Comentário de Múltiplas Linhas

*/

// Variaveis
/*var mensagem = "Olá, Mundo!!!";

alert(mensagem);

// Operações Matematicas
var a = 2;
var b = 3;
var c = "Olá Mundo!"

var soma = 5 + 5;
var sub = 3 - 5;
var mult = 7 * 7;
var div = 8 / 4;

alert(soma);
alert(sub);
alert(mult);
alert(div);
*/

// ========================================================================================================== //

// Estruturas Condicionais
/*if (b%2 == 1){
alert("Número Impar");
}

// Estruturas Condicionais - else
if (c%2 == 1){
	alert("Número Impar");
}

else if (c%2 == 0) {
	alert("Número Par");
}

else {
	alert("Valor Invalido");
}
*/

// ========================================================================================================== //

// Estrutura de Repetição

// While
/*var i = 0;

/while (i < 3){
	alert(i);
	
	i = i+1;
}
*/

// ========================================================================================================== //

// For
/* var j = 0;

 for ( j < 3) {
 	alert(j);
 	
 	j = j+1;
 }

ou

 for (var j = 0; j < 3; j++){
 	alert(j);
}

*/

// ========================================================================================================== //

// Tipos de Dados
/*var numero = 10;
var decimal = 2.5;
var texto = "Olá, Mundo!";
var lista = ["Laranja", "Banana", "Maça"];

alert(lista);

*/

// ========================================================================================================== //

// Array
/* var numero = 10;
 var decimal = 2.5;
 var texto = "Olá, Mundo!";
 var lista = ["Laranja", "Banana", "Maça", 123];

 for (i in lista) {
 	alert(lista[i]);
 }
*/

// ========================================================================================================== //

// Console.log
//console.log("Olá, Mundo!");

// Funções
/*function soma(a, b) {
	console.log(a+b);
}

soma(2, 3);

function subtracao(a, b) {
	return a-b;
}

var s = subtracao(7, 3);
console.log(s);

function multiplicacao(a, b) {
	return a*b;
}

console.log(multiplicacao(5,5));
*/

// ========================================================================================================== //

// Eventos

/*function mensagem(nome) {
	alert("O botão foi clicado!!!!"+nome);
}
*/

// ========================================================================================================== //

// DOM
/*function mudaCor(cor) {
	var elemento = document.getElementById("mensagem");
	elemento.style.color = cor;
}

*/

// Validação de Formulário
function valida() {
	var nome = document.getElementById('nome');
	if (nome.value == '') {
		alert("Campo nome não pode ser enviado em branco");
	}
	else {
		alert("Nenhum problema foi encontrado. Seu formulário foi enviado...");
	}
}













