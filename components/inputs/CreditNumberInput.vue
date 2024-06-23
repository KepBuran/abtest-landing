<template>
  <Input
    :id="id" 
    v-model="modelValue"
    :label="'Card number'" 
    :type="'text'" 
    :required="true" 
    maxlength="19" 
    minlength="19"
    placeholder="••••  ••••  ••••  ••••" 
    :error-message="'Invalid number'"
    :validation-function="validationFunction ?? validateCreditNumber"
  >
    <template #append>
      <Icon name="mastercard" />
    </template>
  </Input>
</template>

<script setup lang="ts">
import Input from './Input.vue'
import Icon from '../icons/Icon.vue'
import type { ValidationFunc, InputValue } from '~/types/input'

const props = defineProps<{
  id?: string
  validationFunction?: ValidationFunc
  errorMessage?: string
}>()

// TODO: Fix defineModel({default: { value: '', isValid: false }}) breaks watch at child component
const maybeModelValue: Ref<InputValue | undefined> = defineModel<InputValue>()
const modelValue: Ref<InputValue> = maybeModelValue?.value ? maybeModelValue as Ref<InputValue> : ref({ value: '', isValid: false })

const validateCreditNumber: ValidationFunc = (value: string) => {
  // Remove all non-digit characters
  const onlyDigits = value.replace(/\D/g, '')

  // Insert a space after every four digits
  const withSpaces = onlyDigits.replace(/(\d{4})(?=\d)/g, '$1 ')

  return {
    value: withSpaces,
    isValid: withSpaces.length === 19,
  }
}

</script>

<style scoped>

</style>