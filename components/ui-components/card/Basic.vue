<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic-example">
    <GlobalsIntro title="Basic Example">
      Below is an example of a basic card with mixed content and variant option.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-card class="ma-2" color="primary" elevation="0" max-width="344">
            <v-card-item>
              <v-card-title class="text-white"> App Name </v-card-title>
              <v-card-subtitle class="text-white">
                Card with primary color - 0 elevation and outlined button.
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-white">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </v-card-text>
            <v-card-actions>
              <v-btn color="white" variant="outlined">Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="ma-2"
            loading
            elevation="5"
            max-width="344"
            title="App Name"
            subtitle="Card with 5 elevation, flat button and progress loader."
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          >
            <v-card-actions>
              <v-btn variant="flat">Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
