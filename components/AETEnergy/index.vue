<template>
  <VLayoutItem model-value position="bottom" size="10" class="ml-5">
    <VBtn
      size="small"
      variant="flat"
      color="accent"
      to="/antrum_energy"
      rounded="xl"
      class="font-weight-bold"
      prepend-icon="mdi-arrow-right-top"
    >
      Antrum Energy
    </VBtn>
  </VLayoutItem>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const router = useRouter();

const model = ref(false);
</script>

<style lang="scss" scoped></style>
