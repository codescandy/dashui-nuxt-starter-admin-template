<script setup>
import { Direction } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="direction">
    <GlobalsIntro title="Direction">
      The <code>direction</code> prop is use for change carousel direction, there are two option
      <code>horizontal</code> and <code>vertical</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Direction">
      <v-carousel direction="vertical">
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
