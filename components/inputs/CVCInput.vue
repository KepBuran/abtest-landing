<template>
  <Input
    :id="id" 
    v-model="modelValue"
    :label="'CVC'" 
    :type="'password'" 
    :required="true" 
    maxlength="3" 
    minlength="3"
    placeholder="•••" 
    :validation-function="validationFunction ?? validateCVC"
  />
</template>

<script setup lang="ts">
import Input from './Input.vue'
import type { InputValue, ValidationFunc } from '~/types/input'

// TODO: Fix defineModel({default: { value: '', isValid: false }}) breaks watch at child component
const maybeModelValue: Ref<InputValue | undefined> = defineModel<InputValue>()
const modelValue: Ref<InputValue> = maybeModelValue?.value ? maybeModelValue as Ref<InputValue> : ref({ value: '', isValid: false })

const props = defineProps<{
  id?: string
  validationFunction?: ValidationFunc
}>()

const validateCVC: ValidationFunc = (value: string) => {
  // Remove all non-digit characters
  const onlyDigits = value.replace(/\D/g, '')

  return { value: onlyDigits, isValid: onlyDigits.length === 3 }
}

</script>

<style scoped>

</style>