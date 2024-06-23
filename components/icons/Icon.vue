<template>
  <img
    v-if="name"
    :src="`/icons/${name}.${extenstion}`"
    :alt="`icon ${name.split('-').join(' ')}`"
  >
</template>

<script setup lang="ts">
// Component for non-dynamic icons
const props = withDefaults(defineProps<{
  name: string
  extenstion?: string
}>(), {
  extenstion: 'svg',
})

</script>

<style scoped>

</style>