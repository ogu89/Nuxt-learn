<script setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();

console.log(store);
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter />
  </div>
</template>

<!-- <template>
  <div class="Main">Hello Nuxt</div>
  <img src="/1.jpg" alt="Discover Nuxt 3" />
  <img src="/2.jpeg" alt="handlling" />
  <IconsBell />
</template> -->

<!-- plguins -->
<!-- <script setup>
const { sayHello } = useUtils();
sayHello();
const { $sayHello } = useNuxtApp();
$sayHello("hye");
</script> -->

<!-- middleware -->
<!-- <script setup>
definePageMeta({
  middleware: "auth",
});
</script> -->

<!-- modules -->
<!-- <template>
  <div class="container py-3 mx-auto Main">
    <ContentDoc />
  </div>
</template> -->
