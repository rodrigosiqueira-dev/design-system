
import { initBrand, applyBrand } from "./brand.js";
import { initTheme, applyTheme } from "./theme.js";
import { initDropdowns } from "./components/dropdown.js";
import { initModals } from "./components/modal.js";
import { initNavbar } from "./components/navbar.js";
import { showToast } from "./components/toast.js";
import { initAccordions } from "./components/accordion.js";
import { initAlerts } from "./components/alert.js";

window.applyBrand = applyBrand;
window.applyTheme = applyTheme;
window.showToast = showToast;

initBrand();
initTheme();
initDropdowns();
initModals();
initNavbar();
initAccordions();
initAlerts();
