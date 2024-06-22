<template>
  <fieldset class="user-invalid:border-var1-red1 relative flex w-fit flex-row justify-between gap-2 rounded-lg border border-var1-input-border px-4">
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
      v-model="modelValue"
      class="h-11 w-full grow appearance-none text-sm text-var1-text-input outline-none"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :required="required"
    >
    <slot name="append" />
  </fieldset>
</template>

<script setup lang="ts">
import InputLabel from './InputLabel.vue'

export interface InputProps {
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'hidden'
  placeholder?: string
  maxlength?: string | number
  minlength?: string | number
  isValid?: boolean
  required?: boolean
  label?: string
  validationFunction?: (value: string) => string
}

const props = withDefaults(defineProps<InputProps>(), {
  id: undefined,
  type: 'text',
  placeholder: '',
  maxlength: undefined,
  minlength: undefined,
  required: false,
  label: undefined,
  validationFunction: undefined,
})

const modelValue = defineModel<string>({ default: '' })

watch(modelValue, (value) => {
  modelValue.value = props.validationFunction ? props.validationFunction(value) : value
})

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))

const inputElement: Ref<HTMLInputElement | null> = ref(null)

</script>

<style scoped>

</style>