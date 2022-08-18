let start = document.getElementById("start") ;
let tab = document.getElementById("tablero") ;
let j1nombre = tab.firstElementChild.firstElementChild;
let j2nombre = tab.lastElementChild.firstElementChild;
let oculta1 = tab.firstElementChild.firstElementChild.nextElementSibling;


let tablero = new Object();
tablero.jugador1;
tablero.jugador2;



function clickStart() {    
    console.log("ok",);
    j1nombre.textContent = "Jugador 1";
    j2nombre.textContent = "Jugador 2";
    oculta1.textContent = "Carta oculta"
}

start.addEventListener("click",clickStart);

