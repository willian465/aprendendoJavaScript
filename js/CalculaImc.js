var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprendendo Java Script";

var pacientes = document.querySelectorAll(".paciente"); //"#"" = select de ID

//calculando IMC de todos dos pacientes

pacientes.forEach(function (paciente) {
  var tdpeso = paciente.querySelector(".info-peso"); //"."= seletor de class
  var peso = tdpeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var alturaValida = ValidarAltura(altura);
  var pesoValido = ValidarPeso(peso);

  //validando o peso e altura válido
  if (!alturaValida) {
    console.log("Peso Inválido!");
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!pesoValido) {
    console.log("Altura Inválida!");
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }
  var imc = calcularImc(peso, altura);
  tdImc.textContent = imc;
});

function ValidarPeso(peso) {
  if (peso >= 0 && peso < 200) {
    return true;
  } else {
    return false;
  }
}

function ValidarAltura(altura) {
  if (altura >= 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}

//calculando o IMC
function calcularImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
