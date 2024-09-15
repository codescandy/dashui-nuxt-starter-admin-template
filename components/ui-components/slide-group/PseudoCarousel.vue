<script setup>
import { PseudoCarousel } from "./__code";
const model = ref(null);
</script>

<template>
  <div id="pseudo-carousel">
    <GlobalsIntro title="Pseudo Carousel">
      Customize the slide group to creatively display information on sheets. Using the selection, we
      can display auxillary information easily for the user.
    </GlobalsIntro>
    <GlobalsCodePre :code="PseudoCarousel">
      <v-slide-group v-model="model" selected-class="bg-primary" show-arrows>
        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
          <v-card
            color="background"
            :class="['ma-2', selectedClass]"
            height="200"
            width="200"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" height="100">
          <div class="d-flex fill-height align-center justify-center">
            <h3 class="text-h5">Selected {{ model }}</h3>
          </div>
        </v-sheet>
      </v-expand-transition>
    </GlobalsCodePre>
  </div>
</template>
