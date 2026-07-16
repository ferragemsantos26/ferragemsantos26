// ==========================================
// Ferragem Santos - script.js
// ==========================================

// Atualiza automaticamente o ano no rodapé (se existir um elemento com id="ano")
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Efeito ao passar o mouse nos cartões
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Mensagem de boas-vindas no console
console.log("Bem-vindo ao site da Ferragem Santos!");
