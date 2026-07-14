document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-botao');
  const nav = document.querySelector('.nav nav');
  menu?.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    menu.setAttribute('aria-expanded', aberto);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('aberto'); menu?.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('ano').textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visivel'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.categoria, .sobre-imagem, .cartao-contato').forEach(el => observer.observe(el));
});
