<script setup>
import { Variant } from "./__code";
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      The <code>variant</code> prop gives you easy access to several different card styles.
      Available variants are: <code>elevated</code>(default), <code>flat</code>, <code>tonal</code>,
      <code>outlined</code>, <code>text</code>, and <code>plain</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Variant">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card
            title="Elevated"
            subtitle="App Name"
            text="Greyhound divisely hello coldly fonwderfully"
          >
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            title="Tonal"
            variant="tonal"
            subtitle="App Name"
            text="Greyhound divisely hello coldly fonwderfully"
          >
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            title="Outlined"
            variant="outlined"
            subtitle="App Name"
            text="Greyhound divisely hello coldly fonwderfully"
          >
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
