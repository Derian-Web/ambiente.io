var sitios = [{
    nombre: "nombre1",
    desc: "descripcion1",
    sitio: "https://envylabs.com/",
    imagenRuta: "static/images/paginaEjemplo.png"
},
{
    nombre: "nombre2",
    desc: "descripcion2",
    sitio: "http://builtwithmomentum.com/",
    imagenRuta: "static/images/paginaEjemplo2.png"
},
{
    nombre: "nombre3",
    desc: "descripcion3",
    sitio: "http://teixido.co/",
    imagenRuta: "static/images/paginaEjemplo3.png"
},
{
    nombre: "nombre4",
    desc: "descripcion4",
    sitio: "https://createdm.com/",
    imagenRuta: "static/images/paginaEjemplo4.png"
},
{
    nombre: "nombre5",
    desc: "descripcion5",
    sitio: "https://www.creuna.com/en/",
    imagenRuta: "static/images/paginaEjemplo2.png"
},
{
    nombre: "nombre6",
    desc: "descripcion6",
    sitio: "https://www.plankdesign.com/en",
    imagenRuta: "static/images/paginaEjemplo3.png"
},
{
    nombre: "nombre1",
    desc: "descripcion1",
    sitio: "https://envylabs.com/",
    imagenRuta: "static/images/paginaEjemplo4.png"
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
    imagenRuta: "static/images/paginaEjemplo3.png"
},
{
    nombre: "nombre4",
    desc: "descripcion4",
    sitio: "https://createdm.com/",
    imagenRuta: "static/images/paginaEjemplo4.png"
},
{
    nombre: "nombre5",
    desc: "descripcion5",
    sitio: "https://www.creuna.com/en/",
    imagenRuta: "static/images/paginaEjemplo2.png"
},
{
    nombre: "nombre6",
    desc: "descripcion6",
    sitio: "https://www.plankdesign.com/en",
    imagenRuta: "static/images/paginaEjemplo.png"
}];


var contenido = "";
sitios.forEach(element => {
    contenido = document.getElementById('contenedorSitios').innerHTML += "<div class='col-md-4 pagina'><div><div class='imagePage'><img src='"+ element.imagenRuta+"'></div><div class='tarjeta'><h4>"+element.nombre+"</h4><p>"+element.desc+"</p><button type='button' onclick=window.open('"+element.sitio+"') class='btn btn-outline-dark'>Visit site</button></div></div></div>";
});



