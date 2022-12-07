// Definicion clase Matricula		
class Matricula {
	constructor() {
		this.id = null;
		this.nombre = null;
		this.modulos = [];
	}

	anyadeModulo(codigo) {
		let modulo=modulos.find(a=>a.codigo==codigo);
		if(this.modulos.includes(modulo)){
			alert("Ya estas matriculado en este modulo")
		}else{
			this.modulos.push(modulo);
		}
		this.verMatricula();
	}

	borraModulo(codigo) {
		let modulo=modulos.find(a=>a.codigo==codigo);
		this.modulos.splice(modulo,1);
		this.verMatricula();
	}

	verMatricula() {
		let capa=document.getElementById("capamatricula");
		let tabla="<table class='table table-bordered table-striped'>"
		if(this.modulos.length==0){
			capa.innerHTML="";
		}
		else{
		this.modulos.forEach(m =>{
			tabla+=`<tr><td>${m.nombre}</td><td>${m.creditos}</td><td><button id="${m.codigo}" class="btn btn-danger del">Borrar</button></td></tr>`
		})
		tabla+="</table>";
		capa.innerHTML=tabla;
		capa.innerHTML+="<button id='btnRealizarMatricula' class='btn btn-primary'>Realizar matrícula</button>"
		document.getElementById("btnRealizarMatricula").addEventListener("click",()=>{realizaMatricula()});
		Array.from(document.getElementsByClassName("del")).forEach(btn => 
			btn.addEventListener("click",()=>{this.borraModulo(this.id)
		}));
		
		}
		
	}

}