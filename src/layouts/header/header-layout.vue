<script setup lang="ts">
const menuTitles: string[] = ['Home', 'About', 'Skills', 'Projects', 'Contact']

defineExpose({
	menuTitles
})
</script>

<template>
	<header class="app-header flex p-6 px-30 justify-between items-center">
		<div>
			<img src="../../assets/logo/logo.svg" alt="logo" class="w-50">
		</div>
		<div class="flex gap-x-12 header-menu">
			<div v-for="title of menuTitles"
           v-bind:key="title"
           class="title px-2 mx-2 cursor-pointer header-menu-item">
        {{title}}
      </div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import "header-layout";
</style>
