import type { InputValue } from '~/types/input'

const creditNumber: Ref<InputValue> = ref({ value: '', isValid: false })
const cvc: Ref<InputValue> = ref({ value: '', isValid: false })
const month: Ref<string> = ref('')
const year: Ref<string> = ref('')

const isFormValid = computed(() => 
  !!(creditNumber.value.isValid && cvc.value.isValid && month.value && year.value),
)

export function useCreditCardForm() {
  return { creditNumber, cvc, month, year, isFormValid }
}