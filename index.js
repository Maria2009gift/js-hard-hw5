
const score = document.querySelector("#score")
const keyGenerate = document.querySelector("#keystroke")
const keyText = document.querySelector("#key")
const btn = document.querySelector("#btn")

const keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
let currentKeyIndex = 0

btn.addEventListener("click", restartGame)
document.addEventListener("keydown", sayEvent)

let count = 0
let randomLetter = 0;
randomIndex()


function restartGame() {
  keyText.textContent = "-"
  keyGenerate.textContent = "-"
  count = 0
  score.textContent = 0
}

function sayEvent(event) {
    if (randomLetter === event.key) {
        keyText.textContent = event.key 
        keyGenerate.textContent = randomLetter
        count += 1
        score.textContent = count
        PNotify.success({
            title: 'Success!',
            text: 'That thing that you were trying to do worked.',
          })
        randomIndex()
    }
    else {
        PNotify.error({
            title: 'Oh No!',
            text: 'Something terrible happened.',
          })
    }
    
}
function randomIndex() {
    currentKeyIndex = Math.floor(Math.random() * keys.length)
    let randomNumber = keys[currentKeyIndex]
    randomLetter = randomNumber
}


// ============================================================================


const ctx = document.querySelector("#sales-chart") 

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
      {
          label: "Продажі за останній місяць",
          data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
          backgroundColor: "#2196f3",
          borderColor: "black",
          borderWidth: 1,
      },
  ],
};

const config = {
  type: 'line',
  data: chartData,
  options: {},
}

const myChart = new Chart(ctx, config)






