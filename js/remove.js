var pacientesParaRemover = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

// target é o alvo, quem foi clicado
// parentNode é o pai de quem foi clicado
// setTimeout aguarda em milisegundos
