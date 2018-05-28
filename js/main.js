let iniciar = () =>{
    utilizarTypedJs();
    utilizarViewPortCheckerJs();
    colcoarDatosLenguajes();
    ponerCopyRight();
    smootScroll();
    galeria();
    botonSubir();

};
/*
     utiliznado libreria typed.js
   */
let utilizarTypedJs = () =>{

    let typed3 = new Typed('#typed2', {
        strings: ['Buenas mi nombre es <strong>Juan Carlos</strong> y soy <i>Desarrollador de Aplicaciones Web</i>'],
        typeSpeed: 50,
        backSpeed: 15,
        smartBackspace: true, // this is a default
        loop: false
    });
};
/*
       utilizando libreria viewportChecker.js
    */
let utilizarViewPortCheckerJs = () =>{

    $('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
    $('.perfil, .textoInfo').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });
    $('.experience').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 150
    });
    $('.enlacesSocial').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
    });
    $('.galeriaFiltro').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownLeft',
        offset: 100
    });
    $('.contenidoGaleria').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    $('.flechaMas').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 100
    });



};

/*
    colocar porcentajes lenguajes de programacion
 */

let colcoarDatosLenguajes = () =>{
    let colocarPorcentajeTexto = document.getElementsByClassName("lenguajePorcentaje");
    let porcentajes = ["60%", "50%","30%", "12%", "40%"];
    let aniadirEfectos = "progress-bar-striped progress-bar-animated";
    $.each(porcentajes, (i, val)=>{
       colocarPorcentajeTexto[i].textContent = val;
       $(".barraPorcentaje:eq("+i+")").css({
           width: val
       }).addClass(aniadirEfectos);
    });
};
/*
    smooth scrool
 */

let smootScroll = () =>{

    $('body').scrollspy({target: ".navbar", offset: 50});

    $("#menuNavegacion a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
    $(".flechaMas a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
};
let ponerCopyRight = () =>{
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    let enlacePagina =  "<a href='https://juancarlosvim.github.io/'> JuanCarlosVim</a>";
    $("#pCopyRight").html("&copy; "+anioActual+" Copyright: "+enlacePagina);
};

let galeria = () =>{

    $(window).on('load', ()=>{
        $('.galeria .contenidoGaleria').isotope({
            itemSelector: '.filtro-item'
        });
    });
    $(document).on('click', '.portfolio nav.galeriaFiltro ul li a', function() {
        let selector = $(this).attr('data-filter');
        $('.galeria .contenidoGaleria').isotope({ filter: selector });
        return false;
    });
};

let botonSubir = () =>{
    /* ScrollTop button click event */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
};
window.addEventListener("DOMContentLoaded", iniciar);