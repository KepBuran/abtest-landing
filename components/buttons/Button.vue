<template>
    <div :aria-label="title" class="flex gap-2 p-3 rounded-xl justify-center items-center cursor-pointer transition-all">
        <slot name="prepend"/>
        {{ title }}
        <slot name="append"/>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()
</script>