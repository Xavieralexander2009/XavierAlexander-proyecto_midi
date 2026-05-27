function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) { //un ciclo en que contador 0 es donde va decir donde inicia contador<9 hasta donde va a seguir y al final como es q va a aumentar o seguir el ciclo
    
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){  //*inicia funcion anónima
        playSonido(idAudio);
    };
    tecla.onkeydown  = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}


