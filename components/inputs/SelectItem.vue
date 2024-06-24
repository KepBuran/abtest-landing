<template>
  <div
    :class="optionClasses" 
    class="flex w-full cursor-pointer flex-row items-center justify-between overflow-hidden border-x border-b px-4 py-2 text-xs"
  >
    <option class="text-xs">
      {{ option }} 
    </option>
    <Icon
      v-if="isSelected"
      class="shadow-check-shadow"
      name="white-check"
    />
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'

const props = defineProps<{
  option: string | number
  isSelected: boolean
  isLast: boolean    
}>()

const { designVariant } = useDesignVariant()
const optionClasses = computed(() => {
  const dict = {
    'pl': {
      'default': 'border-pl-input-border bg-pl-background-primary',
      'notSelected': 'bg-pl-background-primary text-pl-text-input',
      'hover': 'hover:bg-pl-ui-valid hover:text-pl-text-contrast',
      'selected': 'bg-pl-ui-valid text-pl-text-contrast',
    },
    'ss': {
      'default': 'border-ss-selector-border bg-ss-background-secondary text-ss-text-primary',
      'notSelected': 'bg-ss-background-primary text-ss-text-contrast',
      'hover': 'hover:bg-ss-ui-valid hover:text-ss-text-contrast',
      'selected': 'bg-ss-ui-valid text-ss-text-contrast',
    },
  }

  const rounded = props.isLast ? 'rounded-b-lg' : ''
  const classes = dict[designVariant.value]

  return [ 
    classes.default,
    classes.hover,
    rounded,
    {
      [classes.notSelected]: !props.isSelected,
      [classes.selected]: props.isSelected,
    },
  ]
})

</script>

<style scoped>

</style>