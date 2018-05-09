//==============Interaction================

var infosClavier = e => {
  let number = Number(e.keyCode);
  switch (number) {
    case 32:
      shoot();
      break;
    case 37:
      left();
      break;
    case 39:
      right();
      break;
    case 13:
      init();
      break;
  }
}

var infosClavier2 = a => {
  let number = Number(a.keyCode);
  console.log(number);
  switch (number) {
    case 37:
    stop()
      break;
    case 39:
    stop()
      break;
  }
}


document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier2);

//===============variables=============
l=window.innerWidth
h=window.innerHeight
const vague = document.getElementById("vagues")
const ctx = vague.getContext('2d')
let widthElements=0
  , finalWidthElements=85
  , heightElements=50
  , columnWidth=1 //segments width for creation of Elements
  , waveElements=10
  , spaceWaveElements=170
  , spaceWaveElementsHeight=90
  , xShip=l/2-finalWidthElements/2
  , yShip=800
  , rowWave=0
  , finalRowWave=5
  , xWave=150
  , yWave=25
  , previousMove=""
  , shipSpeed=1
  , green=shipSpeed+1
  , black=shipSpeed+2
  , waveMoveRight=true
  , previousWaveMove=""
  , shootSpeed=20
  , waveSpeed=1
  , red=waveSpeed+2
  , Black=waveSpeed+2
  , xRed=xWave+finalWidthElements
  , xBlack=xWave
  , enemiNumber=[]
  , number=0
  , weaponHeight=30
  , weaponWidth=5
  , yWeapon=vagues.height-weaponHeight
  , xWeapon
  , moveShip=0
  , previous=true
  , leftShip
  , rightShip

//=============initialisation===========

var init = () => {
  let row=rowWave
  let y=yWave
    ctx.fillStyle="green"
    ctx.fillRect(xShip, yShip, finalWidthElements, heightElements)
  while (row < finalRowWave) {
    let x=xWave
    for (i=0; i<waveElements; i++){
      ctx.fillStyle="red"
      ctx.fillRect(x, y, finalWidthElements, heightElements)
      enemiNumber[number]={id:number, active:true}
      x+=spaceWaveElements
      number++
    }
    y+=spaceWaveElementsHeight
    row++
  }
 setInterval(move,10)
}

//===========Wave Move===================

var move = ()=>{waveMoveRight ? mvmtR() : mvmtL()}

var mvmtR = ()=>{
  xWave+=waveSpeed
  let y=yWave
  let x=xWave
  for(i=0;i<enemiNumber.length;i++){
    if(i===10 || i===20 || i===30 || i===40){
      y+=spaceWaveElementsHeight
      x=xWave
    }
      if(enemiNumber[i].active){
        ctx.clearRect(x-waveSpeed,y, finalWidthElements, heightElements)
        ctx.fillStyle="red"
        ctx.fillRect(x,y,finalWidthElements,heightElements)
      }
      x+=spaceWaveElements
    }
    if(xWave>=300){
      waveMoveRight=false
    }
  }



  var mvmtL = ()=>{
    xWave-=waveSpeed
    let y=yWave
    let x=xWave
    for(i=0;i<enemiNumber.length;i++){
      if(i===10 || i===20 || i===30 || i===40){
        y+=spaceWaveElementsHeight
        x=xWave
      }
        if(enemiNumber[i].active){
          ctx.clearRect(x+waveSpeed,y, finalWidthElements, heightElements)
          ctx.fillStyle="red"
          ctx.fillRect(x,y,finalWidthElements,heightElements)
        }
        x+=spaceWaveElements
      }
      if(xWave<=100){
        waveMoveRight=true
      }
    }


//==================ship=====================

var stop= ()=>{
  clearInterval(leftShip)
  clearInterval(rightShip)
}

var right = ()=>{
  clearInterval(leftShip)
  rightShip=setInterval(rightMove,10)
}

var left = ()=>{
  clearInterval(rightShip)
  leftShip=setInterval(leftMove,10)
}

var rightMove = ()=>{
  ctx.clearRect(xShip, yShip, finalWidthElements+1, heightElements)
  // if(!previous){
    xShip+=shipSpeed
  // }
  ctx.fillStyle="green"
  ctx.fillRect(xShip, yShip, finalWidthElements, heightElements)
  // previous=true
  console.log(shipSpeed);
  console.log(xShip);
}

var leftMove = ()=>{
  ctx.clearRect(xShip, yShip, finalWidthElements+1, heightElements)
  // if(previous){
    xShip-=shipSpeed
  // }
  ctx.fillStyle="green"
  ctx.fillRect(xShip, yShip, finalWidthElements, heightElements)
  // previous=false
}


//============shoot================

var shoot=()=>{
  xWeapon=xShip-finalWidthElements/2
  yWeapon=yShip-heightElements
  ctx.fillStyle="yellow"
  ctx.fillRect(xWeapon, yWeapon , weaponWidth, weaponHeight)
  setInterval(moveWeapon,500)
}


var moveWeapon = ()=>{
  ctx.clearRect(xWeapon,yWeapon,weaponWidth+1,weaponHeight)
  yWeapon-=shootSpeed
  ctx.fillStyle="yellow"
  ctx.fillRect(xWeapon,yWeapon,weaponWidth,weaponHeight)
}

// var shOot = ()=> {new shoot()}
