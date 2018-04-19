//==============interaction==============
function infosClavier(e) {
    var number = Number(e.keyCode);
  switch (number){
    case 32:
    mvmt()
    break;
    case 37:
    mvmtG()
    break;
    case 39:
    mvmtD()
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
  , xs=l/2-85/2
  , ys=10
  , rang=0
  , ye=25
  , xe=""
  , Droite=0
  , Gauche=0
  , vitesse=30 // vitesse vaisseau
  , vert=vitesse+1
  , noir=vitesse+2
  , xred=150+85
  , xblack=150
  , xf=""
  , xr=""
  , vitessev=10 //vitesse vague
  , rouge=vitessev+1
  , Noir=vitessev+2
  , deplacementDroite=true
  , mvmtv=0

function init(){
  while(long < 85){
        shipCtx.fillStyle="green"
        shipCtx.fillRect(xs, ys, 1, 50)
        xs=xs+1
    long++
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
  }
  ye=25
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
      xred+=vitessev
      xblack+=vitessev
      rang=0
      while(rang < 5){
        xf=xred
        xr=xblack
        for(i=0; i<10; i++){
            ctx.fillStyle="red"
            ctx.fillRect(xf-10, ye, rouge, 50)
            xf=xf+170
            ctx.fillStyle="black"
            ctx.fillRect(xr-10, ye, Noir, 50)
            xr=xr+170
        }
        ye=ye+90
        rang++
      }
      ye=25
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
     xred-=vitessev
     xblack-=vitessev
     rang=0
     while(rang < 5){
       xf=xred
       xr=xblack
       for(i=0; i<10; i++){
         ctx.fillStyle="red"
         ctx.fillRect(xf+11, ye, rouge, 50)
         xf=xf+170
         ctx.fillStyle="black"
         ctx.fillRect(xr+10, ye, Noir, 50)
         xr=xr+170
       }
       ye=ye+90
       rang++
     }
     ye=25
     mvmtv=1
     if(xr <= 1900){
       deplacementDroite=true
     }
 }

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

/*function tir(){
  ys=60
  while (ys<h){
    shipCtx.fillStyle="yellow"
    shipCtx.fillRect(xs-85/2, ys, 5, 20)
    ys+=1
  }
}*/
