window.onscroll = function() {
    var navbarpc = document.getElementById("navbar-pc");
    var navbarmb = document.getElementById("navbar-mb");
    var top = document.getElementById("gotop");
    if (document.documentElement.scrollTop > 850 || document.body.scrollTop > 850) {
        navbarpc.style.backgroundColor = "#00917c";
        navbarpc.style.margin = 0;
        navbarmb.style.backgroundColor = "#00917c";
        navbarmb.style.margin = 0;
        top.style.display = "block";
    } else {
        navbarpc.style.backgroundColor = "transparent";
        navbarpc.style.margin = "3rem";
        navbarmb.style.backgroundColor = "transparent";
        navbarmb.style.margin = "3rem";
        top.style.display = "none";
    }
}
var menuContext = document.getElementById("context-menu")
document.addEventListener("contextmenu", function(e) {
    menuContext.style.display = "block"
    menuContext.style.top = e.y + 'px'
    menuContext.style.left = e.x + 'px'
    e.preventDefault()
})
document.addEventListener("click", function(e) {
    menuContext.style.display = "none"
})
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirm-password")
var female = document.querySelector(".form-text .genderF")
var male = document.querySelector(".form-text .genderM")
var membership = document.getElementById("mebership-level")
var checkDK = document.getElementById("check-dk")
var btnSubmit = document.querySelector("#RegexForm")

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (input.value == "") {
            isEmptyError = true
            showError(input, 'Empty')
        } else {
            showSuccess(input)
        }
    })
    return isEmptyError
}

function checkEmail(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, "Email Invalid")
    }
    return isEmailError
}

function checkLength(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Your password must be at least ${min} characters long`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Your password must be less than ${max} characters`)
        return true
    }

    showSuccess(input)
    return false
}

function checkMatchPassword(passWordInput, cfpassWordInput) {
    if (passWordInput.value !== cfpassWordInput.value) {
        showError(cfpassWordInput, "Password does not match")
        return true
    }
    return false
}

function checkCheckedEmpty() {
    if (male.checked == false && female.checked == false) {
        alert("You must select male or female")
    }
    if (checkDK.checked == false) {
        alert("You must check agree")
        return true
    }
    return false
}

function checkMemberEmpty() {
    if (membership.value == "") {
        alert("You must select Member Level")
        return true
    }
    return false
}
btnSubmit.addEventListener("click", function(e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmail(email)
    let isUsernameLengthError = checkLength(username, 6, 12)
    let isPasswordLengthError = checkLength(password, 8, 20)
    let isPasswordMatch = checkMatchPassword(password, confirmPassword)
    let isCheckCheckedEmpty = checkCheckedEmpty()
    let isCheckMemberEmpty = checkMemberEmpty()
    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isPasswordMatch || isCheckCheckedEmpty || isCheckMemberEmpty) {

    } else {
        alert("Signup success")
    }

})

var toggle = document.getElementById("toggleDark")
toggle.addEventListener("click", function() {
    var backgroundcolor = document.getElementById("instagram")
    var background_2 = document.getElementById("Signup")
    this.classList.toggle("fa-moon")
    if (this.classList.toggle("fa-lightbulb")) {
        backgroundcolor.style.background = "#333"
        background_2.style.background = "#333"
        backgroundcolor.style.color = "#fff"
        background_2.style.color = "#fff"
        document.querySelector("#Signup p").classList.remove("text-muted")
    } else {
        backgroundcolor.style.background = "#fff"
        backgroundcolor.style.color = "#333"
        background_2.style.background = "#fff"
        document.querySelector("#Signup p").classList.add("text-muted")
    }
})

var reloadpage = document.querySelector(".reloadpage")
reloadpage.addEventListener("click", function() {
    var r = confirm("Are you sure you want to reload the page.");
    if (r) {
        location.reload();
    } else {}
})

function hientb() {
    alert("Error")
}