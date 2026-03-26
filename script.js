document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    let indiceAtual = 0;
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo')
=======

    let indiceAtual = 0;
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
    let intervaloAutoPlay;

    function atualizarSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');

<<<<<<< HEAD
            if(index === indiceAtual){
                slide.classList.add('active');
            }

            else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
                slide.classList.add('prev');
            }

=======
            if (index === indiceAtual) {
                slide.classList.add('active');
            } 
            else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
                slide.classList.add('prev');
            } 
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
            else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual + 1)) {
                slide.classList.add('next');
            }
        });
    }

    function iniciarAutoPlay() {
        intervaloAutoPlay = setInterval(() => {
<<<<<<< HEAD
            indiceAtual = (indiceAtual < slides.length -1) ? indiceAtual + 1 : 0;
=======
            indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
            atualizarSlides();
        }, 5000);
    }

    btnAnterior.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
<<<<<<< HEAD
        indiceAtual = (indiceAtual > 0) ?  indiceAtual - 1 : slides.length - 1;
=======
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
        atualizarSlides();
        iniciarAutoPlay();
    });

    btnProximo.addEventListener('click', () => {
<<<<<<< HEAD
        clearInterval(iniciarAutoPlay);
=======
        clearInterval(intervaloAutoPlay);
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
        indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
        atualizarSlides();
        iniciarAutoPlay();
    });

    atualizarSlides();
    iniciarAutoPlay();
<<<<<<< HEAD
});
=======

});
>>>>>>> 6b64803de87bcde1558e5d6f73891e1703f523eb
