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
    <DefaultButton
      class="w-full"
      :title="'Submit'"
      type="submit"
      :disabled="!isFormValid"
    />
  </form>
</template>
  
<script setup lang="ts">
import CreditNumberInput from '~/components/inputs/CreditNumberInput.vue'
import CVCInput from '~/components/inputs/CVCInput.vue'
import DefaultButton from '~/components/buttons/DefaultButton.vue'
import Select from '~/components/inputs/Select.vue'

const { creditNumber, cvc, month, year, isFormValid } = useCreditCardForm()

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

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