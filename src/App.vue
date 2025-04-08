<template>
  <h1 class="text-3xl font-bold underline">Mi primera App</h1>

  <CounterComponent :value="5" />
  <CounterScriptComponent :value="10" />
</template>

<script lang="ts" setup>
import CounterComponent from './components/CounterComponent.vue';
import CounterScriptComponent from './components/my-counter-script/CounterScriptComponent.vue';

</script>
