const inPages = location.pathname.includes('/pages/');
const root = inPages ? '../' : '';
const links = [
  ['Inicio', root + 'index.html'],
  ['Ciudadanía Digital', root + 'pages/ciudadania-digital.html'],
  ['México Digital', root + 'pages/mexico-digital.html'],
  ['Mundo Digital', root + 'pages/mundo.html'],
  ['Recursos', root + 'pages/recursos.html'],
  ['Empleo TI', root + 'pages/empleo-ti.html'],
  ['Referencias', root + 'pages/referencias.html']
];
const current = location.pathname.split('/').pop() || 'index.html';
const header = document.querySelector('#site-header');
header.className = 'site-header';
header.innerHTML = `<nav class="nav container" aria-label="Navegación principal"><a class="brand" href="${root}index.html"><img src="${root}assets/mexico-flag-icon.jpg" alt="Bandera de México"><span>Ciudadanía<br><strong>Digital México</strong></span></a><details class="menu" open><summary>Menú</summary><ul>${links.map(([name,url]) => `<li><a ${url.endsWith(current) ? 'aria-current="page"' : ''} href="${url}">${name}</a></li>`).join('')}</ul></details></nav>`;
document.querySelector('#site-footer').innerHTML = `<div class="container footer-grid"><div><strong>Ciudadanía Digital México</strong><p>Proyecto educativo sin fines de lucro · Versión 3.0</p></div><div class="social"><span aria-disabled="true">Instagram</span><span aria-disabled="true">YouTube</span><span aria-disabled="true">X</span><small>Próximamente</small></div></div><p class="copyright">© 2026 · Construyamos un México más digital, incluyente y seguro.</p>`;
const quiz = document.querySelector('#quiz');
if (quiz) quiz.addEventListener('submit', event => {
  event.preventDefault();
  const answers = new FormData(quiz);
  const score = ['q1','q2','q3','q4','q5','q6','q7','q8'].filter(key => answers.get(key) === '1').length;
  const result = document.querySelector('#quiz-result');
  result.textContent = `Resultado: ${score} de 8. ${score >= 7 ? 'Tienes buenos hábitos de ciudadanía digital. Continúa usando la tecnología de forma crítica, segura y responsable.' : score >= 4 ? 'Tienes prácticas aceptables, pero aún puedes mejorar en seguridad, privacidad y participación responsable.' : 'Necesitas fortalecer tus hábitos digitales. Comienza por proteger tus datos, verificar fuentes y usar internet con mayor precaución.'}`;
  result.focus();
});
