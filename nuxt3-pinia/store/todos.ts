import { defineStore } from "pinia";
export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      const { data }: any = await useFetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (data.value) {
        this.todos = data.value;
      }
    },
  },
});

// Alternative way
// export const useTodosStore = defineStore("todos", () => {
//   const todos = ref([]);

//   cosnt fetchTodos =async () => {
//     const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
//     if(data.value) {
//         todos.value = data.value;
//     }
//   };

//   return {
//     todos,
//     fetchTodos
//   }
// });
