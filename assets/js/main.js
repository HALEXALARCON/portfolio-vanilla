import parallax from './components/parallax.js';
import updateCurrentYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import activeMenu from './helpers/selected_menu.js';
import sendEmail from './helpers/send_form.js';
import changeLanguage from './helpers/Language.js';

loader();
resetToHome();
updateCurrentYear();
parallax();
activeMenu();
sendEmail();
changeLanguage();
// Activar modo oscuro cuando se marca el toggle
const darkToggle = document.getElementById('darkmode-toggle');

darkToggle.addEventListener('change', (e) => {
    document.documentElement.classList.toggle('dark', e.target.checked);
});

