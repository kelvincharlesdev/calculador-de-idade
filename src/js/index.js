let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let anoNascimento = document.getElementById("ano");

const btnCalcular = document.getElementById("btn-calcular");

const dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtual = dataAtual.getDate();


btnCalcular.addEventListener("click", () => {

  inputDia();
  inputMes();
  inputAno();
  
});

// Validações do campo de dias
function inputDia() {
  let diaValue = dia.value;

  if (diaValue === "") {
    errorInput(dia, "Campo vazio");
  } else if (diaValue < 1 || diaValue > 31) {
    errorInput(dia, "numero invalid");
  } else {
    errorInput(dia, "");
    const inputSelecionado = dia.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}

// Validações do campo de meses
function inputMes() {
  let mesValue = mes.value;

  if (mesValue === "") {
    errorInput(mes, "Campo Vazio");
  } else if (mesValue < 1 || mesValue > 12) {
    errorInput(mes, "Mês invalido");
  } else {
    errorInput(mes, "");
    const inputSelecionado = mes.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}

// Validações do campo de anos
function inputAno() {
  let anoValue = anoNascimento.value;

  if (anoValue === "") {
    errorInput(ano, "Campo vazio");
  } else if (anoValue > anoAtual) {
    errorInput(ano, "Ano no futuro");
  } else {
    errorInput(ano, "");
    const inputSelecionado = ano.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}

// Validações dos erros dos input
function errorInput(input, message) {
  const inputSelecionado = input.parentElement;

  const textMessage = inputSelecionado.querySelector("p");

  textMessage.innerText = message;

  inputSelecionado.className = "form-date error";
}

// Calculo dos anos, meses e dias do usuario
function idadeEmAnosMesDias() {
  let anoValue = anoNascimento.value;
  let mesValue = mes.value;
  let diaValue = dia.value;

  // Cria um objeto Date com a data de nascimento do usuário
  const dataNascimento = new Date(`${anoValue}-${mesValue}-${diaValue}`);

  // Calcula a diferença entre as datas em milissegundos
  const diff = new Date() - dataNascimento;

  // Converte a diferença em anos, meses e dias
  const idadeAnos = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  const idadeMeses = Math.floor(
    (diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
  );
  const idadeDias = Math.floor(
    (diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // exibe o resultado na tela pro usuario
  const idadeAno = document.getElementById("qtd-anos");
  const idadeMes = document.getElementById("qtd-meses");
  const idadeDia = document.getElementById("qtd-dias");

  idadeAno.innerText = idadeAnos;
  idadeMes.innerText = idadeMeses;
  idadeDia.innerText = idadeDias;
}
