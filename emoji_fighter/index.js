let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    let playerOne = Math.floor(Math.random() * 17) 
    let playerTwo = Math.floor(Math.random() * 17)
    
    // let emojiOne = fighters[playerOne]
    // fighters[playerTwo])
    
    console.log(fighters[playerOne])
    console.log(fighters[playerTwo])
    
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    document.getElementById("stage").innerHTML = fighters[playerOne] + " vs " + fighters[playerTwo]
})


