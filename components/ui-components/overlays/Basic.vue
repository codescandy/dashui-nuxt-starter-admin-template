<script setup>
import { Basic } from "./__code";

const overlay = ref(false);

watch(
  () => overlay.value,
  () => {
    setTimeout(() => {
      overlay.value = false;
    }, 3000);
  }
);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      In its simplest form, the <code>v-overlay</code> component will add a dimmed layer over your
      application.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-btn @click="overlay = !overlay"> Show Overlay </v-btn>

      <v-overlay v-model="overlay"></v-overlay>
    </GlobalsCodePre>
  </div>
</template>
