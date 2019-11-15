let computadoraEleccion;
let usuarioEleccion;
let mensaje = document.getElementById('mensaje');
//Variables enteras -- Se manejan como numeros.
let ganadas = 0;
let perdidas = 0;
let empate = 0;



opcion = ({id})=> {
    
    ComputadoraOpcion();
    QuienGano(computadoraEleccion,id);
    estadisticas()


}



 ComputadoraOpcion =()=> {
    let computadora = Math.random() * 2;
    computadora = Math.round(computadora)

    if (computadora === 0) {
        return computadoraEleccion = 'roca';

    } else if (computadora === 1) {
        return computadoraEleccion = 'tijeras';
    } else if (computadora === 2) {
        return computadoraEleccion = 'papel';
    }
}

 QuienGano = (computadora, jugador)=> {

    if (computadora === jugador) {
        empate++
        return mensaje.innerHTML = "Empate con: " + jugador
    } else if (jugador == 'roca' && computadora == 'tijeras') {
        ganadas++
        return mensaje.innerHTML = "Ganaste con: " + "ROCA";
    } else if (jugador == 'papel' && computadora == 'roca') {
        ganadas++
        return mensaje.innerHTML = "Ganaste con: "+"PAPEL";
    } else if (jugador == 'tijeras' && computadora == 'papel') {
        ganadas++
        return mensaje.innerHTML = "Ganaste con: " + "TIJERAS";
    } else {
        perdidas++
        return mensaje.innerHTML = "Perdiste con: " + jugador;
    }

}


estadisticas=() =>{

    document.getElementById('ganadas').innerHTML = `${ganadas}`;
    document.getElementById('perdidas').innerHTML = `${perdidas}`;
    document.getElementById('empate').innerHTML = `${empate}`;
    document.getElementById('computadora').innerHTML = `${computadoraEleccion}`;



}

reset=()=>{
  
    document.getElementById('mensaje').addEventListener('click',()=>{
        
        document.getElementById('ganadas').innerHTML = 0;
        document.getElementById('perdidas').innerHTML = 0;
        document.getElementById('empate').innerHTML =  0;
        document.getElementById('computadora').innerHTML = 'Zzzz';
    
        //Reinicio de estadisticas
        ganadas = 0;
        perdidas = 0;
        empate = 0;
        perdidas = 0;
    
        mensaje.innerHTML = "Has reiniciado";
       
    
        })
    }

reset();
