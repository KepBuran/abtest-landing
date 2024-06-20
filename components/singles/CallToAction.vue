<template>
    <div class="flex flex-col gap-8 text-var1-text-primary">
        <h1 class="font-extrabold text-5xl leading-[57.6px]" :class="titleClasses.main">
            Start 
            <span :class="titleClasses.secondary">your <br v-if="designVariant === 'var2'"> learning journey</span> 
            now
        </h1>
        <p class="font-semibold text-2xl" :class="paragraphClasses.main">
            Get a 
            <bold class="text-2xl font-extrabold" :class="paragraphClasses.secondary + ' ' + paragraphClasses.accent"> {{  }} </bold>
            <bold class="text-2xl font-extrabold" :class="paragraphClasses.secondary">Learn</bold> 
            plan to rock <br>self-learning
        </p>
        <GetPlanButton @click="openPopup"/>
        <PaymentPopUp v-model:isOpen="isPopupOpen"/>
    </div>
</template>

<script setup lang="ts">
import GetPlanButton from '~/components/buttons/GetPlanButton.vue'
import PaymentPopUp from '~/components/popups/PaymentPopUp.vue'

const {designVariant} = useDesignVariant()

const titleClasses: ComputedRef<{main: string, secondary: string}> = computed(() => {
    const dict = {
        'var1': {main: 'text-var1-text-primary text-5xl font-extrabold leading-[57.6px]', secondary: 'text-var1-text-primary'},
        'var2': {main: 'text-var2-text-blue1 font-normal font-intro text-[40px] leading-[48px]', secondary: 'text-var2-text-primary font-normal font-intro text-4xl'},
    }

    return dict[designVariant.value]
})



const appName: ComputedRef<string> = computed(() => {
    const dict = {
        'var1': 'Planet Learn',
        'var2': 'Smart Study'
    }

    return dict[designVariant.value]
})

const paragraphClasses: ComputedRef<{main: string, secondary: string, accent: string}> = computed(() => {
    const dict = {
        'var1': {main: 'text-var1-text-primary', secondary: 'text-var1-text-accent', accent: 'text-var1-text-accent'},
        'var2': {main: 'text-var2-text-primary', secondary: 'text-var2-text-blue1', accent: 'text-var2-text-blue1'}
    }

    return dict[designVariant.value]
})


const isPopupOpen: Ref<boolean> = ref(false)
const openPopup = () => isPopupOpen.value = true

onMounted(() => {
    setTimeout(() => {
        isPopupOpen.value = true      
    }, 3 * 60 * 1000);
})
</script>

<style scoped>

</style>