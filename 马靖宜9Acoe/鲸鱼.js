document.addEventListener('DOMContentLoaded',()  => {
    const whale =document.querySelector('.whale')
    const grid= document.querySelector('.grid')
    let isJumping=false 
    let gravity=0.9
    let position=0
    let count =0
    let points=0
    let isGameOver=false
    let sound = document.getElementById("背景音乐")

document.addEventListener('keyup',control)


function control(e) {
    if (e.keyCode === 32){
        if(isJumping === false){                
            jump()
            isJumping = true
        }            
  }
} 

function jump(){
    let timerId=setInterval(function(){
//move up
    position += 30
    position = position * gravity
    count ++
    whale.style.bottom = position + 'px'
//check if player reaches vertex
    if (count===15){
        clearInterval(timerId)
        let downTimer=setInterval(function(){

//check if player reaches ground 
if(count===0){
    clearInterval(downTimer) 
   isJumping=false
    }
//move down
position -= 5
position = position * gravity
count --
whale.style.bottom=position+'px'


},20)
        }
    },20)
}

function generateObstacles(){ 

    let obstaclePosition = 1400
    const obstacle = document.createElement('div')

    if (isGameOver === false){
    obstacle.classList.add('monster')
    grid.appendChild(obstacle) 
    obstacle.style.left= obstaclePosition +'px'
    playMusic()
}
  
    let zhangai=setInterval(function(){
      obstaclePosition -= 10
      obstacle.style.left = obstaclePosition +'px'
    
        if(obstaclePosition>0 && obstaclePosition<80 && position<80)
        {
        alert("怪兽抓到了鲸鱼！游戏失败.")
        isGameOver=true
        pauseMusic()
        clearInterval(zhangai)
    }
        score.innerHTML="score:"+points
        
    } , 20)
  
  setTimeout(generateObstacles, 2000)
  
  }
  
generateObstacles()

function updateScore(){
    let timer=setInterval(function(){
      if (isGameOver===true){
        clearInterval(timer)
      }
       points+=1
    },100)   
} 

updateScore()
      
function playMusic(){
    sound.play()
}
function pauseMusic(){
    sound.pause()
}
  } )
  
  
  
