import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CustomPreset from '@/theme/theme.ts'
import Tooltip from 'primevue/tooltip';
import { MotionPlugin } from '@vueuse/motion'

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
app.mount('#app')
