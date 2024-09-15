<script setup>
import Basic from "@/components/ui-components/menus/Basic.vue";
import CustomTransitions from "@/components/ui-components/menus/CustomTransitions.vue";
import Location from "@/components/ui-components/menus/Location.vue";
import OpenOnHover from "@/components/ui-components/menus/OpenOnHover.vue";
import Popover from "@/components/ui-components/menus/Popover.vue";
import ActivatorAndTooltip from "@/components/ui-components/menus/ActivatorAndTooltip.vue";

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
    name: "Custom transitions",
    to: "custom-transitions",
  },
  {
    name: "Location",
    to: "location",
  },
  {
    name: "Open on hover",
    to: "open-on-hover",
  },
  {
    name: "Popover",
    to: "popover",
  },
  {
    name: "Activator and tooltip",
    to: "activator-and-tooltip",
  },
];

useSeoMeta({
  title: "Menus",
  ogTitle: "Menus",
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
            title="Menus"
            subtitle="The v-menu component shows a menu at the position of the element used to activate it."
          />
        </div>
        <Basic />
        <CustomTransitions />
        <Location />
        <OpenOnHover />
        <Popover />
        <ActivatorAndTooltip />
      </v-col>
      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
