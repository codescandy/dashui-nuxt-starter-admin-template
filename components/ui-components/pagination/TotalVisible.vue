<script setup>
import { TotalVisible } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="total-visible">
    <GlobalsIntro title="Total visible">
      You can also manually set the maximum number of visible page buttons with the
      <code>total-visible</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="TotalVisible">
      <v-pagination
        v-model="currentPage"
        :length="50"
        :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
      />
    </GlobalsCodePre>
  </div>
</template>
