<script setup>
import Style from "@/components/ui-components/badge/Style.vue";
import Color from "@/components/ui-components/badge/Color.vue";
import Position from "@/components/ui-components/badge/Position.vue";
import Icon from "@/components/ui-components/badge/Icon.vue";
import AvatarStatus from "@/components/ui-components/badge/AvatarStatus.vue";
import DynamicNotifications from "@/components/ui-components/badge/DynamicNotifications.vue";
import ShowOnHover from "@/components/ui-components/badge/ShowOnHover.vue";
import Tabs from "@/components/ui-components/badge/Tabs.vue";
import MaximumValue from "@/components/ui-components/badge/MaximumValue.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Style",
    to: "style",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Position",
    to: "position",
  },
  {
    name: "Icon",
    to: "icon",
  },
  {
    name: "Avatar Status",
    to: "avatar-status",
  },
  {
    name: "Dynamic notifications",
    to: "dynamic-notifications",
  },
  {
    name: "Show on hover",
    to: "show-on-hover",
  },
  {
    name: "Tabs",
    to: "tabs",
  },
  {
    name: "Maximum Value",
    to: "maximum-value",
  },
];

useSeoMeta({
  title: "Badge",
  ogTitle: "Badge",
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
            title="Badge"
            subtitle="Documentation and examples for badges, our small count and labeling component."
          />
        </div>
        <Style />
        <Color />
        <Position />
        <Icon />
        <AvatarStatus />
        <DynamicNotifications />
        <ShowOnHover />
        <Tabs />
        <MaximumValue />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
