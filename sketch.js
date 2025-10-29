                


let gifFASTEST;
let BG;
let Title;
let sign;

// Global variables for touch state
let isCurrentlyTouching = false;  // NEEDED - Track if screen is being touched
let touchCounter = 0;             // NEEDED - Count total number of touches
let touchStartTime = 0; // When current touch started (milliseconds)
let touchDuration = 1; // How long current touch has been active (seconds)

let playSpeed = 100;


function preload()
{
  BG=loadImage("BG.PNG");
  Title = loadImage("Title.PNG");
  sign = loadImage("sign.PNG");
	gifFASTEST=loadImage("GIF.GIF"); // the quickest delay value that set a limit of how fast the gif can play 
 
}

function setup() 
{
	createCanvas(windowWidth,windowHeight);
  
  lockGestures();
  //Lock mobile gestures to prevent browser interference
  //This function comes from the mobile-p5-permissions library
  
 // showDebug();
  //debug("Touch Basic - Minimal Version");
  //debug("Touch the screen to see data in this panel");
  // Show debug panel FIRST to display all touch data
  

  gifFASTEST.delay(10);


  imageMode(CENTER);

}


function draw(){
 
/////do something here to calculate playSpped

 let touchDuration = (millis() - touchStartTime) / 1000;

if (isCurrentlyTouching === true && touchDuration < 1 ){ //&& touchDuration < 1
  gifFASTEST.delay(playSpeed -= 1);
  //debug('winning!!!!!!!!!!!!!!!!!!!!!!');
}

if (touchDuration === 0.5){ 
  // trying to limit touch duration time so ppl can't just click and 
  //keep it increasing
  isCurrentlyTouching === false
 
} 

if (isCurrentlyTouching === false){
  gifFASTEST.delay(playSpeed += 1);
}

playSpeed = constrain(playSpeed, 10, 100);

//debug(playSpeed);
gifFASTEST.delay(playSpeed);


image(BG, width/2,height/2,width,height);
image(Title, width/2,60,400,165);
image(sign,width/1,700,200,250);
image(gifFASTEST,width/2,height/2,500,720,);

}


function touchStarted() 
{
  isCurrentlyTouching = true;
  touchCounter = touchCounter + 1;
  touchStartTime = millis();
  //debug("Touch Count: " + touchCounter);  
  return false;  // Prevents default behavior
}

function touchEnded() 
{
    isCurrentlyTouching = false;
    // Output final touch duration to debug panel
    //debug("Touch Duration: " + touchDuration.toFixed(2) + " seconds");
    //debug("--- Touch Ended ---");
    return false;  // Prevents default behavior
}


