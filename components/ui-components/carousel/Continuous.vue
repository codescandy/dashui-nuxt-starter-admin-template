<script setup>
import { Continuous } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>

<template>
  <div id="continuous">
    <GlobalsIntro title="Continuous">
      The <code>continuous="false"</code> prop is disabled carousel looping.
    </GlobalsIntro>
    <GlobalsCodePre :code="Continuous">
      <v-carousel :continuous="false">
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
