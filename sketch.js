let ball;
let leftFlipper;
let rightFlipper;
let leftFlipperCollider;
let rightFlipperCollider;
let img;
let wallGrp;
let host = "127.0.0.1:8080"
let socket;
let circleGrp;
let trebleNote;
let bassNote;
let speedNote;

let noteOctave = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let octaveIndex = 0;
let noteVelo = "f";
let noteVoice = 0;

function preload() {
    img = loadImage("assets/PinballLayout.png");
}

function setup() {
    new Canvas(1000, 1000);
    world.gravity.y = 10;  


    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;    

    wallGrp = new Group();
    wallGrp.width = 10;
    wallGrp.height = 10;
    //wallGrp.debug = true;
    wallGrp.collider = "s";
    wallGrp.visible = false;

    bumperGrp = new Group();
    bumperGrp.collider = "static";
    //bumperGrp.debug = "true";
    bumperGrp.visible = false;

    ball = new Sprite(100, -20, 30);
    ball.img = "assets/SemibreveBall.png";
    ball.visible = false;


	leftFlipper = new Sprite(268, 845);
	
    rightFlipper = new Sprite(475, 845);

    leftFlipperCollider = new Sprite(280, 852, 'k');
    
    rightFlipperCollider = new Sprite(470, 850, 'k');

    
    leftFlipper.img = "assets/MinimFlipperLeftSide.png";
    leftFlipper.collider = "k";
    leftFlipper.overlaps(allSprites);
    leftFlipper.offset.y = -50;
    // leftFlipper.offset.x = -25;
	leftFlipper.rotation = 300;
	//leftFlipper.debug = true;
    leftFlipper.scale = 0.15;
    leftFlipper.mirror.y = true;
    
    rightFlipper.img = "assets/MinimFlipperRightSide.png";
    rightFlipper.collider = "k";
    rightFlipper.overlaps(allSprites);
    rightFlipper.offset.y = -50;
	rightFlipper.rotation = 60;
	//rightFlipper.debug = false;
    rightFlipper.scale = 0.15;
    rightFlipper.mirror.y = true;
    


	leftFlipperCollider.rotation = 25;
	//leftFlipperCollider.debug = true;
	leftFlipperCollider.width = 120;
	leftFlipperCollider.height = 10;
    // leftFlipperCollider.scale.x = 0.7;
    // leftFlipperCollider.scale.y = 0.3;
    leftFlipperCollider.offset.x = 10;
    leftFlipperCollider.bounciness = 0.4;
    leftFlipperCollider.visible = false;

	
    rightFlipperCollider.rotation = -25;
	//rightFlipperCollider.debug = true;
    rightFlipperCollider.width = 120;
    rightFlipperCollider.height = 10;
    // rightFlipperCollider.scale.x = 0.7;
    // rightFlipperCollider.scale.y = 0.3;
    rightFlipperCollider.offset.x = -10;
    rightFlipperCollider.visible = false;

    wall1 = new wallGrp.Sprite(255, 900);
    wall1.width = 200;
    wall1.height = 10;
    wall1.rotation = 30;
    
    wall2 = new wallGrp.Sprite(165, 720);
    wall2.height = 260;
    
    wall3 = new wallGrp.Sprite(200, 565);
    wall3.height = 75;
    wall3.rotation = 230;
    
    wall4 = new wallGrp.Sprite(227, 534);
    wall4.height = 20;

    wall5 = new wallGrp.Sprite(200, 502);
    wall5.height = 75;
    wall5.rotation = 130;

    wall6 = new wallGrp.Sprite(165, 400);
    wall6.height = 150;

    wall7 = new wallGrp.Sprite(195, 275);
    wall7.height = 120;
    wall7.rotation = 215;
   
    wall8 = new wallGrp.Sprite(280, 200);
    wall8.height = 115;
    wall8.rotation = 245;

    wall9 = new wallGrp.Sprite(395, 173);
    wall9.width = 120;
    wall9.height = 10;

    wall10 = new wallGrp.Sprite(510, 198);
    wall10.height = 125;
    wall10.rotation = 115;

    wall11 = new wallGrp.Sprite(600, 270);
    wall11.height = 125;
    wall11.rotation = 149;

    wall12 = new wallGrp.Sprite(635, 600);
    wall12.height = 560;
    
    wall13 = new wallGrp.Sprite(610, 885);
    wall13.width = 40;
    wall13.height = 10;
    
    wall14 = new wallGrp.Sprite(586, 675);
    wall14.width = 5;
    wall14.height = 415;
    
    wall15 = new wallGrp.Sprite(553, 495);
    wall15.width = 5;
    wall15.height = 90;
    wall15.rotation = 50;

    wall16 = new wallGrp.Sprite(520, 533);
    wall16.width = 5;
    wall16.height = 20;

    wall17 = new wallGrp.Sprite(553, 570);
    wall17.width = 5;
    wall17.height = 80;
    wall17.rotation = 127;
    
    wall18 = new wallGrp.Sprite(500, 895);
    wall18.width = 5;
    wall18.height = 195;
    wall18.rotation = 59;
    
    wall19 = new wallGrp.Sprite(535, 745);
    wall19.width = 12;
    wall19.height = 153;
    
    wall20 = new wallGrp.Sprite(505, 832);
    wall20.width = 12;
    wall20.height = 70;
    wall20.rotation = 240;

    wall21 = new wallGrp.Sprite(216, 745);
    wall21.width = 12;
    wall21.height = 153;

    wall22 = new wallGrp.Sprite(244, 832);
    wall22.width = 12;
    wall22.height = 70;
    wall22.rotation = 120;

    bumper1 = new bumperGrp.Sprite(258, 750);
    bumper1.width = 2;
    bumper1.height = 80;
   
    bumper2 = new bumperGrp.Sprite(282, 750);
    bumper2.width = 2;
    bumper2.height = 90;
    bumper2.rotation = 148;
    
    bumper3 = new bumperGrp.Sprite(282, 790);
    bumper3.width = 50;
    bumper3.height = 2;

    bumper4 = new bumperGrp.Sprite(485, 750);
    bumper4.width = 2;
    bumper4.height = 80;

    bumper5 = new bumperGrp.Sprite(460, 750);
    bumper5.width = 2;
    bumper5.height = 90;
    bumper5.rotation = 212;
   
    bumper6 = new bumperGrp.Sprite(460, 790);
    bumper6.width = 50;
    bumper6.height = 2;

    plank = new Sprite(610, 950);
    plank.collider = "k";
    plank.width = 38;
    plank.height = 15;
    plank.bounciness = 6;
    plank.color = "black";
    plank.stroke = "black;"

    circleGrp = new Group();
    circleGrp.collider = "static";
    //circleGrp.debug = "true";
    circleGrp.d = 60;
    circleGrp.visible = false;
    
    speedNote = new circleGrp.Sprite(279, 359);

    bassNote = new circleGrp.Sprite(375, 278);

    trebleNote = new circleGrp.Sprite(470, 359);
}




