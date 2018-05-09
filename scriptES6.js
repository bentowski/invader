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

document.addEventListener("keydown", infosClavier);

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
  , shipSpeed=30
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

//=============initialisation===========

var init = () => {
  let row=rowWave
  let y=yWave
  while (widthElements<finalWidthElements) {
    ctx.fillStyle="green"
    ctx.fillRect(xShip, yShip, columnWidth, heightElements)
    xShip++
    widthElements++
  }
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
var right = ()=>{
  (xShip<l-100) ? ((previousMove==="left") ? hardRightMove() : false, rightMove()) : false
}

var left = ()=>{
  (xShip>(100+finalWidthElements)) ? ((previousMove==="right") ? hardLeftMove() : false, leftMove()) : false
}

var rightMove = ()=>{
  ctx.fillStyle="green"
  ctx.fillRect(xShip, yShip, green, heightElements)
  let move=xShip-86
  ctx.fillStyle="black"
  ctx.fillRect(move,yShip,black,heightElements)
  xShip+=shipSpeed
  previousMove="right"
}

var hardRightMove = ()=>{
  ctx.fillStyle="green"
  ctx.fillRect(xShip-9, yShip, green, heightElements)
  let move=xShip-89
  ctx.fillStyle="black"
  ctx.fillRect(move,yShip,black,heightElements)
}

var leftMove = ()=>{
  ctx.fillStyle="green"
  ctx.fillRect(xShip-95, yShip, green, heightElements)
  let move=xShip-10
  ctx.fillStyle="black"
  ctx.fillRect(move,yShip,black,heightElements)
  xShip-=shipSpeed
  previousMove="left"
}

var hardLeftMove = ()=>{
  ctx.fillStyle="green"
  ctx.fillRect(xShip-86, yShip, green, heightElements)
  let move=xShip-9
  ctx.fillStyle="black"
  ctx.fillRect(move,yShip,black,heightElements)
}

//============shoot================

var shoot=()=>{
  xWeapon=xShip-finalWidthElements/2
  yWeapon=yShip-heightElements
  ctx.fillStyle="yellow"
  ctx.fillRect(xWeapon, yWeapon , weaponWidth, weaponHeight)
  setInterval(moveWeapon,500)
  console.log("test1");
}


var moveWeapon = ()=>{
  console.log("test");
  ctx.clearRect(xWeapon,yWeapon,weaponWidth+1,weaponHeight)
  yWeapon-=shootSpeed
  ctx.fillStyle="yellow"
  ctx.fillRect(xWeapon,yWeapon,weaponWidth,weaponHeight)
}

// var shOot = ()=> {new shoot()}
