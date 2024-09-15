<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },

  isBtn: {
    type: Boolean,
    default: false,
  },

  btnColor: {
    type: String,
    default: "primary",
  },

  btnText: {
    type: String,
    default: "Button",
  },
});
</script>

<template>
  <div class="global-header d-flex align-center justify-space-between pb-5 flex-wrap ga-2">
    <h3 :class="`global-header__text text-h3 ${btnColor === 'light' ? 'text-light' : ''}`">
      {{ props.title }}
    </h3>

    <v-btn v-if="isBtn" :color="btnColor">{{ props.btnText }}</v-btn>
  </div>
</template>

<style scoped lang="scss">
.global-header {
  &__text {
    z-index: 1;
  }
}
</style>
