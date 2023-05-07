<script setup lang="ts">
import { ref } from 'vue'

const dummyText = ref('This is some dummy text for the Accommodations page.')
</script>

<template>
  <div>
    <h1>Accommodations</h1>
    <p>{{ dummyText }}</p>
  </div>
</template>
