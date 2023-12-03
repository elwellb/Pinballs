let ball;
let leftFlipper;
let rightFlipper;
let rightFlipperCollider;
let img;
let wallGrp;

function preload() {
    img = loadImage("assets/PinballLayout.png");
}

function setup() {
    new Canvas(1000, 1000);
    world.gravity.y = 10;  

    // connect to server...
    //socket = new WebSocket('ws://' + host);
    //socket.onopen = openHandler;    

   // window.addEventListener("gamepadconnected", gamepadConnect());
    //window.addEventListener("gamepaddisconnected", gamepadDisconnect());

    wallGrp = new Group();
    wallGrp.width = 1;
    wallGrp.debug = true;

    ball = new Sprite(100, -20, 30);
    ball.img = "assets/SemibreveBall.png";


	rightFlipper = new Sprite(475, 845);

    rightFlipperCollider = new Sprite(470, 850, [
		[0, -25],
		[-100, 12.5],
		[0, 25],
		[100, 12.5],
		[0, -25]
	], 'k');

    
    rightFlipper.img = "assets/MinimFlipperRightSide.png";
    rightFlipper.collider = "k";
    rightFlipper.overlaps(allSprites);
    rightFlipper.offset.y = -50;
	rightFlipper.rotation = 60;
	rightFlipper.debug = false;
    rightFlipper.scale = 0.15;
    rightFlipper.mirror.y = true;


	rightFlipperCollider.rotation = -40;
	rightFlipperCollider.debug = true;
    rightFlipperCollider.scale.x = 0.7;
    rightFlipperCollider.scale.y = 0.3;
    rightFlipperCollider.offset.x = -10;


}



function draw() {
    clear();

    image(img,0,0);
    img.resize(width,height);
    // const gamepads = navigator.getGamepads();

    // if(!gamepads) {
    //     return;
    // }

    // const gp = gamepads[0];

    // //if A is pressed
    // if (gp.buttons[0].pressed) {

    // }
    // //if B is pressed
    // if (gp.buttons[1].pressed){

    // }

    // //if X is pressed
    // if (gp.buttons[2].pressed){

    // }

    // //if Y is pressed
    // if (gp.buttons[3].pressed){

    // }

    // //if L Trigger pressed
    // if (gp.buttons[5].value > 0 || gp.buttons[5].pressed){

    // }
    
    // //if R Trigger Pressed
    // if (gp.buttons[7].value > 0 || gp.buttons[7].pressed){

    // }

    // //if L Bumper pressed
    // if (gp.buttons[4].value > 0 || gp.buttons[4].pressed){

    // }

    // //if R Bumper pressed
    // if (gp.buttons[5].value > 0 || gp.buttons[5].pressed){

    // }


if (mouse.presses()) {
    rightFlipperCollider.rotateTo(10, 8);
    rightFlipper.rotateTo(100,8);
}
if (mouse.pressed()) {
    rightFlipper.rotateTo(70,8);
    rightFlipperCollider.rotateTo(-30, 8);
}
if (frameCount % 100 == 0) {
    ball.life = 200;
    let x = random(50, 140);
    ball = new Sprite(x, -100, 300);
    ball.img = "assets/SemibreveBall.png";
    ball.scale = 0.1;
    ball.debug = true;
    ball.bounciness = 0.5;
}
}

function buttonPressed(b) {
    if (typeof b === "object") {
        return b.pressed;
    }
    return b.value;
}

function openHandler() {
    console.log("Connected to socket server at " + host);
}


