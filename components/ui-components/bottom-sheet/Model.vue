<script setup>
import { Model } from "./__code";
const isVisible = ref(false);
</script>

<template>
  <div id="model">
    <GlobalsIntro title="Model">
      The <code>v-model</code> (or <code>model-value</code>) controls the visibility of the bottom
      sheet:
    </GlobalsIntro>
    <GlobalsCodePre :code="Model">
      <v-btn text="Show bottom sheet" @click="isVisible = !isVisible" />
      <v-bottom-sheet v-model="isVisible">
        <v-card
          title="Model Bottom Sheet"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
        />
      </v-bottom-sheet>
    </GlobalsCodePre>
  </div>
</template>
