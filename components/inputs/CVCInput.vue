<template>
  <Input
    :id="id" 
    v-model="value"
    :label="'CVC'" 
    :type="'password'" 
    :required="true" 
    maxlength="3" 
    placeholder="•••" 
    :validation-function="validateCVC"
  />
</template>

<script setup lang="ts">
import Input from './Input.vue'

const props = defineProps<{
  id?: string
}>()

const value: Ref<string> = ref('')

const validateCVC = (value: string): string => {
  // Remove all non-digit characters
  const onlyDigits = value.replace(/\D/g, '')

  return onlyDigits
}

</script>

<style scoped>

</style>