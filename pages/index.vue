<template>
  <div class="home">
    <Head>
      <Title>Home | Antrum Engineering </Title>
      <Meta name="description" content="Antrum Engineering Home Page" />
    </Head>
    <HomeCarousel :items="HomeBgContent" />
    <VContainer>
      <h3 class="text-h5 text-center my-5 animated bounce">
        Product and Services
        <CustomDivider />
      </h3>
      <CardCarousel :items="ProductCardContent" />
    </VContainer>
    <VContainer class="mt-5">
      <div>
        <h1 class="text-center headline mb-2 font-weight-medium">
          About us
          <CustomDivider />
        </h1>
        <div>
          <h3 class="text-subtitle-1 my-5 animated slideInRight">
            <span class="font-weight-regular">
              ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA) LIMITED (AET)
              RC1246959
            </span>
            is a wholly Nigerian engineering company incorporated under the laws
            of the Federal Republic of Nigeria to harness the capacity to render
            Electrical Power Engineering, Management and Consultancy Services
            having been successful with executing several electrical projects
            with vast experience garnered since 2005 from its conception and
            registration as AET’ Company.
          </h3>
          <VBtn
            class="text-capitalize"
            color="secondary"
            size="small"
            flat
            nuxt
            to="/about"
          >
            About us
          </VBtn>
        </div>
      </div>
    </VContainer>

    <div class="bg-secondary">
      <VContainer>
        <h3 class="text-subtitle-1 text-center">
          We see teamwork on every project as a key success element. The
          over-all project manager on each project knows to ensure efficient and
          regular communication to all stakeholders and at all levels.
        </h3>
      </VContainer>
    </div>

    <div>
      <VContainer>
        <Industry />
      </VContainer>
    </div>

    <VContainer>
      <!-- <Clients /> -->
    </VContainer>

    <div id="contact">
      <VContainer>
        <h3 class="pa-3 text-center text-h5 font-weigt-medium">
          Reach out to us
        </h3>
        <CustomDivider />
        <ReachUs />
      </VContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ViewerImages, ProductCardContent, HomeBgContent } from '~/data';
import Viewer from 'v-viewer';
</script>

<style lang="scss">
.home {
  #contact {
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      url('https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-pixabay-33153.jpg?alt=media&token=ef0d93e5-b9d4-491e-a4eb-eba1e66abb97')
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
