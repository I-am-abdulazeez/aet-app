<template>
  <div>
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      snap-align="center"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <VCard
          flat
          border
          class="carousel__item mx-2 text-left"
          :title="item.cardTitle"
          :subtitle="item.cardText"
        >
          <VImg
            :src="item.cardImage"
            :lazy-src="item.cardImageLazyLoad"
            height="270"
            cover
          />
          <VCardActions>
            <VBtn
              nuxt
              size="small"
              color="secondary"
              variant="text"
              class="text-center text-capitalize"
              to="/product"
            >
              Read More
            </VBtn>
          </VCardActions>
        </VCard>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Slide, Carousel } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import type { CardContentType } from '~/types';

const { items } = defineProps({
  items: {
    type: Object as PropType<CardContentType[]>,
    required: true,
  },
});

const breakpoints = {
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
};
</script>

<style scoped lang="scss"></style>
