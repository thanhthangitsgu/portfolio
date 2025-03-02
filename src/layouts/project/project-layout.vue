<script setup lang="ts">
import { projects } from '@/utils/constants/projects.ts'
</script>

<template>
  <div class="px-30 py-30 bg-gray-50">
    <div class="w-full section-title">
      <div class="text-center title">Project</div>
      <div class="text-center text-gray-500">My projects</div>
    </div>

    <div class="mt-15 flex justify-start gap-20">
      <Card v-for="project of projects" style="width: 450px">
        <template #header>
          <img :src="'src/assets/images/project/' + project.image" alt="" class="object-cover rounded-lg">
        </template>
        <template #content>
          <div class="">
            <div class="text-xl font-bold text-sky-600">{{project.name}}</div>
            <div class="text-gray-500 text-sm text-justify mt-3">{{project.description}}</div>
            <div class="mt-3">
              <Badge v-for="tag of project.tag" :value="tag" class="me-1"></Badge>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "project-layout";
</style>
