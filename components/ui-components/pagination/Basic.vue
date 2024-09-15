<script setup>
import { Basic } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-pagination</code> component is used to separate long sets of data.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-pagination v-model="currentPage" :length="5" />
    </GlobalsCodePre>
  </div>
</template>
