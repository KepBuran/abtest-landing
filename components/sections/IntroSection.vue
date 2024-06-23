<template>
  <Section
    :class="[
      sectionClasses, 
      {'grid grid-cols-2 gap-6': viewport.isGreaterThan('sm'), 'flex w-full flex-col gap-8': !viewport.isGreaterThan('sm')}
    ]"
  >
    <Introduction
      class="md:m-4"
    />
    <Features />
  </Section>
</template>
  
<script setup lang="ts">
import Introduction from '~/components/singles/Introduction.vue'
import Section from '~/components/sections/Section.vue'
import Features from '~/components/singles/features/Features.vue'

const viewport = useViewport()

const { designVariant } = useDesignVariant()
const sectionClasses = computed(() => {
  const dict = {
    'pl': 'mt-8 px-1 md:px-0',
    'ss': 'bg-ss-background-secondary2 md:bg-[#00000000] p-4 md:p-0 rounded-3xl',
  }

  return dict[designVariant.value]
})
</script>