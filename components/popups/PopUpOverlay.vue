<template>
  <Teleport to="body"> 
    <div
      class="popup-overlay fixed top-0 z-40 flex h-full w-dvw items-start justify-center bg-black px-3"
      :class="popupOverlayClasses"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script setup lang="ts">

const { designVariant } = useDesignVariant()

const popupOverlayClasses = computed(() => {
  const dict = {
    'pl': 'pt-[20dvh] bg-opacity-20', //pt-[124px] md:pt-[171px] 
    'ss': 'pt-[12dvh] bg-opacity-60', //pt-[80px] md:pt-[100px]
  }

  return dict[designVariant.value]
})

const opacity: ComputedRef<number> = computed(() => {
  const dict = {
    'pl': 0.2,
    'ss': 0.6,
  }

  return dict[designVariant.value]
})


</script>

<style scoped>
.popup-overlay {
    animation: fade-in 0.2s;
}

@keyframes fade-in {
    from { background-color: rgba(0,0,0,0) }
    to { background-color: rgba(0,0,0,v-bind(opacity)) }
}
</style>