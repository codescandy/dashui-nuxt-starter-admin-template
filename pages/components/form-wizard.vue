<script setup>
import Basic from "@/components/ui-components/form-wizard/Basic.vue";
import Vertical from "@/components/ui-components/form-wizard/Vertical.vue";
import Icons from "@/components/ui-components/form-wizard/Icons.vue";

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
    name: "Vertical",
    to: "vertical",
  },
  {
    name: "Icons",
    to: "icons",
  },
];

useSeoMeta({
  title: "Form wizard",
  ogTitle: "Form wizard",
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
            title="Form Wizard"
            subtitle="The form-wizard component provides the baseline functionality for transitioning content from one pane to another. Other components such as v-tabs, v-carousel and v-stepper utilize this component at their core."
          />
        </div>
        <Basic />
        <Vertical />
        <Icons />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
