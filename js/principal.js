
//variáveis
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprendendo Java Script";


var pacientes = document.querySelectorAll(".paciente"); //"#"" = select de ID

//calcula IMC de todos dos pacientes
for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso") //"."= seletor de class
	var peso = tdpeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");


	var alturaValida = true;
	var pesoValido = true;
	//valida peso e altura válido
	if (peso <= 0 || peso >= 1000) {
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
	//calcula IMC
	if (alturaValida && pesoValido) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}

}

var botaoAdiconar = document.querySelector ("#adicionar-paciente");
botaoAdiconar.addEventListener("click", function(event){
	event.preventDefault();
	var form = document.querySelector("#adiciona-paciente");
	console.log(form.peso.value);
});