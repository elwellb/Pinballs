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

    wall1 = new Sprite(255, 900);
    wall1.collider = "static";
    wall1.debug = "true";
    wall1.width = 200;
    wall1.height = 10;
    wall1.rotation = 30;
    
    wall2 = new Sprite(165, 720);
    wall2.collider = "static";
    wall2.debug = "true";
    wall2.width = 10;
    wall2.height = 260;
    
    wall3 = new Sprite(200, 565);
    wall3.collider = "static";
    wall3.debug = "true";
    wall3.width = 10;
    wall3.height = 75;
    wall3.rotation = 230;
    
    wall4 = new Sprite(227, 534);
    wall4.collider = "static";
    wall4.debug = "true";
    wall4.width = 10;
    wall4.height = 20;

    wall5 = new Sprite(200, 502);
    wall5.collider = "static";
    wall5.debug = "true";
    wall5.width = 10;
    wall5.height = 75;
    wall5.rotation = 130;

    wall6 = new Sprite(165, 400);
    wall6.collider = "static";
    wall6.debug = "true";
    wall6.width = 10;
    wall6.height = 150;

    wall7 = new Sprite(195, 275);
    wall7.collider = "static";
    wall7.debug = "true";
    wall7.width = 10;
    wall7.height = 120;
    wall7.rotation = 215;
   
    wall8 = new Sprite(280, 200);
    wall8.collider = "static";
    wall8.debug = "true";
    wall8.width = 10;
    wall8.height = 115;
    wall8.rotation = 245;

    wall9 = new Sprite(395, 173);
    wall9.collider = "static";
    wall9.debug = "true";
    wall9.width = 120;
    wall9.height = 10;

    wall10 = new Sprite(510, 198);
    wall10.collider = "static";
    wall10.debug = "true";
    wall10.width = 10;
    wall10.height = 125;
    wall10.rotation = 115;

    wall11 = new Sprite(600, 270);
    wall11.collider = "static";
    wall11.debug = "true";
    wall11.width = 10;
    wall11.height = 115;
    wall11.rotation = 145;

    wall12 = new Sprite(635, 600);
    wall12.collider = "static";
    wall12.debug = "true";
    wall12.width = 10;
    wall12.height = 560;
    
    wall13 = new Sprite(610, 885);
    wall13.collider = "static";
    wall13.debug = "true";
    wall13.width = 40;
    wall13.height = 10;
    
    wall14 = new Sprite(586, 675);
    wall14.collider = "static";
    wall14.debug = "true";
    wall14.width = 5;
    wall14.height = 415;
    
    wall15 = new Sprite(553, 495);
    wall15.collider = "static";
    wall15.debug = "true";
    wall15.width = 5;
    wall15.height = 90;
    wall15.rotation = 50;

    wall16 = new Sprite(520, 533);
    wall16.collider = "static";
    wall16.debug = "true";
    wall16.width = 5;
    wall16.height = 20;

    wall17 = new Sprite(553, 570);
    wall17.collider = "static";
    wall17.debug = "true";
    wall17.width = 5;
    wall17.height = 80;
    wall17.rotation = 127;
    
    wall18 = new Sprite(500, 895);
    wall18.collider = "static";
    wall18.debug = "true";
    wall18.width = 5;
    wall18.height = 195;
    wall18.rotation = 59;
    
    wall19 = new Sprite(535, 745);
    wall19.collider = "static";
    wall19.debug = "true";
    wall19.width = 20;
    wall19.height = 153;
    
    wall20 = new Sprite(505, 832);
    wall20.collider = "static";
    wall20.debug = "true";
    wall20.width = 20;
    wall20.height = 70;
    wall20.rotation = 240;

    wall21 = new Sprite(216, 745);
    wall21.collider = "static";
    wall21.debug = "true";
    wall21.width = 20;
    wall21.height = 153;

    wall22 = new Sprite(244, 832);
    wall22.collider = "static";
    wall22.debug = "true";
    wall22.width = 20;
    wall22.height = 70;
    wall22.rotation = 120;


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


