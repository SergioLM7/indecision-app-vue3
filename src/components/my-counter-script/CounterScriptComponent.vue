<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="addOne">+1</button>
      <button @click="substractOne">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./CounterScriptComponent">
</script>
