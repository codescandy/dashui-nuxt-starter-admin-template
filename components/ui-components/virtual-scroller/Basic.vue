<script setup>
import { Basic } from "./__code";
const items = Array.from({ length: 1000 }, (k, v) => v + 1);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The virtual scroller displays just enough records to fill the viewport and uses the existing
      component, rehydrating it with new data.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-virtual-scroll :height="300" :items="items">
        <template v-slot:default="{ item }"> Item {{ item }} </template>
      </v-virtual-scroll>
    </GlobalsCodePre>
  </div>
</template>
