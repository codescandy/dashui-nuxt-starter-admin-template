<script setup>
import { Basic } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-carousel</code> component expands upon <code>v-window</code> by providing
      additional features targeted at displaying images.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-carousel>
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
