x = 100;
y = 100;

draw_apple = "";
speak_data="";
apple=""; 

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

  content_toNumber=Number(content);
  if(Number.isInteger(content_toNumber)){
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple="set";
  }
  else{
    document.getElementById("status").innerHTML = "The speech has not recoqnised a number";
  }
}

function setup() {
  
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas=createCanvas(screen_width, screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if (draw_apple == "set") {
    for(var i = 1; i <= content_toNumber; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
      //speak_data(to_number,"Apples drawn")

    }
    document.getElementById("status").innerHTML = content_toNumber + " Apples drawn";
    draw_apple = "";

    speak_data=content_toNumber+"Apples drawn";
  speak();
  }

   
  }

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

screen_width = "0";
screen_height = "400";
var apple = "loadimage()";
var speak_data = "";
var to_number = "Number(content)";

function preload() {
  apple=loadImage("apple.png");
}

function recognition_onresult() {
  to_number = Number(content);
  if (Number.isInteger(to_number)("set")) {
    document.getElementById("status").innerHTML = to_number + "Started drawing apple";
    draw_apple = "";
  }
  else {
    document.getElementById("status").innerHTML = to_number + "The speech has not recognized a number";
  }
}

function createCanvas(screen_width, screen_height = 100) {

}

function canvas_position() {
  canvas(700, 400, 0, 150)
}


