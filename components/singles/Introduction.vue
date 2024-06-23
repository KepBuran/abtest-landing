<template>
  <div
    class="flex flex-col gap-3 text-pl-text-primary md:gap-8"
  >
    <h1
      class="text-[32px] font-extrabold leading-10 md:text-5xl"
      :class="titleClasses.main"
    >
      Start 
      <span
        class="text-[32px] md:text-5xl"
        :class="titleClasses.secondary"
      >your <br v-if="designVariant === 'ss'"> learning journey</span> 
      now
    </h1>
    <p
      class="text-2xl font-semibold"
      :class="paragraphClasses.main"
    >
      Get a 
      <span
        class="text-2xl font-extrabold"
        :class="paragraphClasses.accent"
      >
        {{ splittedAppName[0] }}
      </span>
      <span
        class="text-2xl font-extrabold"
        :class="paragraphClasses.secondary"
      >
        {{ splittedAppName[1] }}
      </span> 
      plan to rock <br>self-learning
    </p>
    <DefaultButton
      :title="'Get my plan'"
      class="mt-5 w-full md:mt-0 md:w-auto md:max-w-72"
      @click="openPopup"
    />
    <PaymentPopUp v-model:isOpen="isPopupOpen" />
  </div>
</template>

<script setup lang="ts">
import DefaultButton from '~/components/buttons/DefaultButton.vue'
import PaymentPopUp from '~/components/popups/PaymentPopUp.vue'

const { designVariant } = useDesignVariant()

const titleClasses: ComputedRef<{main: string, secondary: string}> = computed(() => {
  const dict = {
    'pl': { 
      main: 'text-pl-text-primary text-5xl font-extrabold md:leading-[57.6px]', 
      secondary: 'text-pl-text-primary text-5xl', 
    },
    'ss': { 
      main: 'text-ss-text-secondary1 font-extrabold md:font-normal md:text-[40px] md:leading-[48px] font-proxima md:font-intro', 
      secondary: 'text-ss-text-primary proxima md:font-intro font-extrabold md:font-normal font-proxima md:text-[40px]', 
    },
  }

  return dict[designVariant.value]
})

const splittedAppName: ComputedRef<string[]> = computed(() => {
  const dict = {
    'pl': ['Planet','Learn'],
    'ss': ['Smart', 'Study'],
  }

  return dict[designVariant.value]
})

const paragraphClasses: ComputedRef<{main: string, secondary: string, accent: string}> = computed(() => {
  const dict = {
    'pl': { main: 'text-pl-text-primary', secondary: 'text-pl-text-primary', accent: 'text-pl-text-accent' },
    'ss': { main: 'text-ss-text-primary', secondary: 'text-ss-text-primary', accent: 'text-ss-text-secondary1' },
  }

  return dict[designVariant.value]
})

const isPopupOpen: Ref<boolean> = ref(false)
const openPopup = () => {
  isPopupOpen.value = true
  clearTimeout(timeout)
}

let timeout: NodeJS.Timeout
onMounted(() => {
  timeout = setTimeout(() => {
    isPopupOpen.value = true      
  }, 3 * 60 * 1000)
})

onUnmounted(() => {
  clearTimeout(timeout)
})

</script>

<style scoped>

</style>