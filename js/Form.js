var botaoAdiconar = document.querySelector("#adicionar-paciente");
botaoAdiconar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  // Recuperando dados do form
  var paciente = ObterPacienteDoFormulario(form);

  var Erros = ValidarPaciente(paciente);
  var ul = document.querySelector("#mensagem-erro");
  if (Erros.length > 0) {
    form.reset();
    ul.innerHTML = "";
    Erros.forEach(function (erro) {
      ul.appendChild(montarLi(erro));
    });

    return;
  }
  AdicionarPacienteTabela(paciente);
  form.reset();
  ul.innerHTML = "";
});

function ObterPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function MontarTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(MontarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(MontarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(MontarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(MontarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(MontarTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function MontarTd(valor, classe) {
  var td = document.createElement("td");
  td.textContent = valor;
  td.classList.add(classe);
  
  return td;
}

function ValidarPaciente(paciente) {
  var listaErros = [];

  if (paciente.gordura.length == 0) {
    listaErros.push("A informação Gordura é inválida.");
  }

  if (paciente.nome.length == 0) {
    listaErros.push("A informação Nome é inválida.");
  }
  if (!ValidarPeso(paciente.peso) || paciente.peso.length == 0) {
    listaErros.push("A informação Peso é inválida.");
  }

  if (!ValidarAltura(paciente.altura) || paciente.peso.length == 0) {
    listaErros.push(" A informação Altura é inválida.");
  }

  return listaErros;
}

function montarLi(parametro) {
  var li = document.createElement("li");
  li.textContent = parametro;
  return li;
}

function AdicionarPacienteTabela(paciente) {
  var pacienteTr = MontarTr(paciente);

  // Recebendo o tr na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}


