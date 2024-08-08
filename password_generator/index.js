const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
  "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
  "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let btnEl = document.getElementById("btn-El");
let btnOne = document.getElementById("btn-1");
let btnTwo = document.getElementById("btn-2");

btnEl.addEventListener("click", function() {
  console.log("Hello world");                    

  let result = '';
  let count = '';
  
  for (let i = 0; i < 10; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
    count += characters[Math.floor(Math.random() * characters.length)];
    console.log(result);                    
  }

  btnOne.textContent = result;
  btnTwo.textContent = count;

});

// btnEl.addEventListener("click", generateRandomString(10));




