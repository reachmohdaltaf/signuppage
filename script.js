    var form = document.getElementById("myform");

    form.addEventListener("submit", function(event){
        event.preventDefault();

    


    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;


    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");
    const error3 = document.getElementById("error3");
    const error4 = document.getElementById("error4");
    
    error1.textContent = "";
    error2.textContent = "";
    error3.textContent = "";
    error4.textContent = "";

    let isValid = true;

    

    function fusername(){
        const usernamePattern = /^[a-z0-9]{5,12}$/;
    if(username == ""){
        error1.textContent = "*Username is required";
        isValid = false;
    }else if(!usernamePattern.test(username)){
        error1.textContent = "*Username must be 5-12 characters, lowercase, and alphanumeric";
        isValid = false;
    
    }
    }

    function fgmail(){
        if(email == ""){
            error2.textContent = "*email is required";
            isValid = false;
        }
    }

   
   function fpassword(){
    const  passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,24}$/;
    if(password == ""){
        error3.textContent = "*password is required";
        isValid = false;
    }
    else if (!passwordCheck.test(password)) {
        error3.textContent = "*Password must be 8-24 characters, include uppercase, lowercase, and a number, and no spaces";
        isValid = false;
    }

   }


   function fconfirm(){
    if(confirm == ""){
        error4.textContent = "*confirm your password is required";
        isValid = false;
    }
    else if (password !== confirm) {
        error4.textContent = "*Passwords do not match";
        isValid = false;
    }
   }


   fusername();
   fgmail();
   fpassword();
   fconfirm();


            if(isValid){
                alert("form is submitted") 
            }
        

    });







