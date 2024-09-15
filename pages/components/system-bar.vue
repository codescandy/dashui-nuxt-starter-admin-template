<script setup>
import Default from "@/components/ui-components/system-bar/Default.vue";
import Color from "@/components/ui-components/system-bar/Color.vue";
import Window from "@/components/ui-components/system-bar/Window.vue";

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
    name: "Color",
    to: "color",
  },
  {
    name: "Window",
    to: "window",
  },
];

useSeoMeta({
  title: "System bar",
  ogTitle: "System bar",
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
            title="System bar"
            subtitle="The v-system-bar component can be used for displaying statuses to the user. It looks like the Android system bar and can contain icons, spacers, and some text."
          />
        </div>
        <Default />
        <Color />
        <Window />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
