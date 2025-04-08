<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="addOne">+1</button>
      <button class="btn" @click="substractOne">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import { computed, ref } from "vue";

import { useCounter } from '../composables/useCounter';

interface Props {
  value?: number;
}

const props = defineProps<Props>();

const { counter, squareCounter, addOne, substractOne } = useCounter(props.value);


// const props = defineProps({
//   value: {
//     type: Number,
//     required: true,
//   },
// })

// interface Props {
//   value?: number;
// }

// const props = defineProps<Props>();

// const counter = ref(props.value ?? 5);
// const squareCounter = computed(() => counter.value * counter.value);

// const addOne = () => {
//   counter.value++;
// }

// const substractOne = () => {
//   counter.value--;
// }


</script>

<style>
@import "tailwindcss";

.btn {
  @apply p-5 bg-blue-400 mr-2 rounded hover:bg-blue-700;
}
</style>
