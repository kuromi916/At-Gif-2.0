let textColor;                    // Color of the text

let GIF;

function preload()
{
	GIF=loadImage("DraftGif.GIF");
}

function setup() 
{
	createCanvas(windowWidth,windowHeight);

	 // Lock mobile gestures to prevent scrolling, zooming, etc.
    // This function comes from the mobile-p5-permissions library
    lockGestures();
    //enableGyroTap('Tap to enable motion sensors'); still needed? 

	 // Set initial text properties
    textAlign(CENTER, CENTER);  // Center the text horizontally and vertically
    textSize(48);               // Make text large enough to read on mobile
    
    // Set initial colors
    textColor = color(50, 50, 50);  // Dark gray text
}

function draw()
{
background(100,0,200);
image(GIF,0,0,400,520); 

// Show the touch counter at the top of the screen
    textSize(32);  // Smaller text for the counter
    text("Title"); //+ touchCounter, width/2, 60);
    textSize(48);  // Reset to original size


 // CRITICAL: Always check window.sensorsEnabled first
  if (window.sensorsEnabled) {
    // Tilt-controlled circle
    let x = width/2 + rotationY * 3;
    let y = height/2 + rotationX * 3;
    circle(x, y, 50);

    if (deviceMoved) {
      fill(255, 0, 0);
    }
  } else {
    // Show fallback when sensors not enabled
    text('Tap to enable motion sensors', 20, 20);
  }
}