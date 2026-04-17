emailjs.init("-arjr-fJHliQLbOrj");

document.querySelector(".contatoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const botao = document.querySelector(".contatoFormBotao");

    const dados = {
        nome:     document.querySelector('input[type="text"]').value,
        email:    document.querySelector('input[type="email"]').value,
        mensagem: document.querySelector("textarea").value,
    };

    botao.textContent = "ENVIANDO...";
    botao.disabled = true;

    emailjs.send("service_hawon8a", "template_r5wdceq", dados)
        .then(() => {
            botao.innerHTML = 'MENSAGEM ENVIADA <i class="fa-solid fa-check"></i>';
            botao.style.borderColor = "#22c55e";
            this.reset();

            setTimeout(() => {
                botao.innerHTML = 'ENVIAR MENSAGEM <i class="fa-regular fa-paper-plane"></i>';
                botao.style.borderColor = "#743283";
                botao.disabled = false;
            }, 3000);
        })
        .catch((erro) => {
            console.error("Erro:", erro);
            botao.innerHTML = 'ERRO AO ENVIAR <i class="fa-solid fa-xmark"></i>';
            botao.style.borderColor = "#ef4444";

            setTimeout(() => {
                botao.innerHTML = 'ENVIAR MENSAGEM <i class="fa-regular fa-paper-plane"></i>';
                botao.style.borderColor = "#743283";
                botao.disabled = false;
            }, 3000);
        });
});
