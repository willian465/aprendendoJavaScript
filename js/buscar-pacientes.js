var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function (event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess");

  if (xhr.status == 200) {
  }
//
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText;

      var pacientesConvertidos = JSON.parse(resposta);

      pacientesConvertidos.forEach(function (paciente) {
        AdicionarPacienteTabela(paciente);
      });
    } else {
      console.log("Erro: " + xhr.status);
      console.log(xhr.responseText);
    }
  });

  xhr.send();
});
