<template>
    <div class="relative ">
        <InputLabel v-if="label" :for="id"> {{ label }}</InputLabel>
        <Icon class="absolute right-3 top-1/2 transform -translate-y-1/2" name="chevron-down"/>
        <div id="month" required class="w-full flex px-4 items-center text-var1-text-input h-full appearance-none outline-none bg-var1-white border-var1-input-border border rounded-lg" @onmousedown="preventSelectOpen">
          <option class="text-xs" disabled>Select </option>
        </div>
        <div class="absolute top-full bg-var1-white w-full">
            <option v-for="month, i in months" :key="month" class="text-xs overflow-hidden py-2 px-4 w-full border-b border-x border-var1-input-border" :class="{'rounded-b-lg': i === months.length - 1}" :value="month">{{ month }}</option>
        </div>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'
import InputLabel from './InputLabel.vue'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const props = defineProps<{
    id?: string
    label?: string
}>()

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))

const label = 'Temp'

const preventSelectOpen = (e: Event) => {
    console.log('preventSelectOpen', e)
    e.preventDefault();
    (e.target as HTMLSelectElement | null)?.blur()
    window.focus()
}

</script>

<style scoped>

</style>