<template>
  <div
    class="relative h-full"
  >
    <div
      ref="selectorElement"
      class="cursor-pointer overflow-hidden rounded-lg transition-all"
      :class="{'rounded-b-none border border-var1-green2': isListShow, 'border border-var1-input-border': !isListShow}"
      @click="toggleListShow"
    >
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
      <input
        :id="id"
        type="text"
        :value="modelValue"
        readonly
        placeholder="Select"
        :required="isRequired"
        class="flex h-11 w-full cursor-pointer appearance-none items-center bg-var1-white px-4 text-xs text-var1-text-input outline-none"     
      >
    </div>
    <Transition name="drop-down">
      <div
        v-if="isListShow"
        class="absolute top-full z-10 w-full"
      >
        <div
          v-for="option, i in options"
          :key="option"
          :class="{'rounded-b-lg': i === options.length - 1, 'bg-var1-green1': getIsSelected(option), 'bg-var1-white': !getIsSelected(option), 'text-var1-white': getIsSelected(option), 'hover:bg-var1-green1': !getIsSelected(option), 'hover:text-var1-white': !getIsSelected(option)}" 
          class="flex w-full cursor-pointer flex-row items-center justify-between overflow-hidden border-x border-b border-var1-input-border px-4 py-2 text-xs text-var1-text-input"
          @click="(e) => selectOption(option)"
        >
          <option class="text-xs">
            {{ option }} 
          </option>
          <Icon
            v-if="getIsSelected(option)"
            class="shadow-check-shadow"
            name="white-check"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/icons/Icon.vue'
import InputLabel from './InputLabel.vue'

const props = withDefaults(defineProps<{
  options: string[]
  id?: string
  label?: string
  isRequired?: boolean
}>(),
{
  id: undefined,
  label: undefined,
  isRequired: true,
})

const modelValue = defineModel<string>()

const id: ComputedRef<string> = computed(() => props.id ?? Math.random().toString(36).substring(7))
const selectorElement: Ref<HTMLElement | null> = ref(null)

const isListShow: Ref<boolean> = ref(false)
const toggleListShow = () => {
  isListShow.value = !isListShow.value
}

const selectOption = (option: string) => {
  modelValue.value = option
  isListShow.value = false
}

const getIsSelected = (option: string) => {
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