<script setup>
import { Reposition } from "./__code";
</script>

<template>
  <div id="reposition">
    <GlobalsIntro title="Reposition">
      <code>scroll-strategy="reposition"</code><br />
      When using the <code>connected</code> location strategy, this scroll strategy will reposition
      the overlay element to always respect the activator location.
    </GlobalsIntro>
    <GlobalsCodePre :code="Reposition">
      <v-btn>
        Reposition

        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
          <v-card class="pa-4"> Hello! </v-card>
        </v-overlay>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
