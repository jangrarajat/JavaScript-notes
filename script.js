//     console.log("welcome back hellow rajat");
//     console.log("hellow rajat i am a programer");

// //  <!-- Variables in js -->
//       {   fullName="Rajat jangra";
//            age = 21;
//            a = null;
//            isfollow=true;
//         console.log(fullName);
//         console.log(age);
//         console.log(a);
//         console.log(isfollow);}

//  // <!-- Varieble Keywords -->
//       { let age = 21;
//         age = 24;
//         age = 27;
//         console.log(age)
//        const a = (12);
//         console.log(a);
//      const cast = "Jangra";
//         console.log(cast);} 
// // <!-- data types in JavaScripe -->
// // Primitive deta  : Number,String,Boolean,Undefined,Null,Bigint,Symbol.
//                {let fullName ="Rajat jangra";
//                 console.log(fullName)
//                }
//    // Non-Primitive data(key:value)
//        { const student = {
//             fullname : "Rajat Jangra",
//             age : 21,
//             ispass : true

//         };
//         student["age"] = student ["age"] + 2
//         console.log(student);
//         console.log(student["age"])
//     }







//                 const product = {
//                     name:"Ball Pen",
//                     rating:4.5,
//                     prise:10,
//                     offer:5
//                 }
//                 console.log(product);
//                console.log(product["prise"]);



//               /* Arithmetic Operators*/

// for (let num = 0; num <= 100 ;num++ ){
//     if (num%2 !== 0) {
//         console.log("even num =", num);
//     } else{

//     }
// }

// let password = "Rajat jangra";
// let userpassword  = prompt("please enter you password :");

//  let gameNum = "Rajat jangra";
//  let userNum = prompt("Please Enter your Password  : ");

//  while ( userNum != gameNum) {
//     userNum = prompt( "You enttered wrong Password. please traying again : ");

//  }
//     console.log("Password is Currect");    


//    let a = 2
//    let b = 5

//    console.log(a+b,a*b,a)

// let a = 5
// let b = 2
// let c = "5"
//    Conditionl Statments                               // console.log ( !(a===c))

//   let age = prompt("Please Enter youre age")

//   if((age>=18)&&(age<=100)){
//      console.log("yes you can vote");
//   }
//   else if(age>=100){
//      console.log("you are expir for voting");
//   }
//   else{
//      console.log("you cannt vote");
//   }





// _______________________________________
// |            Loops in JS                |
// |_______________________________________|
//      : Loops are used to execute a piece of code again & again

//   Example -->


//  let hero = ["ironman","hulk","spiderman","flash"]
//             console.log( hero[3])

//             for (let i = 0; i < hero.length ; i++){
//                console.log(hero[i])
//             }

// arro funcations

//  const my = (a, b) => {
//          return a + b
//  }


//  const mymy = () => {
//    return"Your Password is worng ";


//   function vowels(str){
//    let count= 0
//    for (const char of str){
//      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//       count++;
//      }
//    }
//    console.log(count)
//   }

//  let age = prompt("enter your age")
//  if (age >= 18 ){
//  console.log("you can vote")

//  }
//  else{
//    (age <= 18)
//   console.log("you cannot vote")
//  }
//  let age = prompt("enter your age")

//  let voteAge = (age >= 18) ? "you can vote" : "you can not vote";
//      console.log(voteAge)

// let age = prompt("typ password")
//  if (age === "Rajat jangra" ){
//    console.log(" Curroct Password  ")
//  }
//  else{
//    console.log("Wrong password")
//  }

// for(let i = 1 ; i <= 10; i++){
//    console.log("Loop thi working condition")
// }


// // This is for loop
// for (let i = 1 ; i <= 10 ; i++){

//    console.log(i)
// }
// // break in for loop
// for (let i = 1 ; i <= 10 ; i++){
//    if (i == 6)
//       break ;
//    else console.log(i)
// }
// continue in for loop
// for (let i = 1 ; i <= 11 ; i++){
//    if (i ==10 )
//       continue ;
//    else console.log(i)
// }

// let opt1 = 'Diksha ';
// let opt2 = 'Prachi';
// let opt3 = 'Jangra';

// // let ans =  `${opt1} ${opt2}`
// // console.log(opt3.toUpperCase())

// let str = "rajat" ;
// console.log(str.substring(0 , 4))

// let sent = "hellow \\rajat\\ kase \\ ho \\jldi\\ btaao";

// let words = sent.split('\\');

// console.log(words);
// console.log(words.join('.'))
// 
// function

// let newfile = ["rajat" , "rohit","hardik" ]
// // newfile.push("Vikey", "rahul")
// // newfile.pop()
// newfile.shift();
// newfile.unshift("raju panjabu");
// console.log(newfile);

// function myfung(x,y){
// let sum = x + y;
// return sum;
// }
//  let ans = myfung(2,10)
//  console.log(ans)
// let fullName = prompt("Enter youer FullName")
// let gmail = "@gmail.com"
// console.log(fullName.concat(gmail))





// let btn1 = document.querySelector("#btn1")
// let dot = document.querySelector("#dot")
// let mode = "light" ;

//     btn1.onclick = () => {
//       if(mode === "light"){
//        mode = "dark"
//        document.querySelector("body").style.backgroundColor = "black";
//       }else  {
//          mode = "light";
//          document.querySelector("body").style.backgroundColor = "white" ;
//       }



//     }


// function myfun(msg) {
//    console.log(msg)
//    console.log(msg)
//    console.log(msg)
// }


//  myfun("Hello my lovee")




// function num(mode){
//    if ( mode === "dark"){
//       mode = "light"
//       document.querySelector("body").style.backgroundColor = "red";
//       return mode
//    } else{
//       mode = "dark"
//       document.querySelector("body").style.backgroundColor = "orange";
//       return mode
//    }
// }

//    // let newMd = num(prompt("enter mode"))

//  let btn = document.querySelector("#btn1")
//  btn.onclick = () => {
//    num(prompt("enter mode"))
//  }

let btn = document.querySelector("#btn1")
let output = document.querySelector("#output")
let mode = "light"

btn.onclick = () => {
   if (mode === "light") {
      mode = "dark"
      document.querySelector("body").style.backgroundColor = "white"
      document.querySelector("#output").style.backgroundColor = "red"


   } else {
      mode = "light"
      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("#output").style.backgroundColor = "green"

   }
}





// let latter = prompt("ente youer latter")
// let msg = document.querySelector("#msg")
// function numchk() {
//    let count = 0;
//    for (const char of latter) {
//       if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")

//    count++}
// msg.innerText = count
// console.log(count)
// }
// numchk()

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
      console.log(count)
   }
   numchk()
}

let notesbtn = document.querySelector("#notes")
let VoweLbtn = document.querySelector("#VoweL")
let vowelOutput = document.querySelector("#output")


VoweLbtn.onclick = () =>{
   if (mode === "light") {
      mode = "dark"
       console.log("hi")
      document.querySelector("#output").style.visibility = "hidden";


   } else {
      mode = "light"
      console.log("hellow")
      document.querySelector("#output").style.visibility = "visible";
      document.querySelector(".notes").style.visibility = "hidden";
   }
}

notesbtn.onclick = () =>{
   if (mode === "light") {
      mode = "dark"       
      document.querySelector(".notes").style.visibility = "hidden";


   } else {
      mode = "light"      
      document.querySelector(".notes").style.visibility = "visible";
      document.querySelector("#output").style.visibility = "hidden";
   }
}

