<template>
  <header class="flex h-14 w-full max-w-screen-2xl items-center px-5">
    <NuxtLink to="/">
      <Icon
        :name="iconName"
        class="md:ml-28"
      />
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'

const { designVariant } = useDesignVariant()

const viewport = useViewport()

const iconName = computed(() => {
  const dict = {
    'pl': 'planet-learn-logo',
    'ss': 'smart-study-logo',
  }
 
  return dict[designVariant.value]    
})
 
</script>

<style scoped>

</style>