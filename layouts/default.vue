<template>
  <nav>
    <VApp fixed app :elevation="0">
      <Navbar />
      <VMain>
        <slot />
      </VMain>
      <Footer />
      <ScrollToTop />
      <AETSub icon="mdi-arrow-right-top" to="/energy" text="Antrum Energy" />
      <AETPower icon="mdi-arrow-right-top" to="/power" text="Antrum Power" />
      <VFooter>
        <div class="mx-auto">
          <img src="@/assets/power.jpeg" class="brand pt-2" alt="AET logo" />
        </div>
      </VFooter>
    </VApp>
  </nav>
</template>
