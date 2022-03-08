const slideElement = document.getElementById("slider");
const buttonElement = document.getElementById("button");

let sizePassword = document.getElementById("valor");
let password = document.getElementById("password");

const containerPassword = document.getElementById("container-password");

const charset = "absdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

const generatePassword = () => {

    let pass = "";

    for (let i = 0, n = charset.length; i < slideElement.value; ++i) {

        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

const copyPass = () => {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha)
}