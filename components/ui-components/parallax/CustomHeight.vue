<script setup>
import { CustomHeight } from "./__code";
import parallax3 from "/images/components/parallax/3.jpg";
</script>

<template>
  <div id="custom-height">
    <GlobalsIntro title="Custom height">
      You can specify a custom height on a parallax. Keep in mind this can break the parallax if
      your image is not sized properly
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomHeight">
      <v-parallax :src="parallax3" height="300" />
    </GlobalsCodePre>
  </div>
</template>
