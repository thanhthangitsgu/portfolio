<script setup lang="ts">

import HeaderLayout from '@/layouts/header/header-layout.vue'
import SummaryLayout from '@/layouts/summary/summary-layout.vue'
</script>

<template>
  <div class="h-screen background-pattern">
    <header-layout/>
    <div class="w-full flex flex-col h-4/5 items-center justify-center">
      <summary-layout/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background-pattern {
  background-image: url("../../assets/images/background-pattern.svg");
}
</style>
