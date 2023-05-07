<script setup lang="ts">
import { ref } from 'vue'

const dummyText = ref('This is some dummy text for the Login page.')
</script>

<template>
  <div>
    <h1>Login</h1>
    <p>{{ dummyText }}</p>
  </div>
</template>
