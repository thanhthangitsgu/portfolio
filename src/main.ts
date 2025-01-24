import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CustomPreset from '@/theme/theme.ts'

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

app.mount('#app')
