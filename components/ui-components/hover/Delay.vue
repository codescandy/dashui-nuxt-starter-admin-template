<script setup>
import { Delay } from "./__code";
</script>

<template>
  <div id="open-and-close-delay">
    <GlobalsIntro title="Open and close delay">
      Delay <code>v-hover</code> events by using <code>open-delay</code> and
      <code>close-delay</code> props in combination or separately.
    </GlobalsIntro>
    <GlobalsCodePre :code="Delay">
      <v-row>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              color="primary"
              variant="tonal"
              v-bind="props"
            >
              <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                Open Delay (Mouse enter)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }" close-delay="200">
            <v-card
              :elevation="isHovering ? 16 : 2"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="350"
              max-width="350"
              v-bind="props"
              color="primary"
              variant="tonal"
            >
              <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                Close Delay (Mouse leave)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
