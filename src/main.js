import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhoneFlip, faCircle, faHouseChimney, faLink } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleReg, faEnvelope, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faPhoneFlip, faFacebookF, faTwitter, faInstagram, faCircle, faCircleReg, faHouseChimney, faEnvelope, faLink, faCircleRight);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
