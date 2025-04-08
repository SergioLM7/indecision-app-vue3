import { computed, ref } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  const addOne = () => {
    counter.value++;
  };

  const substractOne = () => {
    counter.value--;
  };

  return {
    counter,
    squareCounter,
    addOne,
    substractOne,
  };
};
