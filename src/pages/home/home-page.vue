<script setup lang="ts">
import HeaderLayout from '@/layouts/header/header-layout.vue'
import SummaryLayout from '@/layouts/summary/summary-layout.vue'
import AboutLayout from '@/layouts/about/about-layout.vue'
</script>

<template>
	<div class="app-container">
		<header-layout/>
    <summary-layout/>
    <div class="section-divider"></div>
    <about-layout/>
	</div>
</template>

<style scoped src="./home-page.scss" lang="scss"></style>
