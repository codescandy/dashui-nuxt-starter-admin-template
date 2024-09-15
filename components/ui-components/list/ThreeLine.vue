<script setup>
import { ThreeLine } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";

const items = [
  {
    type: "subheader",
    title: "Today",
  },
  {
    prependAvatar: avatar1,
    title: "Brunch this weekend?",
    subtitle:
      '<span class="text-primary">Ali Connors</span> &mdash; I be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: "divider",
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: "Summer BBQ",
    subtitle:
      '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I am out of town this weekend.',
  },
  {
    type: "divider",
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: "Oui oui",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: "divider",
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: "Birthday gift",
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
];
</script>
<template>
  <div id="three-line">
    <GlobalsIntro title="Three Line">
      For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This
      feature uses line-clamp and is not supported in all browsers.
    </GlobalsIntro>
    <GlobalsCodePre :code="ThreeLine" background>
      <v-card class="mx-auto" max-width="374">
        <v-list lines="three" :items="items" item-props>
          <template #subtitle="{ subtitle }">
            <div v-html="subtitle" />
          </template>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
