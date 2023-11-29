<template>
  <div class="indus">
    <Head>
      <Title>Industry | Antrum Engineering </Title>
      <Meta name="description" content="Industry | Antrum Engineering " />
    </Head>
    <Header :Theader="headerProps" />
    <VContainer>
      <VRow
        align="center"
        class="mt-7"
        v-for="(industry, index) in IndustriesCardContent"
        :key="index"
      >
        <VCol :order="index % 2 === 0 ? 1 : 2" cols="12" sm="12" md="5">
          <VImg
            :src="industry.cardImage"
            :lazy-src="industry.cardImageLazyLoad"
          />
        </VCol>
        <VCol
          :order="index % 2 === 0 ? 2 : 1"
          cols="12"
          sm="12"
          md="6"
          offset-md="1"
          offset-lg="1"
        >
          <h5 class="text-h5 font-weight-medium mb-4">
            {{ industry.cardTitle }}
          </h5>
          <p>
            {{ industry.cardText }}
          </p>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import { IndustriesCardContent } from '@/data';
import type { HeaderType } from '~/types';

const headerProps: HeaderType = {
  heading: 'Industry',
  secText: 'Those We Serve',
  headerImage:
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fbg-5.jpg?alt=media&token=28cd341a-c8c0-4d48-bb8f-4be13a94b72a',
};
</script>
