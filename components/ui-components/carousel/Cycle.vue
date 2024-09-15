<script setup>
import { Cycle } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="cycle">
    <GlobalsIntro title="Cycle">
      With the <code>cycle</code> prop you can have your slides automatically transition to the next
      available every 6s (default).
    </GlobalsIntro>
    <GlobalsCodePre :code="Cycle">
      <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
