let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let myTop, myBottom, myRight, myLeft; // hitboxes
let enemyTop, enemyBottom, enemyRight, enemyLeft;

function setup() {
    createCanvas(500,500);
    // noStroke();

    rectMode(CENTER); // draw rectangles using coordinates as center
}

function draw() {
    background(0);
    fill(255,0,0);
    rect(myXPos,myYPos,50);

    fill (0,0,255)
    rect(enemyXPos,enemyYPos,50)

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }
    
    myTop = myYPos - 25
    myRight = myXPos + 25
    myBottom = myYPos + 25
    myLeft = myXPos - 25

    enemyTop = enemyYPos - 25
    enemyRight = enemyXPos + 25
    enemyBottom = enemyYPos + 25
    enemyLeft = enemyXPos - 25

    // check for non collision

    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop ) {
        console.log("NOT COLLIDING")
    }

    else{
        fill(random(255),random(255),random(255));
        textSize(22);
        text("I'm colliding with the enemy. Ouch!", 140, 180);
    }
}

