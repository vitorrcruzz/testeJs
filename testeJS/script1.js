//LISTA DE USUÁRIOS
let listaDeUsuarios = [
    {
      nomeCompleto: 'Wellington cidade',
      nomeUsuario: 'cidade',
      senhaUsuario: '123456',
    },
    {
      nomeCompleto: 'Tio Patinhas',
      nomeUsuario: 'patinhas',
      senhaUsuario: '123456',
    },
  ];
  //setando a lista de usuario para o local storage
  localStorage.setItem('listaUser', JSON.stringify(listaDeUsuarios));
  
  addEventListener('click', (evento) => {
    let userInput = document.querySelector('#idUser');
    let passInput = document.querySelector('#idPass');
  
    //MOSTRA SENHA NO OLHINHO
    if (
      evento.target.className == 'fa fa-eye' ||
      evento.target.className == 'fa fa-eye-slash'
    ) {
      evento.target.setAttribute('style', 'cursor:pointer');
      if (passInput.getAttribute('type') == 'password') {
        passInput.setAttribute('type', 'text');
        evento.target.setAttribute('class', 'fa fa-eye-slash');
      } else {
        evento.target.setAttribute('style', 'cursor:pointer');
        evento.target.setAttribute('class', 'fa fa-eye');
        passInput.setAttribute('type', 'password');
      }
    }
  
    //USUÁRIO QUE REPRESENTA OS DADOS QUE CHEGAM DO FORMULÁRIO.
    const usuarioLogado = {
      nomeUsuarioLogado: userInput.value,
      senhaUsuarioLogado: passInput.value,
    };
  
    //USUÁRIO QUE VAI REPRESENTAR OS DADOS VALIDADOS
    let usuarioValidado = {};
  
    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem('listaUser'));
  
    if (evento.target.id == 'btnSubmits') {
      try {
        listaDeUsuariosRecuperada.forEach((usuario) => {
          if (
            usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario &&
            usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario
          ) {
            usuarioValidado = usuario;
            throw 'USUÁRIO VALIDADO!';
          }
        });
  
        throw 'USUÁRIO OU SENHA INCORRETOS!';
      } catch (msg) {
        const msgStatus = document.querySelector('#info');
  
        if (msg == 'USUÁRIO VALIDADO!') {
          //Criar uma msg para o usuário
          msgStatus.setAttribute('style', 'color:#000');
          msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login com SUCESSO!!</strong></span>`;
  
          //Adicionar o objeto USUÁRIO-VALIDADO no LOCAL-STORAGE
          localStorage.setItem('user-validado', JSON.stringify(usuarioValidado));
  
          //CRIANDO A AUTENTICAÇÃO
          let token =
            Math.random().toString(16).substring(2) +
            Math.random().toString(16).substring(2);
          //Adicionando o token no LOCAL-STORAGE
          localStorage.setItem('user-token', token);
  
          //Redirect
          setTimeout(() => {
            window.location.href = 'index1.html';
          }, 3000);
        } else {
          alert('usuario ou senha inválidos...');
        }
      }
    }
  });