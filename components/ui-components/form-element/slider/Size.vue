<script setup>
import { Size } from "./__code";
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      Use <code>thumb-size</code>, <code>tick-size</code>, and <code>track-size</code> prop to
      increase and decrease the size of thumb, tick and track.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Size">
      <v-slider :step="10" show-ticks :thumb-size="18" :tick-size="3" :track-size="2" />
    </GlobalsCodePre>
  </div>
</template>
