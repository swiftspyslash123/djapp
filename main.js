song = "";

song2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload(){
    song1 = loadsound("music.mp3");
    song2 = loadsound("music2.mps");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

        leftWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY  = "+ leftWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}