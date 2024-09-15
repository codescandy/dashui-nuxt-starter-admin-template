<script setup>
import Color from "@/components/ui-components/progress-linear/Color.vue";
import Buffering from "@/components/ui-components/progress-linear/Buffering.vue";
import Indeterminate from "@/components/ui-components/progress-linear/Indeterminate.vue";
import Reversed from "@/components/ui-components/progress-linear/Reversed.vue";
import Rounded from "@/components/ui-components/progress-linear/Rounded.vue";
import Slots from "@/components/ui-components/progress-linear/Slots.vue";
import Striped from "@/components/ui-components/progress-linear/Striped.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Buffering",
    to: "buffering",
  },
  {
    name: "Indeterminate",
    to: "indeterminate",
  },
  {
    name: "Reversed",
    to: "reversed",
  },
  {
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Slots",
    to: "slots",
  },
  {
    name: "Striped",
    to: "striped",
  },
];

useSeoMeta({
  title: "Progress linear",
  ogTitle: "Progress linear",
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
            title="Progress linear"
            subtitle="The v-progress-linear component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress (including separate buffer values)."
          />
        </div>
        <Color />
        <Buffering />
        <Indeterminate />
        <Reversed />
        <Rounded />
        <Slots />
        <Striped />
      </v-col>
      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
