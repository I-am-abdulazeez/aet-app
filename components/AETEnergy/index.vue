<template>
  <VLayoutItem position="bottom" size="10" class="ml-5">
    <NuxtLink to="/antrum_energy">
      <VBtn
        size="small"
        variant="flat"
        color="accent"
        rounded="xl"
        class="font-weight-bold float"
        prepend-icon="mdi-arrow-right-top"
      >
        Antrum Energy
      </VBtn>
    </NuxtLink>
  </VLayoutItem>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.float {
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 1080;
}
</style>
