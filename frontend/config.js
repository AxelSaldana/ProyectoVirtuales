/*
	FUNCIONES
		agregar fila()
		eliminar fila()
		enviar()
		validar()
		archivoJSON()
*/

/*
Agregar fila -> Inserta filas a la tabla
				Cuentan con 5 columnas
				Dentro de las columnas hay inputs de tipo texto
*/
function agregarFila(){
	let tam = document.getElementById('table_form').rows.length;
	let tabla = document.getElementById('table_form').insertRow(tam);
	let col1 = tabla.insertCell(0);
	let col2 = tabla.insertCell(1);
	let col3 = tabla.insertCell(2);
	let col4 = tabla.insertCell(3);
	let col5 = tabla.insertCell(4);

	let idCelda1 = "tabla_1_"+tam;
	let idCelda2 = "tabla_2_"+tam;
	let idCelda3 = "tabla_3_"+tam;
	let idCelda4 = "tabla_4_"+tam;
	let idCelda5 = "tabla_5_"+tam;
	col1.innerHTML = '<input type="text" style="width: 200px; id="'+idCelda1+'" class="entrada">';
	col2.innerHTML = '<input type="text" style="width: 100px; id="'+idCelda2+'" class="entrada">';
	col3.innerHTML = '<input type="text" style="width: 100px; id="'+idCelda3+'" class="entrada">';
	col4.innerHTML = '<input type="text" style="width: 100px; id="'+idCelda4+'" class="entrada">';
	col5.innerHTML = '<input type="text" style="width: 80px;  id="'+idCelda5+'" class="entrada">';
}

function eliminarFila(){
	let tam = document.getElementById('table_form').rows.length;
	if(tam != 1){
		document.getElementById('table_form').deleteRow(tam-1);
	}
}

function enviar(){
	let nombre = document.getElementById("in_nom").value;
	let apellidoP = document.getElementById("in_ap").value;
	let apellidoM = document.getElementById("in_am").value;
	let matricula = document.getElementById("in_mat").value;
	let carrera = document.getElementById("in_car").value;
	let cicloEs = document.getElementById("in_cies").value;

	//	Validar [PRIMERA PARTE]
	mensaje = "";
		//	Validar nombre
		if(nombre == ""){
			mensaje += "Ingrese el nombre\n";
		}
		//	Validar apellido paterno
		if(apellidoP == ""){
			mensaje += "Ingresa el apellido paterno\n";
		}
		//	Validar matricula
		if(matricula == ""){
			mensaje += "Ingresa la matrícula\n";
		}else{
			if(matricula.length != 6){
				mensaje += "Matrícula no valida\n";
			}
		}
		//	Validar carrera
		if(carrera == 0){
			mensaje += "Ingresa la carrera\n";
		}
		//	Validar ciclo escolar
		if(cicloEs == ""){
			mensaje += "Ingrese el ciclo escolar\n";
		}

	if(mensaje!=""){
		alert(mensaje);
	}

	//	Validar [SEGUNDA PARTE]
	
	let tam = document.getElementById("table_form").rows.length - 1;
		let i = 0;
		let j = 0;
		let cont=0

	let inputs = document.querySelectorAll('.entrada');
	var subarray = new Array(inputs.length/5);
	for(i=0; i<inputs.length/5; i++) {
    	subarray[i] = new Array(5);
	}
	for (i=0; i<inputs.length/5; i++){
    	for (j=0; j<5; j++){
    		subarray[i][j] = inputs[cont].value;
    		cont++;
    	}
  	} 
  	/*
  	archivojson();
  	let json = "";
  	let mc = [];
  	let cf = [];
  	let gf = [];
  	let pr = [];
  	let td = [];

  	for(i=0 ; i<inputs.length/5 ; i++){
  		for(j=0; j<5; j++){
  			if(j == 0){

  			}else if(j == 1){

  			}else if(j == 2){

  			}else if(j == 3){

  			}else if(j == 4){

  			}
  		}
  	}*/
}
