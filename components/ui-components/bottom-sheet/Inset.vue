<script setup>
import { Inset } from "./__code";
</script>

<template>
  <div id="inset">
    <GlobalsIntro title="Inset">
      With the <code>inset</code> prop, reduce the maximum width of the content area on desktop to
      70%. This can be further reduced manually using the <code>width</code>
      prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Inset">
      <v-bottom-sheet inset>
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
