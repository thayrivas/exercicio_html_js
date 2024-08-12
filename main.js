const form = document.getElementById("formulario")
const btnConfirmar = document.getElementById("btn-confirmar");
const msgSuccess = document.querySelector("success-message");
const msgError = document.querySelector("error-message");

form.addEventListener('submit', validaCampo); {
    e.preventDefault();
}

function validaCampo (e) {
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const A = Number(campoA.value);
    const B = Number(campoB.value);

    if (A > B) {
        document.querySelector('.error-message').style.display = "block";
    } else {
        document.querySelector('.sucess-message').style.display = "block";
    }
}