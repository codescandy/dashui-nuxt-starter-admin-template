<script setup>
import { Toggel } from "./__code";

const active = ref(true);
</script>
<template>
  <div id="toggel">
    <GlobalsIntro title="Toggel">
      Since <code>v-bottom-navigation</code> supports v-model, use the <code>active</code> prop to
      control the display state.
    </GlobalsIntro>
    <GlobalsCodePre :code="Toggel">
      <div class="mb-3 d-flex aligin-center justify-center">
        <v-btn @click="active = !active"> Toggle Navigation </v-btn>
      </div>

      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation :active="active">
          <v-btn value="recent">
            <v-icon>tabler-history</v-icon>

            <span>Recent</span>
          </v-btn>

          <v-btn value="favorites">
            <v-icon>tabler-heart</v-icon>

            <span>Favorites</span>
          </v-btn>

          <v-btn value="nearby">
            <v-icon>tabler-map-pin</v-icon>

            <span>Nearby</span>
          </v-btn>
        </v-bottom-navigation>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
