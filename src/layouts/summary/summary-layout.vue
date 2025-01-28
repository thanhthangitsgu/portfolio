<script setup lang="ts">
</script>

<template>
  <div class="flex w-full justify-center mt-5 px-30">
    <div class="flex w-full justify-between items-center">
      <div class="text-start" v-motion-slide-visible-left>
        <div class="text-4xl font-semibold text-sky-600 mt-5">
          Welcome to my portfolio,
        </div>
        <div class="font-bold text-6xl text-gray-800 mt-5">Phan Thanh Thang</div>
        <div class="text-4xl font-medium text-gray-800 mt-5">Software Engineer</div>
        <button class="btn-animation-color mt-5">View Projects</button>
<!--        <div class="flex justify-start items-center mt-5 gap-5">-->
<!--          <a href="" v-tooltip.bottom="'Github'">-->
<!--            <img src="../../assets/images/icon/github.svg" alt="" class="w-7">-->
<!--          </a>-->
<!--          <a href="" v-tooltip.bottom="'Linkedin'">-->
<!--            <img src="../../assets/images/icon/linkedIn.svg" alt="" class="w-7">-->
<!--          </a>-->
<!--        </div>-->
      </div>
      <img src="../../assets/images/stock-avatar.png" alt="" class="w-125"
           v-motion-slide-visible-right>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "summary-layout.scss";
</style>
