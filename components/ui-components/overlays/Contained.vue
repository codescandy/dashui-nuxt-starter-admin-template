<script setup>
import { Contained } from "./__code";

const overlay = ref(false);
</script>

<template>
  <div id="contained">
    <GlobalsIntro title="Contained">
      A <code>contained</code> overlay is positioned absolutely and contained inside its parent
      element.
    </GlobalsIntro>
    <GlobalsCodePre :code="Contained">
      <v-row align="center" class="ma-4" justify="center">
        <v-card height="300" width="250" color="background">
          <v-row justify="center">
            <v-btn color="success" class="mt-12" @click="overlay = !overlay"> Show Overlay </v-btn>

            <v-overlay v-model="overlay" contained class="align-center justify-center">
              <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
            </v-overlay>
          </v-row>
        </v-card>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
