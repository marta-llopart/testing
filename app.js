// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.section;

    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    link.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// ===== CARD ANIMATIONS =====
const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
  card.style.animationDelay = `${i * 100}ms`;
});

// ===== START BUTTON =====
document.getElementById('startBtn')?.addEventListener('click', () => {
  navLinks.forEach(l => l.classList.remove('active'));
  sections.forEach(s => s.classList.remove('active'));

  document.querySelector('[data-section="components"]')?.classList.add('active');
  document.getElementById('components')?.classList.add('active');
});

// ===== CONSOLE DRAWER =====
const consoleDrawer = document.getElementById('consoleDrawer');
const consoleBody = document.getElementById('consoleBody');
const consoleInput = document.getElementById('consoleInput');

document.getElementById('consoleBtn')?.addEventListener('click', () => {
  consoleDrawer.classList.toggle('open');
  if (consoleDrawer.classList.contains('open')) consoleInput.focus();
});

document.getElementById('consoleClose')?.addEventListener('click', () => {
  consoleDrawer.classList.remove('open');
});

function logToConsole(text, type = 'output') {
  const line = document.createElement('div');
  line.className = `console-line ${type}`;
  line.textContent = text;
  consoleBody.appendChild(line);
  consoleBody.scrollTop = consoleBody.scrollHeight;
}

consoleInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const code = consoleInput.value.trim();
  if (!code) return;

  logToConsole(`› ${code}`, 'input-echo');
  consoleInput.value = '';

  try {
    const result = eval(code);
    const output = result !== undefined ? String(result) : '→ undefined';
    logToConsole(output, 'output');
  } catch (err) {
    logToConsole(`✕ ${err.message}`, 'error');
  }
});

// ===== API TESTER =====
document.getElementById('sendBtn')?.addEventListener('click', async () => {
  const method = document.getElementById('methodSelect').value;
  const url = document.getElementById('urlInput').value.trim();
  const output = document.getElementById('responseOutput');
  const pill = document.getElementById('statusPill');

  if (!url) {
    output.textContent = '// Introduce una URL para continuar.';
    return;
  }

  output.textContent = '// Cargando...';
  pill.textContent = '...';
  pill.className = 'status-pill';

  try {
    const start = Date.now();
    const res = await fetch(url, { method });
    const ms = Date.now() - start;
    const data = await res.json();

    pill.textContent = `${res.status} · ${ms}ms`;
    pill.className = `status-pill ${res.ok ? 'ok' : 'err'}`;
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    pill.textContent = 'Error';
    pill.className = 'status-pill err';
    output.textContent = `// Error: ${err.message}`;
  }
});

// ===== STATUS BAR =====
const statusText = document.querySelector('.status-text');
const statusDot = document.querySelector('.status-dot');

window.addEventListener('online', () => {
  statusText.textContent = 'online';
  statusDot.style.background = 'var(--accent2)';
});
window.addEventListener('offline', () => {
  statusText.textContent = 'offline';
  statusDot.style.background = 'var(--danger)';
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    consoleDrawer.classList.toggle('open');
    if (consoleDrawer.classList.contains('open')) consoleInput.focus();
  }
  if (e.key === 'Escape') {
    consoleDrawer.classList.remove('open');
  }
});

// ===== INIT LOG =====
console.log('%c Dev Playground v1.0.0 ', 'background:#e8ff47;color:#000;font-weight:bold;padding:4px 8px;');
console.log('Shortcut: Ctrl/Cmd + ` para abrir la consola');
