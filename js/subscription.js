function validateForm() {
  let email = document.forms["inputForm"]["email"].value;
  let password = document.forms["inputForm"]["password"].value;
  let plan = document.forms["inputForm"]["plan"].value;
  let gender = document.getElementsByName("gender");
  let checkbox = document.getElementById("terms");

  let valid = true;

  if (!validateEmail(email)) {
    valid = false;
  }
  if (!validatePassword(password)) {
    valid = false;
  }
  if (!validatePlan(plan)) {
    valid = false;
  }
  if (!validateGender(gender)) {
    valid = false;
  }
  if (!validateTerms(checkbox)) {
    valid = false;
  }
  console.log(valid);
  return valid;
}

function addAlert(target, message) {
  let div = document.getElementById(target);
  let err = document.getElementById(target + "-err");

  if (err == null) {
    div.insertAdjacentHTML(
      "afterend",
      `<p class="error" id="${target}-err">${message}</p>`
    );
    div.style = "border-bottom: 1px solid #fb380c;";
  } else {
    err.innerHTML = message;
  }
}

function removeAlert(target) {
  let div = document.getElementById(target);
  let err = document.getElementById(target + "-err");

  if (err != null) {
    err.remove();
  }

  div.style = "border-bottom: 1px solid #ccc;";
}

function validateEmail(email) {
  if (email == "") {
    addAlert("email", "Please enter your email");
    return false;
  }
  if (!email.endsWith(".com")) {
    addAlert("email", "Email must end with .com");
    return false;
  }

  removeAlert("email");
  return true;
}

function validatePassword(pass) {
  if (pass == "") {
    addAlert("password", "Please enter your password");
    return false;
  }
  if (pass.length < 8) {
    addAlert("password", "Password must be longer than 8 characters");
    return false;
  }

  removeAlert("password");
  return true;
}

function validatePlan(plan) {
  if (plan == "") {
    addAlert("plan", "Please choose your plan");
    return false;
  }
  removeAlert("plan");
  return true;
}

function validateGender(gender) {
  if (
    gender[0].checked == false &&
    gender[1].checked == false &&
    gender[2].checked == false
  ) {
    document.getElementById("gender-err").innerHTML =
      "Please choose your gender";
    return false;
  }
  document.getElementById("gender-err").innerHTML = "";
  return true;
}

function validateTerms(checkbox) {
  if (!checkbox.checked) {
    document.getElementById("terms-err").innerHTML =
      "You must agreed to the terms and conditions";
    return false;
  }
  document.getElementById("terms-err").innerHTML = "";
  return true;
}
