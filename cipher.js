window.cipher = {
  encode: (texto,numero) => {
   let mensajefinal = "";
    for (let i = 0; i < texto.length; i++){
      
      let numerodeletra = texto.charCodeAt(i);

      //console.log(numerodeletra);
      if(numerodeletra >= 65 && numerodeletra <= 90){
      let nuevonumero = numerodeletra- 65 + numero % 26 + 65;
      mensajefinal += String.fromCharCode(nuevonumero);
      console.log(mensajefinal);
    }
  } 
    return mensajefinal;

  },


  decode: (texto,numero) => {
   let mensajefinal = "";

   for (let i = 0; i < texto.length; i++) {
    let numerodeletra = texto.charCodeAt(i);
    //console.log(numerodeletro)

   if (numerodeletra >= 65 && numerodeletra >= 90){

    let nuevonumero = (numerodeletra - 90 - numero) % 26 + 90;
    mensajefinal += String.fromCharCode(nuevonumero);
   }

} // cierre de for
return mensajefinal;








  }

  };//cierre de decode
  

