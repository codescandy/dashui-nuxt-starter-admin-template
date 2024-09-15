<script setup>
import { Outline } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="outline">
    <GlobalsIntro title="Outline">
      The <code>variant='outline'</code> prop is used to give outline to pagination item.
    </GlobalsIntro>
    <GlobalsCodePre :code="Outline">
      <v-pagination v-model="currentPage" :length="5" variant="outlined" />
    </GlobalsCodePre>
  </div>
</template>
