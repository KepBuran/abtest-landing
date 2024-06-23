<template>
  <div class="relative">
    <template v-if="designVariant === 'pl'">
      <Icon
        name="comet"
        class="absolute left-1/2 z-20 -translate-y-2/3 translate-x-3"
      />
    </template>
    <template v-if="designVariant === 'ss'">
      <Icon
        v-if="viewport.isGreaterThan('md')"
        name="rocket"
        extenstion="png"
        class="absolute right-0 top-1/2 z-20 size-[248px] translate-x-[55%] translate-y-[-55%] rotate-[-22deg]"
      />
      <Icon
        name="sphere"
        class="absolute left-0 top-0 z-0 -translate-x-1/2 -translate-y-1/2"
      />
    </template>
    <slot />
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'

const viewport = useViewport()
const { designVariant } = useDesignVariant()

</script>

<style scoped>

</style>