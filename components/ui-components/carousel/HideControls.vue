<script setup>
import { HideControls } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="hide-controls">
    <GlobalsIntro title="Hide controls">
      You can hide the carousel navigation controls with <code>:show-arrows="false"</code>. Or you
      can make them only appear on hover with <code>show-arrows="hover"</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="HideControls">
      <v-carousel>
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
