<template>
  <div class="divide" :class="{ 'mr-0': hasMr, 'ml-0': hasMl }"></div>
</template>

<script lang="ts" setup>
const { hasMr, hasMl } = defineProps({
  hasMr: {
    type: Boolean,
    default: false,
  },
  hasMl: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.divide {
  width: 3em;
  height: 0.2em;
  margin: 0 auto;
  background-color: rgba(255, 129, 40, 0.253);
}
</style>
