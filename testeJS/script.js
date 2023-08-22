let listaDados = [];

// OBJETO  BASE(CONSTRUTOR) molde da classe
function Campos(txtUser, txtEmail, txtSenha) {
  this.txtUser = txtUser;
  this.txtEmail = txtEmail;
  this.txtSenha = txtSenha;
}
// BOTÃO QUE VAI DISPARAR
const btnenviar = document.querySelector('#btnSubmit');

// EVENTO DO CLICK
btnenviar.addEventListener('click', () => {
  const inputUser = document.querySelector("#txtUser"); // INPUT 
  const inputEmail = document.querySelector("#txtEmail"); // INPUT 
  const inputSenha = document.querySelector("#txtSenha"); // INPUT 

  let info = new Campos(inputUser.value, inputEmail.value, inputSenha.value); // INSTANCIA DO OBJETO RECEBENDO O VALOR DO BOTÃO
 listaDados.push(info);// LISTA DE USUARIOS RECEBENDO O OBJETO
  localStorage.setItem("dados", JSON.stringify(listaDados)); //LOCAL STORAGE ARMAZENANDO A LISTA DE USUARIOS CONVERTENDO PARA JSON

  console.log(info)
});
