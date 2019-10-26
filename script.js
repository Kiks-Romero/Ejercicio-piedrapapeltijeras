function aleatorio(){
    var numero = Math.floor(Math.random() * 3)
    return numero
}


var piedra = 0
var papel = 1
var tijeras =2
var score=0
var scorepc=0

const caja = document.getElementById('cuadro')
const marca = document.getElementById('marca')
const jugada = document.getElementById('jugada')
const jugadapc = document.getElementById('jugadapc')

function game(usuario){
    var pc=aleatorio()
    

    if(usuario==piedra){
        if(pc==piedra){
            caja.innerHTML='<i class="fas fa-grip-lines"></i><br>empate'
            jugada.innerHTML='<i class="far fa-hand-rock manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-rock manos"></i>'
        }else if(pc==papel){
            scorepc=scorepc+1
            caja.innerHTML='<i class="fas fa-skull-crossbones"></i><br>perdiste'
            jugada.innerHTML='<i class="far fa-hand-rock manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-paper manos"></i>'
        }else if(pc==tijeras){
            score=score+1
            caja.innerHTML='<i class="far fa-thumbs-up"></i><br>ganaste'
            jugada.innerHTML='<i class="far fa-hand-rock manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-scissors manos"></i>'
        }
    }else if(usuario==papel){
        if(pc==piedra){
            score=score+1
            caja.innerHTML='<i class="far fa-thumbs-up"></i><br>ganaste'
            jugadapc.innerHTML='<i class="far fa-hand-rock manos"></i>'
            jugada.innerHTML='<i class="far fa-hand-paper manos"></i>'
        }else if(pc==papel){
            caja.innerHTML='<i class="fas fa-grip-lines"></i><br>empate'
            jugada.innerHTML='<i class="far fa-hand-paper manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-paper manos"></i>'
        }else if(pc==tijeras){
            scorepc=scorepc+1
            caja.innerHTML='<i class="fas fa-skull-crossbones"></i><br>perdiste'
            jugada.innerHTML='<i class="far fa-hand-paper manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-scissors manos"></i>'
        }
    }else if(usuario==tijeras){
        if(pc==piedra){
            scorepc=scorepc+1
            caja.innerHTML='<i class="fas fa-skull-crossbones"></i><br>perdiste'
            jugadapc.innerHTML='<i class="far fa-hand-rock manos"></i>'
            jugada.innerHTML='<i class="far fa-hand-scissors manos"></i>'
        }else if(pc==papel){
            score=score+1
            caja.innerHTML='<i class="far fa-thumbs-up"></i><br>ganaste'
            jugadapc.innerHTML='<i class="far fa-hand-paper manos"></i>'
            jugada.innerHTML='<i class="far fa-hand-scissors manos"></i>'
        }else if(pc==tijeras){
            caja.innerHTML='<i class="fas fa-grip-lines"></i><br>empate'
            jugada.innerHTML='<i class="far fa-hand-scissors manos"></i>'
            jugadapc.innerHTML='<i class="far fa-hand-scissors manos"></i>'
        }
    }
    marca.textContent=score+":"+scorepc
}
