let userChoice = 0
let computerChoice = 0
let gamebtn = document.querySelectorAll(".user-option")
let winmsg = document.querySelector("#result")
let yourScore = document.querySelector("#Your-Score")
let computerScore = document.querySelector("#Computer-Score")
let ans = document.querySelector("#ans")


// Computer-choice 
const computerGen = () => {
    const chices = ["Stone", "Paper", "Scissors"];
    const computerOption = Math.floor(Math.random() * 3);
    return chices[computerOption];

}

const playGame = (userOption) => {

    const cmpCh = computerGen();

    if (userOption === cmpCh) {


        winmsg.innerText = `Game is Drow!! 
        (Computer choice ${cmpCh})`

    } else if (userOption === "Stone" && cmpCh === "Scissors") {
        userChoice++;
        yourScore.innerText = userChoice;
        winmsg.innerText = `   Congratulation 
     You are Winner 
      (Computer choice ${cmpCh} )`

    }
    else if (userOption === "Scissors" && cmpCh === "Paper") {
        userChoice++;
        yourScore.innerText = userChoice;
        winmsg.innerText = `   Congratulation 
     You are Winner  
      (Computer choice ${cmpCh})`
      

    }
    else if (userOption === "Paper" && cmpCh === "Stone") {
        userChoice++;
        yourScore.innerText = userChoice;
        winmsg.innerText = `   Congratulation 
     You are Winner  
     (Computer choice ${cmpCh})`

    }
    else {
        computerChoice++;
        computerScore.innerText = computerChoice;
        winmsg.innerText = `You are Loose
          (Computer choice ${cmpCh})`
    }
    if(userChoice === 10 || computerChoice === 10 ) {
        userChoice = 0;
        computerChoice = 0;
        winmsg.innerText = "  Restart Your Game ! "
        
    }
}


//  userChoice 
gamebtn.forEach((gamebtn) => {
    gamebtn.addEventListener("click", () => {
        const userOption = gamebtn.getAttribute("id");
        playGame(userOption)
    })
}
)






