

/*Agregando colores */
$("h2").click(function () {
    $(this).css({
        "color": "red",
        "font-size": "2em"
    });
});

/*Escondiendo párrafos */
$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).hide("slow");
    });
});


/*Smooth Scroll */
$(document).ready(function () {
    // Manejar clics en los enlaces de la barra de navegación
    $('a.nav-link').on('click', function (event) {
        // Asegurarse de que this.hash tenga un valor antes de sobrescribir el comportamiento predeterminado
        if (this.hash !== "") {
            // Prevenir el comportamiento predeterminado del clic del enlace
            event.preventDefault();

            // Guardar el hash
            var hash = this.hash;

            // Usar jQuery para animar el desplazamiento suave
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Agregar hash (#) a la URL cuando haya terminado de desplazarse (comportamiento predeterminado del clic)
                window.location.hash = hash;
            });
        } // Fin del if
    });
});

