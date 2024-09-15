<script setup>
import { Size } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      Use <code>size</code> prop to sets the height and width of the component. Default unit is px.
      Can also use the following predefined sizes: x-small, small, default, large, and x-large.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <v-pagination v-model="currentPage" :length="7" size="small" />
      <v-pagination v-model="currentPage" :length="7" />
      <v-pagination v-model="currentPage" :length="7" size="large" />
    </GlobalsCodePre>
  </div>
</template>
