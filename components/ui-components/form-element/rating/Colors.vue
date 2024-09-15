<script setup>
import { Colors } from "./__code";

const rating = ref(4);

const ratingColors = ["primary", "secondary", "success", "info", "warning", "error"];
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      The <code>v-rating</code> component can be colored as you want, you can set both selected and
      not selected colors.
    </GlobalsIntro>
    <GlobalsCodePre :code="Colors">
      <div class="d-flex flex-column">
        <v-rating v-for="color in ratingColors" :key="color" v-model="rating" :color="color" />
      </div>
    </GlobalsCodePre>
  </div>
</template>
