<script setup>
import { Disabled } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="disabled">
    <GlobalsIntro title="Disabled">
      Pagination items can be manually deactivated using the
      <code>disabled</code>
      prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Disabled">
      <v-pagination v-model="currentPage" :length="5" disabled />
    </GlobalsCodePre>
  </div>
</template>
