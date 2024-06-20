<!-- use secureInsert=false only when items ARE NOT provided by user -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <ul class="flex flex-col gap-5">
    <li
      v-for="item in items"
      :key="item"
      class="flex gap-3"
    >  
      <slot name="bullet" />
      <p
        v-if="!secureInsert"
        v-html="item"
      /> 
      <p v-else>
        {{ item }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: string[]
  secureInsert: boolean
}>(), {
  secureInsert: true,
})

</script>

<style scoped>

</style>