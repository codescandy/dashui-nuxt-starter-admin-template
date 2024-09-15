<script setup>
import { NoResize } from "./__code";
const value = ref(
  "Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie."
);
</script>

<template>
  <div id="no-resize">
    <GlobalsIntro title="No resize">
      <code>v-textarea</code>'s have the option to remain the same size regardless of their
      content's size, using the <code>no-resize</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="NoResize">
      <global-textarea
        v-model="value"
        label="Text"
        no-resize
        rows="2"
        placeholder="Placeholder Text"
      />
    </GlobalsCodePre>
  </div>
</template>
