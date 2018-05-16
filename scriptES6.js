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
      case 37:
        left()
        break;
      case 39:
        right()
        break;
    }
  }

  var infosClavier2 = e => {
    let number2 = Number(e.keyCode)
    switch (number2) {
      case 32:
        if(shootAgain){
          shoot()
        }
        break;
    }
  }

  document.addEventListener("keydown", infosClavier);
  document.addEventListener("keyup", infosClavier2) //only for shooting

//===============VARIABLES=============
  //=====window dimensions=====
    l=window.innerWidth
    h=window.innerHeight
  //=====canvas=====
    const vague = document.getElementById("vagues")
    const ctx = vague.getContext('2d')
  //=====generals variables=====
    let widthElements=85
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
      , hit
      , borderRight=300
      , borderLeft=100
      , test=true
      //==initialisation==
      , rowWave=0 //for counting rows
      , number=0 //for id of elements
      , xWave=150 //start pos x
      , yWave=25  //start pos y
      //===ship===
      , xShip=l/2-widthElements/2 //pos x Ship
      , yShip=800 //pos y Ship
      , shipSpeed=1 //moving Ship
      //===weapon===
      , weaponHeight=30 //hight of missils
      , weaponWidth=5 //width of missils
      , shootSpeed=5 //missil move
      , xWeapon
      , yWeapon
      , moving
      , shootAgain=true
      //===ennemi===
      , move1
      , xEnemiWeapon
      , yEnemiWeapon
      , enemiShootSpeed=3

//=============INITIALIZING===========

  var init = () => {
    let row=rowWave
    let y=yWave
      ctx.fillStyle="green"
      ctx.fillRect(xShip, yShip, widthElements, heightElements)
    while (row < finalRowWave) {
      let x=xWave
      for (i=0; i<waveElements; i++){
        ctx.fillStyle="red"
        ctx.fillRect(x, y, widthElements, heightElements)
        enemiNumber[number]={xWeapon:x, yWeapon:y, id:number, active:true}
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
        ctx.clearRect(x-waveSpeed,y, widthElements, heightElements)
        ctx.fillStyle="red"
        ctx.fillRect(x,y,widthElements,heightElements)
      }
      x+=spaceWaveElements
    }
    if(xWave>=borderRight){
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
        ctx.clearRect(x+waveSpeed,y, widthElements, heightElements)
        ctx.fillStyle="red"
        ctx.fillRect(x,y,widthElements,heightElements)
      }
      x+=spaceWaveElements
    }
    if(test){
      if(enemiNumber[0].active===false && enemiNumber[10].active===false && enemiNumber[20].active===false && enemiNumber[30].active===false && enemiNumber[40].active===false ){
        borderLeft-=spaceWaveElements
        console.log("borderLeft");
      }
      test=false
    }
    if(xWave<=borderLeft){
      waveMoveRight=true
    }
  }

//============SHOOT================

  var shoot=()=>{
    shootAgain=false
    xWeapon=xShip+widthElements/2
    yWeapon=yShip-weaponHeight
    ctx.fillStyle="yellow"
    ctx.fillRect(xWeapon, yWeapon, weaponWidth, weaponHeight)
    moving=setInterval(moveShoot,10)
    setInterval(hitBox,20)
  }

  let moveShoot=()=>{
    ctx.clearRect(xWeapon, yWeapon, weaponWidth+1, weaponHeight)
    yWeapon-=shootSpeed
    ctx.fillStyle="yellow"
    ctx.fillRect(xWeapon, yWeapon, weaponWidth, weaponHeight)
    if(yWeapon<0-weaponHeight){
      clearInterval(moving)
      shootAgain=true
    }
  }

//=================Hit Box==================

  var hitBox = () => {
    let xLeft=xWave
    let xRight=xWave+widthElements
    let yUp=yWave
    let yDown=yWave+heightElements
    for(i=0;i<enemiNumber.length;i++){
      if(enemiNumber[i].active){
        if(xLeft<xWeapon && xRight>xWeapon && yDown>yWeapon && yUp<yWeapon){
          clearInterval(moving)
          ctx.clearRect(xWeapon, yWeapon, weaponWidth, weaponHeight)
          xWeapon=0
          yWeapon=0
          shootAgain=true
          ctx.clearRect(xLeft, yUp, widthElements, heightElements)
          enemiNumber[i].active=false
          console.log("test");
        }
      }
      xLeft+=spaceWaveElements
      xRight+=spaceWaveElements
      if(i===9 || i===19 || i===29 || i===39){
        yUp+=spaceWaveElementsHeight
        yDown+=spaceWaveElementsHeight
        xLeft=xWave
        xRight=xWave+widthElements
      }
      if(i===49){
        xLeft=xWave
        xRight=xWave+widthElements
        yUp=yWave
        yDown=yWave+heightElements
      }
    }
  }

//==================SHIP=====================

  var right = ()=>{
    let myInterval = setInterval(rightMove,5)
    setTimeout(()=>clearInterval(myInterval),150)
  }

  var left = ()=>{
    let myInterval = setInterval(leftMove,5)
    setTimeout(()=>clearInterval(myInterval),150)
  }

  var rightMove = ()=>{
    if(xShip<=1850){
      ctx.clearRect(xShip-5, yShip, widthElements+1, heightElements)
        xShip+=shipSpeed
      ctx.fillStyle="green"
      ctx.fillRect(xShip, yShip, widthElements, heightElements)
    }
  }

  var leftMove = ()=>{
    if(xShip>=100){
      ctx.clearRect(xShip, yShip, widthElements+1, heightElements)
        xShip-=shipSpeed
      ctx.fillStyle="green"
      ctx.fillRect(xShip, yShip, widthElements, heightElements)
    }
  }
