import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/home-page.vue'
import ProjectPage from '@/pages/project/project-page.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/project',
			name: 'project',
			component: ProjectPage
		}
	]
})

export default router
