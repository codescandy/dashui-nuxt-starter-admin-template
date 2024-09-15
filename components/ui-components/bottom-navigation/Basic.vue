<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      While <code>v-bottom navigation</code> is meant to be used with <code>vue-router</code>, you
      can also programmatically control the active state of the buttons by using the value property.
      A button is given a default value of its index with <code>v-bottom navigation</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation>
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
