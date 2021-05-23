import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//FontAwesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

//DataTables
import 'datatables.net-bs4';
import 'datatables.net-buttons/js/dataTables.buttons.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-buttons-bs4';
import print from 'datatables.net-buttons/js/buttons.print';
import jszip from 'jszip/dist/jszip';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

//Formato de moneda
import VueCurrencyFilter from 'vue-currency-filter'

//Validaciones para los formularios
import Vuelidate from 'vuelidate';

//Validar formato moneda input
import VueCurrencyInput from 'vue-currency-input';

const pluginOptions = {
    globalOptions: {
        locale: 'es-CO',
        currency: { prefix: "$" },
        valueAsInteger: false,
        distractionFree: false,
        precision: 0,
        autoDecimalMode: true,
        valueRange: { min: 0 },
        allowNegative: false
    }
};

pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jszip;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueCurrencyInput, pluginOptions)
Vue.use(VueCurrencyFilter,
{
    symbol : '$',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true,
    avoidEmptyDecimals: undefined,
});

Vue.use(Vuelidate);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
