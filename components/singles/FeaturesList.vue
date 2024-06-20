<template>
  <div class="flex w-full flex-col gap-5">
    <UnorderedList
      :items="items"
      :secure-insert="false"
    >
      <template #bullet>
        <StarIcon />
      </template>
    </UnorderedList>
    <PaymentButton />
  </div>
</template>

<script setup lang="ts">
import UnorderedList from '~/components/lists/UnorderedList.vue'
import StarIcon from '~/components/icons/StarIcon.vue'
import PaymentButton from '~/components/buttons/PaymentButton.vue'

const items = [
  'Exclusive access to <strong class="text-var1-text-accent">350+</strong> learning programs', 
  'Personalized course plan', 'Comfy learning schedule made by you', 
  '<strong class="text-var1-text-accent">24/7</strong> tutor support in a secure chat', 
  'Lifetime access to materials',
]

</script>

<style scoped>

</style>