
var mySubject = ["She", "Beyonce", "He", "Obama", "Effie"];
var myVerb = ["is", "destroys", "sees", "exterminates", "has", "throws", "shoves", "loves"]
var myMod = ["a", "the", "some", "the", "that", "my"]
var myObject = [ "book", "piano", "panda", "llama", "shade", "penguin", "human", "paradise", "monster"]
var randomIndexOne = Math.floor(Math.random() * mySubject.length);
var randomIndexTwo = Math.floor(Math.random() * myVerb.length);
var randomIndexThree = Math.floor(Math.random() * myMod.length);
var randomIndexFour = Math.floor(Math.random() * myObject.length);

console.log(mySubject[randomIndexOne], myVerb[randomIndexTwo], myMod[randomIndexThree], myObject[randomIndexFour]);
