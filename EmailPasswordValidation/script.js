// step 1 select email,password from html.

let email = document.querySelector("#email");
let password = document.querySelector("#password")
// step2 select our form.
let form = document.querySelector("form");

// step3 we make a function that run after submiting form

form.addEventListener("submit", function(dets)
{
    //step4 preventDefault se ham page ko reloade hone se rokte hai.
        dets.preventDefault();
        
        // /jab user form open karega to kio err nahi hoga  kuki form blank hai
         document.querySelector("#emailError").style.display = "none";
         document.querySelector("#passwordError").style.display = "none";

        //step5 Here we write regex code that validate our email and password
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // step6 check email amd password value is true or not.it reutrn true.
        let emailans= emailRegex.test(email.value);
        let passwordans= passwordRegex.test(password.value);

        // Ye variable check karega ki form valid hai ya nahi.
        // Track whether all validations pass successfully.
        let isValid = true;

        //step7 if our email are false then run this code.
        if(!emailans)
        {
            document.querySelector("#emailError").textContent="Email is incorrect";

            // Make the email error message visible when email validation fails
            document.querySelector("#emailError").style.display = "initial";
         
            // Set isValid to false so the success message is not shown
            // Update validation status to false when any input is incorrect
            isValid = false;
        }

            //step8 if our email are flse then run this code.
        if(!passwordans)
        {
            document.querySelector("#passwordError").textContent="Password is incorrect";

             // Make the password error message visible when password validation fails
            document.querySelector("#passwordError").style.display="initial";
            
             // Set isValid to false so the success message is not shown
            // Update validation status to false when any input is incorrect
            isValid = false;
        }
       // step 9: Select result message container
         const result = document.querySelector("#resultMessage");

       // step 10: Clear previous result classes before adding new one
         result.classList.remove("success", "failure");

       // step 11: Show final success or failure message
         if (isValid) {
        result.textContent = "Everything is correct";
        result.classList.add("success");
         } else {
        result.textContent = "Something went wrong. Please fix the errors.";
        result.classList.add("failure");
    }

});      