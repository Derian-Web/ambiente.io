const urlApi = 'http://fundamentos.academlo.com/api/v1/'; 
function getCategories(){
    const categoriesURl = `${urlApi}categories/8055a566-9895-40f6-9aee-685033d2ed11/products`;
    fetch(categoriesURl)
    .then((data) => data.json())
    .then((res) =>{
        
        document.getElementById('title').innerHTML = `<h1>${res.name}</h1>`;
    })
    
}

getCategories();

