<template>
  <fieldset 
    class="relative flex w-fit flex-row justify-between gap-2 rounded-lg px-4 transition-all"
    :class="[borderColor, bgColor]"
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
      class="h-11 w-full grow appearance-none text-sm font-bold outline-none"
      :class="bgColor + ' ' + inputClasses"
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
        class="flex items-center whitespace-nowrap pt-1 text-[11px] font-semibold leading-[0.5rem]"
        :class="errorClasses"
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
  
const validateModelValue = () => {
  if (!props.validationFunction) {
    return
  }

  const newValue = props.validationFunction(modelValue.value.value)
  if (newValue.isValid) {
    status.value = 'valid'
  } 
  modelValue.value = newValue
}

watch(() => modelValue.value.value, () => {
  status.value = null
  debounceUpdateStatus()
  
  validateModelValue()
})

onMounted(() => {
  validateModelValue()
})

const { designVariant } = useDesignVariant()
const bgColor: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'bg-pl-background-primary',
    'ss': 'bg-ss-background-secondary',
  }

  return dict[designVariant.value]
})

const borderColor: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': {
      'default': 'border border-pl-input-border',
      'valid': 'border border-pl-ui-valid',
      'invalid': 'border border-pl-ui-invalid',
    },
    'ss': {
      'default': 'border border-ss-background-secondary',
      'valid': 'border border-ss-ui-valid',
      'invalid': 'border border-ss-ui-invalid',
    },
  }

  return dict[designVariant.value][status.value ?? 'default']
})

const errorClasses: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'text-pl-ui-invalid',
    'ss': 'text-ss-text-ss-text-primary',
  }

  return dict[designVariant.value]
})

const inputClasses: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'text-pl-text-input placeholder-pl-text-input',
    'ss': 'text-ss-text-primary placeholder-ss-text-primary',
  }

  return dict[designVariant.value]
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
