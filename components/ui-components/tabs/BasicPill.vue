<script setup>
import { BasicPill } from "./__code";

const currentTab = ref("window1");
const tabItemContent =
  "Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";
</script>

<template>
  <div id="basic-pill">
    <GlobalsIntro title="Basic Pill">
      Use our custom class <code>.v-tabs-pill</code> along with <code>v-tabs</code> component to
      style pill tabs.
    </GlobalsIntro>
    <GlobalsCodePre :code="BasicPill" background>
      <v-tabs v-model="currentTab" class="v-tabs-pill">
        <v-tab>Tab One</v-tab>
        <v-tab>Tab Two</v-tab>
        <v-tab>Tab Three</v-tab>
      </v-tabs>

      <v-card>
        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in 3" :key="`window${item}`">
              {{ tabItemContent }}
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
