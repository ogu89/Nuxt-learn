<template>
  <div>
    <h1>Todos:</h1>
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodosStore } from "./store/todos";

const store = useTodosStore();
const { fetchTodos } = store;
const { todos } = storeToRefs(store);
console.log("=========> todos", todos.value);
await fetchTodos();
</script>
