<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.display-1 {
  font-size: 2em;
}

.subheading {
  font-size: 1.2em;
}

@media only screen and (max-width: 500px) {
  .display-1 {
    font-size: 1.5em;
  }
  .subheading {
    font-size: 0.95em;
  }
}
</style>
