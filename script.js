//==============interaction==============
function infosClavier(e) {
    var number = Number(e.keyCode);
    console.log(number);
  switch (number){
    case 32:

    break;
    case 37:
    gauche()
    break;
    case 39:
    droite()
    break;
    case 13:
    init()
    break;
  }
}

 document.addEventListener("keydown", infosClavier)




//===============initialisation===========

l=window.innerWidth
h=window.innerHeight
const vague=document.getElementById("vagues");
const ctx = vague.getContext('2d') ;
const ship=document.getElementById("ship")
const shipCtx=ship.getContext("2d")
var long=0
var xs=l/2-85/2
var ys=10
var rang=0
var ye=25
var xe=""
function init(){
  while(long < 85){
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xs, ys, 1, 50)
        xs=xs+1
    long++
    console.log(long)
  }

  while(rang < 5){
    xe=150
    for(i=0; i<10; i++){
        ctx.fillStyle="red"
        ctx.fillRect(xe, ye, 85, 50)
        xe=xe+170
    }
    ye=ye+90
    rang++
    console.log(rang)
  }
}

var Droite=0
var Gauche=0
var vitesse=30
var vert=vitesse+1
var noir=vitesse+2


//===============ship=====================

function droite(){
  if(xs < l-100){
        if (Gauche===1){
          shipCtx.fillStyle="green"
          shipCtx.fillRect(xs-9, ys, vert, 50)
          var left=xs-89
          shipCtx.fillStyle="black"
          shipCtx.fillRect(left,ys,noir,50)
        }
        Gauche=0
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xs, ys, vert, 50)
        var left=xs-86
        shipCtx.fillStyle="black"
        shipCtx.fillRect(left,ys,noir,50)
        xs+=vitesse
        Droite=1
    }
}

function gauche(){
  if (xs > (100+85)){
        if (Droite===1){
          shipCtx.fillStyle="green"
          shipCtx.fillRect(xs-86, ys, vert, 50)
          var right=xs-9
          shipCtx.fillStyle="black"
          shipCtx.fillRect(right,ys,noir,50)
        }
        Droite=0
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xs-95, ys, vert, 50)
        var right=xs-10
        shipCtx.fillStyle="black"
        shipCtx.fillRect(right,ys,noir,50)
        xs-=vitesse
        Gauche=1
    }
}
