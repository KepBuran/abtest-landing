<template>
  <div
    class="app-layout flex h-full min-h-dvh flex-col items-center gap-8 overflow-x-hidden pb-8 md:gap-[10dvh]"
  >
    <Header class="shrink-0" />
    <main class="flex size-full max-w-5xl grow px-4">
      <NuxtPage />
    </main>
  </div>
</template>
<!-- If no dynamic gap needed - md:gap-10 -->

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'

const { designVariant } = useDesignVariant()
const backgroundsPath: string = '/backgrounds/'
const backgroundDict = {
  'pl': 'pl-background.svg',
  'ss': 'ss-background.svg',
}

const backgroundUrl: ComputedRef<string> = computed(() => {
  return `url(${backgroundsPath}${backgroundDict[designVariant.value]})`
})

const backgroundOpacity: ComputedRef<number> = computed(() => {
  return designVariant.value === 'pl' ? 0.04 : 1
})
</script>

<style scoped>
.app-layout {
    position: relative;
}

.app-layout::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: v-bind(backgroundUrl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    opacity: v-bind(backgroundOpacity);
    z-index: -1;
}
</style>