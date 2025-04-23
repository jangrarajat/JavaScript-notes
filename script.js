 
let btn = document.querySelector("#btn1")
let output = document.querySelector("#output")
let mode = "light"

btn.onclick = () => {
   if (mode === "light") {
      mode = "dark"
      document.querySelector("body").style.backgroundColor = "rgb(58, 55, 60)";
      document.querySelector("#output").style.backgroundColor = "rgba(70, 66, 75, 0.8)";
   document.querySelector(".listdiv").style.backgroundColor = "rgba(0, 0, 0, 0.58)";
document.querySelectorAll(".option").style.backgroundColor = "rgba(0, 0, 0, 0.87)";
document.querySelector(".nav").style.backgroundColor = "white";
   } else {
      mode = "light"
      document.querySelector("body").style.backgroundColor = "white"
      document.querySelector("#output").style.backgroundColor = "rgba(209, 209, 209, 0.539)";
document.querySelector(".listdiv").style.backgroundColor = "rgba(176, 182, 182, 0.837)";
document.querySelectorAll(".option").style.backgroundColor = " #e8e8e8e1";
  document.querySelector(".nav").style.backgroundColor = "rgb(58, 55, 60)";
}
}





let input = document.querySelector("#input")
let submit = document.querySelector("#submit")


submit.onclick = () => {
   let inputV = document.querySelector("#input");
   let inputWord = inputV.value;
   let msg = document.querySelector("#msg")
   function numchk() {
      let count = 0;
      for (const char of inputWord) {
         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U")
            count++
      }
      msg.innerText = count
     
   }
   numchk()
}

let notesbtn = document.querySelector("#notes")
let VoweLbtn = document.querySelector("#VoweL")
let vowelOutput = document.querySelector("#output")


 let list = document.querySelector("#list")
 let listswich = "yesokbabu"

  list.onclick = ( ) =>{                 
                                       
   if (listswich === "yesokbabu"){
      
      listswich = "nookbabu"
     
      document.querySelector(".listdiv").style.visibility = "visible";
      
   } else{
     
      listswich = "yesokbabu"
      document.querySelector(".listdiv").style.visibility = "hidden";
    
       
   }
  }
 let vowelChakerbtn = document.querySelector("#vowelChakerbtn")
  let vowelChaker = "yesvowelChaker"

  vowelChakerbtn.onclick = ( ) =>{                 
                                       
   if (vowelChaker === "yesvowelChaker"){
           
     console.log("hi")
      document.querySelector("#output").style.visibility = "visible";
      vowelChaker = "novowelChaker"
      document.querySelector(".listdiv").style.visibility = "hidden";
   } else{
      console.log("hellow")
      vowelChaker = "yesvowelChaker"
      document.querySelector("#output").style.visibility = "hidden";
      document.querySelector(".listdiv").style.visibility = "hidden";
       listswich = "yesvowelChaker"
   }
  }
 

  let loginbtn = document.querySelector("#Login")
  let desbord = document.querySelector("#desbord")
 

  loginbtn.onclick = () =>{
   
   window.location.href = "login.html";
       
  }

//    let doc = "okgame"
// document.querySelector("#firstgame")
//   firstgame.onclick = () => {
//    if(doc === "okgame"){
//       doc = "nogame"
//       document.querySelectorAll("#stoneGame").style.visibility = "visible"
//    }else {
//       doc = "okgame"
//       document.querySelectorAll("#stoneGame").style.visibility = " hidden"
//    }
    
//   } 