// Autenticación con Firebase (cliente). Rellena las variables con tus credenciales.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_PROYECTO.firebaseapp.com',
  projectId: 'TU_PROJECT_ID',
  appId: 'TU_APP_ID'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.getElementById('authForm');
const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const userMenu = document.getElementById('userMenu');
const userEmail = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const dialog = document.getElementById('authDialog');

let mode = 'login';
function setMode(m){ mode = m; }

document.addEventListener('click', (e) => {
  if (e.target.id === 'loginBtn') setMode('login');
  if (e.target.id === 'registerBtn') setMode('register');
  if (e.target.id === 'toRegister') setMode('register');
});

authForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailEl.value.trim();
  const password = passEl.value;
  try {
    if (mode === 'login') {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    dialog.close();
  } catch (err) {
    alert(err.message);
  }
});

logoutBtn?.addEventListener('click', async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    userMenu.classList.remove('hidden');
    loginBtn?.classList.add('hidden');
    registerBtn?.classList.add('hidden');
    userEmail.textContent = user.email;
  } else {
    userMenu.classList.add('hidden');
    loginBtn?.classList.remove('hidden');
    registerBtn?.classList.remove('hidden');
    userEmail.textContent = '';
  }
});
