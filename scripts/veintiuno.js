let start = document.getElementById("start") ;
let descrip = document.getElementById("descripcion") ;
let tab = document.getElementById("tablero");
let cent = document.getElementById("centro");
let j1nombre = tab.firstElementChild.firstElementChild;
let j2nombre = tab.lastElementChild.firstElementChild;
let oculta1 = tab.firstElementChild.firstElementChild.nextElementSibling;
let abierta1 = tab.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
let oculta2 = tab.lastElementChild.firstElementChild.nextElementSibling;
let abierta2 = tab.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;

let bt1 =document.createElement("button");
let bt2 =document.createElement("button");

let turno = 0;
let jugador = [];
let suma = [];
let baraja = [1,1,2,3,4,5,6,7,8,9,10];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
shuffle(baraja);
console.log(baraja);

jugador[0] = baraja.splice(0,2);
// suma[0] = jugador[0].reduce((previousValue, currentValue) => previousValue + currentValue);
jugador[1] = baraja.splice(0,2);
//suma[1] = jugador[1].reduce((previousValue, currentValue) => previousValue + currentValue);
let centro = baraja.splice(0,1);

function sumar(x) {
  suma[x] =jugador[x].reduce((previousValue, currentValue) => previousValue + currentValue);
  return suma[x];
}

function clickStart() {    
    console.log("ok",);
    descrip.textContent = "";
    j1nombre.textContent = "Jugador 1";
    j2nombre.textContent = "Jugador 2";
    oculta1.textContent = "X";
    abierta1.textContent = jugador[0][1];
    oculta2.textContent = "X"
    abierta2.textContent = jugador[1][1];
    cent.textContent = "X";
    tab.appendChild(bt1);
    bt1.textContent = "PEDIR";
    tab.appendChild(bt2);
    bt2.textContent = "PASAR";
    start.style.display = "none";
    console.log(baraja);
    sumar(0);
    sumar(1);
}

function clickpedir() {
jugador[turno].push(baraja[0]);
baraja.shift();
sumar(turno);
if (turno) {
  turno--;
} 
  else {
    turno++;
}
console.log(suma[turno]);
console.log(baraja);
}

start.addEventListener("click",clickStart);
bt1.addEventListener("click", clickpedir);
// bt2.addEventListener("click", clickpasar);

