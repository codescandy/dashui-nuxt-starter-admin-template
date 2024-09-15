<script setup>
import { Multiple } from "./__code";

const model = ref([]);
</script>

<template>
  <div id="multiple">
    <GlobalsIntro title="Multiple">
      You can select multiple items by setting the <code>multiple</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Multiple">
      <v-slide-group v-model="model" selected-class="bg-primary" multiple show-arrows>
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
