var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", function () {
  var inputNome = this.value;

  var pacientes = document.querySelectorAll(".paciente");

  if (inputNome.length > 0) {
    pacientes.forEach(function (paciente) {
      var nome = paciente.querySelector(".info-nome").textContent;

        var expressaoRegular = new RegExp(inputNome, "i")
      if (!expressaoRegular.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });

  } else {
    pacientes.forEach(function (x) {
      x.classList.remove("invisivel");
    });
  }
});

//