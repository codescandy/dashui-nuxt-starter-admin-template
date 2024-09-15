<script setup>
import { Loader } from "./__code";

const overlay = ref(false);

watch(
  () => overlay.value,
  () => {
    setTimeout(() => {
      overlay.value = false;
    }, 2000);
  }
);
</script>

<template>
  <div id="loader">
    <GlobalsIntro title="Loader">
      Using the <code>v-overlay</code> as a background, add a progress component to easily create a
      custom loader.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loader">
      <v-btn append-icon="tabler-share" @click="overlay = !overlay"> Launch Application </v-btn>

      <v-overlay :model-value="overlay" class="align-center justify-center">
        <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </GlobalsCodePre>
  </div>
</template>
