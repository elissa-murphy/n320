//Elissa Murphy
//CSS Animation Lab
//N320 Fall 2022

//A build-in for all elements (go from nothing on screen, to everything visible
//Get Title element and get new font color with animation
let title = document.getElementById("title");
TweenMax.to(title, { duration: 3, color: "black" });

//Get blueDiv element and get new background color with animation
let blueDiv = document.getElementById("blueDiv");
TweenMax.to(blueDiv, { duration: 3, backgroundColor: "#100654" });

//Get Box elements and get new background color with animation
let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  TweenLite.from(boxes[i], {
    duration: 3,
    backgroundColor: "white",
  });
}

// 2) A mouse over / highlight for each of the gallery elements below to show the hidden color
//BLUE DIV - Mouse Over
blueDiv.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "#729dd6";
});

//BLUE DIV = Mouse Out
blueDiv.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "#100654";
});

//TITLE - Mouse Over
title.addEventListener("mouseover", (event) => {
  event.target.style.color = "#ad182a";
  event.target.style.backgroundColor = "#ed8c97";
});

//TITLE - Mouse Out
title.addEventListener("mouseout", (event) => {
  event.target.style.color = "#000";
  event.target.style.backgroundColor = "#fff";
});

//BOXES
let allBoxes = [];
allBoxes[0] = document.getElementById("boxes1");
allBoxes[1] = document.getElementById("boxes2");
allBoxes[2] = document.getElementById("boxes3");
allBoxes[3] = document.getElementById("boxes4");
allBoxes[4] = document.getElementById("boxes5");
allBoxes[5] = document.getElementById("boxes6");

//BOXES - Mouse Over
for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#bf8ad4";
  });

  //BOXES - Mouse Out
  allBoxes[i].addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "purple";
  });
}

// 3) A exit animation for when each gallery element is clicked
//Looping through all boxes, adding event listeners for click, removing elemnet when event occurs
for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", (event) => {
    TweenMax.to(allBoxes[i], {
      duration: 3,
      x: Math.random() * -200,
      y: Math.random() * 500,
      alpha: 0,
    });
    // event.target.remove();
  });
}
//Remove Title element
title.addEventListener("click", (event) => {
  TweenMax.to(title, { duration: 3, x: +400, alpha: 0 });
  //event.target.remove();
});

//Remove blueDiv element with animation
blueDiv.addEventListener("click", (event) => {
  TweenMax.to(blueDiv, { duration: 3, x: -400, alpha: 0 });
  //event.target.remove();
});
