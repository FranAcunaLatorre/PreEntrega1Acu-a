alert ("Bienvenido a libros a $10.000, donde todos los libros valen $10.000")
function bienvenida(){
   return prompt("cual es tu nombre?");
} 

const usuario = bienvenida();
alert ("un gusto "+usuario+" te gustaria ver si cuentas con un descuento en nuestra tienda?")

function calcularDescuento(precioLibro,descuento){
    let precioFinal = precioLibro - descuento
    alert ("el precio del libro aplicando el descuento es de: $"+precioFinal)
}

let libro= prompt(" porfavor ingresa el descuento que te gustaría aplicar (solo puedes escoger uno): \n 1- Descuento estudiante CoderHouse \n 2- Descuento profesor CoderHouse \n 3- Descuento tutor CoderHouse \n 4- Descuento promotor CoderHouse \n Escriba salir para finalizar")

while (libro != "salir"){
    if (libro == "1"){
    calcularDescuento(10000,1000);
    }else if(libro == 2){
        calcularDescuento(10000,2000);
    }else if(libro == 3){
        calcularDescuento(10000,5000);
    }else if(libro == 4){
        calcularDescuento(10000,9999);
    }
break;
}