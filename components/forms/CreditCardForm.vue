<template>
  <form
    class="flex w-96 max-w-full flex-col items-center gap-9"
    @submit.prevent="submitPayment"
  >
    <h2 class="text-[21px] font-extrabold">
      Payment method
    </h2>
    <CreditNumberInput
      v-model="creditNumber"
      class="w-full"
    />
    
    <div class="grid grid-cols-3 gap-[10px]">
      <Select
        id="month-input"
        v-model="month"
        label="Month"
        :options="months"
      />
      <Select
        id="year-input"
        v-model="year"
        label="Year"
        :options="years"
      />
      <CVCInput
        v-model="cvc"
      />
    </div>
    
    <Button
      type="submit"
      class="h-14 w-[300px] font-bold text-var1-white"
      :class="{'bg-var1-background-black hover:bg-var1-green1': isFormValid, 'cursor-default': !isFormValid, 'bg-var1-background-button-inactive': !isFormValid}"
      :title="'Submit'"
    />
  </form>
</template>
  
<script setup lang="ts">
import CreditNumberInput from '~/components/inputs/CreditNumberInput.vue'
import CVCInput from '~/components/inputs/CVCInput.vue'
import Button from '~/components/buttons/Button.vue'
import Select from '../inputs/Select.vue'
import type { InputValue } from '~/types/input'

const creditNumber: Ref<InputValue> = ref({ value: '', isValid: false })
const cvc: Ref<InputValue> = ref({ value: '', isValid: false })
const month = ref('')
const year = ref('')

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

const isFormValid: ComputedRef<boolean> = computed(() => 
  !!(creditNumber.value.isValid && cvc.value.isValid && month.value && year.value),
)

const submitPayment = () => {
  
}
</script>
  
<style scoped>
.card-logo {
  position: absolute;
  right: 10px;
  top: 35px;
  width: 40px;
  height: auto;
}
</style>