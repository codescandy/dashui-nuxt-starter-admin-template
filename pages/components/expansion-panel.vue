<script setup>
import Basic from "@/components/ui-components/expansion-panel/Basic.vue";
import Accordion from "@/components/ui-components/expansion-panel/Accordion.vue";
import Inset from "@/components/ui-components/expansion-panel/Inset.vue";
import Popout from "@/components/ui-components/expansion-panel/Popout.vue";
import CustomIcon from "@/components/ui-components/expansion-panel/CustomIcon.vue";
import Model from "@/components/ui-components/expansion-panel/Model.vue";
import WithBorder from "@/components/ui-components/expansion-panel/WithBorder.vue";

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
    name: "Accordion",
    to: "accordion",
  },
  {
    name: "Inset",
    to: "inset",
  },
  {
    name: "Popout",
    to: "popout",
  },
  {
    name: "Custom Icon",
    to: "custom-icon",
  },
  {
    name: "Model",
    to: "model",
  },
  {
    name: "With Border",
    to: "with-border",
  },
];

useSeoMeta({
  title: "Expansion Panel",
  ogTitle: "Expansion Panel",
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
            title="Expansion Panel"
            subtitle="The v-expansion-panel component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the multiple property, the expansion-panel can remain open until explicitly closed."
          />
        </div>
        <Basic />
        <Accordion />
        <Inset />
        <Popout />
        <CustomIcon />
        <Model />
        <WithBorder />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
