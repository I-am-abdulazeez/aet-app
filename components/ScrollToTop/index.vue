<template>
  <VLayoutItem
    v-scroll="onScroll"
    class="text-end pointer-events-none"
    model-value
    position="bottom"
    size="88"
  >
    <div class="ma-4">
      <VFabTransition>
        <VBtn
          v-show="model"
          class="mt-auto pointer-events-initial"
          color="accent"
          variant="flat"
          icon="mdi-chevron-up"
          size="small"
          @click="onClick"
        />
      </VFabTransition>
    </div>
  </VLayoutItem>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const model = ref(false);

const onScroll = () => {
  model.value = window.scrollY > 200;
};

const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang="scss" scoped></style>
