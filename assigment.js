

document.getElementById("login-button").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password.length > 8) {
        alert("Passordet kan ikke være lengre enn 8 tegn.");
        return;
    }

    if (username === "bruker" && password === "passord") {
        alert("Innlogging vellykket!");
    } else {
        alert("Feil brukernavn eller passord. Prøv igjen.");
    }
});
