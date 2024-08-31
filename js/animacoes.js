document.addEventListener('DOMContentLoaded', () => {
  const animatedText = document.querySelector('.principal h1');

  // Verifica se .principal h1 existe
  if (animatedText) {
    const textContent = animatedText.textContent.trim();
    animatedText.innerHTML = ''; // Limpa o conteúdo original

    // Itera sobre cada letra e cria um span para ela
    for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement('span');
      span.textContent = textContent[i];
      span.style.opacity = '0';
      span.style.animation = `fadeIn 0.5s ${i * 0.1}s forwards`;
      animatedText.appendChild(span);
    }
  }
})

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section")

  function checkVisibility() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0
      if (isVisible) {
        section.classList.add("active")
      }
    })
  }
  window.addEventListener("scroll", checkVisibility)
  window.addEventListener("resize", checkVisibility)
  checkVisibility()
})