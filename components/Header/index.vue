<template>
  <header
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
     url(${Theader.headerImage}) center center no-repeat`,
      backgroundSize: 'cover',
    }"
  >
    <VContainer>
      <div class="sec">
        <VRow align="center" justify="center" class="fill-height">
          <VCol class="text-center" cols="12">
            <h1 class="display-1 font-weight-medium mb-4 animated bounce">
              <span class="text-accent">{{ Theader.heading }}</span>
              <!-- <span v-if="Theader.secText !== ''">{{ Theader.secText }}</span> -->
              <h4
                class="font-weight-regular text-subtitle-1"
                v-if="Theader.secText !== ''"
              >
                {{ Theader.secText }}
              </h4>
            </h1>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </header>
</template>

<script setup lang="ts">
import type { HeaderType } from '~/types';

const { Theader } = defineProps({
  Theader: {
    type: Object as PropType<HeaderType>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
header {
  color: #fff;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 480px) {
  header {
    height: 30vh;
  }
}
</style>
