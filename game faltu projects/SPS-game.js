let userChoice = 0
let computerChoice = 0
let gamebtn = document.querySelectorAll(".user-option")
let winmsg = document.querySelector("#result")
let yourScore = document.querySelector("#Your-Score")
let computerScore = document.querySelector("#Computer-Score")
let ans = document.querySelector("#ans")
let restrtbtn = document.querySelector("#restrt-btn")




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
   
}


//  userChoice 
gamebtn.forEach((gamebtn) => {
    gamebtn.addEventListener("click", () => {
        const userOption = gamebtn.getAttribute("id");
        playGame(userOption)
    })
}
)






restrtbtn.onclick = () =>{

    yourScore.innerText = 0;
    computerScore.innerText = 0;
     winmsg.innerText = "Restart"
     userChoice = 0
      computerChoice = 0
}

