<script setup>
import { Incremented } from "./__code";
const rating = ref(4.5);
</script>

<template>
  <div id="incremented">
    <GlobalsIntro title="Incremented">
      The <code>half-increments</code> prop increases the granularity of the ratings, allow for .5
      values as well.
    </GlobalsIntro>
    <GlobalsCodePre :code="Incremented">
      <v-rating v-model="rating" half-increments hover />
    </GlobalsCodePre>
  </div>
</template>
