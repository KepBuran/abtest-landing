<template>
  <FeaturesBackgroundImages
    v-if="viewport.isGreaterThan('sm')"
    class="h-3/4"
  >
    <Card
      class="relative z-10 flex h-full basis-1/2 items-center"
    >
      <FeaturesList class="mt-4" />
    </Card>
  </FeaturesBackgroundImages>
  <FeaturesList
    v-else
  />
</template>

<script setup lang="ts">
import Card from '~/components/cards/Card.vue'
import FeaturesList from '~/components/singles/features/FeaturesList.vue'
import FeaturesBackgroundImages from '~/components/singles/features/FeaturesBackgroundImages.vue'

const viewport = useViewport()
</script>

<style scoped>

</style>