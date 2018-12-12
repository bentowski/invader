
  //==============INTERACTION================

    var infosClavier = e => {
      let number = Number(e.keyCode);
      switch (number) {
        case 13:
         if(firstInit){
           erase()
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

    document.addEventListener("keypress", infosClavier);
    document.addEventListener("keyup", infosClavier2) //only for shooting

  //===============VARIABLES=============
    //=====window dimensions=====
      l=window.innerWidth
      h=window.innerHeight
    //=====canvas=====
      const vague = document.getElementById("vagues")
      const ctx = vague.getContext('2d')
      const img=new Image()
      const ship=new Image()
      const div=new Image()
    //=====generals variables=====
      let widthElements=85
        , heightElements=50
        , firstInit=true //for first initializing
        , level=1
        , waveMoveInterval
        , levelRunInterval
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
        , column=0
        , columnR=9
        //==initialisation==
        , rowWave=0 //for counting rows
        , number=0 //for id of elements
        , xWave=150 //start pos x
        , yWave=25  //start pos y
        //===ship===
        , xShip=l/2-widthElements/2 //pos x Ship
        , yShip=800 //pos y Ship
        , shipSpeed=1 //moving Ship
        , shipHeight=70
        //===weapon===
        , weaponHeight=70 //hight of missils
        , weaponWidth=20 //width of missils
        , shootSpeed=7 //missil move
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
      let row=rowWave // attribute a number for each enemies
      let y=yWave //hight for the top's row

      // drawing Ship
      ship.src='ship.png'
      ctx.drawImage(ship,xShip, yShip, widthElements, shipHeight)
      left() //problem, if the ship appears only at the first move, so call "left()" for make appears the ship directly

      //loop for waves
      while (row < finalRowWave) {
        let x=xWave // position "x" for the first line
        for (i=0; i<waveElements; i++){
          //drawing enemies
          img.src='chicken.png'
          ctx.drawImage(img, x, y, widthElements, heightElements)
          //situation of each enemy : actif or not
          enemiNumber[number]={xWeapon:x, yWeapon:y, id:number, active:true, life:0}
          enemiNumber[number].life=level //level is the number of shoot for kill enemies, upgraded for each wave
          x+=spaceWaveElements //position "x" for the next line
          number++
        }
        y+=spaceWaveElementsHeight //hight for the next row
        row++
      }
     waveMoveInterval= setInterval(move,10)
     levelRunInterval=setInterval(levelRun,10)
    }

  //===========WAVE MOVE===================

    var move = ()=>{waveMoveRight ? mvmtR() : (mvmtL(),console.log("interval"))}

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
          img.src='chicken.png'
          ctx.drawImage(img, x, y, widthElements, heightElements)
        }
        x+=spaceWaveElements
      }
      for(i=9;i!=0;i--){
          if(!enemiNumber[i].active && !enemiNumber[i+10].active && !enemiNumber[i+20].active && !enemiNumber[i+30].active && !enemiNumber[i+40].active){
          if(i===columnR){
            borderRight+=spaceWaveElements
            columnR-=1
          }
        }
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
          img.src='chicken.png'
          ctx.drawImage(img, x, y, widthElements, heightElements)
        }
        x+=spaceWaveElements
      }
      for(i=0;i<10;i++){
          if(!enemiNumber[i].active && !enemiNumber[i+10].active && !enemiNumber[i+20].active && !enemiNumber[i+30].active && !enemiNumber[i+40].active){
          if(i===column){
            borderLeft-=spaceWaveElements
            column+=1
          }
        }
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
      div.src='laser.png'
      ctx.drawImage(div, xWeapon, yWeapon, weaponWidth, weaponHeight)
      moving=setInterval(moveShoot,10)
      setInterval(hitBox,20)
    }

    let moveShoot=()=>{
      ctx.clearRect(xWeapon, yWeapon, weaponWidth+1, weaponHeight)
      yWeapon-=shootSpeed
      div.src='laser.png'
      ctx.drawImage(div, xWeapon, yWeapon, weaponWidth, weaponHeight)
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
          if(xLeft-5<xWeapon && xRight>xWeapon){
            if(yDown>yWeapon && yUp<yWeapon){
              clearInterval(moving)
              ctx.clearRect(xWeapon, yWeapon, weaponWidth+1, weaponHeight)
              xWeapon=0
              yWeapon=0
              enemiNumber[i].life-=1
              shootAgain=true
              if(enemiNumber[i].life===0){
                ctx.clearRect(xLeft, yUp, widthElements, heightElements)
                enemiNumber[i].active=false
              }
            }
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

  //=================level=================

    var levelRun=()=>{
      let x=0
      for(i=0; i<enemiNumber.length;i++){
        if(enemiNumber[i].active){
          x+=1
        }
      }
      if(x===0){
        level+=1
        ctx.clearRect(0,0,vagues.width, vagues.height)
        clearInterval(levelRunInterval)
        clearInterval(waveMoveInterval)
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
        ctx.clearRect(xShip-5, yShip, widthElements+1, shipHeight)
          xShip+=shipSpeed
          ship.src='ship.png'
          ctx.drawImage(ship,xShip, yShip, widthElements, shipHeight)
      }
    }

    var leftMove = ()=>{
      if(xShip>=100){
        ctx.clearRect(xShip, yShip, widthElements+1, shipHeight)
          xShip-=shipSpeed
          ship.src='ship.png'
          ctx.drawImage(ship,xShip, yShip, widthElements, shipHeight)
      }
    }

  //================BEFORE INIT=============

  let erase=()=>{
    let x=vagues.width
    let y=0
    let effacer=setInterval(()=>{
      x-=10
      ctx.clearRect(x, y, 10, vagues.height)
      if(x<0){
        clearInterval(effacer)
        init()
      }
    },10)
  }

  //=================MENU===================

  //============All posibilities for create letters=========

  let write=()=>{
    const vague = document.getElementById("vagues")
    const ctx = vague.getContext('2d')
    let x=200
      , y=200
      , cubeWidth=20
      , cubeHeight=20

    //Right
    rightLetter=()=>{
      for(i=0; i<4; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth
      }
    }

    rightNone=()=>{
      for(i=0; i<4; i++){
        x+=cubeWidth
      }
    }

    right2=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth
      }
    }

    right2None=()=>{
      for(i=0; i<2; i++){
        x+=cubeWidth
      }
    }


    leftLetter=()=>{
      for(i=0; i<4; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth
      }
    }

    leftNone=()=>{
      for(i=0; i<4; i++){
        x-=cubeWidth
      }
    }

    left2=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth
      }
    }


    left2None=()=>{
      for(i=0; i<3; i++){
        x-=cubeWidth
      }
    }

    up3=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        y-=cubeHeight
      }
    }

    up3None=()=>{
      for(i=0; i<3; i++){
        y-=cubeHeight
      }
    }

    down3=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        y+=cubeHeight
      }
    }

    down3None=()=>{
      for(i=0; i<3; i++){
        y+=cubeHeight
      }
    }

    height=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        y-=cubeHeight
      }
      x+=cubeWidth
      y+=cubeHeight
    }

    heightNone=()=>{
      for(i=0; i<6; i++){
        y-=cubeHeight
      }
    }

    floor=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        y+=cubeHeight
      }
    }

    floorNone=()=>{
      for(i=0; i<6; i++){
        y+=cubeHeight
      }
    }

    upLeft=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth/2
        y-=cubeHeight
      }
    }

    downLeft=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth/2
        y+=cubeHeight
      }
    }

    halfUpLeft=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth/2
        y-=cubeHeight
      }
    }

    halfUpLeftNone=()=>{
      for(i=0; i<3; i++){
        x-=cubeWidth/2
        y-=cubeHeight
      }
    }

    halfDownLeft=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x-=cubeWidth/2
        y+=cubeHeight
      }
    }

    halfDownLeftNone=()=>{
      for(i=0; i<3; i++){
        x-=cubeWidth/2
        y+=cubeHeight
      }
    }

    upRight=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth/2
        y-=cubeHeight
      }
      y+=cubeHeight
    }

    downRight=()=>{
      for(i=0; i<6; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth/2
        y+=cubeHeight
      }
    }

    halfUpRight=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth/2
        y-=cubeHeight
      }
    }

    halfUpRightNone=()=>{
      for(i=0; i<3; i++){
        x+=cubeWidth/2
        y-=cubeHeight
      }
    }

    halfDownRight=()=>{
      for(i=0; i<3; i++){
        ctx.fillStyle="yellow"
        ctx.fillRect(x,y,cubeWidth, cubeHeight)
        x+=cubeWidth/2
        y+=cubeHeight
      }
    }

    halfDownRightNone=()=>{
      for(i=0; i<3; i++){
        x+=cubeWidth/2
        y+=cubeHeight
      }
    }

    //=========Instructions for each letter=======

    //================    A
    aLetter=()=>{
      x-=cubeWidth*2
      upRight()
      downRight()
      halfUpLeftNone()
      leftLetter()
    }

    //================    B
    bLetter=()=>{
      height()
      rightLetter()
      down3()
      leftLetter()
      rightNone()
      down3()
      leftLetter()
    }

    //================    C
    cLetter=()=>{
      rightNone()
      leftLetter()
      height()
      rightLetter()
    }

    //================    D

    //================    E
    eLetter = ()=>{
      console.log("test");
      rightLetter()
      leftNone()
      up3()
      y+=cubeHeight
      right2()
      left2None()
      up3()
      rightLetter()
    }

    //================    F
    fLetter=()=>{
      heightNone()
      rightNone()
      leftLetter()
      floor()
      up3None()
      right2()
    }

    //================    G
    gLetter=()=>{
      heightNone()
      rightNone()
      leftLetter()
      floor()
      rightLetter()
      up3()
      left2()
    }


    //================    H
    hLetter=()=>{
      height()
      down3None()
      right2()
      up3None()
      floor()
    }

    //================    I
    iLetter=()=>{
      rightLetter()
      left2None()
      x+=cubeWidth/2
      height()
      left2None()
      x+=cubeWidth/2
      rightLetter()
    }

    //================    J
    jLetter=()=>{
      rightLetter()
      height()
      left2()
    }

    //================    K
    kLetter=()=>{
      height()
      down3None()
      halfUpRight()
      halfDownLeftNone()
      halfDownRight()
    }

    //================    L
    lLetter=()=>{
      rightLetter()
      leftNone()
      height()
    }

    //================    M
    mLetter=()=>{
      height()
      halfDownRight()
      y-=cubeHeight
      halfUpRight()
      y+=cubeHeight
      x+=cubeWidth/2
      floor()
      y-=cubeHeight
    }

    //================    N
    nLetter=()=>{
      height()
      downRight()
      y-=cubeHeight
      height()
    }

    //================    O
    oLetter=()=>{
      height()
      rightLetter()
      x-=cubeWidth
      floor()
      y-=cubeHeight
      leftLetter()
    }

    //================    P
    pLetter=()=>{
      height()
      x-=cubeWidth
      rightLetter()
      down3()
      leftLetter()
      y+=cubeHeight*2
    }

    //================    Q

    //================    R
    rLetter=()=>{
      height()
      x-=cubeWidth
      rightLetter()
      down3()
      leftLetter()
      x+=cubeWidth*2
      halfDownRight()
    }

    //================    S
    sLetter=()=>{
      rightLetter()
      x-=cubeWidth
      up3()
      y+=cubeHeight
      leftLetter()
      x+=cubeWidth
      up3()

      rightLetter()
    }

    //================    T
    tLetter=()=>{
      y+=cubeHeight
      heightNone()
      rightLetter()
      left2None()
      x+=cubeWidth/2
      floor()
      y-=cubeHeight
    }

    //================    U
    uLetter=()=>{
      y+=cubeHeight
      heightNone()
      floor()
      y-=cubeHeight
      rightLetter()
      height()
    }

    //================    V
    vLetter=()=>{
      heightNone()
      downRight()
      y-=cubeHeight
      upRight()
    }

    //================    W
    wLetter=()=>{
      heightNone()
      downRight()
      y-=cubeHeight
      halfUpRight()
      halfDownRight()
      upRight()
    }

    //================    X
    xLetter=()=>{
      upRight()
      left2None()
      downRight()
    }

    //================    Y
    yLetter=()=>{
      right2None()
      up3()
      x-=cubeWidth/2
      halfUpLeft()
      halfDownRightNone()
      x+=cubeWidth
      halfUpRight()
    }

    //================    Z
    zLetter=()=>{
      heightNone()
      rightLetter()
      x-=cubeWidth
      downLeft()
      y-=cubeHeight
      rightLetter()
    }

    //====== Instructions for call goods letter corresponding with the text to print=====

    var phrase="press enter to start" //select the text to print
    var array= phrase.split("")
    let number=0
    for(p=0; p<array.length; p++){
      number+=1
      letter=array[p]
      if(p===11){
        number=1
      }
      if(p<11){
        y=200
      }else{
        y=200+cubeHeight*12
      }
      x=200+cubeWidth*6*number

      switch(letter){
        case "a":
          aLetter()
          x+=cubeWidth
          break;
        case "b":
          bLetter()
          x+=cubeWidth
          break;
        case "c":
          cLetter()
          x+=cubeWidth
          break;
        case "d":
          dLetter()
          x+=cubeWidth
          break;
        case "e":
          eLetter()
          x+=cubeWidth
          break;
        case "f":
          fLetter()
          x+=cubeWidth
          break;
        case "g":
          gLetter()
          x+=cubeWidth
          break;
        case "h":
          hLetter()
          x+=cubeWidth
          break;
        case "i":
          iLetter()
          x+=cubeWidth
          break;
        case "j":
          jLetter()
          x+=cubeWidth
          break;
        case "k":
          kLetter()
          x+=cubeWidth
          break;
        case "l":
          lLetter()
          x+=cubeWidth
          break;
        case "m":
          mLetter()
          x+=cubeWidth
          break;
        case "n":
          nLetter()
          x+=cubeWidth
          break;
        case "o":
          oLetter()
          x+=cubeWidth
          break;
        case "p":
          pLetter()
          x+=cubeWidth
          break;
        case "q":
          qLetter()
          x+=cubeWidth
          break;
        case "r":
          rLetter()
          x+=cubeWidth
          break;
        case "s":
          sLetter()
          x+=cubeWidth
          break;
        case "t":
          tLetter()
          x+=cubeWidth
          break;
        case "u":
          uLetter()
          x+=cubeWidth
          break;
        case "v":
          vLetter()
          x+=cubeWidth
          break;
        case "w":
          wLetter()
          x+=cubeWidth
          break;
        case "x":
          xLetter()
          x+=cubeWidth
          break;
        case "z":
          zLetter()
          x+=cubeWidth
          break;
      }
    }
  }
write()
