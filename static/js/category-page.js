var sitios = [];

const urlApi = 'http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories';

fetch(urlApi)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(directories => {
        console.log(directories);
        directories.categories.forEach(elemento => {

            var objeto = {
                nombre: "nombre1",
                desc: "descripcion1",
                sitio: "https://envylabs.com/",
                imagenRuta: "static/images/paginaEjemplo.png"
            };
            
            objeto.nombre = elemento.name;
            sitios.push(objeto);
        });
        //console.log(sitios);
        sitios.forEach(element => {
            document.getElementById('contenedorSitios').innerHTML += "<div class='col-md-4 pagina'><div><div class='imagePage'><img src='" + element.imagenRuta + "'></div><div class='tarjeta'><h4>" + element.nombre + "</h4><p>" + element.desc + "</p><button type='button' onclick=window.open('" + element.sitio + "') class='btn btn-outline-dark'>Visit site</button></div></div></div>";
        });
    })
    .catch(error => {
        alert("hubo un error");
    })




//var contenido = "";






