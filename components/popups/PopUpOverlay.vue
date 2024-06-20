<template>
  <Teleport to="body"> 
    <div class="popup-overlay absolute top-0 z-40 flex h-dvh w-dvw items-center justify-center bg-black bg-opacity-20">
      <slot />
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