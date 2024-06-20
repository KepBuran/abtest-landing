<template>
  <img
    :src="`/icons/${name}.${extenstion}`"
    :alt="`icon ${name.split('-').join(' ')}`"
  >
</template>

<script setup lang="ts">
// Component for non-dynamic icons
const props = defineProps<{
  name: string
  extenstion?: string
}>()

const extenstion: ComputedRef<string> = computed(() => props.extenstion ?? 'svg')

</script>

<style scoped>

</style>