<template>
  <div class="carousel">
    <VCarousel
      :cycle="true"
      direction="vertical"
      :interval="5000"
      :vertical="showDelimiter"
      class="h-5"
      color="#E0E0E0"
      height="600"
      :show-arrows="false"
      hide-delimiter-background
    >
      <VCarouselItem v-for="(item, i) in items" :key="i" :src="item.src" cover>
        <VSheet class="black-bg">
          <VRow align="center" justify="center" :style="{ height: rowWeight }">
            <div class="sec text-center pa-3">
              <VContainer>
                <h1
                  class="display-1 mb-4 text-white animated bounceInDown delay-1s"
                >
                  {{ toTitleCase(item.title) }}
                </h1>
                <h4
                  class="subheading font-weight-light text-white animated slideInDown delay-1s"
                >
                  {{ item.subtitle }}
                </h4>
              </VContainer>
            </div>
          </VRow>
        </VSheet>
      </VCarouselItem>
    </VCarousel>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { useDisplay } from 'vuetify';

import { toTitleCase } from '~/composables';
import type { HomeBgContentType } from '~/types';

const { width } = useDisplay();

// const carouselHeight: string | number = width.value < 500 ? '600' : '600';
const rowWeight: string | number = width.value < 500 ? '620px' : '680px';

const showDelimiter = width.value < 500 ? false : true;

const { items } = defineProps({
  items: {
    type: Object as PropType<HomeBgContentType[]>,
    required: true,
  },
});
</script>

<style lang="scss">
.black-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
}

.mdi-circle {
  font-size: 10px;
}
</style>
