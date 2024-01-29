<script setup>
const counter = useCounter();
</script>

<template>
  <div class="container py-3 mx-auto Main">
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
