<script setup>
import { Cover } from "./__code";
import image1 from "/images/components/image/1.jpg";
</script>

<template>
  <div id="cover">
    <GlobalsIntro title="Cover">
      If the provided aspect ratio doesn’t match that of the actual image, the default behavior is
      to fill as much space as possible without cropping. To fill the entire available space use the
      <code>cover</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Cover">
      <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
        <div class="ma-4">
          <div class="text-subtitle-2">Default</div>
          <v-img class="bg-white" width="300" :aspect-ratio="1" :src="image1"></v-img>
        </div>

        <div class="ma-4">
          <div class="text-subtitle-2">Cover</div>
          <v-img class="bg-white" width="300" :aspect-ratio="1" :src="image1" cover></v-img>
        </div>
      </div>
    </GlobalsCodePre>
  </div>
</template>
