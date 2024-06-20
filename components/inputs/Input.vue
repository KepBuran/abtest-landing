<template>
    <div class="relative flex w-fit flex-row px-4 gap-2 border-var1-input-border border rounded-lg justify-between">
        <InputLabel v-if="label" :for="id"> {{ label }}</InputLabel>
        <slot name="prepend"/>
        <input
            :id="id"
            v-model="modelValue"
            class="h-11 appearance-none outline-none text-var1-text-input flex-grow text-sm w-full"
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :required="required"
        >
        <slot name="append"/>
    </div>
</template>

<script setup lang="ts">
import InputLabel from './InputLabel.vue'

export interface InputProps {
    id?: string
    type?: 'text' | 'password' | 'email' | 'number' | 'hidden'
    placeholder?: string
    maxlength?: string | number
    required?: boolean
    label?: string
    validationFunction?: (value: string) => string
}

const props = withDefaults(defineProps<InputProps>(), {
    id: undefined,
    type: 'text',
    placeholder: '',
    maxlength: undefined,
    required: false,
    label: undefined,
    validationFunction: undefined
})

const modelValue = defineModel<string>({default: ''})

watch(modelValue, (value) => {
    modelValue.value = props.validationFunction ? props.validationFunction(value) : value
})

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))
</script>

<style scoped>

</style>