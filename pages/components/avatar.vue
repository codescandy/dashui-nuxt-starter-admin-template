<script setup>
import Color from "@/components/ui-components/avatar/Color.vue";
import Tonal from "@/components/ui-components/avatar/Tonal.vue";
import Size from "@/components/ui-components/avatar/Size.vue";
import Icon from "@/components/ui-components/avatar/Icon.vue";
import Roundend from "@/components/ui-components/avatar/Roundend.vue";
import Images from "@/components/ui-components/avatar/Images.vue";
import Group from "@/components/ui-components/avatar/Group.vue";

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
    name: "Tonal",
    to: "tonal",
  },
  {
    name: "Size",
    to: "size",
  },
  {
    name: "Icon",
    to: "icon",
  },
  {
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Images",
    to: "images",
  },
  {
    name: "Group",
    to: "group",
  },
];

useSeoMeta({
  title: "Avatar",
  ogTitle: "Avatar",
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
            title="Avatar"
            subtitle="The v-avatar component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. When rounded prop set to 0 will display an avatar without border radius."
          />
        </div>
        <Color />
        <Tonal />
        <Size />
        <Icon />
        <Roundend />
        <Images />
        <Group />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
