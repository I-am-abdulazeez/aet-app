<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.divide {
  width: 3em;
  height: 0.2em;
  margin: 0 auto;
  background-color: rgba(255, 129, 40, 0.253);
}

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
