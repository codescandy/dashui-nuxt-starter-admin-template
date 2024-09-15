<script setup>
import Basic from "@/components/ui-components/bottom-navigation/Basic.vue";
import Color from "@/components/ui-components/bottom-navigation/Color.vue";
import Grow from "@/components/ui-components/bottom-navigation/Grow.vue";
import Horizontal from "@/components/ui-components/bottom-navigation/Horizontal.vue";
import Shift from "@/components/ui-components/bottom-navigation/Shift.vue";
import Toggel from "@/components/ui-components/bottom-navigation/Toggel.vue";

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
    name: "Grow",
    to: "grow",
  },
  {
    name: "Horizontal",
    to: "horizontal",
  },
  {
    name: "Shift",
    to: "shift",
  },
  {
    name: "Toggel",
    to: "toggel",
  },
];

useSeoMeta({
  title: "Bottom navigation",
  ogTitle: "Bottom navigation",
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
            title="Bottom navigation"
            subtitle="The v-bottom-navigation component is an alternative to the sidebar. It is primarily used for mobile applications and comes in three variants, icons and text, and shift."
          />
        </div>
        <Basic />
        <Color />
        <Grow />
        <Horizontal />
        <Shift />
        <Toggel />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
