<script setup>
import Colors from "@/components/ui-components/buttons/Colors.vue";
import Outlined from "@/components/ui-components/buttons/Outlined.vue";
import Elevated from "@/components/ui-components/buttons/Elevated.vue";
import Rounded from "@/components/ui-components/buttons/Rounded.vue";
import Text from "@/components/ui-components/buttons/Text.vue";
import Plain from "@/components/ui-components/buttons/Plain.vue";
import Tonal from "@/components/ui-components/buttons/Tonal.vue";
import Icon from "@/components/ui-components/buttons/Icon.vue";
import IconOnly from "@/components/ui-components/buttons/IconOnly.vue";
import Size from "@/components/ui-components/buttons/Size.vue";
import Block from "@/components/ui-components/buttons/Block.vue";
import Loader from "@/components/ui-components/buttons/Loader.vue";
import Router from "@/components/ui-components/buttons/Router.vue";
import Link from "@/components/ui-components/buttons/Link.vue";
import ToggleButton from "@/components/ui-components/buttons/ToggleButton.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Colors",
    to: "colors",
  },
  {
    name: "Outlined",
    to: "outlined",
  },
  {
    name: "Elevated",
    to: "elevated",
  },
  {
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Text",
    to: "text",
  },
  {
    name: "Plain",
    to: "plain",
  },
  {
    name: "Tonal",
    to: "tonal",
  },
  {
    name: "Icon",
    to: "icon",
  },
  {
    name: "Icon Only",
    to: "icon-only",
  },

  {
    name: "Size",
    to: "button-size",
  },
  {
    name: "Button Block",
    to: "button-block",
  },
  {
    name: "Loaders",
    to: "loaders",
  },
  {
    name: "Router",
    to: "router",
  },
  {
    name: "Link",
    to: "link",
  },
  {
    name: "Toggle",
    to: "toggle",
  },
];

useSeoMeta({
  title: "Buttons",
  ogTitle: "Buttons",
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
            title="Buttons"
            subtitle="The v-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color."
          />
        </div>
        <Colors />
        <Outlined />
        <Elevated />
        <Rounded />
        <Text />
        <Plain />
        <Tonal />
        <Icon />
        <IconOnly />
        <Size />
        <Block />
        <Loader />
        <Router />
        <Link />
        <ToggleButton />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
