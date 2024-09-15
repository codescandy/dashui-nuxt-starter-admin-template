<script setup>
import { Transition } from "./__code";
import hover4 from "/images/components/hover/4.png";
</script>

<template>
  <div id="transition">
    <GlobalsIntro title="Transition">
      Create highly customized components that respond to user interaction.
    </GlobalsIntro>
    <GlobalsCodePre :code="Transition">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" max-width="600" v-bind="props">
          <v-img :aspect-ratio="16 / 9" cover :src="hover4">
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h2"
                style="height: 100%"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">For the perfect meal</div>

            <h3 class="text-h4 text-primary mb-2">QW cooking utensils</h3>

            <div class="font-weight-light text-h6 mb-2">
              Our Vintage kitchen utensils delight any chef.<br />
              Made of bamboo by hand
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </GlobalsCodePre>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
