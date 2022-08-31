//Create a fortune cookie application
//Create a random picker
class RandomPicker {
  fortunes;

  constructor(fortunes) {
    this.fortunes = fortunes;
  }

  pickRandom() {
    return this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
  }
}

//Create a fortune cookie class
class fortuneCookie extends RandomPicker {
  outputElement;

  constructor(element) {
    super([
      "Every new beginning comes from some other beginning's end.",
      "Don't let yesterday take up too much of today.",
      "Consistently put yourself in situations that reveal what you're made of.",
      "Say yes, then figure it out.",
      "Follow what calls you.",
      "Get lost in the right direction.",
      "Set yourself up to experience what you love.",
      "Be kind to other human beings.",
      "It's not your job to fix people.",
    ]);
    this.outputElement = element;
  }

  // On a button click, show a fortune to user that's generated from the fortune cookie class
  open() {
    //create 'reply' variable, with a value of this (the fortunes) being applied to the random picker function
    let reply = this.pickRandom();
    //Display fortune in div on webpage
    this.outputElement.innerHTML = reply;
  }

  openAgain() {
    // Clicking this button will also replace the text on the screen with "Please open your cookie"
    this.outputElement.innerHTML = "Please Open Your Fortune Cookie";
    //let reply = this.pickRandom();
  }
}

//Application Stuff - inital fortune cookie
let myFortuneCookie = new fortuneCookie(
  document.getElementById("fortuneResponse")
);
myFortuneCookie.open();

//application stuff - new fortune cookie
let myNewFortuneCookie = new fortuneCookie(
  document.getElementById("fortuneResponse")
);

//Invoke function
myNewFortuneCookie.openAgain();
