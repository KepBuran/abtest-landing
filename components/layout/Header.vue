<template>
  <header class="flex h-14 w-full max-w-screen-2xl items-center">
    <NuxtLink to="/">
      <Icon
        :name="iconName"
        class="ml-32"
      />
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'

const { designVariant } = useDesignVariant()

const iconName = computed(() => {
  const dict = {
    'var1': 'planet-learn-logo',
    'var2': 'smart-study-logo',
  }
 
  return dict[designVariant.value]    
})
 
</script>

<style scoped>

</style>