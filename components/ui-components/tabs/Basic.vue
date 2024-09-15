<script setup>
import { Basic } from "./__code";

const currentTab = ref("item-1");
const tabItemContent =
  "Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-tabs</code> component is used for hiding content behind a selectable item.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" background>
      <v-card>
        <v-tabs v-model="currentTab">
          <v-tab>Tab One</v-tab>
          <v-tab>Tab Two</v-tab>
          <v-tab>Tab Three</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in 3" :key="item" :value="`item-${item}`">
              {{ tabItemContent }}
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
