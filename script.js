
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
    if (position >350){
      position=position-50
      wposition=wposition-50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px"
      var wpos=document.querySelector(".weapon")
      wpos.style.left = wposition+"px"
    }
      break;
    case 39:
    if (position < w-320){
      position=position+50
      wposition=wposition+50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px"
      var wpos=document.querySelector(".weapon")
      wpos.style.left = wposition+"px"
      break;
    }
    case 32:
      miss()
    break;
    }

  }

  document.addEventListener("keydown", infosClavier)

//=========shoot============
var i=0
var e=1
var munition=[]
var yBloc=50
var vitesse=7

var mmissil ={
  mwidth:3,
  mheight:10,
  mcolor:"yellow",
  active:true
}


function miss(){
    munition[i]=Object.create(mmissil)
    document.getElementById("weapon").innerHTML += '<div class="missil"></div>';

    shoot()

    i++
    e=e*2
    console.log(munition)
}

function shoot(){
  var color=document.querySelector(".missil")
  color.style.backgroundColor = mmissil.mcolor
}
