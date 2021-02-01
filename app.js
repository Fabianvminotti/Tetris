
//Todo este bloque empieza con la carga de la pagina
document.addEventListener('DOMContentLoaded',(e)=>{
	
	const grid = document.querySelector(".grid");
	//aca se seleccionan TODOS los cuadrados y se agrupan en un array (dandole asi un index)
	let squares = Array.from(document.querySelectorAll('.grid div'));
	const scoreDisplay = document.querySelector('#score');
	const startButton = document.querySelector('#start-button')
	const ancho = 10 /*numero de cuadrados que tiene de ancho del tablero*/
	 
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

	const piezaO = [[1, 2, ancho, ancho+1],
					[1, 2, ancho, ancho+1],
					[1, 2, ancho, ancho+1],
					[1, 2, ancho, ancho+1]
					];

//se arma un array con las piezas y sus posiciobnes
	const piezas = [piezaL, piezaZ, piezaT, piezaO, piezaL ];
//con esto se elige aleatoriamente la pieza que va a aparecer
// random te devuelve un valor entre 0 y 1, este se multiplica por la longitud del array de las piezas (que son cinco piezas) y el floor es para truncar el munero al entero
	const random = Math.floor(Math.random()*piezas.length);
	const current = piezas[random][0];

	const currentPosition = 4; //esta es la posicion de la pieza cuando aparece (cuatro piezas desde el margen izquierdo en este caso)
	const currentRotation = 0; 

// con esta parte se dibujan las piezas agregando un tipo de clase a los squareseeccionados

	function draw () {
		current.forEach(index =>(
			squares[currentPosition+index].classList.add('pieza')));

	}

draw()




})

