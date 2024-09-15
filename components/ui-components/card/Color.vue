<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Cards can be colored by using any of the builtin colors and contextual names using the
      <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="ma-2" color="primary">
            <v-card-item>
              <v-card-title class="text-white"> Primary </v-card-title>
              <v-card-subtitle class="text-white"> App Name </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-white">
              Greyhound divisely hello coldly fonwderfully
            </v-card-text>
            <v-card-actions>
              <v-btn color="white" variant="outlined">Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="ma-2" color="error" variant="tonal">
            <v-card-item>
              <v-card-title class="text-error"> Error </v-card-title>
              <v-card-subtitle class="text-error"> App Name </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-error">
              Greyhound divisely hello coldly fonwderfully
            </v-card-text>
            <v-card-actions>
              <v-btn color="error" variant="outlined">Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="ma-2" color="success" variant="outlined">
            <v-card-item>
              <v-card-title class="text-success"> Error </v-card-title>
              <v-card-subtitle class="text-success"> App Name </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-success">
              Greyhound divisely hello coldly fonwderfully
            </v-card-text>
            <v-card-actions>
              <v-btn color="success">Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
