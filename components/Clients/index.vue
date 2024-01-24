<template>
  <div class="clients">
    <h3 class="text-center mt-4 mb-6 text-h5 font-weight-medium">
      Our Beautiful Clients & Partners.
      <CustomDivider />
    </h3>
    <!-- <carousel
      :items="clientItems"
      :margin="clientMargin"
      :nav="nav"
      :responsive="clientResponsive"
      :autoplay="autoPlay"
      class="pa-2"
    >
    </carousel> -->
    <div>
      <VRow>
        <VCol
          align-self="center"
          cols="12"
          sm="12"
          md="3"
          v-for="(client, index) in ClientsImage"
        >
          <VImg
            :key="index"
            :alt="client.id"
            :src="client.image"
            class="mx-auto"
            height="90"
          />
        </VCol>
      </VRow>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ClientsImage } from '~/data';
</script>

<style lang="scss" scoped>
// .greyed {
//   filter: grayscale(100%);
// }
</style>
