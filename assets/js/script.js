const email = document.querySelector("#email");
const errorMessage = document.querySelector(".errMessage");
const subscribe = document.querySelector("#subscribe");
const signUpContainer = document.querySelector("#signUpContainer");
const success = document.querySelector("#success");
const dismiss = document.querySelector("#dismiss");

let successShown = false;

subscribe.addEventListener("click",(click)=>{
    if(email.value === '' || checkEmail(email.value))
    {
        if(email.value === '')
        {
            errorMessage.innerHTML = `The field is left empty`;
        } 
        else 
        {
            errorMessage.innerHTML = `The email address is not formatted correctly`;
        }
    } 
    else 
    {
        errorMessage.innerHTML = ``; 
        if (!successShown) {
            signUpContainer.classList.add("hideMessage");
            success.classList.add("showMessage");
            successShown = true;
        }
    }
})

dismiss.addEventListener("click",(click)=>{
    errorMessage.innerHTML = ``; 
    email.value = ``;
    if (successShown) {
        signUpContainer.classList.remove("hideMessage")
        success.classList.remove("showMessage")
        successShown = false;
    }
})

function checkEmail(emailAddress) {
    const emailParts = emailAddress.split('@');
    if(emailParts.length !== 2) return true;
    const userName = emailParts[0];
    const domain = emailParts[1];

    if(userName.length < 1 || domain.length < 1) return true;
    if(domain.indexOf('.') === -1) return true;
    return false;
}