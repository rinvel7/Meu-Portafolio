var nome = document.getElementById('nome');
var email = document.getElementById('email');
var telefone = document.getElementById('telefone');
error.style.color = 'red';

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajesError =[];

        if(nome.value === null || nome.value ===''){
            mensajesError.push('Digite seu nome');
        }

        if(email.value === null || email.value ===''){
            mensajesError.push('Digite seu E-mail');
        }

        if(telefone.value === null || telefone.value ===''){
            mensajesError.push('Digite seu Telefone');
        }

        error.innerHTML =  mensajesError.join(', ');
    });
       






