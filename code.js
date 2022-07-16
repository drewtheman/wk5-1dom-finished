//function for countdownTimer v1 for wk1-2
function blastoffTimerV1(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 1000)
     //8
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 2000)
     //7
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 3000)
     //6
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 4000)
     //5
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 5000)
     //4
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 6000)
     //3
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 7000)
     //2
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 8000)
     //1
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 9000)
     //blastoff
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
          console.log(currTime);
      }, 10000)
}

//!function to roll the dice v2
function playcraps(){
     console.log("playcraps() started");
     //generate variables: die1, die2, sum
     var die1;
     var die2;
     var sum;

     //roll the dice
     die1 =Math.floor(Math.random() * 6 + 1);
     console.log(die1)
     die2 =Math.floor(Math.random() * 6 + 1);
     console.log(die2)
     //determine the sum of the two dice and save it in sum
     sum = die1 + die2;
     console.log("sum is equal to " + sum);

     //follow the rules of craps and tell the status in crapsStatus
     //first lose
     if(sum == 7 || sum == 11){
          document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
     } else if(die1 == die2 && die1%2 == 0){
          document.getElementById("crapsStatus").innerHTML = "Huzzah! You win!"
     } else {
          document.getElementById("crapsStatus").innerHTML = "You did not win or lose. Please play again."
     }  
}

//!function for timer
function blastoffTimerV2(){
     console.log("blastoffTimerV2() started");
     //want a loop that runs 11 times, 10-1 and then blastoff
     var countdowntimer = 10;
     var stepTime = 1000;

     for(var i = 0; i < countdowntimer; i = i + 1){
          setTimeout(function(){
               console.log(countdowntimer);
               document.getElementById("countdownStatus").innerHTML = countdowntimer;
               countdowntimer = countdowntimer - 1;
          }, stepTime * i)
     }
     setTimeout(function(){
          document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
          console.log("Blastoff!");
      }, stepTime * countdowntimer)
}

//!function for timer
function blastoffTimerV3(){
     console.log("blastoffTimerV2() started");
     //want a loop that runs 11 times, 10-1 and then blastoff
     var countdowntimer = 10;

     var stepTime = 1000;

     for(var i = 0; i <= countdowntimer; i = i + 1){
          setTimeout(function(){
               console.log(countdowntimer);
               if(countdowntimer <= 0){
                    document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
                    console.log("Blastoff!");
               } else if(countdowntimer < 5){
                    document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + countdowntimer;
                    countdowntimer = countdowntimer - 1;
               }else{
                    document.getElementById("countdownStatus").innerHTML = countdowntimer;
                    countdowntimer = countdowntimer - 1;
               }
          }, stepTime * i)
     }

}
//function for start function
function startfun(){
     console.log("startfun() started");
     document.getElementById("data").rows["seconds"].innerHTML = "reading data";
     index = 0;
     timer = setInterval(updateDisplay, time_interval);
     document.getElementById("startButton").disabled = true;
     document.getElementById("stopButton").disabled = false;
}
//function for stop function
 function stopfun(){
     console.log("stopfun() started");
     clearInterval(timer);
     document.getElementById("stopButton").disabled = true;
     document.getElementById("startButton").disabled = false;
 }
//function for play station sound
 function playStation(){
     console.log("playStation() started");
     //play playStation() sounds here
     mySound = new sound("us-lab-background.mp3");
     mySound.play();
 }
//function for play bowie
 function playBowie(){
     console.log("playStation() started");
     mySound = new sound("David-Bowie-Space-Oddity.mp3");
     mySound.play();
 }
//function for sound
 function sound(srcfile){
     console.log("sound function started");
     this.sound = document.createElement("audio");
     this.sound.src = srcfile;
     this.sound.setAttribute("preload","audio");
     this.sound.setAttribute("controls", "none");
     this.sound.style.display + "none";
     document.body.appendChild(this.sound);
     this.play = function(){
          this.sound.play();
     }
     this.stop = function(){
          this.sound.pause();
     }
 }