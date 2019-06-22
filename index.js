//import { Cipher } from "crypto";

window.onload=()=>{

}

/*Acá va tu código*/
//primero llamo mis botones y los guardo en una variable

let btnEncriptar = document.getElementById("btncode");
//aca mi funcion clik
btnEncriptar.addEventListener("click",() => {

    //optener valor de lo necesite hacer cuando ingrecen texto
    let texto= document.getElementById("textoencriptado").value;
    let numero= document.getElementById("offset").value;

    //convierto en mayuscula 
    texto = texto.toUpperCase ();

//que me devuelva el resultado
document.getElementById("mensajefinal").innerHTML = cipher.encode(texto,numero);
 
});

//boton para desencriptar
let btnDesencriptar = document.getElementById("btndecode");

//mi funcion para hecer clik
btnDesencriptar.addEventListener("click",() => { 

//optener mi valor de lo que necesitas hacer
let texto= document.getElementById("textoencriptado").value;
let numero= document.getElementById("offset").value;

//me devuelve el resultado 
document.getElementById("mensajefinal").innerHTML = cipher.decode(texto,numero);

});






