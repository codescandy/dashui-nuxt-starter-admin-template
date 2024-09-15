<script setup>
import Basic from "@/components/ui-components/bottom-sheet/Basic.vue";
import Model from "@/components/ui-components/bottom-sheet/Model.vue";
import Inset from "@/components/ui-components/bottom-sheet/Inset.vue";
import Example from "@/components/ui-components/bottom-sheet/Example.vue";

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
    name: "Model",
    to: "model",
  },
  {
    name: "Inset",
    to: "inset",
  },
  {
    name: "Example",
    to: "example",
  },
];

useSeoMeta({
  title: "Bottom sheet",
  ogTitle: "Bottom sheet",
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
            title="Bottom sheet"
            subtitle="The bottom sheet is a modified v-dialog that slides from the bottom of the screen, similar to a v-bottom-navigation."
          />
        </div>
        <Basic />
        <Model />
        <Inset />
        <Example />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
