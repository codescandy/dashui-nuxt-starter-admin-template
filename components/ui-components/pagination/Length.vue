<script setup>
import { Length } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="length">
    <GlobalsIntro title="Length">
      Using the <code>length</code> prop you can set the length of <code>v-pagination</code>, if the
      number of page buttons exceeds the parent container, it will truncate the list.
    </GlobalsIntro>
    <GlobalsCodePre :code="Length">
      <v-pagination v-model="currentPage" :length="50" />
    </GlobalsCodePre>
  </div>
</template>
