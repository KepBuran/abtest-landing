<template>
  <Button
    class="h-14 font-bold"
    :title="'Get my plan'"
    :class="buttonClasses"
  />
</template>

<script setup lang="ts">
import Button from '~/components/buttons/Button.vue'

const { designVariant } = useDesignVariant()

const buttonClasses: ComputedRef<string> = computed(() => {
  const dict = {
    'var1': 'bg-var1-background-black text-var1-white hover:bg-var1-green1 disabled:bg-var1-background-button-inactive',
    'var2': 'bg-var2-background-white text-var2-text-blue2 font-bold text-var2-white \
      hover:bg-var2-background-button-hover hover:text-var2-text-white disabled:bg-var2-button-inactive',
  }

  return dict[designVariant.value]
})

</script>