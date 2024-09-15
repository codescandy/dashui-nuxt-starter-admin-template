<script setup>
import { Length } from "./__code";

const length = ref(5);
const rating = ref(2);
</script>

<template>
  <div id="length">
    <GlobalsIntro title="Length">
      Change the number of items by modifying the the <code>length</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Length">
      <div class="text-caption">Custom length</div>

      <v-slider v-model="length" :min="1" :max="7" />

      <v-rating v-model="rating" :length="length" />
      <p class="font-weight-medium mb-0">Model: {{ rating }}</p>
    </GlobalsCodePre>
  </div>
</template>
