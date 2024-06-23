<template>
  <div
    class="relative h-full"
  >
    <div
      ref="selectorElement"
      class="cursor-pointer overflow-hidden rounded-lg border transition-all"
      :class="`${isListShow ? 'rounded-b-none' : ''}` + ' ' + selectorBorder"
      @click="toggleListShow"
    >
      <InputLabel
        v-if="label"
        :for="id"
      >
        {{ label }}
      </InputLabel>
      <ChervonDownIcon
        class="absolute right-3 top-1/2 -translate-y-1/2"
        :class="chevronFill"
      />
      <input
        :id="id"
        type="text"
        :value="modelValue"
        readonly
        placeholder="Select"
        :required="isRequired"
        :class="selectorClasses"
        class="flex h-11 w-full cursor-pointer appearance-none items-center px-4 text-xs outline-none"     
      >
    </div>
    <Transition name="drop-down">
      <div
        v-if="isListShow"
        class="absolute top-full z-10 w-full"
      >
        <SelectItem
          v-for="option, i in options"
          :key="option"
          :is-last="i === options.length - 1"
          :is-selected="getIsSelected(option)"
          :option="option"
          @click="(e) => selectOption(option)"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'
import InputLabel from './InputLabel.vue'
import SelectItem from './SelectItem.vue'
import ChervonDownIcon from '../icons/ChervonDownIcon.vue'

const props = withDefaults(defineProps<{
  options: Array<string | number>
  id?: string
  label?: string
  isRequired?: boolean
}>(),
{
  id: undefined,
  label: undefined,
  isRequired: true,
})

const modelValue = defineModel<string | number>()

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))
const selectorElement: Ref<HTMLElement | null> = ref(null)

const isListShow: Ref<boolean> = ref(false)
const toggleListShow = () => {
  isListShow.value = !isListShow.value
}

const selectOption = (option: string | number) => {
  modelValue.value = option
  isListShow.value = false
}

const getIsSelected = (option: string | number) => {
  return modelValue.value === option
}

onMounted(() => {
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isListShow.value = false
    }
  })

  addEventListener('click', (e) => {
    if (selectorElement.value && !selectorElement.value.contains(e.target as Node)) {
      isListShow.value = false
    }
  })
})

const { designVariant } = useDesignVariant()

const isValidBorder: ComputedRef<boolean> = computed(() => {
  return !!(isListShow.value || modelValue.value)
})

console.log('isValidBorder', isValidBorder.value, isListShow.value, modelValue.value)

const selectorClasses: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'bg-pl-background-primary text-pl-text-input placeholder-pl-text-input',
    'ss': 'bg-ss-background-secondary text-ss-text-primary placeholder-ss-text-primary',
  }

  return dict[designVariant.value]
})

const selectorBorder: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': isValidBorder.value ? 'border-pl-ui-valid-lighter' : 'border-pl-input-border', 
    'ss': isValidBorder.value ? 'border-ss-ui-valid' : 'border-ss-background-secondary',
  }

  return dict[designVariant.value]
})

const chevronFill: ComputedRef<string> = computed(() => {
  const dict = {
    'pl': 'fill-pl-text-input',
    'ss': 'fill-ss-text-primary',
  }

  return dict[designVariant.value]
})

</script>

<style scoped>
.drop-down-enter-active {
  animation: drop-down ease 0.2s;
}

@keyframes drop-down {
  from {
    opacity: 0;
    transform: translateY(-200px) scaleY(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}
</style>