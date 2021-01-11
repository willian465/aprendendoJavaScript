var botaoAdiconar = document.querySelector("#adicionar-paciente");
botaoAdiconar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    // Recuperando dados do form
    var paciente = obterPacienteDoFormulario(form);
    console.log(paciente);


    // Criando os td e tr do form
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // Atribuindo variáveis
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso, altura);

    // Recebendo as td pelo tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Recebendo o tr na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
});

function obterPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente; //deu bom demais
   
} 