<template>
  <nav>
    <VApp fixed app :elevation="0">
      <VAppBar
        height="50"
        app
        fixed
        dense
        scroll-behavior="elevate"
        :scroll-threshold="1000"
      >
        <NuxtLink to="/" class="mx-auto">
          <img
            style="width: 150px"
            src="@/assets/energy.png"
            class="brand"
            alt="AET"
          />
        </NuxtLink>
      </VAppBar>
      <VMain>
        <slot />
      </VMain>
      <ScrollToTop />
    </VApp>
  </nav>
</template>
