const promiseOne = new Promise(function(resolve, reject){
    console.log("data is Laoding....")
    Request = true
    if(Request){
        setTimeout(()=>{
            resolve({userName : "rajatjangra", password : "123"})
        },5000)
    }else{
        reject("Some Error Found")
    }
})



promiseOne.then((data)=>{
    data.password
console.log(data)       
}).catch((error)=>{
    console.log(error)
})


 



