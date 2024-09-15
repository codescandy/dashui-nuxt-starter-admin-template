<script setup>
import { CustomDelimiter } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="custom-delimiter">
    <GlobalsIntro title="Custom delimiters">
      Use any available icon as your carousel’s slide delimiter.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomDelimiter">
      <v-carousel :continuous="false" delimiter-icon="tabler-square">
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
