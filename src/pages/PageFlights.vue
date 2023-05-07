<script setup lang="ts">
import { ref } from 'vue'

const dummyText = ref('This is some dummy text for the Flights page.')
</script>

<template>
  <div>
    <h1>Flights</h1>
    <p>{{ dummyText }}</p>
  </div>
</template>
