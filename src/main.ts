import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CustomPreset from '@/theme/theme.ts'
import Tooltip from 'primevue/tooltip';
import { MotionPlugin } from '@vueuse/motion'
import { createI18n } from 'vue-i18n'
import i18n from './i18n.ts'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: CustomPreset,
		options: {
			prefix: 'p',
			darkModeSelector: false,
			cssLayer: false
		}
	}
})


app.directive('tooltip', Tooltip);
app.use(MotionPlugin, {
  directives: {
  }
});
app.use(i18n);
app.mount('#app')
