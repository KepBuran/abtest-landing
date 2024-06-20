<template>
  <div class="h-full w-full flex flex-row gap-6">
    <CallToAction class="basis-1/2 m-4"/>
    <Card class="h-3/4 flex items-center basis-1/2">
      <FeaturesList class="mt-4"/>
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