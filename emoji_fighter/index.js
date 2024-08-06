let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    let playerOne = Math.floor(Math.random() * fighters.length) 
    let playerTwo = Math.floor(Math.random() * fighters.length)
   
    
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    // document.getElementById("stage").innerHTML = fighters[playerOne] + " vs " + fighters[playerTwo]
    stageEl.textContent = fighters[playerOne] + " vs " + fighters[playerTwo]
})


