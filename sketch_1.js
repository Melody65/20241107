function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background("#495057");
    noFill();
    stroke("#ffb5a7");
    strokeWeight(3);
  
    var rect_width = 50;
    var bc_w = 50;
    var sc_w = 25;
  
    rectMode(CENTER);
  
    for(let j=0;j<25;j=j+1){
      for(let x=0;x<width;x=x+rect_width){
        // 計算圓圈的邊界
        let circleX = x;
        let circleY = 25+50*j;
        let leftBound = circleX - bc_w/2;
        let rightBound = circleX + bc_w/2;
        let topBound = circleY - bc_w/2;
        let bottomBound = circleY + bc_w/2;
  
        // 限制滑鼠位置在邊界內
        let clampedX = constrain(mouseX, leftBound, rightBound);
        let clampedY = constrain(mouseY, topBound, bottomBound);
  
        // 畫橢圓(正圓)
        ellipse(clampedX, clampedY, bc_w);
        rect(x,25+50*j,rect_width);
        ellipse(25+x+rect_width,50+50*j,sc_w);
      }
    }
  }