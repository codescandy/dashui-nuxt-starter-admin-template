<script setup>
import Color from "@/components/ui-components/chips/Color.vue";
import Elevated from "@/components/ui-components/chips/Elevated.vue";
import Outlined from "@/components/ui-components/chips/Outlined.vue";
import Label from "@/components/ui-components/chips/Label.vue";
import Closable from "@/components/ui-components/chips/Closable.vue";
import Icon from "@/components/ui-components/chips/Icon.vue";
import Avatar from "@/components/ui-components/chips/Avatar.vue";
import Size from "@/components/ui-components/chips/Size.vue";
import Selects from "@/components/ui-components/chips/Selects.vue";
import Expandable from "@/components/ui-components/chips/Expandable.vue";

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
    name: "Elevated",
    to: "elevated",
  },
  {
    name: "Outlined",
    to: "outlined",
  },
  {
    name: "Label",
    to: "label",
  },
  {
    name: "Closable",
    to: "closable",
  },
  {
    name: "With Icon",
    to: "with-icon",
  },
  {
    name: "With Avatar",
    to: "with-avatar",
  },
  {
    name: "Sizes",
    to: "size",
  },
  {
    name: "In Selects",
    to: "in-selects",
  },
  {
    name: "Expandable",
    to: "expandable",
  },
];

useSeoMeta({
  title: "Chips",
  ogTitle: "Chips",
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
            title="Chips"
            subtitle="The v-chip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the v-chip-group for advanced selection options."
          />
        </div>
        <Color />
        <Elevated />
        <Outlined />
        <Label />
        <Closable />
        <Icon />
        <Avatar />
        <Size />
        <Selects />
        <Expandable />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
