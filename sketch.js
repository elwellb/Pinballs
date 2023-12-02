
function setup() {
    new Canvas(1024,727);
    world.gravity.y = 10;  

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;    

    window.addEventListener("gamepadconnected", gamepadConnnect());
    window.addEventListener("gamepaddisconnected", gamepadDisconnect());
}

function draw() {
    clear();


    const gamepads = navigator.getGamepads();

    if(!gamepads) {
        return;
    }

    const gp = gamepads[0];

    //if A is pressed
    if (gp.buttons[0].pressed) {

    }
    //if B is pressed
    if (gp.buttons[1].pressed){

    }

    //if X is pressed
    if (gp.buttons[2].pressed){

    }

    //if Y is pressed
    if (gp.buttons[3].pressed){

    }

    //if L Trigger pressed
    if (gp.buttons[5].value > 0 || gp.buttons[5].pressed){

    }
    
    //if R Trigger Pressed
    if (gp.buttons[7].value > 0 || gp.buttons[7].pressed){

    }

    //if L Bumper pressed
    if (gp.buttons[4].value > 0 || gp.buttons[4].pressed){

    }

    //if R Bumper pressed
    if (gp.buttons[5].value > 0 || gp.buttons[5].pressed){

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


