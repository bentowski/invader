                  //==============INTERACTION================

var infosClavier = e => {
  let number = Number(e.keyCode);
  switch (number) {
    case 13:
     if(firstInit){
       init()
       firstInit=false
     }
      break;
  }
}

var infosClavier2 = e => {
  let number2 = Number(e.keyCode)
  console.log(number2);
  switch (number2) {
    case 32:
      shoot()
      break;
    case 37:
      leftMove()
      break;
    case 39:
      rightMove()
      break;
  }
}

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier2)

                  //===============VARIABLES=============
            //=====window dimensions=====
l=window.innerWidth
h=window.innerHeight
            //=====canvas=====
const vague = document.getElementById("vagues")
const ctx = vague.getContext('2d')
            //=====generals variables=====
let finalWidthElements=85
  , heightElements=50
  , firstInit=true //for first initializing
            //===wave===
  , spaceWaveElements=170 //space around elements horizontal
  , spaceWaveElementsHeight=90 //space around rows
  , waveElements=10 //number of elements by row
  , finalRowWave=5 //number of row
  , waveMoveRight=true //moving wave at right or left
  , enemiNumber=[] //for id of elements
  , waveSpeed=1 //for moving (about the setInterval at 10ms => 1*(60/10)move/s => 6move/s  )
    //==initialisation==
  , rowWave=0 //for counting rows
  , number=0 //for id of elements
  , xWave=150 //start pos x
  , yWave=25  //start pos y
            //===ship===
  , xShip=l/2-finalWidthElements/2 //pos x Ship
  , yShip=800 //pos y Ship
  , shipSpeed=20 //moving Ship
            //===weapon===
  , weaponHeight=30 //hight of missils
  , weaponWidth=5 //width of missils
  , yWeapon=vagues.height-weaponHeight //start pos y
  , xWeapon //position x (it's about the xShip)
  , shootSpeed=20 //missil move

                    //=============INITIALIZING===========

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

                    //===========WAVE MOVE===================

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

                //==================SHIP=====================

var rightMove = ()=>{
  if(xShip<=1850){
    ctx.clearRect(xShip, yShip, finalWidthElements+1, heightElements)
      xShip+=shipSpeed
    ctx.fillStyle="green"
    ctx.fillRect(xShip, yShip, finalWidthElements, heightElements)

  }
}

var leftMove = ()=>{
  if(xShip>=100){
    ctx.clearRect(xShip, yShip, finalWidthElements+1, heightElements)
      xShip-=shipSpeed
    ctx.fillStyle="green"
    ctx.fillRect(xShip, yShip, finalWidthElements, heightElements)
  }
}

                  //============SHOOT================

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
