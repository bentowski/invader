
  //==========taille fenetre==============

  var w=window.innerWidth
  var h=window.innerHeight
  console.log(h);
  var position=w/2-5;
  var wposition=w/2-1.5;

  function init(){
    var ini=document.querySelector(".ship")
    ini.style.left = position+"px";
    var wini=document.querySelector(".weapon")
    wini.style.left = wposition+"px";
    var vague=document.querySelector(".vague")
    vague.style.width = w-120+"px"
  }

  init()

//=========Mvmt sheep=============

  function infosClavier(e) {
    var compteur = Number(e.keyCode);
    switch (compteur){
    case 37:
    if (position >60){
      position=position-50
      wposition=wposition-50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px"
      var wpos=document.querySelector(".weapon")
      wpos.style.left = wposition+"px"
    }
      break;
    case 39:
    if (position < w-80){
      position=position+50
      wposition=wposition+50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px"
      var wpos=document.querySelector(".weapon")
      wpos.style.left = wposition+"px"
      break;
    }
    case 32:
      shoot()
    break;
    }

  }

  document.addEventListener("keydown", infosClavier)

//=========shoot============

var weapon=document.querySelector(".weapon")

    var vitesse=4

var xBloc=50

function shoot(){


    console.log(vitesse);
    xBloc = parseFloat(getComputedStyle(weapon).bottom);
    weapon.style.bottom = (xBloc + vitesse) + "px";
    console.log(xBloc);

    if(xBloc < h){
      requestAnimationFrame(shoot);
    } else {
      xBloc=50
    }


}
