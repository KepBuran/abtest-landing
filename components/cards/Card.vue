<template>
  <div
    :class="cardClasses"
    class="p-5"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { designVariant } = useDesignVariant()

const cardClasses = computed(() => {
  const dict = {
    'pl': 'border border-pl-card-border bg-pl-background-primary rounded-3xl shadow-pl-card',
    'ss': 'border-4 border-ss-card-border bg-ss-card-background rounded-[32px] backdrop-blur-[10px]',
  }

  return dict[designVariant.value]
})
</script>

<style scoped>

</style>
