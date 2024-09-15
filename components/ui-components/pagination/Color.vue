<script setup>
import { Color } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use <code>active-color</code> prop for create different color pagination.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-pagination v-model="currentPage" active-color="error" :length="7" />
      <v-pagination v-model="currentPage" active-color="success" :length="7" />
    </GlobalsCodePre>
  </div>
</template>
