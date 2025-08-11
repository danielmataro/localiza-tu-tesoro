// Stripe checkout: usa un Payment Link o tu función serverless para crear sesiones.
// Opción A (rápida): Payment Link
const PREMIUM_PAYMENT_LINK = "" // <-- pega aquí tu Payment Link de Stripe (modo prueba/producción)

document.getElementById('btnComprarPremium')?.addEventListener('click', async () => {
  if (PREMIUM_PAYMENT_LINK) {
    window.location.href = PREMIUM_PAYMENT_LINK;
  } else {
    // Opción B: Llamar a tu endpoint serverless que crea una sesión de Checkout
    try {
      const res = await fetch('/.netlify/functions/create-checkout-session', { method: 'POST' });
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert('No se pudo iniciar el pago. Configura tu Payment Link o función serverless.');
    } catch (e) {
      alert('Error iniciando el pago. Revisa tu configuración de Stripe.');
    }
  }
});
