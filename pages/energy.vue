<template>
  <div>
    <Head>
      <Title>Antrum Energy Spectra LTD | Antrum Engineering</Title>
      <Meta name="description" content="Antrum Engineering Home Page" />
    </Head>
    <div class="mt-5">
      <NuxtLink to="/">
        <VBtn
          variant="flat"
          rounded="xl"
          size="small"
          color="accent"
          class="ml-2 font-weight-bold float"
          prepend-icon="mdi-arrow-left-top"
        >
          Antrum Engineering
        </VBtn>
      </NuxtLink>
    </div>

    <div class="bg-green-darken-3">
      <VContainer>
        <VRow align="center" class="my-5">
          <VCol cols="12" sm="12" md="7">
            <h3 class="display-0 text-white">Antrum Energy Spectra</h3>

            <!-- <p class="text-subtitle-2 mb-3 mt-1">
              We take a client-centric approach, prioritizing their unique needs
              and challenges.
            </p> -->
            <p class="text-subtitle-2 mb-3 mt-1">
              Our team of experts excels in investigating energy consumption
              patterns, analyzing requirements, and designing tailored solutions
              that align with our client goal.
            </p>

            <VBtn
              size="small"
              class="text-capitalize font-weight-bold"
              variant="flat"
              color="accent"
              >Get Started</VBtn
            >
          </VCol>

          <VCol cols="12" sm="12" md="4">
            <VImg
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-led-supermarket-577513.jpg?alt=media&token=a36910bf-95ac-4937-ad0b-3af339f9c341"
            />
          </VCol>
        </VRow>
      </VContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'energy',
});
</script>

<style lang="scss">
.display-0 {
  font-size: 3rem;
}
</style>
