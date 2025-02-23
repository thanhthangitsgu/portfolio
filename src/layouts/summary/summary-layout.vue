<script setup lang="ts">
import { lang } from '@/utils/I18nHelper.ts'

</script>

<template>
  <div class="flex w-full justify-center mt-5 px-30">
    <div class="flex w-full flex-col justify-center items-center">
      <div class="w-50 h-50 object-contain rounded-full overflow-hidden">
        <img src="../../assets/images/stock-avatar-2.jpg" class="-translate-y-1/5" alt="stock-avatar">
      </div>

      <div class="text-center">
        <div class="text-4xl font-semibold text-sky-600 mt-5">
          {{lang('header_welcome')}},
        </div>
        <div class="font-bold text-6xl text-gray-800 mt-5">{{ lang('personal_name') }}</div>
        <div class="text-2xl text-gray-800 mt-5">{{ lang('personal_title') }}</div>
        <button class="btn-animation-color mt-5">{{ lang('button_view_project') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "summary-layout.scss";
</style>
