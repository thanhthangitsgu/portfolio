<script setup lang="ts">
import { projects } from '@/utils/constants/projects.ts'
</script>

<template>
  <div class="px-30 py-30 bg-gray-50">
    <div class="w-full section-title">
      <div class="text-center title">Project</div>
      <div class="text-center text-gray-500">My projects</div>
    </div>

    <div class="mt-15">
      <div v-for="project of projects" class="flex">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
