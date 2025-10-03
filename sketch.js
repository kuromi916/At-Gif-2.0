// Variables to store our current state
let isCurrentlyTouching = false;  // Track if screen is being touched
let touchCounter = 0;             // Count how many times screen has been touched
let textColor;                    // Color of the text
let touchStartTime = 0;           // When the current touch started (in milliseconds)
let touchDuration = 0;            // How long the current touch has been active (in seconds)

let GIF;

function preload()
{
	GIF=loadImage("gif.GIF");
}

function setup() 
{
	createCanvas(windowWidth,windowHeight);

	 // Lock mobile gestures to prevent scrolling, zooming, etc.
    // This function comes from the mobile-p5-permissions library
    lockGestures();

	 // Set initial text properties
    textAlign(CENTER, CENTER);  // Center the text horizontally and vertically
    textSize(48);               // Make text large enough to read on mobile
    
    // Set initial colors
    textColor = color(50, 50, 50);  // Dark gray text
}

function draw()
{
background(200,50,10);


image(GIF,0,0,400,520);

 // Clear the screen each frame
    // Change background color based on touch state
    if (isCurrentlyTouching) 
    {
        touchDuration = (millis() - touchStartTime) / 1000;  // Convert to seconds
        text("TOUCHED",width/2,height/2);
        
        // Display the touch duration
        textSize(24);
        text("Touch Time: " + touchDuration.toFixed(1) + "s", width/2, height/2 + 60);
        textSize(48);  // Reset to original size
    } 
    else 
    {
        text("NOT TOUCHED",width/2,height/2); 
    }
    
    // Show the touch counter at the top of the screen
    textSize(32);  // Smaller text for the counter
    text("Touch Count: " + touchCounter, width/2, 60);
    textSize(48);  // Reset to original size
}

// This function runs when a touch begins (finger touches screen)
function touchStarted() 
{
    isCurrentlyTouching = true;
    touchCounter = touchCounter + 1;  // Add 1 to our counter each time screen is touched
    touchStartTime = millis();        // Record when this touch started

    return false;
}

// This function runs when a touch ends (finger lifts off screen)
function touchEnded() 
{
    isCurrentlyTouching = false;

    return false;
}

// ==============================================
// MOUSE EVENTS FOR DESKTOP TESTING
// ==============================================
// These functions allow the example to work on desktop too
// for easier testing during development

function mousePressed()
{
    isCurrentlyTouching = true;
    touchCounter = touchCounter + 1;  // Add 1 to counter for desktop testing too
    touchStartTime = millis();        // Record when this touch started

    
}

function mouseReleased() 
{
    isCurrentlyTouching = false;

}

// ==============================================
// WINDOW RESIZE HANDLER
// ==============================================
// This function runs when the screen orientation changes
// or the browser window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
