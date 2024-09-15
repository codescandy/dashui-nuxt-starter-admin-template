<script setup>
import { Size } from "./__code";
const rating = ref(4);
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      Utilize the same sizing classes available in <code>v-icon</code> or provide your own with the
      <code>size</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <div class="d-flex flex-column">
        <v-rating v-model="rating" size="x-small" />

        <v-rating v-model="rating" size="small" />

        <v-rating v-model="rating" />

        <v-rating v-model="rating" size="large" />

        <v-rating v-model="rating" size="x-large" />
      </div>
    </GlobalsCodePre>
  </div>
</template>
