<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Similar to the <code>v-window</code> component, <code>v-slide-group</code> lets items to take
      up as much space as needed, allowing the user to move horizontally through the provided
      information.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
          <v-btn class="ma-2" rounded :color="isSelected ? 'primary' : undefined" @click="toggle">
            Options {{ n }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </GlobalsCodePre>
  </div>
</template>
