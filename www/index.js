var charName = prompt("What is your name hero???");
var charAge = prompt("How old are you?");
var charWeapon = prompt("And what weapon will you be using?");
alert("OK! now your journey shall begin!");

var story = "There once was a hero named " + charName + ". ";
story += charName + " was " + charAge + " years old and didnt give a darn! ";
story += "One day, " + charName + " decided to go on a quest with a deadly " + charWeapon;
story += ". With the " + charWeapon + ", " + charName + " killed everyone on the planet! ";
story += " \n THE END!!!"
document.write(story);
