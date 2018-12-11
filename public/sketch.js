var socket = io('http://localhost:3000');

function setup() {
    createCanvas(300,300);
    background(51);
    socket.on('mouse', function newDrawing(data){
        noStroke();
        fill(255, 0, 100);
        ellipse(data.x, data.y, 23, 23);
    });
}

function mouseDragged() {
    console.log('sending> ' + mouseX + ', ' + mouseY);
    let data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 13, 13);
}

function draw() {
}