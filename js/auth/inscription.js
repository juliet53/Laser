//implémenter le js de ma page 
const inputNom = document.getElementById("InputName")
const inputPrenom = document.getElementById("InputFirstName")
const inputMail = document.getElementById("EmailInput")
const inputPassword = document.getElementById("PasswordInput")
const inputValidationPassword = document.getElementById("ValidatePasswordInput")
const btnValidation = document.getElementById("btn-validation-inscription")


inputNom.addEventListener("keyup",validateForm)
inputPrenom.addEventListener("keyup",validateForm)
inputMail.addEventListener("keyup",validateForm)
inputPassword.addEventListener("keyup",validateForm)
inputValidationPassword.addEventListener("keyup",validateForm)
function validateForm(){
const nomOk = validateRequired(inputNom)
const prenomOK = validateRequired(inputPrenom)
const emailOk = validateMail(inputMail)
const passwordOk = validatePassword(inputPassword)
const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword)

if(nomOk && prenomOK && emailOk && passwordOk && passwordConfirmOk ){
        btnValidation.disabled = false
}
else{
        btnValidation.disabled = true

}

}
function validateMail(input){
        // définir mon regex
        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const mailUser = input.value
        if (mailUser.match(emailRegex)){
                 //c'est bon 
        input.classList.add("is-valid"),
        input.classList.remove("is-invalid")
        return true
}
else{
        //c'est pas bon
        input.classList.add("is-invalid"),
        input.classList.remove("is-valid")
        return false
}

        }

        function validateConfirmationPassword(inputPwd, inputConfirmPwd){
                if(inputPwd.value == inputConfirmPwd.value){
                    inputConfirmPwd.classList.add("is-valid");
                    inputConfirmPwd.classList.remove("is-invalid");
                    return true;
                }
                else{
                    inputConfirmPwd.classList.add("is-invalid");
                    inputConfirmPwd.classList.remove("is-valid");
                    return false;
                }
        }

        function validatePassword(input){
                // définir mon regex
                const emailRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
                const passwordUser = input.value
                if (passwordUser.match(emailRegex)){
                         //c'est bon 
                input.classList.add("is-valid"),
                input.classList.remove("is-invalid")
                return true
        }
        else{
                //c'est pas bon
                input.classList.add("is-invalid"),
                input.classList.remove("is-valid")
                return false
        }
        
                }
        


function validateRequired(input){
if (input.value!=""){
        //c'est bon 
        input.classList.add("is-valid"),
        input.classList.remove("is-invalid")
        return true
}
else{
        //c'est pas bon
        input.classList.add("is-invalid"),
        input.classList.remove("is-valid")
        return false
}

}