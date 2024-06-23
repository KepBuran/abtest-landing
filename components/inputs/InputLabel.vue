<template>
  <label
    class="absolute left-3 top-0 w-fit -translate-y-1/2  px-[5.5px] text-xs font-bold"
    :class="labelClasses"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
const { designVariant } = useDesignVariant()

const labelClasses = computed(() => {
  const dict = {
    'pl': 'text-pl-text-primary bg-pl-background-primary',
    'ss': 'text-ss-text-primary rounded-[30px] bg-ss-background-secondary',
  }

  return dict[designVariant.value]
})

</script>