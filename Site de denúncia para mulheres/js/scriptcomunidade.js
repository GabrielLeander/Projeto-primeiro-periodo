const feedbacks = [
    "Usuario Anonimo: Me ajudou quando eu mais precisei",
    "Usuario Anonimo: Nos momentos de urgencia eu tive onde recorrer de maneira sutil e discreta graça a esse site",
    "Usuario Anonimo: Consegui que meu agressor fosse descoberto e condenado com a ajuda e suporte do site e da comunidade",
    "Regina da Silva: Otimas informações, recomendei no meu grupo de amigas",
    "Marco Aurelio: Top!!!",
    "Ana Silva: Este é um ótimo site!",
    "Carlos Pereira: A experiência do usuário é fantástica.",
    "Mariana Costa: Adorei o design e a usabilidade.",
    "Rafael Souza: Muito fácil de navegar e encontrar informações.",
    "Bianca Oliveira: Recomendo a todos!",
    "João Almeida: Plataforma incrível e muito útil.",
    "Fernanda Mendes: Atendimento rápido e eficiente.",
    "Lucas Rocha: Interface amigável e intuitiva.",
    "Camila Ferreira: Achei tudo o que precisava com facilidade.",
    "Pedro Santos: Excelente para denúncias anônimas.",
    "Juliana Lima: Muito bom para encontrar apoio.",
    "Gustavo Ramos: Site seguro e confiável.",
    "Larissa Duarte: Adorei a iniciativa e a execução.",
    "Tiago Batista: Fácil de usar e muito informativo.",
    "Patrícia Gomes: Ferramenta essencial para denúncias."
];
let currentFeedbackIndex = 0;

function showNextFeedback() {
    const feedbackText = document.getElementById("feedback-text");
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
    feedbackText.textContent = feedbacks[currentFeedbackIndex];
}

// TROQUE O TEMPO DE TRANSIÇÃO DO FEEDBACK AQUI MEU CONSAGRADO, É EM MILISSEGUNDOS
setInterval(showNextFeedback, 3000);

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const feedbackInput = document.getElementById("feedback-input");
    const newFeedback = feedbackInput.value.trim();
    if (newFeedback) {
        feedbacks.push(newFeedback);
        feedbackInput.value = "";
        alert("Obrigado pelo seu feedback!");
    }
});