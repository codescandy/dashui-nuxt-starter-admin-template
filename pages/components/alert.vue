<script setup>
import Simple from "@/components/ui-components/alert/Simple.vue";
import Icons from "@/components/ui-components/alert/Icons.vue";
import Border from "@/components/ui-components/alert/Border.vue";
import ColoredBorder from "@/components/ui-components/alert/ColoredBorder.vue";
import Density from "@/components/ui-components/alert/Density.vue";
import Type from "@/components/ui-components/alert/Type.vue";
import Closable from "@/components/ui-components/alert/Closable.vue";
import ModelSupport from "@/components/ui-components/alert/ModelSupport.vue";
import Outlined from "@/components/ui-components/alert/Outlined.vue";
import Tonal from "@/components/ui-components/alert/Tonal.vue";
import Elevation from "@/components/ui-components/alert/Elevation.vue";
import Prominent from "@/components/ui-components/alert/Prominent.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Simple",
    to: "simple",
  },
  {
    name: "Icons",
    to: "icons",
  },
  {
    name: "Border",
    to: "border",
  },
  {
    name: "Colored Border",
    to: "colored-border",
  },
  {
    name: "Density",
    to: "density",
  },
  {
    name: "Type",
    to: "type",
  },
  {
    name: "Closable",
    to: "closable",
  },
  {
    name: "v-model support",
    to: "v-model-support",
  },
  {
    name: "Outlined",
    to: "outlined",
  },
  {
    name: "Tonal",
    to: "tonal",
  },
  {
    name: "Elevation",
    to: "elevation",
  },
  {
    name: "Prominent",
    to: "prominent",
  },
];

useSeoMeta({
  title: "Alert",
  ogTitle: "Alert",
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
            title="Alert"
            subtitle="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
          />
        </div>
        <Simple />
        <Icons />
        <Border />
        <ColoredBorder />
        <Density />
        <Type />
        <Closable />
        <ModelSupport />
        <Outlined />
        <Tonal />
        <Elevation />
        <Prominent />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
