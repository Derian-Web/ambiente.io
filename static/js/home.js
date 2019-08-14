var sitios = [{
    nombre: "nombre1",
    desc: "descripcion1",
    sitio: "https://envylabs.com/"
},
{
    nombre: "nombre2",
    desc: "descripcion2",
    sitio: "http://builtwithmomentum.com/"
},
{
    nombre: "nombre3",
    desc: "descripcion3",
    sitio: "http://teixido.co/"
}];


var contenido = "";
sitios.forEach(element => {
    contenido = document.getElementById('contenedorSitios').innerHTML += "<div class='col-md-4 pagina'><div><iframe class='embedded' frameborder='0' src='"+element.sitio+"' name='formularios'></iframe><div class='tarjeta'><h4>"+element.nombre+"</h4><p>"+element.desc+"</p><button type='button' onclick=window.open('"+element.sitio+"') class='btn btn-outline-dark'>Visit site</button></div></div></div>";
});
console.log("home");


