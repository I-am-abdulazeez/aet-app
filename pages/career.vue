<template>
  <div>
    <Head>
      <Title>Career | Antrum Engineering </Title>
      <Meta name="description" content="Career | Antrum Engineering " />
    </Head>

    <Header :Theader="headerProps" />

    <VSheet color="secondary" class="mb-4">
      <VContainer>
        <div class="pa-5 text-center">
          <h3 class="display-1 text-white">
            You are a professional, a graduate, a student? Or still at school?
          </h3>
          <h5 class="text-subtitle-1 text-white font-weight-thin mt-3">
            We offer interesting opportunities for all career stages.
          </h5>
          <div class="text-center">
            <VBtn
              color="primary"
              variant="text"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=antrumengineering@gmail.com&su=Contact_Antrum&body=Let_know_your_expectations"
              size="large"
              class="mt-4 animated tada text-capitalize"
              prependIcon="mdi-map-marker"
            >
              Get in Touch</VBtn
            >
          </div>
        </div>
      </VContainer>
    </VSheet>
  </div>
</template>

<script setup lang="ts">
import type { HeaderType } from '~/types';

const headerProps: HeaderType = {
  heading: 'Career',
  secText: 'Open Positions',
  headerImage:
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsec-images%2FAET.jpg?alt=media&token=2f548b7d-b793-45f6-a280-145fa908fb9f',
};
</script>
