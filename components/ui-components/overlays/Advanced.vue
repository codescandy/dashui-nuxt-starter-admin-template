<script setup>
import { Advanced } from "./__code";
import avatar1 from "/images/components/overlays/1.jpg";
</script>

<template>
  <div id="advanced">
    <GlobalsIntro title="Advanced">
      Using the <code>v-hover</code>, we are able to add a nice scrim over the information card with
      additional actions the user can take.
    </GlobalsIntro>
    <GlobalsCodePre :code="Advanced">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" max-width="344" v-bind="props">
          <v-img :src="avatar1" />

          <v-card-text>
            <h2 class="text-h5 font-weight-bold text-primary">Magento Forests</h2>
            Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </v-card-text>

          <v-card-title>
            <v-rating :model-value="4" dense hover class="me-2"></v-rating>
            <span class="text-primary text-subtitle-2">64 Reviews</span>
          </v-card-title>

          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#036358"
            class="align-center justify-center"
          >
            <v-btn variant="flat">See more info</v-btn>
          </v-overlay>
        </v-card>
      </v-hover>
    </GlobalsCodePre>
  </div>
</template>
