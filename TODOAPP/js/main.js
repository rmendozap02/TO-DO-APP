var texto = document.getElementById("inputCuadro").value;
var lista = document.getElementById("lista");
var inputCuadro = document.getElementById("inputCuadro");


function agregarTarea() {
    var texto = document.getElementById("inputCuadro").value;
   
    if(texto != ""){
    	var div = document.createElement("div");
        var btn = document.createElement("button");
        btn.innerHTML = "eliminar";
        btn.addEventListener('click', eliminarTarea);
		lista.appendChild(div);
		div.innerHTML = texto;
        div.appendChild(btn);
		document.getElementById("inputCuadro").value = "";
    }else{
    	alert("Tarea no puede ser ingresada")
    }
}

function eliminarTarea() {
    var texto = document.getElementById("inputCuadro").value;
   
    if(texto != ""){
		document.getElementById("inputCuadro");
    }
}

/*function lista() {
    var campoTarea = document.getElementById("area");
    var tarea = document.createElement("div");
    tarea.campoTarea.appendChild(div);
}
*/ 