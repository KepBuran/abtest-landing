<template>
  <form
    class="flex w-96 flex-col items-center gap-9"
    @submit.prevent="submitPayment"
  >
    <h2 class="text-[21px] font-extrabold">
      Payment method
    </h2>
    <CreditNumberInput class="w-full" />
    
    <div class="flex w-full gap-[10px]">
      <Select
        v-model="month"
        :options="months"
        class=" basis-1/3"
      />
      <Select
        v-model="month"
        :options="months"
        class=" basis-1/3"
      />
      <CVCInput
        v-model="cvc"
        class="w-1/3 basis-1/3"
      />
    </div>
    
    <Button
      class="h-14 w-[300px] bg-var1-button-inactive font-bold text-var1-white"
      :title="'Submit'"
    />
  </form>
</template>
  
<script setup>
import CreditNumberInput from '~/components/inputs/CreditNumberInput.vue'
import CVCInput from '~/components/inputs/CVCInput.vue'
import Button from '~/components/buttons/Button.vue'
import Select from '../inputs/Select.vue'

const month = ref('')
const year = ref('')
const cvc = ref('')

const months = Array.from({ length: 12 }, (_, i) => i + 1)
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

const submitPayment = () => {
  const paymentData = {
    cardNumber: cardNumber.value,
    month: month.value,
    year: year.value,
    cvc: cvc.value,
  }
  console.log('Payment data submitted:', paymentData)
  // Add your payment processing logic here
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