<template>
  <div class="relative ">
    <InputLabel
      v-if="label"
      :for="id"
    >
      {{ label }}
    </InputLabel>
    <Icon
      class="absolute right-3 top-1/2 -translate-y-1/2"
      name="chevron-down"
    />
    <div
      id="month"
      required
      class="flex size-full appearance-none items-center rounded-lg border border-var1-input-border bg-var1-white px-4 text-var1-text-input outline-none"
      @onmousedown="preventSelectOpen"
    >
      <option
        class="text-xs"
        disabled
      >
        Select
      </option>
    </div>
    <div class="absolute top-full w-full bg-var1-white">
      <option
        v-for="month, i in months"
        :key="month"
        class="w-full overflow-hidden border-x border-b border-var1-input-border px-4 py-2 text-xs"
        :class="{'rounded-b-lg': i === months.length - 1}"
        :value="month"
      >
        {{ month }}
      </option>
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