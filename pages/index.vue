<template>
  <div class="home">
    <Head>
      <Title>Home | Antrum Engineering </Title>
      <Meta name="description" content="About Nuxi Store" />
    </Head>
    <HomeCarousel :items="HomeBgContent" />
    <VContainer class="mt-5">
      <VRow>
        <VCol cols="12" lg="6" md="6" sm="12">
          <div>
            <h1 class="text-center headline mb-2 font-weight-medium">
              About us
              <div class="divide"></div>
            </h1>
            <div>
              <h3 class="text-subtitle-1 my-5 animated slideInRight">
                <span class="font-weight-regular">
                  ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA) LIMITED
                  (AET) RC1246959</span
                >
                is a wholly Nigerian engineering company incorporated under the
                laws of the Federal Republic of Nigeria to harness the capacity
                to render Electrical Power Engineering, Management and
                Consultancy Services having been successful with executing
                several electrical projects with vast experience garnered since
                2005 from its conception and registration as AET’ Company.
              </h3>
              <VBtn variant="text" color="secondary" nuxt to="/about"
                >Read More</VBtn
              >
            </div>
          </div>
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12">
          <div>
            <VRow>
              <VCol cols="12" lg="12">
                <h1 class="text-center headline font-weight-medium">
                  Showcase
                  <div class="divide"></div>
                </h1>
                <div class="mt-2 text-center">
                  <h4 class="text-center font-weight-medium mb-5 grey--text">
                    Our work speaks more about us...
                  </h4>
                  <viewer :images="ViewerImages">
                    <img
                      class="image"
                      v-for="(src, index) in ViewerImages"
                      :src="src"
                      :key="index"
                      :alt="`${src}-${index}`"
                    />
                  </viewer>
                </div>
              </VCol>
              <!-- <VBtn
                color="secondary"
                variant="tonal"
                nuxt
                to="/gallery"
                size="small"
                class="mt-5"
                >View More</VBtn
              > -->
            </VRow>
          </div>
        </VCol>
      </VRow>
      <VContainer>
        <VRow class="my-5">
          <VCol cols="12" lg="12" sm="12">
            <h3 class="text-h5 text-center animated bounce">
              Product and Services
              <div class="divide"></div>
            </h3>
          </VCol>
        </VRow>
        <CardCarousel :items="ProductCardContent" />
      </VContainer>
    </VContainer>

    <div>
      <VContainer>
        <!-- <indus /> -->
      </VContainer>
    </div>

    <div class="secondary">
      <VContainer>
        <VRow>
          <VCol cols="12" lg="12" md="12" sm="12">
            <h3 class="text-subtitle-1 text-center">
              We see teamwork on every project as a key success element. The
              over-all project manager on each project knows to ensure efficient
              and regular communication to all stakeholders and at all levels.
            </h3>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <VContainer>
      <!-- <Clients /> -->
    </VContainer>

    <div id="contact">
      <VContainer>
        <h3 class="pa-3 text-center text-h5 font-weigt-medium">
          Contact
          <div class="divide"></div>
        </h3>
        <!-- <Contact /> -->
      </VContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ViewerImages, ProductCardContent, HomeBgContent } from '~/data';
</script>

<style lang="scss">
.home {
  #contact {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-carrer.jpg?alt=media&token=3cb47d90-bf22-4b5a-b7f1-0b638ce5ba14')
        center center;
    color: #fff !important;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .image {
    width: calc(40% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
  }

  .v-card .v-image__image {
    transition: transform 0.5s ease;
  }

  .v-card:hover .v-image__image {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 50%;
      margin: 0;
      padding: 0.6em;
    }
  }

  @media only screen and (max-width: 480px) {
    .image {
      width: 33.3333%;
      margin: 0;
      padding: 0.6em;
    }
  }
}
</style>
