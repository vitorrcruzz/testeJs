//lista de usúarios
let listaUsuarios = [
    {
        nome: ' Wellington metropole',
        nomeUser: 'metrocity',
        senhaUser: '123456'
    },
    {
        nome: ' Wellington cidade',
        nomeUser: 'city',
        senhaUser: '12345678'
    }
];

//setar a lista de usúarios no local storage
localStorage.setItem("listaUser", JSON.stringify(listaUsuarios));

//evento do click
addEventListener('click', (evento)=>{
    let inputUser = document.querySelector('#idUser')
    let inputSenha = document.querySelector('#idPass')

    if(evento.target.className == 'fa fa-eye' || 
    evento.target.className == 'fa fa-eye-slash'){
        evento.target.setAttribute('style', 'cursor: pointer');
    }
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
        evento.target.setAttribute('class', 'fa fa-eye-slash');
    }
    else{
        evento.target.setAttribute('style', 'cursor: pointer' );
        
    }
});