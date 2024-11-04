// Função para exibir as dicas ao clicar no botão
function mostrarDicas() {
    const dicas = document.getElementById("dicas");
    if (dicas.style.display === "none") {
        dicas.style.display = "block";
    } else {
        dicas.style.display = "none";
    }
}
