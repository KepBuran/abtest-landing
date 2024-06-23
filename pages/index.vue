<template>
  <IntroSection />
</template>

<script setup lang="ts">

const { designVariant } = useDesignVariant()

// Meta data could be improved, but this is just a quick example
const metaData: ComputedRef<{title: string, meta: {name: string, content: string}[]}> = computed(() => {
  const dict = {
    'pl': {
      title: 'PlanetLearn',
      meta: [
        {
          name: 'description',
          content: 'Start your learning journey now with PlanetLearn. Get access to 350+ learning programs, personalized course plans, a comfy learning schedule, 24/7 tutor support, and lifetime access to materials. Safe and secure payment options available',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icons/favicon-pl.svg',
        },
      ],
    },
    'ss': {
      title: 'StudySmart',
      meta: [
        {
          name: 'description',
          content: 'Start your learning journey now with SmartStudy. Access over 350+ learning programs, personalized course plans, comfy learning schedules, 24/7 tutor support, and lifetime access to materials. Safe and secure payment options available.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icons/favicon-ss.svg',
        },
      ],
    },
  
  }

  return dict[designVariant.value]
})

useHead({
  ...metaData.value,
})


import IntroSection from '~/components/sections/IntroSection.vue'

</script>

<style scoped>

</style>