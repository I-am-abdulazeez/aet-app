<template>
  <nav>
    <VAppBar
      height="70"
      app
      fixed
      dense
      color="white"
      scroll-behavior="elevate"
      :scroll-threshold="200"
    >
      <VContainer class="d-flex pa-0 align-center">
        <VAppBarNavIcon class="hidden-md-and-up" @click="toggleNav()" />
        <VToolbarTitle class="text-uppercase">
          <NuxtLink to="/" class="align-items">
            <img src="@/assets/logo.png" class="pt-2 brand" alt="AET" />
          </NuxtLink>
        </VToolbarTitle>
        <VSpacer></VSpacer>
        <VBtn
          class="mr-2 hidden-sm-and-down text-capitalize"
          variant="text"
          size="small"
          v-for="(navLink, index) of NavLinks"
          :key="index"
          nuxt
          :to="navLink.path"
        >
          {{ navLink.text }}
        </VBtn>
        <!--Hide in large screen and up-->
      </VContainer>
    </VAppBar>

    <VNavigationDrawer
      app
      absolute
      location="right"
      :disable-resize-watcher="true"
      v-model="drawer"
      class="hidden-sm-and-up right"
    >
      <VList>
        <VListItem
          v-for="(navLink, index) of NavLinks"
          :key="index"
          :to="navLink.path"
          link
        >
          <VListItemTitle class="font-weight-medium f-12 primary-text">{{
            navLink.text
          }}</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NavLinks } from '~/data';

const drawer = ref(false);

const toggleNav = () => {
  drawer.value = !drawer.value;
};

onBeforeMount(() => {
  // Set the initial state of drawer to false
  drawer.value = false;
});

onMounted(() => {
  // Set the initial state of drawer to false after the component is mounted
  drawer.value = false;
});
</script>

<style lang="scss">
$primaryColor: #fa7414;

nav {
  img.brand {
    width: 200px;
  }
}

.ml-20 {
  margin-left: 5em;
}

@media only screen and (max-width: 480px) {
  nav {
    img.brand {
      width: 180px;
    }
  }
}
</style>
