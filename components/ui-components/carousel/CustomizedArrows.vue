<script setup>
import { CustomizedArrows } from "./__code";
import carousel1 from "/images/components/carousel/1.jpg";
import carousel2 from "/images/components/carousel/2.jpg";
import carousel3 from "/images/components/carousel/3.jpg";
</script>
<template>
  <div id="customized-arrows">
    <GlobalsIntro title="Customized arrows">
      Arrows can be customized by using <code>prev</code> and <code>next</code> slots.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomizedArrows">
      <v-carousel show-arrows hide-delimiter-background>
        <template v-slot:prev="{ props }">
          <icon-btn
            icon="tabler-caret-left"
            @click="props.onClick"
            variant="elevated"
            color="success"
            size="x-large"
          >
            <v-icon icon="tabler-caret-left" size="50" />
          </icon-btn>
        </template>
        <template v-slot:next="{ props }">
          <icon-btn
            icon="tabler-caret-left"
            @click="props.onClick"
            variant="elevated"
            color="success"
            size="x-large"
          >
            <v-icon icon="tabler-caret-right" size="50" />
          </icon-btn>
        </template>
        <v-carousel-item :src="carousel1" cover></v-carousel-item>
        <v-carousel-item :src="carousel2" cover></v-carousel-item>
        <v-carousel-item :src="carousel3" cover></v-carousel-item>
      </v-carousel>
    </GlobalsCodePre>
  </div>
</template>
