


let btn = document.querySelector("#btn1")
let output = document.querySelector("#output")
let mode = "light"

btn.onclick = () => {
   if (mode === "light") {
      mode = "dark"
      document.querySelector("body").style.backgroundColor = "white"
      document.querySelector("#output").style.backgroundColor = "rgb(168, 156, 179)"
document.querySelector(".listdiv").style.backgroundColor = "rgba(0, 0, 0, 0.58)"

   } else {
      mode = "light"
      document.querySelector("body").style.backgroundColor = "rgb(93, 30, 164)"
      document.querySelector("#output").style.backgroundColor = "rgb(137, 69, 200)"
document.querySelector(".listdiv").style.backgroundColor = "rgba(176, 182, 182, 0.837)"
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
      console.log("no")
      document.querySelector(".listdiv").style.visibility = "visible";
      
   } else{
     
      listswich = "yesokbabu"
      document.querySelector(".listdiv").style.visibility = "hidden";
      console.log("yes")
       
   }
  }
 
 
// let rj = ["Name","Rajat","Age","rj","Addresh","Hamindpur"]

// rj.forEach(function inter(value,index)
// {
//    console.log(value.toUpperCase(),index,value[0].toLocaleUpperCase())
// }
// )
// let  numb = [1,2,3,4,5,6,7,8,9,10]
// numb.forEach(function squearofnum(value)
//   {
//    console.log(value**2)
//   }
// )


//  let list1 = ["aalu" , "ramater" ,"pyaaj"]
//  let list2 = ["aaluxx" , "ramaterxx" ,"pyaajxx"]
// let  str = "ja ng  ra"
       

//    let newliat = list1.concat(list2)
//    console.log(newliat)

//    newliat.forEach(function mufun(value,idx,arr){
// console.log(value,idx,arr)
//    }
// )


// let input1 = "120@gmail.com"
// let input2 = prompt("type your input")

// console.log(input2.concat(input1))0
