<script setup>
import Basic from "@/components/ui-components/slide-group/Basic.vue";
import ActiveClass from "@/components/ui-components/slide-group/ActiveClass.vue";
import CenterActive from "@/components/ui-components/slide-group/CenterActive.vue";
import CustomIcons from "@/components/ui-components/slide-group/CustomIcons.vue";
import Mandatory from "@/components/ui-components/slide-group/Mandatory.vue";
import Multiple from "@/components/ui-components/slide-group/Multiple.vue";
import PseudoCarousel from "@/components/ui-components/slide-group/PseudoCarousel.vue";

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
    name: "Active class",
    to: "active-class",
  },
  {
    name: "Center active",
    to: "center-active",
  },
  {
    name: "Custom icons",
    to: "custom-icons",
  },
  {
    name: "Mandatory",
    to: "mandatory",
  },
  {
    name: "Multiple",
    to: "multiple",
  },
  {
    name: "Pseudo Carousel",
    to: "pseudo-carousel",
  },
];

useSeoMeta({
  title: "Slide group",
  ogTitle: "Slide group",
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
            title="Slide group"
            subtitle="The v-slide-group component is used to display pseudo paginated information. It uses v-item-group at its core and provides a baseline for components such as v-tabs and v-chip-group."
          />
        </div>
        <Basic />
        <ActiveClass />
        <CenterActive />
        <CustomIcons />
        <Mandatory />
        <Multiple />
        <PseudoCarousel />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
