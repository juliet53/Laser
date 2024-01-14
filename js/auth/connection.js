const mailInput = document.getElementById("InputEmail")
const passwordInput = document.getElementById("InputPassword")
const connectionButton = document.getElementById("connectionButton")

connectionButton.addEventListener("click",checkCredentials)
function checkCredentials(){
        // ici il faudra appeler l'api pour verifier les credentials en bdd
        if(mailInput.value =="test@mail.com" && passwordInput.value== "123"){
                const token = "jksdbvksjdnvlsdnv"
                setToken(token)
                setCookie(roleCookieName,"admin",7)
                window.location.replace("/")
        }else{
                mailInput.classList.add("is-invalid")
                passwordInput.classList.add("is-invalid")
        }


}