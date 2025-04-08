<template>
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <div v-else-if="isLoading" class="flex">
    <div class="flex justify-center items-center">
      <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>
  </div>

  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="Imagen de respuesta del chatbot" class="w-52 h-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  message: string,
  itsMine: boolean,
  image?: string,
  isLoading?: boolean,
}

defineProps<Props>();
</script>
