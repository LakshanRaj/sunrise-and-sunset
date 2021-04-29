const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here
fill(0);
textSize(30);
if(hour>=12){
     text("Time : "+ hr%12 + " PM", 50,100); 
    }
     else if(hr==0){ 
         text("Time : 12 AM",100,100); 
        }
    else{ 
        text("Time : "+ hr%12 + " AM", 50,100);
     }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseType = await response.json();
    // write code slice the datetime
    var dt = responseType.datetime;
    var hr = dt.slice (11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hr>=4&&hr<6){
       bg = "sunrise1.png";
    }
    else if(hr>=6&&hr<8){
        bg = "sunrise2.png";
     }
     else if(hr>=8&&hr<10){
        bg = "sunrise3.png";
     }
     else if(hr>=10&&hr<12){
        bg = "sunrise4.png";
     }
     else if(hr>12&&hr<14){
        bg = "sunrise5.png";
     }
     else if(hr>=14&&hr<16){
        bg = "sunrise6.png";
     }
     else if(hr>=16&&hr<18){
        bg = "sunset7.png";
     }
     else if(hr>=18&&hr<20){
        bg = "sunset8.png";
     }
     else if(hr>=20&&hr<22){
        bg = "sunset9.png";
     }
     else if(hr>=22&&hr<24){
       bg = "sunset10.png";
    }
    else if(hr>=24&&hr<00){
        bg = "sunset11.png";
     }
     else if(hr>=00&&hr<4){
        bg = "sunset12.png";
     }
     

    //load the image in backgroundImg variable here
     var backgroundImg = loadImage(bg);
}
