song1="";
song2="";
function preload(){
    song1=loadSound("Hey mama.mp3");
    song2=loadSound("music.mp3")
    }
    function stmusic(){
       song1.play(); 
       song2.play();
    }

    function setup(){
        canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    }
    function draw(){
        image(video,0,0,500,500);
    }