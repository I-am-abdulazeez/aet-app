<template>
  <div class="about">
    <Head>
      <Title>Gallery | Antrum Engineering </Title>
      <Meta name="description" content="Gallery Antrum Engineering " />
    </Head>
    <Header :Theader="headerProps" />

    <Showcase />
  </div>
</template>

<script lang="ts" setup>
import type { HeaderType } from '~/types';

const headerProps: HeaderType = {
  heading: 'Gallery',
  secText: 'Our work speaks more about us...',
  headerImage:
    'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fphotography-of-electric-tower-during-sunset-923953.jpg?alt=media&token=136a2b96-be3d-4eb0-8d87-a84642234eec',
};
</script>
