<template>
  <div>
    <Head>
      <Title>Antrum Energy Spectra LTD | Antrum Engineering</Title>
      <Meta name="description" content="Antrum Engineering Home Page" />
    </Head>

    <div class="bg-green-darken-3">
      <VContainer>
        <VRow align="center" class="my-5">
          <VCol cols="12" sm="12" md="7">
            <div class="my-5">
              <NuxtLink to="/">
                <VBtn
                  variant="flat"
                  rounded="xl"
                  size="small"
                  color="accent"
                  class="font-weight-bold"
                >
                  Antrum Engineering
                </VBtn>
              </NuxtLink>
            </div>
            <h3 class="display-0 text-white">Antrum Energy Spectra</h3>

            <!-- <p class="text-subtitle-2 mb-3 mt-1">
              We take a client-centric approach, prioritizing their unique needs
              and challenges.
            </p> -->
            <p class="text-title-2 mt-1">
              Our team of experts excels in investigating energy consumption
              patterns, analyzing requirements, and designing tailored solutions
              that align with our client goal.
            </p>

            <VBtn
              class="text-capitalize mt-5 font-weight-bold"
              variant="flat"
              color="accent"
              >Get Started</VBtn
            >
          </VCol>

          <VCol cols="12" sm="12" md="4">
            <VImg
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAES%20Images%2FFirefly%20Artistic%20visuals%20blending%20natural%20elements%20with%20energy-efficient%20technology%2C%20showcasing%20crea.jpg?alt=media&token=6fb8127b-c9cd-4f16-90f8-594eac567b49"
              cover
            />
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <div class="mt-5">
      <VContainer>
        <h1 class="display-1 mb-2 font-weight-medium">
          About us
          <CustomDivider :has-ml="true" />
        </h1>

        <section>
          <h3 class="text-subtitle-1 my-5 animated slideInRight">
            <span class="font-weight-bold">
              ANTRUM ENERGY SPECTRA LIMITED (AES)
            </span>
            is a pioneering Nigerian enterprise that specializes in delivering
            cutting-edge sustainable energy solutions, innovative renewables
            engineering and efficient energy management services. AES is rapidly
            emerging as a distinguished player in the energy sector, an offshoot
            of the esteemed Antrum Engineering and Technology Company Limited
            (AET) having a solid foundation in Electrical Power Engineering,
            Management, and Consultancy Services, kicked off from year 2005 and
            with an alternative power substratum for AES in 2020.
          </h3>
        </section>

        <h1 class="display-1 mb-2 font-weight-medium">
          Our Approach
          <CustomDivider :has-ml="true" />
        </h1>

        <section>
          <h3 class="text-subtitle-1 my-5 animated slideInRight">
            <section>
              <h3 class="text-subtitle-1 my-5 animated slideInRight">
                We take a client-centric approach, prioritizing their unique
                needs and challenges. Our team of experts excels in
                investigating energy consumption patterns, analyzing
                requirements, and designing tailored solutions that align with
                our clients' goal.
              </h3>
            </section>
          </h3>
        </section>
      </VContainer>
    </div>

    <div class="bg-accent">
      <VContainer>
        <h1 class="display-1 mb-2 font-weight-medium">
          Solutions
          <CustomDivider :has-ml="true" />
        </h1>
        <VRow>
          <VCol cols="12" sm="12" md="6">
            <h3 class="text-subtitle-1 my-5 animated slideInRight">
              <section>
                <h3 class="text-subtitle-1 my-5 animated slideInRight">
                  At AES, we are passionate about helping our clients optimize
                  their energy usage and embrace green energy solutions,
                  demonstrating our unwavering commitment to fostering a
                  carbon-free environment. Our solutions include:
                </h3>
              </section>
            </h3>
            <VImg
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAES%20Images%2FWhatsApp%20Image%202023-08-09%20at%202.05.43%20PM%20(3).jpg?alt=media&token=33768724-92c7-4ad0-a55e-d8fba84c9a5b"
            />
          </VCol>

          <VCol cols="12" sm="12" md="6">
            <VList lines="two" class="lh-sm">
              <VListItem v-for="list in AESSolutionList" :key="list.title">
                <VListItemTitle class="text-big">{{
                  list.title
                }}</VListItemTitle>
                <VListItemSubtitle>{{ list.text }}</VListItemSubtitle>
              </VListItem>
            </VList>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <div class="mt-8">
      <Vision
        visionText="To emerge as a leading force in Energy Solutions and Services
              contributing to Nigeria's Energy Sustainability and Global Net
              Zero goal."
        missionText=" Creating value for our esteemed clients through alternative
              efficient power technologies, renewables and energy management
              solutions that conform with engineering standard practices, health
              & safety and the environment. Professionalism and Integrity drives
              our mission."
      />
    </div>

    <div class="bg-secondary py-6">
      <VContainer>
        <h1 class="display-1 text-center mb-5 font-weight-medium">
          Our Values
          <CustomDivider :has-ml="false" />
        </h1>

        <VCard class="lh-sm my-5" v-for="list in ValueList" :key="list.title">
          <VCardTitle class="text-big">{{ list.title }}</VCardTitle>
          <VCardText lass="mt-2">{{ list.text }}</VCardText>
          <VCardItem> </VCardItem>
        </VCard>
      </VContainer>
    </div>

    <div>
      <VContainer>
        <h1 class="display-1 mb-5 font-weight-medium">
          Our Core Values
          <CustomDivider :has-ml="true" />
        </h1>
        <AESValues />
      </VContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AESSolutionList, ValueList } from '~/data';

definePageMeta({
  layout: 'energy',
});
</script>

<style lang="scss">
.display-0 {
  font-size: 3rem;
}

.text-big {
  font-size: 1.2em;
  margin-top: 5px;
}

.display-1 {
  font-size: 1.5em;
}

.lh-sm {
  line-height: 2;
}
</style>
