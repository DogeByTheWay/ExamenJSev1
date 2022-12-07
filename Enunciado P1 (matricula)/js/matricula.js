// Código js para la gestion de la pagina matricula.html

function pintaModulos(){
    let lista=document.getElementById("contenedor");
    modulos.forEach(m => {
        let div=document.createElement("div");
        div.setAttribute("class","card");
        lista.appendChild(div);
        let img=document.createElement("img");
        img.src=`./assets/${m.nombre}.png`;
        let boton=document.createElement("button");
        boton.appendChild(document.createTextNode(m.nombre))
        boton.setAttribute("id",m.codigo)
        boton.setAttribute("class","btn btn-primary")
        boton.onclick=()=>{ponEnMatricula(boton.id)};
        div.appendChild(img);
        div.appendChild(boton);
    });
}

function ponEnMatricula(id){
    m1.anyadeModulo(id); 
}

function cleanAll(){
    m1.modulos=[];
    m1.id=null;
    m1.nombre=null;
    m1.verMatricula();
}


function realizaMatricula(){
    if(m1.id==null || m1.nombre==null){
        alert("No te has molestado ni en clickear el boton 'Datos personales del alumno'")
        return false;
    }
    if(m1.id.trim(" ")!="" && m1.nombre.trim(" ")!=""){
        let miObjeto={"dni":m1.id,"nombre":m1.nombre,"modulos":m1.modulos};
        alert(JSON.stringify(miObjeto));
        cleanAll();
    }else{
        alert("ERROR: El dni o el nombre no puede estar vacio o contener solo caracteres blancos")
    }
    
}

function datosAlumno(){
    let dni=document.getElementById("dni").value;
    let nombre=document.getElementById("nombre").value;
    m1.id=dni;
    m1.nombre=nombre;
    let modal=document.getElementById("formDatos");
    modal.close();
}

function abrirModal(){
    let modal=document.getElementById("formDatos");
    modal.showModal();
}

window.onload=()=>{
    pintaModulos();
    m1=new Matricula();
    m1.verMatricula();
    document.getElementById("btnAbreDatosPersonales").addEventListener("click",()=>{abrirModal()});
    document.getElementById("btnCierraDatosPersonales").addEventListener("click",()=>{datosAlumno()})

}