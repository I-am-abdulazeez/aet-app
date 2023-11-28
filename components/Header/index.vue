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
              <span v-if="Theader.hasSubHeading"> AET</span>
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

// const headerImage = ref(
//   'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsec-images%2FAET.jpg?alt=media&token=2f548b7d-b793-45f6-a280-145fa908fb9f'
// );
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
