<template>
  <div
    :aria-label="title"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-xl p-3 transition-all"
  >
    <slot name="prepend" />
    {{ title }}
    <slot name="append" />
  </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()
</script>