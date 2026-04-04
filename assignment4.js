//    Author: Jeremy St Pierre #301540695

//all form elements
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const addr = document.getElementById("address");
const city = document.getElementById("city");
const postal = document.getElementById("postalcode");
const province = document.getElementById("province");
const age = document.getElementById("age");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const errorString = document.getElementById("errors");
//put em in an array
let allElements = [fname, lname, addr, city, postal, province, age, password1, password2, email];

let postalRegex = /[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/;
let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
let passwordRegex = /^(?=.*\d)(?=.*[A-Z]).*$/;

function checkPostal() {
    if (postalRegex.test(postal.value)) {
        return true;
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "Please enter a valid postal code (a0a0a0)";
        errorString.appendChild(msg);
        return false;
    }
}

function checkEmail() {
    if (emailRegex.test(email.value)) {
        return true;
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "Please enter a valid email! (name@server.domain)";
        errorString.appendChild(msg);
        return false;
    }
}

function checkPasswords() {
    if (password1.value.length >= 6 && passwordRegex.test(password1.value)) { 
        if (password1.value === password2.value) {
            return true;
        } else {
            let msg = document.createElement('p');
            msg.innerHTML = "Passwords do not match!";
            errorString.appendChild(msg);
            return false;
        }
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "Password must contain one uppercase letter and one digit!";
        errorString.appendChild(msg);
        return false;
    }
}

function checkProvince() {
    if (['ON', 'QC', 'AB', 'MB', 'SK', 'BC'].includes(province.value)) {
        return true;
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "Select a canadian province!";
        errorString.appendChild(msg);
        return false;
    }
}

function checkAge() {
    if (age.value >= 18) {
        return true;
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "You must be 18 to join!";
        errorString.appendChild(msg);
        return false;
    }
}

function getValues() {
    let formData = new FormData(form);
    let inputString = "";
    for (let [key, value] of formData.entries()) {
        inputString += (key + "=" + value + ";");
        document.cookie = (key + "=" + value + ";");
    }
    return inputString;
}

function validateForm() {
    if (![fname.value, lname.value, addr.value, city.value, postal.value, province.value, age.value, password1.value, password2.value, email.value].includes('')) {
        if ([checkAge(), checkPostal(), checkEmail(), checkProvince(), checkPasswords()].includes(false)) {
            alert('Please fill the form properly!!')    
        } else {
            errorString.innerHTML += 'Thank you for Registering! <br />';
            document.cookie = getValues();
            localStorage.setItem("signup", getValues());
            errorString.innerHTML = 'Form values provided: ' + getValues();
        }
    } else {
        let msg = document.createElement('p');
        msg.innerHTML = "You must fill out all the fields!";
        errorString.appendChild(msg);
    }
}

submitButton.addEventListener('click', (e) => {
    validateForm();
});

clearButton.addEventListener('click', (e) => {
    errorString.innerHTML = "";
});
