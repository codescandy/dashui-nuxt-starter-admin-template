<script setup>
import Basic from "@/components/ui-components/app-bar/Basic.vue";
import Color from "@/components/ui-components/app-bar/Color.vue";
import Density from "@/components/ui-components/app-bar/Density.vue";
import Image from "@/components/ui-components/app-bar/Image.vue";

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
    name: "Color",
    to: "color",
  },
  {
    name: "Density",
    to: "density",
  },
  {
    name: "Image",
    to: "image",
  },
];

useSeoMeta({
  title: "App bar",
  ogTitle: "App bar",
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
            title="App bar"
            subtitle="The v-app-bar component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation."
          />
        </div>
        <Basic />
        <Color />
        <Density />
        <Image />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
