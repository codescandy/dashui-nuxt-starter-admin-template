<script setup>
import Color from "@/components/ui-components/progress-circular/Color.vue";
import Indeterminate from "@/components/ui-components/progress-circular/Indeterminate.vue";
import Rotate from "@/components/ui-components/progress-circular/Rotate.vue";
import Size from "@/components/ui-components/progress-circular/Size.vue";

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
    name: "Indeterminate",
    to: "indeterminate",
  },
  {
    name: "Rotate",
    to: "rotate",
  },
  {
    name: "Size",
    to: "size",
  },
];

useSeoMeta({
  title: "Progress circular",
  ogTitle: "Progress circular",
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
            title="Progress circular"
            subtitle="The v-progress-circular component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading."
          />
        </div>
        <Color />
        <Indeterminate />
        <Rotate />
        <Size />
      </v-col>
      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
