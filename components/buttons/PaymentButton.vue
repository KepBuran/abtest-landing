<template>
  <Button
    class="border border-black border-opacity-20 font-semibold text-var1-green1"
    :title="'Safe & secure payment'"
  >
    <template #prepend>
      <Icon name="lock" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button from '~/components/buttons/Button.vue'
import Icon from '~/components/icons/Icon.vue'

</script>