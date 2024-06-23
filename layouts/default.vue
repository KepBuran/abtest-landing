<template>
  <div class="app-layout mx-auto flex h-dvh flex-col items-center gap-16">
    <Header class="shrink-0" />
    <main class="size-full max-w-5xl">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'

const { designVariant } = useDesignVariant()
const backgroundsPath: string = '/backgrounds/'
const backgroundDict = {
  'var1': 'var1-background.svg',
  'var2': 'var2-background.svg',
}

const backgroundUrl: ComputedRef<string> = computed(() => {
  return `url(${backgroundsPath}${backgroundDict[designVariant.value]})`
})

const backgroundOpacity: ComputedRef<number> = computed(() => {
  return designVariant.value === 'var1' ? 0.04 : 1
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