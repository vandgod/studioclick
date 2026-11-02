const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.service-card a[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('service').value = link.dataset.service;
    document.getElementById('service').dispatchEvent(new Event('change'));
  });
});

const options = {
  'Presença digital': ['Landing page', 'Site institucional', 'Arte ou imagem digital', 'Outro projeto digital'],
  'Serviços essenciais': ['Criação de MEI', 'Recuperação de conta Gov.br', 'Declaração de Imposto de Renda', 'Outro serviço digital'],
  'Suporte técnico': ['Manutenção de sistema operacional', 'Limpeza do computador', 'Diagnóstico', 'Troca ou compra de peças', 'Outro suporte técnico'],
  'Outro assunto': ['Informações gerais', 'Parceria comercial', 'Orçamento personalizado']
};
const serviceSelect = document.getElementById('service');
const detailSelect = document.getElementById('detail');
serviceSelect.addEventListener('change', () => {
  const services = options[serviceSelect.value] || ['Selecione primeiro a área'];
  detailSelect.innerHTML = services.map((item, index) => `<option value="${item}" ${index === 0 && item !== 'Selecione primeiro a área' ? '' : ''}>${item}</option>`).join('');
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = serviceSelect.value;
  const detail = detailSelect.value;
  const message = document.getElementById('message').value.trim();
  const text = `Olá! Meu nome é ${name}.%0A%0AÁrea de interesse: ${service}%0AServiço: ${detail}%0A%0ANecessidade: ${message || 'Gostaria de mais informações.'}`;
  window.open(`https://wa.me/5551989727254?text=${text}`, '_blank', 'noopener');
});

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('studio-click-theme');
if (savedTheme === 'dark') {
  document.documentElement.dataset.theme = 'dark';
  themeIcon.textContent = '☀';
  themeToggle.setAttribute('aria-label', 'Ativar modo claro');
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  if (isDark) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem('studio-click-theme', 'light');
    themeIcon.textContent = '☾';
    themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
  } else {
    document.documentElement.dataset.theme = 'dark';
    localStorage.setItem('studio-click-theme', 'dark');
    themeIcon.textContent = '☀';
    themeToggle.setAttribute('aria-label', 'Ativar modo claro');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));