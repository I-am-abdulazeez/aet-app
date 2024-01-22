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
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-led-supermarket-577513.jpg?alt=media&token=a36910bf-95ac-4937-ad0b-3af339f9c341"
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
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerPlant.jpg?alt=media&token=cf0504d6-e755-4739-b974-d49cca3fbefe"
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
      <VContainer>
        <VRow align="center" justify="center" class="text-center">
          <VCol cols="12" lg="5" md="5" sm="12">
            <VImg
              class="mx-auto mb-7"
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-Vision.svg?alt=media&token=673261c3-311f-4d34-8f6c-b093ae8059c1"
              width="230"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-V-blur.svg?alt=media&token=99bf0370-7138-4d45-974c-2d8b4e85df1d"
            >
            </VImg>
            <p class="mt-3 px-3">
              To emerge as a leading force in Energy Solutions and Services
              contributing to Nigeria's Energy Sustainability and Global Net
              Zero goal.
            </p>
          </VCol>
          <VCol cols="12" lg="6" md="6" sm="12" offset-lg="1" offset-md="1">
            <VImg
              class="mx-auto mb-7"
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M.svg?alt=media&token=b6278719-3591-4b10-9583-69a7431c65be"
              width="220"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M-blur.svg?alt=media&token=8745a4ca-c1ee-4abb-a5c2-193f17d69a07"
            >
            </VImg>
            <p class="mt-3 px-3">
              Creating value for our esteemed clients through alternative
              efficient power technologies, renewables and energy management
              solutions that conform with engineering standard practices, health
              & safety and the environment. Professionalism and Integrity drives
              our mission.
            </p>
          </VCol>
        </VRow>
      </VContainer>
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
        <div>
          <VRow align="center" class="mt-7" id="first">
            <VCol cols="12" sm="12" md="5">
              <VImg
                src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerPlant.jpg?alt=media&token=cf0504d6-e755-4739-b974-d49cca3fbefe"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-1.jpg?alt=media&token=64fa3bae-1d6b-4fb1-b126-09677f93699a"
              ></VImg>
            </VCol>
            <VCol cols="12" sm="12" md="6" offset-md="1" offset-lg="1">
              <VChip
                color="secondary"
                class="text-subtitle-2 font-weight-medium mb-4"
              >
                ENERGY EFFICIENCY MANAGEMENT SERVICES (EEMS)
              </VChip>
              <p class="text-justify font-weight-regular">
                * Energy audit <br />
                * Energy Monitoring and Management systems <br />
                * Demand Response Program <br />
                * Energy Efficient Appliances and Equipment <br />
                * Behavioural Change and Training <br />
                * Industrial Process Optimization
              </p>
            </VCol>
          </VRow>
          <!--First Row-->

          <VRow align="center" class="mt-7" id="second">
            <VCol cols="12" sm="12" md="5">
              <VChip
                color="secondary"
                class="text-subtitle-2 font-weight-medium mb-4"
              >
                RENEWABLE ENERGY SOLUTIONS (RES)
              </VChip>
              <p class="text-justify font-weight-regular">
                * Solar PV System <br />
                * Solar Thermal System <br />
                * Wind Turbine Projects<br />
                * Tidal and Wave Energy System <br />
                * Energy Storage Systems <br />
                * Micro-grid and Off-grid Solution
              </p>
            </VCol>
            <VCol cols="12" sm="12" md="6" offset-md="1" offset-lg="1">
              <VImg
                src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d.jpg?alt=media&token=c2617a76-94a4-4fca-9772-6490cc38969e"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d-blur.jpg?alt=media&token=419afc0f-4c49-4b3d-93ed-a0f22298a9b5"
              ></VImg>
            </VCol>
          </VRow>
          <!--Second Row-->

          <VRow align="center" class="mt-7" id="third">
            <VCol cols="12" sm="12" md="6">
              <VImg
                src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerInfra.jpg?alt=media&token=28786c86-dc40-4a58-b9bb-eeee0169ddda"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-2.jpg?alt=media&token=2d37f080-79ee-4f88-b11c-a3f829ad38e4"
              ></VImg>
            </VCol>
            <VCol cols="12" sm="12" md="5" offset-md="1" offset-lg="1">
              <VChip color="secondary" class="font-weight-medium mb-4">
                SMART METERING SOLUTIONS (SMS)
              </VChip>
              <p class="= font-weight-regular text-justify">
                * Consultation and System Design <br />
                * Smart Meter Deployment <br />
                * Data Management and Analytics <br />
                * Vending and Tariff Management <br />
                * Metering Infrastructure and Data Management System: MIM & MDMS
                <br />
                * Customer Support and Education
              </p>
            </VCol> </VRow
          ><!--Third Row-->

          <VRow align="center" class="mt-7" id="fourth">
            <VCol cols="12" sm="12" md="6">
              <VChip color="secondary" class="title font-weight-medium mb-4"
                >BUILDING-INTEGRATED PHOTOVOLTAICS (BIPV) & SMART BUILDING
                TECHNOLOGY (SBT)</VChip
              >
              <p class="font-weight-regular text-justify">
                * Engineering and Integration <br />
                * Electrical System Installation and Integration <br />
                * Building Envelope Improvement <br />
                * Monitoring and Maintenance <br />
                * Workshop and Seminars <br />
                * Environmental Impact Assessment (EIA)
              </p>
            </VCol>
            <VCol cols="12" sm="12" md="5" offset-md="1" offset-lg="1">
              <VImg
                src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-10.jpg?alt=media&token=8baa552a-7fb3-4d64-9c71-b62d6118d20b"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-15.jpg?alt=media&token=64e751d7-9f56-4993-a5c8-517fc6c4b913"
              ></VImg>
            </VCol> </VRow
          ><!--Fourth Row-->
        </div>
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
