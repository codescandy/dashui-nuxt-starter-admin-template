<script setup>
import { Image } from "./__code";
import card1 from "/images/components/card/1.jpg";
</script>

<template>
  <div id="image">
    <GlobalsIntro title="Image"> Apply a specific background image to the Card. </GlobalsIntro>
    <GlobalsCodePre :code="Image">
      <v-card
        class="mx-auto"
        max-width="200"
        height="200"
        :image="card1"
        title="Card Title"
        theme="dark"
      />
    </GlobalsCodePre>
  </div>
</template>
