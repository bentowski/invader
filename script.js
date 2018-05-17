const vague = document.getElementById("vagues")
const ctx = vague.getContext('2d')
let x=300
  , y=200
  , cubeWidth=20
  , cubeHeight=20

//Right
right=()=>{
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


left=()=>{
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

//================    A
aLetter=()=>{
  upRight()
  downRight()
  halfUpLeftNone()
  left()
}

//================    B
bLetter=()=>{
  height()
  right()
  down3()
  left()
  rightNone()
  down3()
  left()
}

//================    C
cLetter=()=>{
  rightNone()
  left()
  height()
  right()
}

//================    D

//================    E
eLetter = ()=>{
  console.log("test");
  right()
  leftNone()
  up3()
  right2()
  left2None()
  up3()
  right()
}

//================    F
fLetter=()=>{
  heightNone()
  rightNone()
  left()
  floor()
  up3None()
  right2()
}

//================    G
gLetter=()=>{
  heightNone()
  rightNone()
  left()
  floor()
  right()
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
  right()
  left2None()
  x+=cubeWidth/2
  height()
  left2None()
  x+=cubeWidth/2
  right()
}

//================    J
jLetter=()=>{
  right()
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
  right()
  leftNone()
  height()
}

//================    M
mLetter=()=>{
  height()
  halfDownRight()
  y-=cubeHeight
  halfUpLeft()
  y+=cubeHeight
  x+=cubeWidth/2
  floor()
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
  right()
  x-=cubeWidth
  floor()
  y-=cubeHeight
  left()
}

//================    P
pLetter=()=>{
  height()
  x-=cubeWidth
  right()
  down3()
  left()
}

//================    Q

//================    R
rLetter=()=>{
  height()
  x-=cubeWidth
  right()
  down3()
  left()
  x+=cubeWidth*2
  halfDownRight()
}

//================    S
sLetter=()=>{
  right()
  x-=cubeWidth
  up3()
  left()
  x+=cubeWidth
  up3()
  right()
}

//================    T
tLetter=()=>{
  heightNone()
  right()
  left2None()
  x+=cubeWidth/2
  floor()
}

//================    U
uLetter=()=>{
  heightNone()
  floor()
  y-=cubeHeight
  right()
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
  right()
  x-=cubeWidth
  downLeft()
  y-=cubeHeight
  right()
}
var phrase=prompt("saisissez un mot")
var array= //récupérer les lettres et les placer dans le tableau
for(i=0; i<array.length; i++){
  letter=array[i]
  swicth(letter){
    case a:
      aLetter()
      x+=cubeWidth
      break;
    case b:
      bLetter()
      x+=cubeWidth
      break;
    case c:
      cLetter()
      x+=cubeWidth
      break;
    case d:
      dLetter()
      x+=cubeWidth
      break;
    case e:
      eLetter()
      x+=cubeWidth
      break;
    case f:
      fLetter()
      x+=cubeWidth
      break;
    case g:
      gLetter()
      x+=cubeWidth
      break;
    case h:
      hLetter()
      x+=cubeWidth
      break;
    case i:
      iLetter()
      x+=cubeWidth
      break;
    case j:
      jLetter()
      x+=cubeWidth
      break;
    case k:
      kLetter()
      x+=cubeWidth
      break;
    case l:
      lLetter()
      x+=cubeWidth
      break;
    case m:
      mLetter()
      x+=cubeWidth
      break;
    case n:
      nLetter()
      x+=cubeWidth
      break;
    case o:
      oLetter()
      x+=cubeWidth
      break;
    case p:
      pLetter()
      x+=cubeWidth
      break;
    case q:
      qLetter()
      x+=cubeWidth
      break;
    case r:
      rLetter()
      x+=cubeWidth
      break;
    case s:
      sLetter()
      x+=cubeWidth
      break;
    case t:
      tLetter()
      x+=cubeWidth
      break;
    case u:
      uLetter()
      x+=cubeWidth
      break;
    case v:
      vLetter()
      x+=cubeWidth
      break;
    case w:
      wLetter()
      x+=cubeWidth
      break;
    case x:
      xLetter()
      x+=cubeWidth
      break;
    case z:
      zLetter()
      x+=cubeWidth
      break;
  }
}