function draw() {
    clear();

    image(img,0,0);
    img.resize(width,height);

   // if A is pressed
   if (contro.pressing("a")) {

   }
   // if B is pressed
    if (contro.pressing("b")){

    }

    //if X is pressed
    if (contro.pressing("x")){

    }

    //if Y is pressed
    if (contro.pressing("y")){

    }

    //if L Trigger pressed
    if (contro.pressing("lt")){
        leftFlipperCollider.rotateTo(-10, 8);
        leftFlipper.rotateTo(-100,8);

    } else {
        leftFlipper.rotateTo(-60, 8);
        leftFlipperCollider.rotateTo(30, 8);

    }
    
    //if R Trigger Pressed
    if (contro.pressing("rt")){
        rightFlipperCollider.rotateTo(10, 8);
        rightFlipper.rotateTo(100,8);
    } else {
        rightFlipper.rotateTo(60,8);
        rightFlipperCollider.rotateTo(-30, 8);
    }

    //if L Bumper pressed
    if (contro.pressing("l")){

    }

    //if R Bumper pressed
    if (contro.pressing("r")){

    
    }

// if (mouse.presses("right")) {
//     rightFlipperCollider.rotateTo(10, 8);
//     rightFlipper.rotateTo(100,8);
// }
// if (mouse.pressed("right")) {
//     rightFlipper.rotateTo(70,8);
//     rightFlipperCollider.rotateTo(-30, 8);
// }

// if (mouse.presses("left")) {
//     leftFlipperCollider.rotateTo(-10, 8);
//     leftFlipper.rotateTo(-100,8);
// }
// if (mouse.pressed("left")) {
//     leftFlipper.rotateTo(-60, 8);
//     leftFlipperCollider.rotateTo(30, 8);
// }
if (ball.y >= 1200) {

    ball = new Sprite(615, 800, 300);
    ball.img = "assets/SemibreveBall.png";
    ball.scale = 0.1;
    ball.debug = true;
    ball.bounciness = 0.5;
}


if (ball.collides(leftFlipperCollider) || ball.collides(rightFlipperCollider)) {
    playNote("C");
}

if (ball.collides(wallGrp)) {
    playNote("A");
}

if (ball.collides(bassNote)) {
    if (octaveIndex >= 0 && octaveIndex < 16) {
    octaveIndex++;
    }
    playNote("E");
}

if (ball.collides(trebleNote)) {
    if (octaveIndex <= 16 && octaveIndex > 0) {
    octaveIndex--;
    }
    playNote("G");
}

if (ball.collides(speedNote)) {

    noteVelo = randomChooser();
    playNote("D");
    }

    if (ball.collides(bumperGrp)) {
        noteVoice = randomChooser();
    }

if (contro.presses("a")) {
    plank.velocity.y = -5;
}

if (plank.y <= 875) {
    plank.y = 950
    plank.velocity.y = 0;
}

}


    function playNote(theNote) {
        let note = "note:" + noteVoice + noteOctave[octaveIndex] + theNote + noteVelo + "f";
    
    
        // send the note to the websocket server
        // (if the socket is open and ready)
        if (socket.readyState == 1) {
            socket.send(note);
            console.log("Sent: " + note);
        } else {
            console.log("Socket not ready.");
        }
    }
    
    function openHandler() {
        console.log("Connected to socket server at " + host);
      }

function randomChooser() {
    let numOrLetter;
    numOrLetter = round(random(1));
    
    if (numOrLetter == 0) {
       return round(random(1,9));

    } else if (numOrLetter == 1) {
        let randLet = round(random(5));
        if (randLet == 0) {
            return "a";
        } else if (randLet == 1) {
           return "b";
        } else if (randLet == 2) {
           return "c";
        } else if (randLet == 3) {
           return "d";
        } else if (randLet == 4) {
           return "e";
        } else if (randLet == 5) {
           return "f";
        }
}


}
