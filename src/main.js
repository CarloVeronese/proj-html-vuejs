import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleReg } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faPhone, faFacebookF, faTwitter, faInstagram, faCircle, faCircleReg);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
