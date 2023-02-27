
function readUsers() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/user/readAll", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        let users = [];
        users = JSON.parse(xhttp.responseText);
        console.log(xhttp.responseText);
        document.getElementById("div_users").innerHTML = "";
        for (let i = 0; i < users.length; i++) {
          document.getElementById("div_users").innerHTML += `<div class="row"><div><h3>ID</h3><p>${users[i].id}</p></div>
                                                             <div><h3>NOME</h3><p>${users[i].firstName}</p></div> 
                                                             <div><h3>COGNOME</h3><p>${users[i].lastName}</p></div>
                                                             <div><h3>EMAIL</h3><p>${users[i].email}</p></div></div>`;
        }
    }
}


function readUser(inputId) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:8080/user/readUser/${inputId.value}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let user = JSON.parse(xhttp.responseText);
        console.log(inputId.value);
        document.getElementById("div_user").innerHTML  = `<div class="row"><div><h3>ID</h3><p>${user.id}</p></div>
                                                        <div><h3>NOME</h3><p>${user.firstName}</p></div> 
                                                        <div><h3>COGNOME</h3><p>${user.lastName}</p></div>
                                                        <div><h3>EMAIL</h3><p>${user.email}</p></div></div>`; 
      } else {
        document.getElementById("div_user").innerHTML = `<div class="row"><div><h3>Non Esiste</h3></div>`;
      }
    }
  }


 function updateUser(inputId,inputFirstName,inputLastName,inputEmail) {
    /*let data = {
      id: inputId.value,
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      email: inputEmail.value
  }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", `http://localhost:8080/user/update/${inputId.value}`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(inputId.value);
          document.getElementById("div_update").innerHTML  = `<div class="row"><div><h3>User con ID ${data.id} è stato aggiornato</h3></div>`; 
        } else {
          document.getElementById("div_update").innerHTML = `<div class="row"><div><h3>Non Esiste</h3></div>`;
        }
    }*/


    let url = `http://localhost:8080/user/update/${inputId.value}`;
    fetch(url,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                id: inputId.value,
                firstName: inputFirstName.value,
                lastName: inputLastName.value,
                email: inputEmail.value
            })
        })
        .then(function(res){ 
            console.log(res);
            document.getElementById("div_update").innerHTML  = `<div class="row"><div><h3>User con ID ${inputId.value} è stato aggiornato</h3></div>`;
         })
        .catch(function(res){ 
            console.log(res);
            document.getElementById("div_update").innerHTML = `<div class="row"><div><h3>Error</h3></div>`;
         })
         
  }


  function deleteUser(inputId) {

    let url = `http://localhost:8080/user/delete/${inputId.value}`;
    fetch(url,
      {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method: "DELETE",
      })
        .then(function(res){ 
            console.log(res);
            document.getElementById("div_delete").innerHTML  = `<div class="row"><div><h3>User con ID ${inputId.value} è stato eliminato</h3></div>`;
         })
        .catch(function(res){ 
            console.log(res);
            document.getElementById("div_delete").innerHTML = `<div class="row"><div><h3>Error</h3></div>`;
         })

  }


