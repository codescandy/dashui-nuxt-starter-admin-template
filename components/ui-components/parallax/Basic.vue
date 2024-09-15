<script setup>
import { Basic } from "./__code";
import parallax1 from "/images/components/parallax/1.jpg";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      A parallax causes a shift in a background image when the user scrolls the page.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-parallax :src="parallax1" />
    </GlobalsCodePre>
  </div>
</template>
