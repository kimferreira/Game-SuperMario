mario = document.querySelector('.mario');
pipe = document.querySelector('.pipe');
textStart = document.querySelector('text-start')
audioStart = new Audio('./audio/audio_theme.mp3')
audioGameOver = new Audio('./audio/audio_gameover.mp3')

/*================ Função Start ===================*/ 

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

    mario.src = './assets/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';
     
    audioStart.play();
}

document.addEventListener('keydown', start);

/*================ Função Pulo ===================*/ 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500); 
}

document.addEventListener('keydown', jump);

/*================ Código para acabar o jogo ===================*/ 

const checkGameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


   
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './assets/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';


            document.getElementById("text-start").style.color = "black";
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";


            function stopAudioStart(){
                audioStart.pause();
                }stopAudioStart();

            audioGameOver.play();

            function stopAudio(){
                audioGameOver.pause();
                }setTimeout(stopAudio, 8000);

            clearInterval(checkGameOver);
         }
}, 10);