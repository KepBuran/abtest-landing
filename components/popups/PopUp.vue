<template>
    <PopUpOverlay v-if="isOpen">
        <div class="pop-up p-5 bg-var1-white shadow-var1-popup rounded-xl">
            <slot/>
            <Button :title="'Close'" class="p-3 opacity-40 font-semibold" @click="close"/>
        </div>
    </PopUpOverlay>
</template>

<script setup lang="ts">
import PopUpOverlay from '~/components/popups/PopUpOverlay.vue'
import Button from '../buttons/Button.vue';

const isOpen = defineModel<boolean>('isOpen')
const close = () => isOpen.value = false

</script>

<style scoped>
.pop-up {
    animation: pop-up 0.2s;
}

@keyframes pop-up {
    from { transform: scale(0.2); }
    to { transform: scale(1); }
}

</style>