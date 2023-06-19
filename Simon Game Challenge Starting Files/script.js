buttonColors = [ "red" , "blue" , "green" , "yellow"];
gamePattern = []
userPattern = []
var level = 0
var start = false
$(".btn").click(function(event){
  userPattern.push(event.target.id);
  let k=event.target.id
  playSound(event.target.id)
  console.log(userPattern)
  animatePress(k)
  checkAnswer(userPattern.length-1)
})

function checkAnswer(curlevel)
{
    if(gamePattern[curlevel]=== userPattern[curlevel])
    {
        if(userPattern.length === gamePattern.length)
        {
            setTimeout( ()=>{sequenceGen()},1000)
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
} 

function animatePress(k){
    $('#'+k).addClass("pressed");
    setTimeout(()=>{$('#'+k).removeClass("pressed");},200)
    
}
sequenceGen = () => {
    userPattern=[]
    level++
    $("h1").text("level " + level)
    let x= Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[x]);
    $("#" + buttonColors[x]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(buttonColors[x])
}

function playSound(p)
{
var audio = new Audio("sounds/" + p + ".mp3");
audio.play();
}

$(document).keypress(function(){
    if(!start)
    {
    sequenceGen()
    start = true;
    }
})
function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
  }