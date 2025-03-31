let btn = document.querySelector("#submitbtn")
// let errormsg = document.querySelector(".errorp")



let username = "123"
let password = "123"
btn.onclick = () => {
  let input = document.querySelector(".input").value
  let input2 = document.querySelector(".input2").value
  let errormsg = document.querySelector(".errorp")
  // let errorU = document.querySelector(".errorU")
  // let errorP = document.querySelector(".errorP")
  if (input === username && input2 === password) {
    window.location.href = "index.html"

  } else {

    errormsg.innerText = "Error ==> your username & password incorrect"

  }

}

