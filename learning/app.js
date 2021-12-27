const form = document.querySelector("#form");
const psw = document.querySelector(".password")
const regx = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const email = document.querySelector(".email");
const pswCon = document.querySelector(".pswCon")


    // email validation function
    const emailValidation = (e)=>{
        e.preventDefault();
        const mail = document.querySelector(".email").value;

    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const email = document.querySelector(".email");

    if(regx.test(mail)){
        const spanEmail = document.createElement("span");
        const emailText = document.createTextNode("Email Approved!!");

        spanEmail.appendChild(emailText);
        
        const emailapproved = document.querySelector("#email-approved");

        emailapproved.appendChild(spanEmail);
    }else{
        const spanEmail = document.createElement("span");
        const emailText = document.createTextNode("please type email!");

        spanEmail.appendChild(emailText);
        
        const emailapproved = document.querySelector("#email-approved");

        emailapproved.appendChild(spanEmail);
        
        }    
        removeEmailText(); 
    }
    // setTimeOut email text
    function removeEmailText(){
        setTimeout(function(){
            let spanEm = document.querySelector("span");
    
            let containerDiv = document.querySelector("#email-approved");
    
            containerDiv.removeChild(spanEm);
        }, 5000)
    }

// password validation

const passwordValidate =()=>{
    if(pswCon.value === psw.value){
       let span = document.createElement("span");
        span.textContent = "Success!";
        span.style.color = "green";
        // parentNode
        let psw_container = document.getElementById("password-match");
        // append child element
        psw_container.appendChild(span);
        removeText();
    }
    else{
        let span = document.createElement("span");
        span.textContent = "oops retype password!";
        span.style.color = "red";
        // parentNode
        let psw_container = document.getElementById("password-match");
        // append child element
        psw_container.appendChild(span);

        removeText();
    }
};

// expired settimeout function
function removeText(){
    setTimeout(function(){
        let spanEl = document.querySelector("span");

        let containerDiv = document.querySelector("#password-match");

        containerDiv.removeChild(spanEl);
    }, 5000)
}

   email.addEventListener("blur", emailValidation)
   pswCon.addEventListener("blur", passwordValidate)
