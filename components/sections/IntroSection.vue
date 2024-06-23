<template>
  <Section
    :class="{'grid grid-cols-2 gap-6': viewport.isGreaterThan('sm'), 'flex w-full flex-col gap-8': !viewport.isGreaterThan('sm')}"
  >
    <Introduction :class="{'m-4': viewport.isGreaterThan('sm')}" />
    <Features />
  </Section>
</template>
  
<script setup lang="ts">
import Introduction from '~/components/singles/Introduction.vue'
import Section from '~/components/sections/Section.vue'
import Features from '~/components/singles/features/Features.vue'

const viewport = useViewport()

</script>