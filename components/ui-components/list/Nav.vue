<script setup>
import { Nav } from "./__code";

const items = [
  {
    title: "My Files",
    value: 1,
    prependIcon: "tabler-folder",
  },
  {
    title: "Shared with me",
    value: 2,
    prependIcon: "tabler-users",
  },
  {
    title: "Starred",
    value: 3,
    prependIcon: "tabler-star",
  },
  {
    title: "Recent",
    value: 4,
    prependIcon: "tabler-history",
  },
  {
    title: "Offline",
    value: 5,
    prependIcon: "tabler-circle-check",
  },
  {
    title: "Uploads",
    value: 6,
    prependIcon: "tabler-upload",
  },
  {
    title: "Backups",
    value: 7,
    prependIcon: "tabler-cloud-upload",
  },
];
</script>
<template>
  <div id="nav">
    <GlobalsIntro title="Nav">
      Lists can receive an alternative <code>nav</code> styling that reduces the width
      <code>v-list-item</code> takes up as well as adding a border radius.
    </GlobalsIntro>
    <GlobalsCodePre :code="Nav" background>
      <v-card class="mx-auto" max-width="374">
        <v-list nav :lines="false">
          <v-list-item v-for="item in items" :key="item.value" :value="item.value">
            <template #prepend>
              <v-icon :icon="item.prependIcon" />
            </template>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
