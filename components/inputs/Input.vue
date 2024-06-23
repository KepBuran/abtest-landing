<template>
  <fieldset 
    class="relative flex w-fit flex-row justify-between gap-2 rounded-lg border px-4 transition-all"
    :class="{
      'border-var1-input-border': !status,
      'border-var1-green1': status === 'valid',
      'border-var1-red1': status === 'invalid',
    }"
  >
    <InputLabel
      v-if="label"
      :for="id"
    >
      {{ label }}
    </InputLabel>
    <slot name="prepend" />
    <input
      :id="id"
      ref="inputElement"
      v-model="modelValue.value"
      class="h-11 w-full grow appearance-none text-sm text-var1-text-input outline-none"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :required="required"
      @blur="updateStatus"
    >
    <Transition name="fade">
      <span
        v-if="status === 'invalid'"
        class="flex items-center whitespace-nowrap pt-1 text-[11px] font-semibold leading-[0.5rem] text-var1-red1"
      >{{ errorMessage }}</span>
    </Transition>
    <slot name="append" />
  </fieldset>
</template>

<script setup lang="ts">
import type { InputValue, ValidationFunc } from '~/types/input'
import InputLabel from './InputLabel.vue'
import debounce from 'lodash.debounce'


export interface InputProps {
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'hidden'
  placeholder?: string
  maxlength?: string | number
  minlength?: string | number
  isValid?: boolean
  required?: boolean
  label?: string
  errorMessage?: string
  validationFunction?: ValidationFunc
}

const props = withDefaults(defineProps<InputProps>(), {
  id: undefined,
  type: 'text',
  placeholder: '',
  maxlength: undefined,
  minlength: undefined,
  required: false,
  label: undefined,
  errorMessage: '',
  validationFunction: undefined,
})

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))
const inputElement: Ref<HTMLInputElement | null> = ref(null)
const modelValue = defineModel<InputValue>({ default: reactive({ value: '', isValid: false }) })

const status: Ref<null | 'valid' | 'invalid'> = ref(null)
const updateStatus = () => {
  status.value = modelValue.value.isValid  ? 'valid' : 'invalid'
}
  
const debounceUpdateStatus = debounce(updateStatus, 600)
  
watch(() => modelValue.value.value, (value) => {
  status.value = null
  debounceUpdateStatus()
  
  if (!props.validationFunction) {
    return
  }

  const newValue = props.validationFunction(value)
  if (newValue.isValid) {
    status.value = 'valid'
  } 
  modelValue.value = newValue
})

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>import type { ValidationFunc, InputValue } from '~/types/input'
