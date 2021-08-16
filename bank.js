

document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("email-fill");
    const userEmail = emailField.value;
    // password section
    const passwordfield = document.getElementById("password-fill");
    const userpasseord = passwordfield.value;
    if (userEmail == "hellosojib" && userpasseord == "hello");
    else {
        console.log("It's Wrong Number")
    }
    window.location.href ="bankside.html"



})