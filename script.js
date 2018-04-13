//==============interaction==============
function infosClavier(e) {
    var number = Number(e.keyCode);
    console.log(number);
  switch (number){
    case 32:
    break;
    case 37:
    droite()
    break;
    case 39:
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


//===============ship=====================

function droite(){
  xs+=1
  while(long < 85){
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xs, ys, 1, 50)
        xs=xs+1
    long++
    console.log(long)
  }
}
