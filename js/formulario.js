const form = document.querySelector("form");
form.addEventListener("submit", evento => {
  evento.preventDefault();
  const nome = form.querySelector('input[name="nome"]');
  const email = form.querySelector('input[name="email"]');
  const assunto = form.querySelector('input[name="assunto"]');
  const mensagem = form.querySelector('textarea[name="mensagem"]');
  
  // Validação do e-mail
  if (!validarEmail(email.value)) {
    return false;
  }

  // Validação se está vazio
  if (nome.value.trim() === '' || email.value.trim() === '' || assunto.value.trim() === '' || mensagem.value.trim() === '') {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  // Se todas as validações passaram, pode prosseguir com o envio do formulário
  return form.submit()
});

function validarEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido!');
    return false;
  }
  return true;
}