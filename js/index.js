function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



function verifyEmail(){
    const email= document.querySelector("#email").value;
    const demo = document.querySelector("#demo");
    if(email === ""){
        demo.innerHTML="Please provide a valid email address";
        demo.style.color="Red";
        document.getElementById("email").style.borderColor="red";
        
    } else if (!validateEmail(email)){
        demo.innerHTML= " Email address is not formatted correctly";
    } else if (validateEmail(email)){
        document.write("Your Email has been received, You will be notify soon."); 
    }
}