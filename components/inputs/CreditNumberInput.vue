<template>
    <Input
        :id="id" 
        v-model="value"
        :label="'Card number'" 
        :type="'text'" 
        :required="true" 
        maxlength="19" 
        placeholder="••••  ••••  ••••  ••••" 
        :validation-function="validateCreditNumber">
        <template #append>
            <Icon name="mastercard"/>
        </template>
    </Input>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import Icon from '../icons/Icon.vue';

const props = defineProps<{
    id?: string
}>()

const value: Ref<string> = ref('')

const validateCreditNumber = (value: string): string => {
    // Remove all non-digit characters
    const onlyDigits = value.replace(/\D/g, '')

    // Insert a space after every four digits
    const withSpaces = onlyDigits.replace(/(\d{4})(?=\d)/g, '$1 ')

    return withSpaces
}

</script>

<style scoped>

</style>