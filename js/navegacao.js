var navegacao = document.querySelector("nav")
document.getElementById("burguer").addEventListener("click", clickMenu)
function clickMenu() {
    if (navegacao.style.display == "none" || navegacao.style.display == "") {
        navegacao.style.display = "block"
    } else {
        navegacao.style.display = "none"
    }
}
window.addEventListener("resize", checarTela)
function checarTela() {
    if (window.innerWidth >= 650) {
        navegacao.style.display = "block"
    } else {
        navegacao.style.display = "none"
    }
}
//scroll
// Selecione todos os links do menu
const linksMenu = document.querySelectorAll('#menu li a');

// Adicione o evento de clique a cada link do menu
linksMenu.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que o link faça uma navegação padrão

    // Obtenha o ID da seção de destino a partir do atributo "href" do link
    const destinoID = link.getAttribute('href');

    // Obtenha a seção de destino com base no ID
    const destinoSection = document.querySelector(destinoID);

    // Verifique se o elemento de destino foi encontrado antes de rolar
    if (destinoSection) {
      // Rola um pouco acima da seção de destino
      const offset = -110; // Ajuste aqui a quantidade de pixels acima da seção desejada
      window.scroll({
        top: destinoSection.getBoundingClientRect().top + window.pageYOffset + offset,
        behavior: 'smooth'
      });

      // Mostra o título da seção após um pequeno atraso (200ms)
      setTimeout(() => {
        destinoSection.querySelector('h2').style.opacity = 1;
      }, 200);
    }
  });
});