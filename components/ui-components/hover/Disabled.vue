<script setup>
import { Disabled } from "./__code";
</script>

<template>
  <div id="disabled">
    <GlobalsIntro title="Disabled">
      The <code>disabled</code> prop disables the hover functionality.
    </GlobalsIntro>
    <GlobalsCodePre :code="Disabled">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <v-card
              :elevation="isHovering ? 12 : 2"
              class="mx-auto"
              height="350"
              max-width="350"
              v-bind="props"
              color="background"
            >
              <v-card-text class="my-4 text-center text-h6"> Hover over me! </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
