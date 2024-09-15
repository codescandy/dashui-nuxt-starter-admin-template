<script setup>
import { Model } from "./__code";

const openedPanels = ref([]);
const items = ref(5);

const all = () => {
  // [...Array(5).keys()] => [0, 1, 2, 3, 4]
  openedPanels.value = [...Array(items.value).keys()];
};

const none = () => {
  openedPanels.value = [];
};
</script>
<template>
  <div id="model">
    <GlobalsIntro title="Model">
      Expansion panels can be controlled externally by modifying the <code>v-model</code>. If
      <code>multiple</code> prop is used then it is an array containing the indices of the open
      items.
    </GlobalsIntro>
    <GlobalsCodePre :code="Model" background>
      <div class="mb-4">
        <v-btn class="me-4" @click="all"> all </v-btn>
        <v-btn color="error" @click="none"> none </v-btn>

        <div class="mt-3"><span class="font-weight-bold">Selected: </span>{{ openedPanels }}</div>
      </div>

      <v-expansion-panels v-model="openedPanels" multiple>
        <v-expansion-panel v-for="item in items" :key="item">
          <v-expansion-panel-title> Header {{ item }} </v-expansion-panel-title>
          <v-expansion-panel-text>
            I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love
            bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie
            roll.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
