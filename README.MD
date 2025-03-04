   <!-- *#What is JavaScript# -->
     

  _______________________________
         javascript is a Programming laungage . We use it to give instructions to the computer.
         input(code) ---> computer  ---> output

<!-- javaScript Codes -->
-------------------------
     { alert ("typ alert test") }---> to alert messege
     { console.log("type output content"); } ---> Console.log is used to log (print)a message to the console
     
 <!-- Variables in js -->
 ------------------------
      Variebles are containers for data
      Example -->
                    age = "21"  ---> age is a contaioner and 21 is a  data
                   fullname = "rajat" ---> name is a contaioner and rajat is a data
      Boolean variebles -->
              <!-- Example -->
                     isfollow=true;
                     isfollow = false;
    <!-- *Variebles Rules*   -->
   1 :Variebles name are case sensitive;"a"&"A" is different.
   2 :Only letters,digits,underscore(_) and $ is allowed.(not even space)
   3 :Only a letter,underscore(_)or $ should be 1st character.
   4 :Reserved words cannot be veriable names.
   <!-- Varieble Keywords -->
        let : Varieble cannot be re-declared but can be updated. A block space varieble.
      const : Varieble cannot be re-declared or updated. A block space varieble. 
   <!-- data types in JavaScripe -->
     Primitive deta  : Number,String,Boolean,Undefined,Null,Bigint,Symbol.
                            example =
                                    fullName="Rajat jangra";
     Non-Primitive data(key:value) : Object(collection of values)
                            example =
                                    const student = {
                                        fullname : "Rajat Jangra"
                                        age : 21
                                        ispass : true };

        ------------------
         Comments in  JS  
        ------------------ 
        Parrt of code which is not executed  
             1 :   //This is single line comment                                          
             2 :  /* This is a multi-line comment.*/   


        _______________________________________
        |        Operators in JavaScript        |
        |_______________________________________|
                Used to perfrom some operation on data
                    
                    Arithmetic Operators
                 ------------------------------------------ 
                        + , - , * , / , % , ** , ++ , --
                 ------------------------------------------
                                     Example {
                                        let a = 2
                                        let b = 4
                                        console.log(a+b) //answer = 6
                                        console.log(a-b) //answer = 2
                                        console.log(a*b) //answer = 8
                                        console.log(a/b) //answer = 2
                                     }
             
              *Modukus --> % (reaminderr)
              *Exponentiation --> **
              *Increment --> ++
                              (
                                   post increment a++ 
                                   pre increment  ++a
                              )
               *Decerment --> --
                         (
                                   post increment a--
                                   pre increment  --a
                              )

                                         Example {
                                        let a = 2
                                        let b = 4
                                        console.log(a%b) //answer = 2/4 reaminderr=0
                                        console.log(a**b) //answer = 2*2*2*2 = 16
                                        console.log(a++) //answer = 2+1 = 3
                                        console.log(a--) //answer = 2-1 = 1
                                     }


                                  
                         Assignment Operators
                 ------------------------------------------ 
                        = , += , -= , *= , %= , **+  
                 ------------------------------------------

                                        = --> let a = 2
                                             let b = 4
                                        
                                        += --> a += 1    /ans = 3
                                             a += 2    /ans = 4
                                             a += 3    /ans = 5
                                             a += 4    /ans = 6

                                        -= --> a -= 1    /ans = 1
                                             b -= 2    /ans = 2

                                        *= --> a *= 1    /ans = 2
                                             b *= 2    /ans = 4

                                        /= --> a /=  4   /ans = 2

                                        %= --> a %=  4   /ans = 0

                                        **= --> a **=  4   /ans = 16
                                               


                                            
                         Comparison Operators
                 ------------------------------------------ 
                         Equal to         ==
                        Equal to & type   ===
                        not Equal to      !=
                    not equal to & type   !==
                            
                         > , >= , < , <=

                 ------------------------------------------
                           
                                   Example{
                                        let a = 5
                                        let b = 2
                                        let c = "5"
                                        console.log(a==b) //  ans : false
                                        console.log(a==c) //  ans : True
                                        console.log(a===C) // ans : false
                                        console.log(a!=c)  // ans : false
                                        console.log(a > b) // ans : true
                                        console.log(a >= b) // ans : true
                                        console.log(a < b) // ans : false
                                        console.log(a <= b) // ans : false
                                        
                                   }


                        Logical Operators
                 ------------------------------------------ 
                        LogicalAND  &&
                        LogicalOR   ||
                        LogicalNOT  !
                 ------------------------------------------

                              |       |       |
                         cond1 | cond2 |resu %%| resu ||
                         -----------------------------
                         T    |    T  |  T    |  T
                         T    |    F  |  F    |  T
                         F    |    T  |  F    |  T
                         F    |    F  |  F    |  F
                              |       |       |
                              |       |       |
                              

          Conditionl Statments
          ____________________
         :To implement some condition in the code

         if Statement       
                    
             exampal =        let age = prompt("Please Enter youre age")

                              if((age>=18)&&(age<=100)){
                              console.log("yes you can vote");
                              }
                              else if(age>=100){
                              console.log("you are expir for voting");
                              }
                              else{
                              console.log("you cannt vote");
                              }
                                        
                                        
                                        
                Ternary Operators
             -----------------------
             condition ? true output : false output

             exampl -->
                      age > 18 ? "adult" : "not adult" ;



         _______________________________________
        |            Loops in JS                |
        |_______________________________________|
             : Loops are used to execute a piece of code again & again

             Example -->
                      for (let i = 1; i <= 5; 1++>){
                         console.log("apna college")
                      }
