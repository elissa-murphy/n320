//Elissa Murphy
//n320 Fall 2022
//Inheriting Instruments

let currentInstrument = 0;

// making a base class: an instrument class.
class Instrument {
  // adding properties for loudness, family, and play verb
  loudness;
  family;
  playVerb;

  //setting the properties in the constructor of the class
  constructor(loudness, family, playVerb) {
    this.loudness = loudness;
    this.family = family;
    this.playVerb = playVerb;
    this.next = playNextNote;
  }

  //creating a method for playing the instrument that accepts one argument: duration
  playNote(duration) {
    //logging to the console: the family, loudness, and verb
    console.log(
      "The " +
        this.family +
        " " +
        this.playVerb +
        " " +
        "at " +
        this.loudness +
        " loudness."
    );

    //creating a new synth tone
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", duration);

    //adding a timeout so that notes play in a sequence, acts as callback method
    setTimeout(this.next, duration * 2000);
  }
}

// making concrete classes for woodwind, for percussion, string that extend the base Instrument class
class Woodwind extends Instrument {
  // takes in a "loudness" property in its constructor to pass up to the super constructor & the verb and family are specified inside the child constructor
  constructor(loudness) {
    super(loudness, "clarinet", "squeaked");
  }
}

class Percussion extends Instrument {
  constructor(loudness) {
    super(loudness, "drums", "beat");
  }
}

class String extends Instrument {
  constructor(loudness) {
    super(loudness, "guitar", "tuned");
  }
}

//testing my code: making one instance of each child class and putt them into an array
const newInstrument = new Woodwind(11);
const newInstrument2 = new Percussion(29);
const newInstrument3 = new String(6);

const myInstruments = [newInstrument, newInstrument2, newInstrument3];

function playNextNote() {
  //looping through the array and calling the play method of each instance with a duration of .5
  if (currentInstrument < myInstruments.length) {
    myInstruments[currentInstrument].playNote(0.5);

    //adding intrement of 1
    currentInstrument++;
  }
}
