<template>
  <button
    :aria-label="title"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-xl p-3 transition-all"
  >
    <slot name="prepend" />
    {{ title }}
    <slot name="append" />
  </button>
</template>
  
<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

</script>