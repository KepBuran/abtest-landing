<template>
  <Button
    class="h-14 font-semibold"
    :class="buttonClasses"
    :title="'Safe & secure payment'"
  >
    <template #prepend>
      <LockIcon :class="fillColor" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button from '~/components/buttons/Button.vue'
import Icon from '~/components/icons/Icon.vue'
import LockIcon from '../icons/LockIcon.vue'

const { designVariant } = useDesignVariant()

const buttonClasses = computed(() => {
  const dict = {
    'pl': 'border border-black border-opacity-20 font-semibold text-pl-ui-valid',
    'ss': 'bg-ss-button-default2 text-ss-text-accent',
  }

  return dict[designVariant.value]
})

const fillColor = computed(() => {
  const dict = {
    'pl': 'fill-pl-ui-valid',
    'ss': 'fill-ss-text-accent',
  }

  return dict[designVariant.value]
})
</script>
