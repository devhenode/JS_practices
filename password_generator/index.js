const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
  "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
  "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let btnEl = document.getElementById("btn-El");
let btnOne = document.getElementById("btn-1");
let btnTwo = document.getElementById("btn-2");

var length_Of_Password;

const selected = () => {
  let getOpt = document.getElementById("selector");
  let getIndex = getOpt.selectedIndex;
  length_Of_Password = getOpt.options[getIndex].text;
  
  console.log("You just selected " + length_Of_Password);
}

btnEl.addEventListener("click", function() {
  console.log("Hello world");
  let result = '';
  let count = '';
  
  for (let i = 0; i < length_Of_Password; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
    count += characters[Math.floor(Math.random() * characters.length)];
    // console.log(result);     
    // console.log(result)
               
  }

  btnOne.textContent = result;
  btnTwo.textContent = count;


});

const copyText = async () => {
  let hashText = document.getElementById('btn-1').innerHTML;
  try {
    await navigator.clipboard.writeText(hashText);
    alert(`${hashText} copied to clipboard`)
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}




// function copyText() {
//   let copiedText = document.getElementById("btn-1");
//   let copiedTextTwo = document.getElementById("btn-2");

//   copiedText.select();
//   copiedText.setSelectionRange(0, 99999);

//   copiedTextTwo.select();
//   copiedTextTwo.setSelectionRange(0, 99999);

//   navigator.clipboard.writeText(copiedText.value);
//   navigator.clipboard.writeText(copiedTextTwo.value);

//   alert("Copied the text:");
// }

// copyText();
// btnEl.addEventListener("click", generateRandomString(10));




