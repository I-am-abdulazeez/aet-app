<template>
  <div class="about">
    <Head>
      <Title>About | Antrum Engineering </Title>
      <Meta name="description" content="About Antrum Engineering " />
    </Head>
    <Header :Theader="headerProps" />
    <VContainer>
      <VRow justify="center">
        <VCol cols="12" lg="12" md="12" sm="12">
          <div class="pa-2">
            <h3 class="text-subtitle-1 mb-8">
              <span class="font-weight-medium">
                ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA) LIMITED
                (AET) RC1246959</span
              >
              is a wholly Nigerian engineering company incorporated under the
              laws of the Federal Republic of Nigeria with Electrical Power
              Engineering, Management and Consultancy Services having been
              successful with executing several electrical projects with vast
              experience garnered since 2005 from its conception and
              registration as AET’ Company.
            </h3>
            <h3 class="text-subtitle-1 mb-8">
              <span class="font-weight-medium">AET</span> has continued to
              maintain its brand as a top notch custom solution provider by
              investigating and analysing the need (problem definition) and
              proffering the appropriate solution, issuing diligent technical
              advises and carrying out installations that stand the test of
              time. We see teamwork as a key element of success; as such imbed
              it in our methodology. We ensure efficient and regular
              communication to all stakeholders and at all levels. We value life
              and properties; hence we adhere to Environmental Health & Safety
              HSE measures in our approach& practises and as well maintain our
              policy.
            </h3>
          </div>
        </VCol>
      </VRow>
    </VContainer>

    <div id="next">
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
              To be a Leading Electrical Power Engineering Solution & Service
              Provider.
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
              To consistently offer meticulous solutions that conform to
              statutory engineering practices, codes of conduct and with
              integrity to requisite challenges in Electrical Power Engineering
              for our valued clients.
            </p>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <div class="white text-gray">
      <VContainer>
        <h2 class="font-weight-medium text-gray-darken-3 text-center">
          Core Values
          <CustomDivider />
        </h2>
        <Values />
      </VContainer>
    </div>

    <VContainer>
      <template>
        <VDivider />
      </template>

      <VRow class="mt-5">
        <VCol cols="12" lg="6" md="6" sm="12">
          <h2 class="font-weight-medium mb-3 mt-6">
            Ownership, Structure and Management
            <CustomDivider :hasMl="true" />
          </h2>
          <p class="text-subtitle-1">
            The company is a Strong Matrix Structured Firmwith a dynamic team
            led by the Managing Director and CEO, Engr. Lawal Ganiyu (MNSE,
            MPMI, COREN) with able co-directors; Engr. Yisa Salau (COREN, MNSE,
            MNiMechE), Dr. Olalekan Olamide (M.Sc, PhD Bio-Energy) amongst
            others and well-meaning top ranked staff members for efficient
            management.
          </p>
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12">
          <h2 class="font-weight-medium mb-3 text-right">
            Approach
            <CustomDivider :hasMr="true" />
          </h2>
          <p class="text-subtitle-1">
            AET believes understanding the job requirement and specification
            comes first. Our team develops and applies the best strategy and
            solution that meet the requirement with recognition of the HSE
            standard and statutory practices, codes of conduct and integrity
            that applies. We conclude every project ensuring the customer is
            satisfied with the service delivered. AET believes in a hands-on
            approach on all projects. That is why a top manager of the firm has
            always been in control of the key functions on our projects. AET is
            equipped with the necessary human resources and others to ensure the
            best professional service is provided at all times.
          </p>
        </VCol>
      </VRow>
    </VContainer>

    <div class="text-center">
      <VBtn
        href="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/Profile%2FAET%20PROFILE%20FEB%202021%20FINAL.pdf?alt=media&token=a4f244ea-5d85-4608-8bb5-a306bace4fcd"
        download="AET Profile"
        variant="text"
        color="primary"
        class="text-capitalize my-5"
        >Download Company's Profile</VBtn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HeaderType } from '~/types';

const headerProps: HeaderType = {
  heading: 'About AET',
  headerImage:
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-jonathan-borba-3217852.jpg?alt=media&token=d6b21141-8341-47c8-91be-547ab08bd92f',
};
</script>

<style lang="scss" scoped>
.about {
  .v-image__image .v-image__image--cover:hover {
    transform: scale(1.5);
  }
  #next {
    background-color: #fff;
  }
}
</style>
