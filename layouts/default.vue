<template>
  <nav>
    <VApp fixed app :elevation="0">
      <Navbar />
      <VMain>
        <slot />
      </VMain>
      <!-- <Footer /> -->
      <VFooter fixed app class="px-10">
        <div class="mx-auto">
          <img src="@/assets/power.jpeg" class="brand pt-2" alt="AET logo" />
        </div>
      </VFooter>
    </VApp>
  </nav>
</template>
