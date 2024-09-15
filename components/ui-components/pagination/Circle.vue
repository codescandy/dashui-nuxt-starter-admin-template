<script setup>
import { Circle } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="circle">
    <GlobalsIntro title="Circle">
      The <code>rounded</code> prop allows you to render pagination buttons with alternative styles.
    </GlobalsIntro>
    <GlobalsCodePre :code="Circle">
      <v-pagination v-model="currentPage" :length="5" rounded />
    </GlobalsCodePre>
  </div>
</template>
