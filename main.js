document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obtém os valores dos campos A e B
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);

    // Verifica se B é maior que A
    if (campoB > campoA) {
        document.getElementById("mensagem").textContent = "Formulário válido! B é maior que A.";
    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido! B deve ser maior que A.";
    }
});


// const form = document.getElementById('verificação')

// let A =  document.getElementById('A')
// let B =  document.getElementById('B')

// function verificaMaiorQue(A,B) {
//    const Maiorque = A < B
//}

//form.addEventListener('submit', function(e) {
//    e.preventDefault();    
    
//    if (A<B) {
//        alert("válido")
//    } else {
//       alert("inválido")
//    }
//})
