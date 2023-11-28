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
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-pixabay-33153.jpg?alt=media&token=ef0d93e5-b9d4-491e-a4eb-eba1e66abb97',
};
</script>
