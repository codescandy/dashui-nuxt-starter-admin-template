<script setup>
import { Pagination } from "./__code";

const currentTab = ref("item-1");
const tabItemContent =
  "Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";
</script>

<template>
  <div id="pagination">
    <GlobalsIntro title="Pagination">
      If the tab items overflow their container, pagination controls will appear on desktop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Pagination" background>
      <v-card>
        <v-tabs v-model="currentTab">
          <v-tab v-for="i in 10" :key="i"> Item {{ i }} </v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in 10" :key="item" :value="`item-${item}`">
              {{ tabItemContent }}
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
