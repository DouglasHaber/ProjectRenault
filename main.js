
// Gravando os valores dos inputbox em variaveis 
// Tela 1
function CadastrarForne() {
    var empresa = document.getElementById("Campo1").value;
    var produto = document.getElementById("Campo2").value;
  
    console.log("Empresa: " + empresa);
    console.log("Produto: " + produto);
  }
  //Gravando os valores dos inputbox em variaveis
  // Tela 2
  function CadastrarFunci() {
    var nomeFunci = document.getElementById("NomeFunci").value;
    var cpfFunci = document.getElementById("CpfFunci").value;
    var sexoFunci = document.getElementById("SexoFunci").value;
    var endeFunci = document.getElementById("EndeFunci").value;
    var setorFunci = document.getElementById("SetorFunci").value;
    var adimFunci = document.getElementById("AdimFunci").value;
  
    console.log("Nome Funcionario: " + nomeFunci);
    console.log("CPF Funcionario: " + cpfFunci);
    console.log("Sexo Funcionario: " + sexoFunci);
    console.log("Endereço Funcionario: " + endeFunci);
    console.log("Setor Funcionario: " + setorFunci);
    console.log("Adimisão Funcionario: " + adimFunci);
  }
 // Exibir os dados gravados em outros inputbox
 function ExibirDados() {
    var nomeFunci = document.getElementById("NomeFunci").value;
    var cpfFunci = document.getElementById("CpfFunci").value;
    var sexoFunci = document.getElementById("SexoFunci").value;
    var endeFunci = document.getElementById("EndeFunci").value;
    var setorFunci = document.getElementById("SetorFunci").value;
    var adimFunci = document.getElementById("AdimFunci").value;

  document.getElementById("exibirNome").value = nomeFunci
  document.getElementById("exibirCpf").value = cpfFunci
  document.getElementById("exibirSexo").value = sexoFunci
  document.getElementById("exibirEndereco").value = endeFunci
  // Exibir o nome dos chefs dependendo do setor selecionado 
  if(setorFunci == "RH"){
    setorFunci = "Pamela"
  } else if(setorFunci == "Montagem")
    setorFunci = "Rodrigo"
    else if(setorFunci == "Supervisor")
    setorFunci = "Eduardo"
    else if(setorFunci == "Qualidade")
    setorFunci = "Andressa"
    else if(setorFunci == "Logistica")
    setorFunci = "Bernardo"
    else if(setorFunci == "Manutenção")
    setorFunci = "Marcelo"
    else if(setorFunci == "Vendas")
    setorFunci = "Antonio"
    else if(setorFunci == "Advocacia")
    setorFunci = "Beathris"
    document.getElementById("exibirChefe").value = setorFunci
  
  }

// Gravando os valores dos inputbox em variaveis 
// Tela 3

function CadastrarCompra(){

  var nomeCliente = document.getElementById("NomeCliente").value;
  var veiculoCliente = document.getElementById("selecao").value;
  var dataPedido = document.getElementById("DataPedido").value;

  console.log("Nome do cliente: " + nomeCliente);
  console.log("Veículo do cliente: " + veiculoCliente);
  console.log("Data do pedido: " + dataPedido);



}