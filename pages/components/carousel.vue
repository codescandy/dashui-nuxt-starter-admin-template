<script setup>
import Basic from "@/components/ui-components/carousel/Basic.vue";
import CustomDelimiter from "@/components/ui-components/carousel/CustomDelimiter.vue";
import Cycle from "@/components/ui-components/carousel/Cycle.vue";
import HideControls from "@/components/ui-components/carousel/HideControls.vue";
import CustomizedArrows from "@/components/ui-components/carousel/CustomizedArrows.vue";
import HideDelimiters from "@/components/ui-components/carousel/HideDelimiters.vue";
import Progress from "@/components/ui-components/carousel/Progress.vue";
import Continuous from "@/components/ui-components/carousel/Continuous.vue";
import Direction from "@/components/ui-components/carousel/Direction.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Basic",
    to: "basic",
  },
  {
    name: "Custom Delimiter",
    to: "custom-delimiter",
  },
  {
    name: "Cycle",
    to: "cycle",
  },
  {
    name: "Hide controls",
    to: "hide-controls",
  },
  {
    name: "Customized arrows",
    to: "customized-arrows",
  },
  {
    name: "Hide delimiters",
    to: "hide-delimiters",
  },
  {
    name: "Progress",
    to: "progress",
  },
  {
    name: "Continuous",
    to: "continuous",
  },
  {
    name: "Direction",
    to: "direction",
  },
];

useSeoMeta({
  title: "Carousel",
  ogTitle: "Carousel",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col lg="9" md="12">
        <!-- Intro -->
        <div id="intro">
          <GlobalsIntro
            page-intro
            title="Carousel"
            subtitle="The v-carousel component is used to display large numbers of visual content on a rotating timer."
          />
        </div>
        <Basic />
        <CustomDelimiter />
        <Cycle />
        <HideControls />
        <CustomizedArrows />
        <HideDelimiters />
        <Progress />
        <Continuous />
        <Direction />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
