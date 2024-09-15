<script setup>
import { Close } from "./__code";
</script>

<template>
  <div id="close">
    <GlobalsIntro title="Close">
      <code>scroll-strategy="close"</code><br />
      Scrolling when the overlay is active will de-activate it.
    </GlobalsIntro>
    <GlobalsCodePre :code="Close">
      <v-btn>
        Close

        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
          <v-card class="pa-4"> Hello! </v-card>
        </v-overlay>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
