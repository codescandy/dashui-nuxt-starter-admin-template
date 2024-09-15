<script setup>
import { TwoLinesAndSubheader } from "./__code";

const files = [
  {
    color: "blue",
    icon: "tabler-clipboard-text",
    subtitle: "Jan 20, 2014",
    title: "Vacation itinerary",
  },
  {
    color: "amber",
    icon: "tabler-device-mobile-rotated",
    subtitle: "Jan 10, 2014",
    title: "Kitchen remodel",
  },
];

const folders = [
  {
    subtitle: "Jan 9, 2014",
    title: "Photos",
  },
  {
    subtitle: "Jan 17, 2014",
    title: "Recipes",
  },
  {
    subtitle: "Jan 28, 2014",
    title: "Work",
  },
];
</script>
<template>
  <div id="two-lines-and-subheader">
    <GlobalsIntro title="Two lines and subheader">
      For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This
      feature uses line-clamp and is not supported in all browsers.
    </GlobalsIntro>
    <GlobalsCodePre :code="TwoLinesAndSubheader" background>
      <v-card class="mx-auto" max-width="374">
        <v-list lines="two">
          <v-list-subheader inset> Folders </v-list-subheader>

          <v-list-item
            v-for="folder in folders"
            :key="folder.title"
            :title="folder.title"
            :subtitle="folder.subtitle"
          >
            <template #prepend>
              <v-avatar color="secondary" variant="tonal">
                <v-icon :size="26" icon="tabler-folder" />
              </v-avatar>
            </template>

            <template #append>
              <v-btn variant="text" color="default" size="small" icon="tabler-info-circle" />
            </template>
          </v-list-item>

          <v-divider inset />

          <v-list-subheader inset> Files </v-list-subheader>

          <v-list-item
            v-for="file in files"
            :key="file.title"
            :title="file.title"
            :subtitle="file.subtitle"
          >
            <template #prepend>
              <v-avatar color="secondary" variant="tonal">
                <v-icon :size="26" :icon="file.icon" />
              </v-avatar>
            </template>

            <template #append>
              <v-btn variant="text" color="default" size="small" icon="tabler-info-circle" />
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
