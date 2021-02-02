
//Todo este bloque empieza con la carga de la pagina
document.addEventListener('DOMContentLoaded',(e)=>{
	
	const grid = document.querySelector(".grid");
	//aca se seleccionan TODOS los cuadrados y se agrupan en un array (dandole asi un index)
	let squares = Array.from(document.querySelectorAll('.grid div'));
	const scoreDisplay = document.querySelector('#score');
	const startButton = document.querySelector('#start-button');
	const ancho = 10; /*numero de cuadrados que tiene de ancho del tablero*/




//Ahora dentro del bloque se contruyen la fichas con sus rotaciones
	const piezaL = [[1, ancho+1, 2*ancho+1,2],
					[ancho, ancho+1, ancho+2, 2*ancho+2],
					[2*ancho, 1, ancho+1, 2*ancho+1],
					[ancho, 2*ancho, 2*ancho+1, 2*ancho+2],
					];

	const piezaZ = [[2*ancho,ancho+1, 2*ancho+1,ancho+2],
					[0, ancho, ancho+1, 2*ancho+2],
					[2*ancho,ancho+1, 2*ancho+1,ancho+2],
					[0, ancho, ancho+1, 2*ancho+2]
					];

	const piezaT = [[1, ancho, ancho+1, ancho+2],
					[1, ancho+1, 2*ancho+1,ancho+2],
					[ancho, ancho+1, ancho+2, 2*ancho+1],
					[1, ancho, ancho+1, 2*ancho+1]
					];

	const piezaI = [[1, ancho+1, 2*ancho+1,3*ancho+1],
					[ancho, ancho+1, ancho+2, ancho+3],
					[1, ancho+1, 2*ancho+1,3*ancho+1],
					[ancho, ancho+1, ancho+2, ancho+3]
					];

	const piezaO = [[1, 2, ancho+2, ancho+1],
					[1, 2, ancho+2, ancho+1],
					[1, 2, ancho+2, ancho+1],
					[1, 2, ancho+2, ancho+1]
					];

//se arma un array con las piezas y sus posiciobnes
	const piezas = [piezaL, piezaO, piezaT, piezaZ, piezaI ];
//con esto se elige aleatoriamente la pieza que va a aparecer
// random te devuelve un valor entre 0 y 1, este se multiplica por la longitud del array de las piezas (que son cinco piezas) y el floor es para truncar el munero al entero
	let random = Math.floor(Math.random()*piezas.length);
	let current = piezas[random][0];

	let currentPosition = 4; //esta es la posicion de la pieza cuando aparece (cuatro piezas desde el margen izquierdo en este caso)
	let currentRotation = 0; 

// con esta parte se dibujan las piezas agregando un tipo de clase a los squareseeccionados

	function draw () {
		current.forEach(index =>(
			squares[currentPosition+index].classList.add('pieza')));

	}

draw() ;


function undraw () {
		current.forEach(index =>(
			squares[currentPosition+index].classList.remove('pieza')));
	}


//aca se define el intervalo de tiempo para que redibuje la pieza un cuadrado mas abajo
//timer ejecura movedown cada 1000 milisegundos
let timerId = setInterval(moveDown,1000)

//aca se asignan las teclas para moverse y rotar #####################33

function control (e) {
	if(e.keyCode === 37){ //37 es el codigo de JS para la tecla de la izquierda (left arrow)
		moveLeft()
	} else if(e.keyCode === 38){//es el codigo para flecha de arriba
			//rotar
	} else if(e.keyCode === 39){
			moveRigth()
	} else if(e.keyCode === 40){
		//moveDown
	}
}

document.addEventListener('keyup', control)




//move down es la funcion que borra y redibuja ams abajo la pieza
function moveDown(){
	undraw()
	currentPosition += ancho //le suma un ancho entero a las piezas
	draw()
	parar()
}


//se arma una funcion para parar las piezas 


function parar(){
	/*Aca dice que si en los squares que hay una linea por debajo de la pieza
	donde exista la clase que se llama "parar", le agrega a los squeares de la posicion
	actul la clase "parar"
	el comando .some devuelve un true si lo que esta en parentesis es verdadero dentro del array*/

	if(current.some(index => squares[currentPosition + index + ancho].classList.contains('parar'))){
		current.forEach(index=> squares[currentPosition+index].classList.add('parar'))
	//ahora aca se crea una nueva pieza al principio
	//se hace lo mismo que se hizo en el random

			random = Math.floor(Math.random()*piezas.length);
			current = piezas[random][currentRotation];
			currentPosition=4
			draw() //y aca se dibuja devuelta
	}
}

//aca se determina el movimiento a la izquierda, siempre y cuando no llegue al margen izquierdo

function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % ancho === 0)
    if(!isAtLeftEdge) currentPosition -=1 //el ! quiere decir que no es igual esa variable
    if(current.some(index => squares[currentPosition + index].classList.contains('parar'))) {
      currentPosition +=1 //esto es para que cuando hay un "parar" al lado se cancele la accion del if anterior sumando (o restando) un valor al current position
    }
    draw()
  }


function moveRigth() {
    undraw()
    const isAtRigthEdge = current.some(index => (currentPosition + index) % ancho === ancho-1)
    if(!isAtRigthEdge) currentPosition +=1 //el ! quiere decir que no es igual esa variable
    if(current.some(index => squares[currentPosition + index].classList.contains('parar'))) {
      currentPosition -=1
    }
    draw()
  }






})







