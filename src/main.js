import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import fontsource
import "@fontsource/quicksand"
import "@fontsource/caveat"
import "@fontsource/oooh-baby"
import "@fontsource/metropolis"
import "@fontsource/gupter"
import "@fontsource/londrina-shadow"
import "@fontsource/lilita-one"

//import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faTwitter, faInstagram, faFacebookF, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faClock, faFileLines, faUser, faCalendar, faCopyright} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faGlobe, faRulerCombined, faBook, faArrowRight, faEye, faLocationDot, faArrowRightLong, faArrowUpLong, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faLinkedin, faTwitter, faFacebookF, faSquareFacebook,faInstagram, faClock, faCartShopping, faGlobe, faCopyright,faRulerCombined, faBook, faFileLines, faUser, faArrowRight, faCalendar, faEye, faLocationDot, faArrowRightLong, faArrowUpLong, faMagnifyingGlass)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
