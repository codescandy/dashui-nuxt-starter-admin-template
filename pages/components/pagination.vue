<script setup>
import Basic from "@/components/ui-components/pagination/Basic.vue";
import Outline from "@/components/ui-components/pagination/Outline.vue";
import Circle from "@/components/ui-components/pagination/Circle.vue";
import OutlineCircle from "@/components/ui-components/pagination/OutlineCircle.vue";
import Disabled from "@/components/ui-components/pagination/Disabled.vue";
import Icons from "@/components/ui-components/pagination/Icons.vue";
import Length from "@/components/ui-components/pagination/Length.vue";
import TotalVisible from "@/components/ui-components/pagination/TotalVisible.vue";
import Color from "@/components/ui-components/pagination/Color.vue";
import Size from "@/components/ui-components/pagination/Size.vue";

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
    name: "Outline",
    to: "outline",
  },
  {
    name: "Circle",
    to: "circle",
  },
  {
    name: "Outline Circle",
    to: "outline-circle",
  },
  {
    name: "Disabled",
    to: "disabled",
  },
  {
    name: "Icons",
    to: "icons",
  },
  {
    name: "Length",
    to: "length",
  },
  {
    name: "Total visible",
    to: "total-visible",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Size",
    to: "size",
  },
];

useSeoMeta({
  title: "Pagination",
  ogTitle: "Pagination",
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
            title="Pagination"
            subtitle="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
          />
        </div>
        <Basic />
        <Outline />
        <Circle />
        <OutlineCircle />
        <Disabled />
        <Icons />
        <Length />
        <TotalVisible />
        <Color />
        <Size />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
