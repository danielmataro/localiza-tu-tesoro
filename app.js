// UI interactions not tied to auth/payment
document.getElementById('year').textContent = new Date().getFullYear();

const authDialog = document.getElementById('authDialog');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const toRegister = document.getElementById('toRegister');
const authTitle = document.getElementById('authTitle');
const authSubmit = document.getElementById('authSubmit');

let mode = 'login'; // or 'register'

function openAuth(which){
  mode = which;
  authTitle.textContent = which === 'login' ? 'Entrar' : 'Crear cuenta';
  authSubmit.textContent = which === 'login' ? 'Entrar' : 'Registrarme';
  authDialog.showModal();
}

loginBtn?.addEventListener('click', () => openAuth('login'));
registerBtn?.addEventListener('click', () => openAuth('register'));
toRegister?.addEventListener('click', (e) => {
  e.preventDefault();
  openAuth('register');
});

document.getElementById('btnEmpezarGratis')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  openAuth('register');
});

document.getElementById('btnContactarVentas')?.addEventListener('click', () => {
  alert('Te contactaremos pronto. (Puedes enlazar aquí un formulario o CRM)');
});
