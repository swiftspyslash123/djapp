song = "";

song2 = "";

function preload(){
    song1 = loadsound("music.mp3");
    song2 = loadsound("music2.mps");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}