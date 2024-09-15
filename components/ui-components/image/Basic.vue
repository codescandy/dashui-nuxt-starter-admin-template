<script setup>
import { Basic } from "./__code";
import image1 from "/images/components/image/1.jpg";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      <code>v-img</code> component is used to display a responsive image with lazy-load and
      placeholder.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-img :width="300" aspect-ratio="16/9" cover :src="image1" />
    </GlobalsCodePre>
  </div>
</template>
