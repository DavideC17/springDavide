let subscribe = document.getElementById("subscribe");
let login = document.getElementById("login");
let formSubscribe = document.getElementById("form_subscribe");
formSubscribe.style.display = "flex";
let formLogin = document.getElementById("form_login");
let popupOK = document.getElementById("popupOK");
let chiudiBtn = document.getElementsByName("chiudiBtn");

subscribe.addEventListener("click", function() {
    console.log("ciao sub");
    subscribe.classList.add("to_use");
    login.classList.remove("to_use");
    formLogin.style.display = "none";
    formSubscribe.style.display = "flex";
});

login.addEventListener("click", function() {
    console.log("ciao login");
    login.classList.add("to_use");
    subscribe.classList.remove("to_use");
    formSubscribe.style.display = "none";
    formLogin.style.display = "flex";
});



let url = `http://localhost:8080/user/add`;
function addUser(inputId,inputFirstName,inputLastName,inputEmail) {

    fetch(url, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            id: inputId.value,
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value
        })
    })
    .then(function(res){ 
        console.log(res);
        popupOK.style.display = "flex";
     })
    .catch(function(res){ 
        console.log(res);
        popupOK.innerHTML = "<h1>ERRORE</h1><p>Registrazione non riuscita</p>";
     })

}

function chiudiPopUp() {
    popupOK.style.display = "none"
}

