
// p5play_pilot
// A p5play game triggers Pilot sounds by sending websocket messages converted to UDP by Chataigne

let block1, block2, block3, ball;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    new Canvas(1024,727);
    world.gravity.y = 10;  

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;    

    window.addEventListener("gamepadconnected", (e) => {
        console.log("Controller Connected");
    });
}

function draw() {
    clear();

    const gamepads = navigator.getGamepads();

    if(!gamepads) {
        return;
    }

    const gp = gamepads[0];

    //if A is pressed
    if (buttonPressed(gp.buttons[0])) {

    }
    //if B is pressed
    if (buttonPressed(gp.buttons[1])){

    }

    //if X is pressed
    if (buttonPressed(gp.buttons[2])){

    }

    //if Y is pressed
    if (buttonPressed(gp.buttons[3])){

    }

    //if L Trigger pressed
    if (buttonPressed(gp.buttons[5])){

    }
    
    //if R Trigger Pressed
    if (buttonPressed(gp.buttons[7])){

    }

    //if L Bumper pressed
    if (buttonPressed(gp.buttons[4])){

    }

    //if R Bumper pressed
    if (buttonPressed(gp.buttons[5])){

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