<script setup lang="ts">
import GreetingLayout from '@/layouts/greeting/greeting-layout.vue'
import AboutLayout from '@/layouts/about/about-layout.vue'
import ProjectLayout from '@/layouts/project/project-layout.vue'
import ContactLayout from '@/layouts/contact/contact-layout.vue'
</script>

<template>
	<div class="app-container">
    <greeting-layout/>
    <about-layout/>
    <project-layout/>
    <contact-layout/>
	</div>
</template>

<style scoped src="./home-page.scss" lang="scss"></style>
