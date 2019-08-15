var sitios = [{
    nombre: "nombre1",
    desc: "descripcion1",
    sitio: "https://envylabs.com/",
    imagenRuta: "static/images/paginaEjemplo2.png"
},
{
    nombre: "nombre2",
    desc: "descripcion2",
    sitio: "http://builtwithmomentum.com/",
    imagenRuta: "static/images/paginaEjemplo.png"
},
{
    nombre: "nombre3",
    desc: "descripcion3",
    sitio: "http://teixido.co/",
    imagenRuta: "static/images/paginaEjemplo4.png"
}];


var contenido = "";
sitios.forEach(element => {
    contenido = document.getElementById('contenedorSitios').innerHTML += "<div class='col-md-4 pagina'><div><div class='imagePage'><img src='"+ element.imagenRuta+"'></div><div class='tarjeta'><h4>"+element.nombre+"</h4><p>"+element.desc+"</p><button type='button' onclick=window.open('"+element.sitio+"') class='btn btn-outline-dark'>Visit site</button></div></div></div>";
});


