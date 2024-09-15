<script setup>
import { Color } from "./__code";
const value = ref(0);
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      The <code>color</code> prop applies a color to the background of the bottom navigation. We
      recommend using the <code>light</code> and <code>dark</code> props to properly contrast text
      color.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation v-model="value" active color="primary">
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
