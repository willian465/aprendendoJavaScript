var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function (event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;

    var pacientesConvertidos = JSON.parse(resposta);

    pacientesConvertidos.forEach(function (paciente) {
      AdicionarPacienteTabela(paciente);
    });
  });

  xhr.send();
});
