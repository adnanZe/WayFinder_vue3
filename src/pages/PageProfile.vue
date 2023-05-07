<script setup lang="ts">
import { ref } from 'vue'

const dummyText = ref('This is some dummy text for the Profile page.')
</script>

<template>
  <div>
    <h1>Profile</h1>
    <p>{{ dummyText }}</p>
  </div>
</template>
