<template>
  <VLayoutItem position="bottom" size="10" class="ml-5">
    <NuxtLink :to="to">
      <VBtn
        size="small"
        variant="flat"
        color="accent"
        rounded="xl"
        class="font-weight-bold float-power"
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
.float-power {
  position: fixed;
  bottom: 60px;
  left: 16px;
  z-index: 1089;
}
</style>
