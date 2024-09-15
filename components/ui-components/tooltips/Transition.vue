<script setup>
import { Transition } from "./__code";
</script>
<template>
  <div id="transition">
    <GlobalsIntro title="Transition">
      Use <code>transition</code> prop to sets the component transition.
    </GlobalsIntro>
    <GlobalsCodePre :code="Transition">
      <!-- Scale transition -->
      <v-btn>
        scale transition
        <v-tooltip location="top" transition="scale-transition" activator="parent">
          <span>Scale Transition</span>
        </v-tooltip>
      </v-btn>

      <!-- Scroll x transition -->
      <v-btn>
        scroll X transition
        <v-tooltip location="top" activator="parent" transition="scroll-x-transition">
          <span>Scroll X Transition</span>
        </v-tooltip>
      </v-btn>

      <!-- Scroll y transition -->
      <v-btn>
        scroll y transition
        <v-tooltip location="top" activator="parent" transition="scroll-y-transition">
          <span>Scroll Y Transition</span>
        </v-tooltip>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
