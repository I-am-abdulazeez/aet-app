<template>
  <div>
    <Head>
      <Title>Contact | Antrum Engineering </Title>
      <Meta name="description" content="Contact | Antrum Engineering " />
    </Head>

    <Header :Theader="headerProps" />

    <VContainer>
      <ReachUs />
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import type { HeaderType } from '~/types';

const headerProps: HeaderType = {
  heading: 'Contact Us',
  secText: "Let's hear from you...",
  headerImage:
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-narcisa-aciko-1292464.jpg?alt=media&token=1172a16e-c102-4395-9b97-ff1ffff9ff6d',
};
</script>
