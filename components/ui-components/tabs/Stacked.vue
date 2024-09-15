<script setup>
import { Stacked } from "./__code";

const currentTab = ref("item-1");
const tabItemText =
  "Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";
</script>

<template>
  <div id="stacked">
    <GlobalsIntro title="Stacked">
      Using <code>stacked</code> prop you can have buttons that use both icons and text.
    </GlobalsIntro>
    <GlobalsCodePre :code="Stacked" background>
      <v-card>
        <v-tabs v-model="currentTab" grow stacked>
          <v-tab>
            <v-icon icon="tabler-phone" class="mb-2" />
            <span>Recent</span>
          </v-tab>

          <v-tab>
            <v-icon icon="tabler-heart" class="mb-2" />
            <span>Favorites</span>
          </v-tab>

          <v-tab>
            <v-icon icon="tabler-user" class="mb-2" />
            <span>Nearby</span>
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in 3" :key="item" :value="`item-${item}`">
              {{ tabItemText }}
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
