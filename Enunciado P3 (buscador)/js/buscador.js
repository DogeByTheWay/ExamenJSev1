	//Código para implementar la promesa
	function get(entidad, id, msgError){
		return new Promise (function(resolve,reject){
			let xhr=new XMLHttpRequest();
			xhr.responseType="json";
			xhr.open("GET",`http://localhost:3000/${entidad}/${id}`);
			xhr.send();
			xhr.onload=()=>{
				if(xhr.status==200){
					resolve(xhr.response);
				}else{
					reject(msgError)
				}
			}
			xhr.onerror=()=>{
					reject("ERROR DE SERVIDOR");
			}
		});
	}
	//Código para el boton btnBuscaArticulo
	function buscarArticulo(){
		id=prompt("Dime el codigo del Articulo...")
		get("articulos",id,"Error en articulo: id")
		.then(datos => console.log(datos.nombre))
		.catch(error => alert(error));
	}

	//Código para el boton btnBuscaVendedor
	function buscarVendedor(){
		id=prompt("Dime el codigo del Vendedor...")
		get("vendedores",id,"Error en vendedor: id")
		.then(datos => console.log(datos.nombre))
		.catch(error => alert(error));
	}	
		
	//Código para el boton btnBuscarArticuloVendedor
	function buscarArticuloVendedor(){
		id=prompt("Dime el codigo del Articulo...")
		get("articulos",id,"Error en articulo: id")
		.then(datos => get("vendedores",datos.vendedores.sort((a,b)=>b.precio-a.precio)[0].idVendedor,"Error en vendedor: id")
		.then(datos => console.log(datos.nombre)).
		catch(error => alert(error)))
		.catch(error => alert(error));
	}
	
