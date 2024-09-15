<script setup>
import { Grow } from "./__code";
const value = ref(0);
</script>
<template>
  <div id="grow">
    <GlobalsIntro title="Grow">
      Using the <code>grow</code> property forces v-btn components to fill all available space.
      Buttons have a maximum width of 168px.
    </GlobalsIntro>
    <GlobalsCodePre :code="Grow">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation v-model="value" grow color="primary">
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
