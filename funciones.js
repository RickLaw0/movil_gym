$("#icono_menu").click(function () {
    $("#caja_menu_jb").toggleClass();
  });



  $(function () {
    $(".rslides").responsiveSlides();
  });

  // Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});