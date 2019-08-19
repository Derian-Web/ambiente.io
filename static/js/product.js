let item = '';

var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split ("&");
    var params = {};
    var uuid='';

    for ( var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    if (params['uuid']) {
    console.log('El valor del parámetro variable es: '+params['uuid']);
    uuid = params['uuid'];
    } else {
    console.log('No se envió el parámetro variable');
    }
    if (params['item']) {
        console.log('El valor del parámetro variable es: '+params['item']);
        item = params['item'];
        } else {
        console.log('No se envió el parámetro variable');
        }

/* fetch('http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories')
    .then(response => {
        console.log(response.json());
    }) */




const urlApi = 'http://fundamentos.academlo.com/api/v1/'; 
function getCategories(){
    const categoriesURl = urlApi+"categories/"+uuid+"/products";
    fetch(categoriesURl)
    .then((data) => data.json())
    .then((res) =>{
        console.log(res);
        document.getElementById('descripcion').innerHTML = `<h3>${res.products[parseInt(item)].description}</h3>`;
        document.getElementById('libro').innerHTML =  "<img src='"+"http://fundamentos.academlo.com/app/public/products/"+ res.products[parseInt(item)].image +"'>";
        document.getElementById('title').innerHTML = `<h1>${res.products[parseInt(item)].name}</h1>`;
    })
    
}

getCategories();

