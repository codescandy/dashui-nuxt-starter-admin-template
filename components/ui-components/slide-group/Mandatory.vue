<script setup>
import { Mandatory } from "./__code";

const model = ref(null);
</script>

<template>
  <div id="mandatory">
    <GlobalsIntro title="Mandatory">
      The <code>mandatory</code> prop will make the slide group require at least 1 item must be
      selected.
    </GlobalsIntro>
    <GlobalsCodePre :code="Mandatory">
      <v-slide-group v-model="model" selected-class="bg-primary" mandatory show-arrows>
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
    </GlobalsCodePre>
  </div>
</template>
