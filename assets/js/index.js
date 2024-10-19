precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

aPagar =0;
cantidad = 0

const nf = new Intl.NumberFormat("es-CL");
//Función para addionar o Sustraer 
//según cuantas veces cliqueas el boton + o -
function addiSust(num){

    cantidad = cantidad +num
    aPagar = cantidad * precio

    cantMostrar = document.querySelector(".cantidad");
    cantMostrar.innerHTML= cantidad

    precioAPagar = document.querySelector(".valor-total");
    precioAPagar.innerHTML = nf.format(aPagar)
}

// function add(){
//     cantidad ++

//     aPagar = cantidad * precio

//     cantMostrar = document.querySelector(".cantidad");
//     cantMostrar.innerHTML= cantidad

//     precioAPagar = document.querySelector(".valor-total");
//     precioAPagar.innerHTML = aPagar
// }

// function rest(){
//     cantidad--

//     aPagar = cantidad * precio
    
//     cantMostrar = document.querySelector(".cantidad");
//     cantMostrar.innerHTML= cantidad

//     precioAPagar = document.querySelector(".valor-total");
//     precioAPagar.innerHTML = aPagar
// }