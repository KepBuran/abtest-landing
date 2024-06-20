<template>
  <div class="flex size-full flex-row gap-6">
    <CallToAction class="m-4 basis-1/2" />
    <Card class="flex h-3/4 basis-1/2 items-center">
      <FeaturesList class="mt-4" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import CallToAction from '~/components/singles/CallToAction.vue'
import Card from '~/components/cards/Card.vue'
import FeaturesList from '~/components/singles/FeaturesList.vue'
</script>

<style scoped>

</style> 