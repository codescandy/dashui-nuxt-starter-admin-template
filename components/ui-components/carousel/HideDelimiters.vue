<script setup>
import { HideDelimiters } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="hide-delimiters">
    <GlobalsIntro title="Hide delimiters">
      You can hide the bottom controls with <code>hide-delimiters</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="HideDelimiters">
      <v-carousel hide-delimiters>
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
