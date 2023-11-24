<template>
  <div class="indus">
    <h1 class="text-center headline font-weight-medium">
      Industry
      <CustomDivider />
    </h1>
    <VRow align="center" justify="center" class="mt-5">
      <VCol
        cols="12"
        lg="4"
        md="4"
        v-for="(industry, index) in IndustriesCardContent"
        :key="index"
        sm="12"
      >
        <VCard>
          <VImg
            height="250"
            :src="industry.cardImage"
            :lazy-src="industry.cardImageLazyLoad"
            cover
          ></VImg>
          <VCardItem>
            <VCardSubtitle class="subtitle-1 font-weight-medium">
              {{ industry.cardTitle }}
            </VCardSubtitle>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import { IndustriesCardContent } from '~/data';
</script>
