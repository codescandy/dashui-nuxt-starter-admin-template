<script setup>
import Default from "@/components/ui-components/divider/Default.vue";
import Thickness from "@/components/ui-components/divider/Thickness.vue";
import Color from "@/components/ui-components/divider/Color.vue";
import Opacity from "@/components/ui-components/divider/Opacity.vue";
import Inset from "@/components/ui-components/divider/Inset.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Default",
    to: "default",
  },
  {
    name: "Thickness",
    to: "thickness",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Opacity",
    to: "opacity",
  },
  {
    name: "Inset",
    to: "inset",
  },
];

useSeoMeta({
  title: "Divider",
  ogTitle: "Divider",
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
            title="Divider"
            subtitle="The v-divider component is used to separate sections of lists or layouts."
          />
        </div>
        <Default />
        <Thickness />
        <Color />
        <Opacity />
        <Inset />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
