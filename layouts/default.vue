<template>
  <nav>
    <VApp fixed app :elevation="0">
      <Navbar />
      <VMain>
        <slot />
      </VMain>
      <Footer />
      <ScrollToTop />
      <AETEnergy />
      <VFooter>
        <div class="mx-auto">
          <img src="@/assets/power.jpeg" class="brand pt-2" alt="AET logo" />
        </div>
      </VFooter>
    </VApp>
  </nav>
</template>
