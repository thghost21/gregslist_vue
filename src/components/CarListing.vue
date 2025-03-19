<script setup>
import { Car } from '@/models/Car.js';

defineProps({
  carProp: { type: Car, required: true }
})
</script>


<template>
  <div>
    <p>{{ carProp.make }}</p>
  </div>
</template>


<style lang="scss" scoped></style>