
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function modelLoaded(){
    console.log("MOdel Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img,0, 0, 640, 420);
    fill('black');
    text("Dog", 135, 75);
    noFill();
    stroke('black' );
    rect(130, 60, 240, 350);

    fill('black');
    text("Cat", 320, 120);
    noFill();
    stroke('black');
    rect(300, 90, 270, 320);
}