var newName = document.getElementById('newName')
var newEmail = document.getElementById('newEmail')
var newPassword = document.getElementById('newPassword')
var emailLogin = document.getElementById('emailLogin')
var passwordLogin = document.getElementById('passwordLogin')
var loginBtn = document.getElementById('log')


var arrToSignUp = []
if (localStorage.getItem('arrUsers') == null) {
    arrToSignUp = []
} else {
    arrToSignUp = JSON.parse(localStorage.getItem('arrUsers'))
}


function emailWritten() {
    for (var i = 0; i < arrToSignUp.length; i++) {
        if (arrToSignUp[i].mail.toLowerCase() == newEmail.value.toLowerCase()) {
            return false
        }
    }
}


function signUp() {
    if (newName.value == "" || newEmail.value == "" || newPassword.value == "") {
        document.getElementById('danger-success').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    var signUpObj = {
        user: newName.value,
        mail: newEmail.value,
        pass: newPassword.value,
    }
    if (arrToSignUp.length == 0) {
        arrToSignUp.push(signUpObj)
        localStorage.setItem('arrUsers', JSON.stringify(arrToSignUp))
        document.getElementById('danger-success').innerHTML = '<span class="text-success m-3">Success</span>'
    }
    if (emailWritten() == false) {
        document.getElementById('danger-success').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        arrToSignUp.push(signUpObj)
        localStorage.setItem('arrUsers', JSON.stringify(arrToSignUp))
        document.getElementById('danger-success').innerHTML = '<span class="text-success m-3">Success</span>'

    }
}



function login() {
    if (passwordLogin.value == "" || emailLogin.value == "") {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    var passwordValue = passwordLogin.value
    var emailValue = emailLogin.value
    for (var i = 0; i < arrToSignUp.length; i++) {
        if (arrToSignUp[i].mail.toLowerCase() == emailValue.toLowerCase() && arrToSignUp[i].pass.toLowerCase() == passwordValue.toLowerCase()) {
            document.getElementById('error').innerHTML = '<span class="p-2 text-success">Succeed</span>'
            loginBtn.setAttribute('href' , 'home.html')
            } else {
            document.getElementById('error').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}