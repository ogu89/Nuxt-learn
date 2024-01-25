<!-- <template>
  <div class="Main">Hello Nuxt</div>
  <img src="/1.jpg" alt="Discover Nuxt 3" />
  <img src="/2.jpeg" alt="handlling" />
  <IconsBell />
</template> -->

<script setup>
// const { sayHello } = useUtils();
// sayHello();
const { $sayHello } = useNuxtApp();
$sayHello("hye");
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Hello Nuxt 3</h1>
  </div>
</template>
