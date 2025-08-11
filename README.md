# Localiza tu Tesoro — Starter con Stripe + Firebase Auth

Este paquete actualiza tu web con:
- Imágenes libres (Unsplash) y diseño más cuidado.
- Sin mostrar correo en público.
- Registro y login de usuarios (Firebase Auth).
- Pasarela de pago (Stripe), con dos opciones:
  - **Payment Link**: pega tu enlace en `stripe.js`.
  - **Checkout** con función serverless (Netlify) usando `/.netlify/functions/create-checkout-session`.

## Puesta en marcha rápida

1) Sirve el sitio estático (por ejemplo con Netlify / Vercel / GitHub Pages).  
2) **Firebase Auth**: en `auth.js` pon tus credenciales de Firebase (modo Email/Password habilitado).  
3) **Stripe**:
   - Opción A: Crea un Payment Link en Stripe y pégalo en `stripe.js` (`PREMIUM_PAYMENT_LINK`).
   - Opción B (serverless): despliega en Netlify y configura variables de entorno:
     - `STRIPE_SECRET_KEY` (sk_test_... o sk_live_...)
     - `SITE_URL` (ej. https://tudominio.com)
   - El botón **Comprar Premium** redirige al checkout seguro.

## Desarrollo local
Puedes usar `npx serve` o `python -m http.server` para ver el sitio:
```bash
npx serve .
# o
python -m http.server 8080
```

## Notas
- El email del usuario solo se muestra a sí mismo en el menú (no público).
- Sustituye textos/imágenes según tu marca.
