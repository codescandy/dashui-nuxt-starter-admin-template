<script setup>
import Location from "@/components/ui-components/tooltips/Location.vue";
import Events from "@/components/ui-components/tooltips/Events.vue";
import DelayOnHover from "@/components/ui-components/tooltips/DelayOnHover.vue";
import VModelSupport from "@/components/ui-components/tooltips/VModelSupport.vue";
import TransitionTooltips from "@/components/ui-components/tooltips/Transition.vue";
import TooltipVariousElements from "@/components/ui-components/tooltips/TooltipVariousElements.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Location",
    to: "location",
  },
  {
    name: "Events",
    to: "events",
  },
  {
    name: "Delay On Hover",
    to: "delay-on-hover",
  },
  {
    name: "V-Model Support",
    to: "v-model-support",
  },
  {
    name: "Transition",
    to: "transition",
  },
  {
    name: "Tooltip on Various Elements",
    to: "tooltip-various-elements",
  },
];

useSeoMeta({
  title: "Tooltips",
  ogTitle: "Tooltips",
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
            title="Tooltips"
            subtitle="The v-tooltip component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a v-model. When activated, tooltips display a text label identifying an element, such as a description of its function."
          />
        </div>
        <Location />
        <Events />
        <DelayOnHover />
        <VModelSupport />
        <TransitionTooltips />
        <TooltipVariousElements />
      </v-col>
      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
