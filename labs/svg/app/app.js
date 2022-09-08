//Elissa Murphy
//N320 Fall 2022
//SVG Lab

//class that contains logic for game
class Game {
  //class properties
  foundCircles = 0;
  totalCircles = 0;
  searchColor = "#00FF00";
  nornalColor = "#ff0000";
  gameZone = document.getElementById("gameZone");
  foundBar = new FoundBar();

  constructor() {
    //make the circles
    for (var i = 0; i < 25; i++) {
      //create circle
      let newCirc = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      //circle style class
      newCirc.classList.add("gameCirc");
      newCirc.setAttribute("cx", Math.random() * 400);
      newCirc.setAttribute("cy", Math.random() * 400);

      //random choose what reveal color the circle is
      if (Math.random() < 0.3) {
        //set to be the looking for color
        newCirc.dataset.hiddenColor = this.searchColor;
        this.totalCircles++;
      } else {
        newCirc.dataset.hiddenColor = this.nornalColor;
      }

      //mouse events
      //on mouse over, show the hidden color in the data-hidden color
      newCirc.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
      });

      //mouse out
      newCirc.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000";
      });

      newCirc.addEventListener("click", (event) => {
        //if the user clicked on a dot with the looking for color
        if (event.target.dataset.hiddenColor == this.searchColor) {
          event.target.remove();

          //store how many are clicked on
          this.foundCircles++;

          //update the found UI
          this.foundBar.setPercent(this.foundCircles / this.totalCircles);
        }
      });

      //add circle to screen
      this.gameZone.appendChild(newCirc);
    }
  }
}

class FoundBar {
  element = document.getElementById("foundBar");
  maxSize = 130;
  percent = 0;

  setPercent(percent) {
    this.percent = percent;
    this.element.setAttribute("width", this.percent * this.maxSize);
  }
}

let g = new Game();
