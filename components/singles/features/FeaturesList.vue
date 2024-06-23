<template>
  <div class="flex w-full flex-col gap-5">
    <UnorderedList
      :items="items"
      :secure-insert="false"
      :class="listTextColor"
    >
      <template #bullet>
        <StarIcon :class="starFill" />
      </template>
    </UnorderedList>
    <PaymentButton />
  </div>
</template>

<script setup lang="ts">
import UnorderedList from '~/components/lists/UnorderedList.vue'
import StarIcon from '~/components/icons/StarIcon.vue'
import PaymentButton from '~/components/buttons/PaymentButton.vue'

const { designVariant } = useDesignVariant()

const listTextColor = computed(() => {
  const dict = {
    'pl': 'text-pl-text-primary',
    'ss': 'text-ss-text-primary',
  }

  return dict[designVariant.value]
})

const starFill = computed(() => {
  const dict = {
    'pl': 'fill-pl-text-accent',
    'ss': 'fill-ss-text-accent',
  }

  return dict[designVariant.value]
})

const accentColor = computed(() => {
  const dict = {
    'pl': 'text-pl-text-accent',
    'ss': 'text-ss-text-accent',
  }

  return dict[designVariant.value]
})

const highlightLinesColor = computed(() => {
  const dict = {
    'pl': 'text-pl-text-primary',
    'ss': 'text-ss-text-accent',
  }

  return dict[designVariant.value]
})

const items: ComputedRef<string[]> = computed(() => {
  return [
    `<span class=${highlightLinesColor.value}>Exclusive access to <strong class="${accentColor.value}">350+</strong> learning programs</span>`, 
    'Personalized course plan', 'Comfy learning schedule made by you', 
    `<span class=${highlightLinesColor.value}><strong class="${accentColor.value}">24/7</strong> tutor support in a secure chat</span>`, 
    'Lifetime access to materials',
  ]
})

</script>

<style scoped>

</style>