<script setup lang="ts">
import { menuTitles } from '@/utils/constants/menu-title.ts'
import { useI18n } from 'vue-i18n'
import { lang } from '@/utils/I18nHelper.ts'
import { ref, watch } from 'vue'

const {locale} = useI18n();
const langs: {name: string, icon: string}[] = [
  {name : "VI", icon: 'vietnam-flag.png'},
  {name : "EN", icon: "en-flag.png"}
]

const selectedLang = ref(langs[1])
watch(selectedLang, (newValue, oldValue) => {
  locale.value = newValue.name.toLowerCase();
})


</script>

<template>
	<header class="app-header bg-white flex p-6 px-30 justify-between items-center sticky top-0">
		<div>
			<img src="../../assets/logo/logo.svg" alt="logo" class="w-50">
		</div>
		<div class="flex gap-x-12 header-menu grow justify-end me-4">
			<div v-for="title of menuTitles"
           v-bind:key="title"
           class="title px-2 mx-2 cursor-pointer header-menu-item font-normal">
        {{lang(title)}}
      </div>
		</div>
    <div>
      <Select :options="langs" optionLabel="name" size="small" style="width: 100px" v-model="selectedLang">
        <template #value="slotProps">
          <div class="flex items-center">
            <img :src="'src/assets/images/icon/' + selectedLang.icon" style="width: 25px">
            <div class="ms-1">{{ selectedLang.name }}</div>
          </div>
        </template>

        <template #option="slotProps">
          <div class="flex items-center">
            <img :src="'src/assets/images/icon/' + slotProps.option.icon" style="width: 25px">
            <div class="ms-1">{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Select>
    </div>
	</header>
</template>

<style scoped lang="scss">
@use "header-layout";
</style>
