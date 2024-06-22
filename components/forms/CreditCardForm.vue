<template>
  <form
    class="flex w-96 flex-col items-center gap-9"
    @submit.prevent="submitPayment"
  >
    <h2 class="text-[21px] font-extrabold">
      Payment method
    </h2>
    <CreditNumberInput class="w-full" />
    
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
      class="h-14 w-[300px] bg-var1-background-button-inactive font-bold text-var1-white"
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

const submitPayment = () => {
  // const paymentData = {
  //   cardNumber: cardNumber.value,
  //   month: month.value,
  //   year: year.value,
  //   cvc: cvc.value,
  // }
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