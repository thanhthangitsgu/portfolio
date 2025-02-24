<script setup lang="ts">

</script>

<template>
  <div class="px-50 py-30">
    <div class="w-full section-title">
      <div class="text-center title">About Me</div>
      <div class="text-center text-gray-500">Some basic information about me</div>
    </div>

    <div class="mt-15 flex gap-30 text-lg flex justify-center">
      <div class="w-2/3 text-center text-justify">
        <p>
          I'm Thang, a software engineer with experience in developing web systems, mobile
          applications, and games. My goal is to create scalable and flexible solutions that can
          adapt to diverse user needs.
        </p>

        <p class="mt-3">
          Currently, I live in Ho Chi Minh City, Vietnam, and I am open to working on projects with
          specific requirements. You can check out some of the projects I've worked on in the
          <span class="text-sky-600 font-bold">Project</span> section.
        </p>

        <p class="mt-3">
          Additionally, feel free to connect with me on LinkedIn and reach out if needed. You can
          find my contact details in the <span class="text-sky-600 font-bold">Contact</span>  section or connect with me through the
          communication channels below.
        </p>

        <div class="flex gap-10 mt-5 justify-center text-gray-700">
          <a class="flex gap-2 hover:text-sky-700" href="https://www.linkedin.com/in/thanh-thang/"
             target="_blank">
            <img src="../../assets/images/icon/linkedIn.svg" class="w-5">
            <span>thanh-thang</span>
          </a>

          <a class="flex gap-2 hover:text-sky-700"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=thanhthang.itsgu@gmail.com"
             target="_blank">
            <img src="../../assets/images/icon/gmail.svg" class="w-5">
            <span>thanhthang.itsgu@gmail.com</span>
          </a>

          <a class="flex gap-2 hover:text-sky-700" href="https://github.com/thanhthangitsgu"
             target="_blank">
            <img src="../../assets/images/icon/github.svg" class="w-5">
            <span>thanhthangitsgu</span>
          </a>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
@use 'about-layout.scss';
</style>
