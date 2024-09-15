<script setup>
import Basic from "@/components/ui-components/overlays/Basic.vue";
import Close from "@/components/ui-components/overlays/Close.vue";
import Reposition from "@/components/ui-components/overlays/Reposition.vue";
import None from "@/components/ui-components/overlays/None.vue";
import Contained from "@/components/ui-components/overlays/Contained.vue";
import Advanced from "@/components/ui-components/overlays/Advanced.vue";
import Loader from "@/components/ui-components/overlays/Loader.vue";

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
    name: "Close",
    to: "close",
  },
  {
    name: "Reposition",
    to: "reposition",
  },
  {
    name: "None",
    to: "none",
  },
  {
    name: "Contained",
    to: "contained",
  },
  {
    name: "Advanced",
    to: "advanced",
  },
  {
    name: "Loader",
    to: "loader",
  },
];

useSeoMeta({
  title: "Overlays",
  ogTitle: "Overlays",
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
            title="Overlays"
            subtitle="v-overlay is the base for components that float over the rest of the page, such as v-menu and v-dialog. It can also be used on its own and comes with everything you need to create a custom popover component."
          />
        </div>
        <Basic />
        <Close />
        <Reposition />
        <None />
        <Contained />
        <Advanced />
        <Loader />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
