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
destination.style.display = "flex"
// destination.style.display = "flex

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
 
console.log(count);

// function MakeTextForDiceRolls (newText){
//   let newElement = document.createElement('div')
//   destination.appendChild(newElement)
//   newElement.style.backgroundColor="pink"
//   newElement.style.height = height+"px"
//   newElement.style.width= "10px"
//   newElement.style.margin= "10px"
// }
// for (let i = 2; i < 13; i++){
  
//   height= (count[i])
//   MakeTextForDiceRolls(height)
// }

function MakeBarForDiceRolls (height){
  let newElement = document.createElement('div')
  destination.appendChild(newElement)
  newElement.style.backgroundColor="blue"
  newElement.style.height = height+"px"
  newElement.style.width= "10px"
  newElement.style.margin= "10px"
}

for (let i = 2; i < 13; i++){
  
  height= (count[i])
  MakeBarForDiceRolls(height)
}


// function createNewDynamicElement(width){
//   // Create a div, with class "bar", and set the width to 100px.
//   let newElement = document.createElement('div');
//   newElement.className="graybar";
//   // Place a text label inside the new div.
//   destination.appendChild(newElement);
  
//   newElement.style.height = "20px";
//   newElement.style.width = width + "px";
//   }

// width = 100

// for (let i=0; i < sampleArray.length; i++){
//   width=(sampleArray[i])
//   createNewDynamicElement(width)
// }


// THIS FUNCTION PRODUCES THE RESULT WHEN THE ON-SCREEN BUTTON IS PRESSED

//   function playGame () {
  
//  	 //document.open ();
//  	 document.write ('1 was rolled' + totalArray[0] ' times.');
//  	 document.write ('2 was rolled' + totalArray[1] ' times.');
//  	 document.write ('3 was rolled' + totalArray[2] ' times.');
//  	 document.write ('4 was rolled' + totalArray[3] ' times.');
//  	 document.write ('5 was rolled' + totalArray[4] ' times.');
//  	 document.write ('6 was rolled' + totalArray[5] ' times.');
//  	 document.close ();
//   }

// playGame(2);