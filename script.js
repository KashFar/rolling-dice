// When rolling two six-sided dice, each die will show a number between 1 and 6. When the numbers on the two dice are added together, they will sum to a number between 2 and 12.
// Use JavaScript to simulate 1000 rolls of a pair of dice. You will need to figure out how to generate random numbers in JavaScript, use your Google-Fu!
// For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts.
// Initialize an array named count by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array.
// For example if the variable rollOfDice holds the current roll, you could increment the count with code like:
// After the 1000 rolls are finished, show the final counts in an HTML page.

// Here's an example of the kind of output your program might produce:

// 2: 32  
// 3: 50  
// 4: 76  
// 5: 120  
// 6: 151  
// 7: 161  
// 8: 125  
// 9: 121  
// 10: 89  
// 11: 52  
// 12: 23

let destination= document.getElementById('div1')
var linebreak = document.createElement("br")


destination.style.display = "flex"
destination.style.alignItems = "flex-end"
// destination.style.display = "flex
// destination.className="flexbox"

// DO I EVEN NEED THIS?
//let rollOfDice = Array(6).fill(0);

let count= Array(13).fill(0);

function rollDice () {
  let total = 0;
  total = Math.floor((Math.random() * 6) + 1);
  return total;
  }

// or try instead of i use the  
for (var i = 1; i <= 1000; i++){
  // THIS FUNCTION SIMULATES THE ROLL OF A SINGLE 6-SIDED DIE
  rollOfDice=rollDice()+rollDice()  
  count[rollOfDice] = count[rollOfDice] + 1;
}
 
//tried using .innerHTML but only shows the 12: dice roll
// for (var i =2; i <=12; i++ ){
// document.getElementById('div0').innerHTML = ("<strong>"+ i +"</strong> :" 
// + count[i]+ "<br />");
// }

for (var i =2; i <=12; i++ ){
  document.write("<strong>"+ i +"</strong> :" 
  + count[i]+ "<br />");
  }
  
function MakeTextForDiceRolls (content){
  let newElement = document.createElement('div')
  newElement.style.backgroundColor="pink"
  var newText = document.createTextNode(content);
  destination.appendChild(newText);

  newElement.style.height = height+"px"
  newElement.style.width= "10px"
  newElement.style.margin= "4px"
}
// for (let i = 2; i < 13; i++){
  
//   height= (count[i])
//   MakeTextForDiceRolls(height)
// }

function MakeBarForDiceRolls (height){
  let newElement = document.createElement('div')
  destination.appendChild(newElement)
  newElement.style.backgroundColor="blue"
  newElement.style.height = height+"px"
  newElement.style.width= "13px"
  newElement.style.margin= "5.5px"
}

// console.log( MakeTextForDiceRolls(content))

for (let i = 2; i < 13; i++){
  
  height= (count[i])
  MakeBarForDiceRolls(height)
}
