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
const ship = document.getElementById("ship")
const shipCtx = ship.getContext('2d')
let widthElements=0
  , finalWidthElements=85
  , heightElements=50
  , columnWidth=1 //segments width for creation of Elements
  , waveElements=10
  , spaceWaveElements=170
  , spaceWaveElementsHeight=90
  , xShip=l/2-finalWidthElements/2
  , yShip=0
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
  , shootSpeed=5
  , waveSpeed=20
  , red=waveSpeed+2
  , Black=waveSpeed+2
  , xRed=xWave+finalWidthElements
  , xBlack=xWave

//=============initialisation===========

var init = () => {
  let row=rowWave
  let y=yWave
  while (widthElements<finalWidthElements) {
    shipCtx.fillStyle="green"
    shipCtx.fillRect(xShip, yShip, columnWidth, heightElements)
    xShip++
    widthElements++
  }
 //  while (row < finalRowWave) {
 //    let x=xWave
 //    for (i=0; i<waveElements; i++){
 //      ctx.fillStyle="red"
 //      ctx.fillRect(x, y, finalWidthElements, heightElements)
 //      x+=spaceWaveElements
 //    }
 //    y+=spaceWaveElementsHeight
 //    row++
 //  }
 // setInterval(move,500)
}

//===========Wave Move===================

var move = ()=>{waveMoveRight ? mvmtR() : mvmtL()}

var mvmtR = ()=>{
  let y=yWave
  let row=rowWave
  console.log("width"+finalWidthElements);
  console.log("previous=================="+previousWaveMove);
  previousWaveMove ? (xRed+=finalWidthElements-columnWidth-waveSpeed, xBlack-=finalWidthElements+waveSpeed) : false
  xRed+=waveSpeed
  xBlack+=waveSpeed

  while (row<finalRowWave){
    let xa=xRed
    let xb=xBlack
    for(i=0; i<waveElements; i++){
      ctx.fillStyle="red"
      ctx.fillRect(xa-waveSpeed, y, red, heightElements)
      xa+=spaceWaveElements
      console.log("xar"+i+xa);
      ctx.fillStyle="black"
      ctx.fillRect(xb-waveSpeed, y, Black, heightElements)
      xb+=spaceWaveElements
      console.log("xbr"+i+xb)
    }
    y+=spaceWaveElementsHeight
    row++

    (xa>=vagues.width) ? waveMoveRight=false : waveMoveRight=true
  }
previousWaveMove=false;
console.log(previousWaveMove);
}

var mvmtL = ()=>{
  let y=yWave;
  let row=rowWave;
  !previousWaveMove ? (xRed-=finalWidthElements-waveSpeed-columnWidth, xBlack+=finalWidthElements+waveSpeed) : false;
  xRed-=waveSpeed;
  xBlack-=waveSpeed;
  while(row<finalRowWave){
    let xa=xRed;
    let xb=xBlack;
    for(i=0; i<waveElements; i++){
      ctx.fillStyle="red";
      ctx.fillRect(xa-waveSpeed, y, red, heightElements);
      xa+=spaceWaveElements;
      console.log("xal"+i+xa)
      ctx.fillStyle="black";
      ctx.fillRect(xb-waveSpeed, y, Black, heightElements);
      xb+=spaceWaveElements;
      console.log("xbl"+i+xb)
    }
    y+=spaceWaveElementsHeight;
    row++;
    (xb<=1900) ? waveMoveRight=true : waveMoveRight=false;
  }
  previousWaveMove=true;
  console.log(previousWaveMove);
}

//==================ship=====================
var right = ()=>{
  (xShip<l-100) ? ((previousMove==="left") ? hardRightMove() : false, rightMove()) : false
}

var left = ()=>{
  (xShip>(100+finalWidthElements)) ? ((previousMove==="right") ? hardLeftMove() : false, leftMove()) : false
}

var rightMove = ()=>{
  shipCtx.fillStyle="green"
  shipCtx.fillRect(xShip, yShip, green, heightElements)
  let move=xShip-86
  shipCtx.fillStyle="black"
  shipCtx.fillRect(move,yShip,black,heightElements)
  xShip+=shipSpeed
  previousMove="right"
}

var hardRightMove = ()=>{
  shipCtx.fillStyle="green"
  shipCtx.fillRect(xShip-9, yShip, green, heightElements)
  let move=xShip-89
  shipCtx.fillStyle="black"
  shipCtx.fillRect(move,yShip,black,heightElements)
}

var leftMove = ()=>{
  shipCtx.fillStyle="green"
  shipCtx.fillRect(xShip-95, yShip, green, heightElements)
  let move=xShip-10
  shipCtx.fillStyle="black"
  shipCtx.fillRect(move,yShip,black,heightElements)
  xShip-=shipSpeed
  previousMove="left"
}

var hardLeftMove = ()=>{
  shipCtx.fillStyle="green"
  shipCtx.fillRect(xShip-86, yShip, green, heightElements)
  let move=xShip-9
  shipCtx.fillStyle="black"
  shipCtx.fillRect(move,yShip,black,heightElements)
}
