<script setup>
import { OutlineCircle } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="outline-circle">
    <GlobalsIntro title="Circle Outline">
      The <code>rounded</code> prop allows you to render pagination buttons with alternative styles.
    </GlobalsIntro>
    <GlobalsCodePre :code="OutlineCircle">
      <v-pagination v-model="currentPage" variant="outlined" :length="5" rounded />
    </GlobalsCodePre>
  </div>
</template>
