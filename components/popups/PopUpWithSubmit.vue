<template>
  <PopUp v-model:isOpen="isOpen">
    <slot />
    <Button
      class="h-14 bg-var1-button-inactive font-bold text-var1-white"
      :title="'Submit'"
    />
  </PopUp>
</template>

<script setup lang="ts">
import PopUp from './PopUp.vue'
import Button from '~/components/buttons/Button.vue'

const isOpen = defineModel<boolean>('isOpen')

const emits = defineEmits<{
  (e: 'submit'): void
}>()
</script>

<style scoped>

</style>