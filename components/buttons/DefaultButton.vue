<template>
  <Button
    :title="title"
    :class="buttonClasses"
    class="font-bold"
  />
</template>

<script setup lang="ts">
import Button from './Button.vue'

const props = defineProps<{
  title: string
  isActive?: boolean
}>()

const { designVariant } = useDesignVariant()

const buttonClasses: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'bg-pl-button-default text-pl-text-contrast hover:bg-pl-button-hover disabled:bg-pl-button-inactive disabled:cursor-default',
    'ss': 'bg-ss-button-default text-ss-text-secondary2 text-ss-white \
      hover:bg-ss-button-hover hover:text-ss-text-primary disabled:bg-ss-button-inactive disabled:text-ss-text-inactive disabled:cursor-default',
  }

  return dict[designVariant.value]
})

</script>

<style scoped>

</style>