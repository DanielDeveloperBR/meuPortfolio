// Função para animar o título "Daniel Souza"
function animacaoTitulo() {
    const titulo = document.querySelector('h1');
    let pulo = 0;
    const puloIntervalo = setInterval(() => {
      titulo.style.transform = `translateY(${pulo % 2 === 0 ? '-10px' : '0'})`;
      pulo++;
      if (pulo >= 6) {
        clearInterval(puloIntervalo);
      }
    }, 500);
  }

  // Chama a função de animação após o carregamento da página
  window.onload = animacaoTitulo;
