// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// SVG icons sprite generation
document.addEventListener('DOMContentLoaded', () => {
  function requireAll(r) {
    r.keys().forEach(r);
  }
  requireAll(require.context('./assets/img/icons/', true, /\.svg$/));
});