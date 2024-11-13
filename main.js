const form = document.getElementById("form");

function validacao(a, b){
    return parseInt(a) > parseInt(b)
};

form.addEventListener ("submit", function(e){
    e.preventDefault();

    const campoA = document.getElementById("campo-a");
    const campoB = document.getElementById("campo-b");
    const mensagemSucesso = "Formulário enviado com sucesso!"
    const mensagemErro = "O valor do campo B precisa ser maior que o valor do campo A!"

    if (validacao (campoB.value, campoA.value) === true){
        const containerSucessMessage = document.querySelector(".mensagemDeSucesso");
        containerSucessMessage.innerHTML = mensagemSucesso;
        containerSucessMessage.style.display = "block";
        campoA.value = ""
        campoB.value = ""
        const containerErrorMessage = document.querySelector(".mensagemDeErro");
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = "none";
        campoA.style.border = "";

    } else {
        const containerErrorMessage = document.querySelector(".mensagemDeErro");
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = "block";
        campoA.style.border = "3px solid red";

    }
})

console.log(form);