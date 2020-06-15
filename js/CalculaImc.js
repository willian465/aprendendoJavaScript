
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprendendo Java Script";


var pacientes = document.querySelectorAll(".paciente"); //"#"" = select de ID

//calculando IMC de todos dos pacientes
for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso") //"."= seletor de class
	var peso = tdpeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");


	var alturaValida = true;
	var pesoValido = true;

	//validando o peso e altura válido
	if (peso <= 0 || peso >= 500) {
		console.log("Peso Inválido!");
		pesoValido = false;
		tdImc.textContent = 'Peso Inválido';
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		console.log("Altura Inválida!");
		alturaValida = false;
		tdImc.textContent = 'Peso Inválido';
		paciente.classList.add("paciente-invalido");
	}
	//calculando o IMC
	if (alturaValida && pesoValido) {
		var imc = calcularImc(peso, altura);
		tdImc.textContent = imc;
	}
}
function calcularImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

