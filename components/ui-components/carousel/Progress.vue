<script setup>
import { Progress } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="progress">
    <GlobalsIntro title="Progress">
      You can show a linear progress bar with the <code>progress</code> prop. It will indicate how
      far into the cycle the carousel currently is.
    </GlobalsIntro>
    <GlobalsCodePre :code="Progress">
      <v-carousel progress="primary">
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
