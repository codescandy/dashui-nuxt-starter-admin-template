<script setup>
import { ActiveClass } from "./__code";

const model = ref(null);
</script>

<template>
  <div id="active-class">
    <GlobalsIntro title="Active class">
      <code>active-class</code> prop allows you to pass a class to customize the active items.
    </GlobalsIntro>
    <GlobalsCodePre :code="ActiveClass">
      <v-slide-group v-model="model" selected-class="bg-success" show-arrows>
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
