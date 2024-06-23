<template>
  <PopUp v-model:isOpen="isOpen">
    <slot />
    <Button
      class="bg-pl-button-inactive h-14 font-bold text-pl-text-contrast"
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