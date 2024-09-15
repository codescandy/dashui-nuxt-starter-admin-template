<script setup>
import { Content } from "./__code";
import parallax2 from "/images/components/parallax/2.jpg";
</script>

<template>
  <div id="content">
    <GlobalsIntro title="Content">
      You can also place any content inside of the parallax. This allows you to use the parallax as
      a hero image.
    </GlobalsIntro>
    <GlobalsCodePre :code="Content">
      <v-parallax :src="parallax2">
        <div class="d-flex flex-column fill-height justify-center align-center">
          <h1 class="text-h3 mb-4 text-white">App Name</h1>
          <h4 class="subheading text-white">Build your application today!</h4>
        </div>
      </v-parallax>
    </GlobalsCodePre>
  </div>
</template>
