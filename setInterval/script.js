  function colour(){
        let hax = "0123456789ABCDEF"
        let colour = "#"
        for(let i = 0 ; i <= 5 ; i++){
            colour += hax[Math.floor(Math.random() * 16)]
            
        }
       let body = document.querySelector("body")
  body.style.backgroundColor = `${colour}`
       return colour

  }


 let btn1 = document.querySelector("#btn1")
 let btn2 = document.querySelector("#btn2")

  
let interval 
 btn1.addEventListener("click", ()=>{
  interval =  setInterval(()=>{
        colour()
     },1000)
 })


 btn2.addEventListener("click",()=>{
    clearInterval(interval)
    interval = ""
 })



