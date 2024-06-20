<template>
    <Teleport to="body"> 
            <div class="popup-overlay absolute z-40 top-0 h-dvh w-dvw flex items-center justify-center bg-black bg-opacity-20">
                <slot/>
            </div>
    </Teleport>
</template>

<script setup lang="ts">


</script>

<style scoped>
.popup-overlay {
    animation: fade-in 0.2s;
}

@keyframes fade-in {
    from { background-color: rgba(0,0,0,0);}
    to { background-color: rgba(0,0,0,0.2);}
}
</style>