<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Whereas a bottom navigation component is for buttons and specific application level actions, a
      bottom sheet is meant to contain anything.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-bottom-sheet>
        <template #activator="{ props }">
          <v-btn v-bind="props" text="Show bottom sheet"></v-btn>
        </template>

        <v-card
          title="Bottom Sheet"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
        />
      </v-bottom-sheet>
    </GlobalsCodePre>
  </div>
</template>
