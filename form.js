//******************************//**Formulario**************************************
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

      
//**************************** slider - tecologia*****************************
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
    
        $(document).ready(function(){
            var theLetters = "#%&^+=-"; //You can customize what letters it will cycle through
            var ctnt = "FRONTEND"; // Your text goes here
            var speed = 50; // ms per frame
            var increment = 8; // frames per step. Must be >2
            
                
            var clen = ctnt.length;       
            var si = 0;
            var stri = 0;
            var block = "";
            var fixed = "";
            //Call self x times, whole function wrapped in setTimeout
            (function rustle (i) {          
            setTimeout(function () {
              if (--i){rustle(i);}
              nextFrame(i);
              si = si + 1;        
            }, speed);
            })(clen*increment+1); 
            function nextFrame(pos){
              for (var i=0; i<clen-stri; i++) {
                //Random number
                var num = Math.floor(theLetters.length * Math.random());
                //Get random letter
                var letter = theLetters.charAt(num);
                block = block + letter;
              }
              if (si == (increment-1)){
                stri++;
              }
              if (si == increment){
              // Add a letter; 
              // every speed*10 ms
              fixed = fixed +  ctnt.charAt(stri - 1);
              si = 0;
              }
              $(".letter-effect").html(fixed + block);
              block = "";
            }
            });
      






