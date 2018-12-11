let socket = io();

function setup() {
  createCanvas(300,300);
  background(51);
  socket = socket.io.connect('http://localhost:3000');
  socket.on('mouse', function newDrawing(data){
      noStroke();
      fill(255, 0, 100);
      ellipse(data.x, data.y, 13,13);
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
    ellipse(mouseX, mouseY, 13,13);
}

function draw() {
}