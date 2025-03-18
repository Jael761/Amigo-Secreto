// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*function agregarAmigo(){
    //alert('Por favor inserte un nombre')
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    return;
} */


/*function crearListaAmigos(){
    listaAmigos.push(amigo);
    return;
}

console.log(listaAmigos);
*/

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    if(amigo==''){
        alert('Por favor inserte un nombre');
    } else {    
        if(amigos.includes(amigo)) {
            limpiarCaja(); 
            //return agregarAmigo;        
        } else {
            amigos.push(amigo);
            console.log(amigos);
             //console.log(amigo);
            limpiarCaja();
            actualizarLista()
            return amigo;
        } 
    }

}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function actualizarLista(){
    let lAmigo = document.getElementById('listaAmigos');
    lAmigo.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lAmigo.appendChild(li);
      }
      
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor inserte un nombre');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indice];

    document.getElementById('resultado').innerHTML = `Amigo seleccionado: ${amigoSeleccionado}`;
    }

    
}

