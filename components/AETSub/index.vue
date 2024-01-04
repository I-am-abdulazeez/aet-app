<template>
  <VLayoutItem position="bottom" size="10" class="ml-5">
    <NuxtLink :to="to">
      <VBtn
        size="small"
        variant="flat"
        color="accent"
        rounded="xl"
        class="font-weight-bold float"
        :prepend-icon="icon"
      >
        {{ text }}
      </VBtn>
    </NuxtLink>
  </VLayoutItem>
</template>

<script setup lang="ts">
const { to, icon, text } = defineProps({
  to: {
    type: String,
    default: false,
    required: true,
  },
  icon: {
    type: String,
    default: false,
    required: true,
  },
  text: {
    type: String,
    default: false,
    required: true,
  },
});
</script>

<style lang="scss">
.float {
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 1080;
}
</style>
