/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/scss/style.scss';
import './styles/scss/mobileStyles.scss';
import './styles/scss/tabletStyles.scss';
import './styles/scss/hdReadyStyles.scss';
import './styles/scss/fullHDStyles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
const $ = require('jquery');
require('../node_modules/@fortawesome/fontawesome-free/js/all');
require('../node_modules/async/all.js');
require('../node_modules/jquery/src/jquery.js');
require('../node_modules/bootstrap/js/src/button.js');
require('../node_modules/bootstrap/js/src/alert.js');
require('../node_modules/bootstrap/js/src/carousel.js');
require('../node_modules/bootstrap/js/src/collapse.js');
require('../node_modules/bootstrap/js/src/dropdown.js');
require('../node_modules/bootstrap/js/src/index.js');
require('../node_modules/bootstrap/js/src/modal.js');
require('../node_modules/bootstrap/js/src/popover.js');
require('../node_modules/bootstrap/js/src/scrollspy.js');
require('../node_modules/bootstrap/js/src/tab.js');
require('../node_modules/bootstrap/js/src/toast.js');
require('../node_modules/bootstrap/js/src/tooltip.js');
require('../node_modules/bootstrap/js/src/util.js');
require('../node_modules/bootstrap/js/src/tools/sanitizer.js');
// require('../node_modules/popper/index.js');

console.log('Hello Webpack Encore! Edit me in assets/app.js');
