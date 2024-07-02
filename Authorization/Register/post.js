// const requestURL = 'http://localhost:8080/users/registration'

// function sendRequest(url, method, body = null) {
//     return fetch()
// }

// function addPost() {
//     const form = document.querySelector("form");
//     let data = {
//         Username: form.querySelector("[name='username']").value,
//         Password: form.querySelector("[name='password']").value
//     }
//     fetch(requestURL, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'

//         }
//     }).then(response => { return response.json() }).then(response => console.log(response))
// }
// addPost()


function test() {
    let user = document.querySelector('.i-1').value
    let Pass = document.querySelector('.i-2').value
    fetch('http://localhost:8080/users/registration', {
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify({
            "login": user,
            "password": Pass
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json)
}