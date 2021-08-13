window.onload = function () {
  setTimeout(function () {
    var pato = document.getElementById("pato");
    pato.style.display = "flex";
  }, 5000);
};
var btnno = document.getElementById("btnno");
var btnyes = document.getElementById("btnyes");

btnno.addEventListener("mouseenter", () => {
  console.log("mouse entrando");
  var pos = coordenadas();
  btnno.style.top = `${pos.posy}px`;
  btnno.style.left = `${pos.posx}px`;
});

var coordenadas = () => {
  var ancho = screen.width - 100;
  var alto = screen.height - 200;
  var posx = Math.random() * (ancho - 0) + 0;
  var posy = Math.random() * (alto - 0) + 0;
  return { posx, posy };
};

btnyes.addEventListener("click", () => {
  if (confirm("Ya sabia que querias ser mi novia jeje :) Te amo ")) {
    var message = "Acepto Bebito Peshosho.";
    window.open(
      "https://wa.me/5491158559679/?text=" + encodeURI(message),
      "_blank"
    );
  }
});
