
//=============poule1=============
  var poule1 = document.getElementById('Poule1');
  var p1 = poule1.getContext('2d');
  p1.fillStyle = 'red';
  p1.fillRect(30, 10, 100, 100);

//=============poule2=============
  var poule2 = document.getElementById('Poule2');
  var p2 = poule2.getContext('2d');
  p2.fillStyle = 'red';
  p2.fillRect(30, 10, 100, 100);

//=============poule3=============
  var poule3 = document.getElementById('Poule3');
  var p3 = poule3.getContext('2d');
  p3.fillStyle = 'red';
  p3.fillRect(30, 10, 100, 100);

//=============poule4=============
  var poule4 = document.getElementById('Poule4');
  var p4 = poule4.getContext('2d');
  p4.fillStyle = 'red';
  p4.fillRect(30, 10, 100, 100);

//=============poule5=============
  var poule5 = document.getElementById('Poule5');
  var p5 = poule5.getContext('2d');
  p5.fillStyle = 'red';
  p5.fillRect(30, 10, 100, 100);

  //==========taille fenetre==============

  var w=window.innerWidth
  var position=w/2;

  function init(){
    var ini=document.querySelector(".ship")
    ini.style.left = position+"px";
    console.log(w);
  }

  init()

//=========Mvmt sheep=============

  function infosClavier(e) {
    var compteur = Number(e.keyCode);
    switch (compteur){
    case 37:
    if (position >60){
      position=position-50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px";
    }
      break;
    case 39:
    if (position < w-60){
      position=position+50
      var pos=document.querySelector(".ship")
      pos.style.left = position+"px";
      break;
    }
    case 32:
      shoot()
    break;
    }

  }

  document.addEventListener("keydown", infosClavier)

//=========shoot============

function shoot(){

}
