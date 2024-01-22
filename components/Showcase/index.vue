<template>
  <div class="mt-8">
    <VRow>
      <VCol
        v-for="(image, index) in ViewerImages"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <VImg :src="image" alt="Image" class="responsive-image" />
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import { ViewerImages } from '~/data';
</script>

<style scoped lang="scss">
.responsive-image {
  max-width: 100%;
  height: auto;
}
.viewer-content {
  text-align: center;
}
</style>
