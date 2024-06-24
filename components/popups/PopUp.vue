<template>
  <PopUpOverlay v-if="isOpen">
    <div
      class="pop-up flex max-w-full flex-col gap-2 p-4 pt-6"
      :class="popUpClasses"
    >
      <slot />
      <Button
        :title="'Close'"
        class="p-3 font-semibold"
        :class="buttonClasses"
        @click="close"
      />
    </div>
  </PopUpOverlay>
</template>

<script setup lang="ts">
import PopUpOverlay from '~/components/popups/PopUpOverlay.vue'
import Button from '../buttons/Button.vue'

const isOpen = defineModel<boolean>('isOpen')
const close = () => isOpen.value = false

const { designVariant } = useDesignVariant()
const popUpClasses = computed(() => {
  const dict = {
    'pl': 'bg-pl-background-primary shadow-pl-popup rounded-xl',
    'ss': 'bg-ss-background-primary text-ss-text-primary rounded-3xl',
  }

  return dict[designVariant.value]
})

const buttonClasses = computed(() => {
  const dict = {
    'pl': 'opacity-40 text-pl-text-primary',
    'ss': 'opacity-100 text-ss-text-primary',
  }

  return dict[designVariant.value]
})

</script>

<style scoped>
.pop-up {
    animation: pop-up 0.2s;
}

@keyframes pop-up {
    from { transform: scale(0.2); }
    to { transform: scale(1); }
}

</style>