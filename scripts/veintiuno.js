let start = document.getElementById("start") ;
let descrip = document.getElementById("descripcion") ;
let tab = document.getElementById("tablero");
let j1nombre = tab.firstElementChild.firstElementChild;
let j2nombre = tab.lastElementChild.firstElementChild;
let oculta1 = tab.firstElementChild.firstElementChild.nextElementSibling;
let abierta1 = tab.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
let oculta2 = tab.lastElementChild.firstElementChild.nextElementSibling;
let abierta2 = tab.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;

let tablero = new Object();
tablero.jugador1;
tablero.jugador2;



function clickStart() {    
    console.log("ok",);
    descrip.textContent = "";
    j1nombre.textContent = "Jugador 1";
    j2nombre.textContent = "Jugador 2";
    oculta1.textContent = "Carta oculta"
    abierta1.textContent = "Carta abierta";
    oculta2.textContent = "Carta oculta"
    abierta2.textContent = "Carta abierta";
}

start.addEventListener("click",clickStart);

