//==============interaction==============
function infosClavier(e) {
    var number = Number(e.keyCode);
  switch (number){
    case 32:
    shoot()
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
const vague=document.getElementById("vagues")
const ctx = vague.getContext('2d')
const ship=document.getElementById("ship")
const shipCtx=ship.getContext("2d")
var long=0
  , xVaisseau=l/2-85/2
  , yVaisseau=10
  , rang=0
  , yVague=25
  , xVague=""
  , Droite=0
  , Gauche=0
  , vitesseVaisseau=30 // vitesse vaisseau
  , vert=vitesseVaisseau+1
  , noir=vitesseVaisseau+2
  , xred=150+85
  , xblack=150
  , xf=""
  , xr=""
  , vitesseVague=10 //vitesse vague
  , rouge=vitesseVague+1
  , Noir=vitesseVague+2
  , deplacementDroite=true
  , mvmtv=0
  , vitesseTir=5

function init(){
  while(long < 85){
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xVaisseau, yVaisseau, 1, 50)
        xVaisseau=xVaisseau+1
    long++
  }

  while(rang < 5){
    xVague=150
    for(i=0; i<10; i++){
        ctx.fillStyle="red"
        ctx.fillRect(xVague, yVague, 85, 50)
        xVague=xVague+170
    }
    yVague=yVague+90
    rang++
  }
  yVague=25
  setInterval(move,500)
}



//==============Mvmt vague================
function move(){
  console.log(deplacementDroite);
  if (deplacementDroite){
    mvmtD()
  } else {
    mvmtG()
  }
}



  function mvmtD(){
    if(mvmtv===1){
      xred+=95
      xblack-=75
    }
      xred+=vitesseVague
      xblack+=vitesseVague
      rang=0
      while(rang < 5){
        xf=xred
        xr=xblack
        for(i=0; i<10; i++){
            ctx.fillStyle="red"
            ctx.fillRect(xf-10, yVague, rouge, 50)
            xf=xf+170
            ctx.fillStyle="black"
            ctx.fillRect(xr-10, yVague, Noir, 50)
            xr=xr+170
        }
        yVague=yVague+90
        rang++
      }
      yVague=25
      mvmtv=0
      if(xf >= vagues.width){
        deplacementDroite=false
      }
  }

 function mvmtG(){
   if (mvmtv===0){
     xred-=95
     xblack+=75
   }
     xred-=vitesseVague
     xblack-=vitesseVague
     rang=0
     while(rang < 5){
       xf=xred
       xr=xblack
       for(i=0; i<10; i++){
         ctx.fillStyle="red"
         ctx.fillRect(xf+11, yVague, rouge, 50)
         xf=xf+170
         ctx.fillStyle="black"
         ctx.fillRect(xr+10, yVague, Noir, 50)
         xr=xr+170
       }
       yVague=yVague+90
       rang++
     }
     yVague=25
     mvmtv=1
     if(xr <= 1900){
       deplacementDroite=true
     }
 }

//===============ship=====================

function droite(){
  if(xVaisseau < l-100){
        if (Gauche===1){
          shipCtx.fillStyle="green"
          shipCtx.fillRect(xVaisseau-9, yVaisseau, vert, 50)
          var left=xVaisseau-89
          shipCtx.fillStyle="black"
          shipCtx.fillRect(left,yVaisseau,noir,50)
        }
        Gauche=0
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xVaisseau, yVaisseau, vert, 50)
        var left=xVaisseau-86
        shipCtx.fillStyle="black"
        shipCtx.fillRect(left,yVaisseau,noir,50)
        xVaisseau+=vitesseVaisseau
        Droite=1
    }
}

function gauche(){
  if (xVaisseau > (100+85)){
        if (Droite===1){
          shipCtx.fillStyle="green"
          shipCtx.fillRect(xVaisseau-86, yVaisseau, vert, 50)
          var right=xVaisseau-9
          shipCtx.fillStyle="black"
          shipCtx.fillRect(right,yVaisseau,noir,50)
        }
        Droite=0
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xVaisseau-95, yVaisseau, vert, 50)
        var right=xVaisseau-10
        shipCtx.fillStyle="black"
        shipCtx.fillRect(right,yVaisseau,noir,50)
        xVaisseau-=vitesseVaisseau
        Gauche=1
    }
}

//==============tir============
// var xTir
// var yTir
//
// function shoot() {
//   xTir=xVaisseau
//   yTir=yVaisseau
//   console.log(yTir);
//   shipCtx.fillStyle="yellow"
//   shipCtx.fillRect(xTir-84/2-5, yTir, 10, 50)
//   console.log(yTir);
// }
//
// function deplacementTir() {
//     shipCtx.fillStyle="yellow"
//     shipCtx.fillRect(xTir-84/2-5, yTir, 10, 50)
//     console.log(yTir);
// }
