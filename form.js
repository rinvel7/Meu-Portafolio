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

    var link1 = document.getElementById('.trassi')
    var link2 = document.getElementById('.ire')

    function urlTrassi() {
        var link1 = document.getElementById('.trassi')
      }

      
        /* slider - tecologia   */
        $(document).ready(function(){
            $('.slide-track').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        });
    

      






