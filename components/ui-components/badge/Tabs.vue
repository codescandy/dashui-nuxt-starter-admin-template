<script setup>
import { Tabs } from "./__code";

const tabs = [
  {
    badge: "1",
    content: "Item One",
  },
  {
    badge: "2",
    content: "Item Two",
  },
  {
    badge: "3",
    content: "Item Three",
  },
];
</script>

<template>
  <div id="tabs">
    <GlobalsIntro title="Tabs">
      Badges help convey information to the user in a variety of ways.
    </GlobalsIntro>
    <GlobalsCodePre :code="Tabs" margin-l flex>
      <v-tabs grow>
        <v-tab v-for="tab in tabs" :key="tab.content" :value="tab.content">
          <v-badge :content="tab.badge" :offset-x="-18" :offset-y="6">
            {{ tab.content }}
          </v-badge>
        </v-tab>
      </v-tabs>
    </GlobalsCodePre>
  </div>
</template>
