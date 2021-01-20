var texto = 'The quick brown fox jumps over the lazy dog';
//console.log(hola.charCodeAt(0));

function pantagrama ( texto ){
    
    texto = texto.replace(/ /g, '').toLowerCase();
    result = /^[a-zA-Z]+$/.test(texto) ? 'Si' : 'No';
    console.log(result);  
}
pantagrama(texto);