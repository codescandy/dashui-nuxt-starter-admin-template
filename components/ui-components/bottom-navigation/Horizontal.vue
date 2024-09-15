<script setup>
import { Horizontal } from "./__code";
</script>

<template>
  <div id="horizontal">
    <GlobalsIntro title="Horizontal">
      Adjust the style of buttons and icons by using the horizontal prop. This positions button text
      inline with the provided
      <code>v-icon</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Horizontal">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation horizontal color="error">
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
