<script setup>
import Basic from "@/components/ui-components/hover/Basic.vue";
import Disabled from "@/components/ui-components/hover/Disabled.vue";
import Delay from "@/components/ui-components/hover/Delay.vue";
import List from "@/components/ui-components/hover/List.vue";
import TransitionHover from "@/components/ui-components/hover/Transition.vue";

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
    name: "Disabled",
    to: "disabled",
  },
  {
    name: "Open and close delay",
    to: "open-and-close-delay",
  },
  {
    name: "Hover list",
    to: "hover-list",
  },
  {
    name: "Transition",
    to: "transition",
  },
];

useSeoMeta({
  title: "Hover",
  ogTitle: "Hover",
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
            title="Hover"
            subtitle="The v-hover component provides a simple interface for handling hover states for any component."
          />
        </div>
        <Basic />
        <Disabled />
        <Delay />
        <List />
        <TransitionHover />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
