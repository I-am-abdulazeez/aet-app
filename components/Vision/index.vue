<template>
  <VContainer>
    <VRow align="center" justify="center" class="text-center">
      <VCol cols="12" lg="5" md="5" sm="12">
        <VImg
          class="mx-auto mb-7"
          src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-Vision.svg?alt=media&token=673261c3-311f-4d34-8f6c-b093ae8059c1"
          width="200"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-V-blur.svg?alt=media&token=99bf0370-7138-4d45-974c-2d8b4e85df1d"
        >
        </VImg>
        <p class="mt-3 px-3">
          {{ visionText }}
        </p>
      </VCol>
      <VCol cols="12" lg="6" md="6" sm="12" offset-lg="1" offset-md="1">
        <VImg
          class="mx-auto mb-7"
          src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M.svg?alt=media&token=b6278719-3591-4b10-9583-69a7431c65be"
          width="200"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M-blur.svg?alt=media&token=8745a4ca-c1ee-4abb-a5c2-193f17d69a07"
        >
        </VImg>
        <p class="mt-3 px-3">
          {{ missionText }}
        </p>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
const { visionText, missionText } = defineProps({
  visionText: {
    type: String,
    default: '',
    required: true,
  },
  missionText: {
    type: String,
    default: '',
    required: true,
  },
});
</script>
