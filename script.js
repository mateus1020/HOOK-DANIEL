const elementos = document.querySelectorAll(".animado");
// Animação dos elementos na pagina.
window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    elementos.forEach((el) => {
        const pos = el.getBoundingClientRect().top;
        if (pos < trigger) el.classList.add("visivel");
    });
});

// Função para voltar ao topo
const botao = document.getElementById('voltar-ao-topo');
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
botao.addEventListener('click', voltarAoTopo);
// Mostra o botão apenas quando o usuário scrollar
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { // Mostra após 500px de scroll
    botao.style.display = 'block';
  } else {
    botao.style.display = 'none';
  }
});

const comprarProduto = (botao) => {
  const nomeProduto = botao.getAttribute("data-nome"); // Pega o nome do produto do botão clicado
  const numero = "5561998801863"; // Seu número do WhatsApp com DDD
  const mensagem = `Olá, tenho interesse no produto: ${nomeProduto}. Ainda está disponível?`;
  const url = `http://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank"); // Abre o WhatsApp com a mensagem pré-preenchida
};


