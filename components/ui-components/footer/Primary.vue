<script setup>
import { Primary } from "./__code";

const icons = [
  "tabler-brand-facebook",
  "tabler-brand-twitter",
  "tabler-brand-linkedin",
  "tabler-brand-instagram",
];
</script>

<template>
  <div id="primary-footer">
    <GlobalsIntro title="Primary Footer">
      The <code>footer</code> component with <code>primary</code> background color and social media
      icons and button.
    </GlobalsIntro>
    <GlobalsCodePre :code="Primary">
      <v-footer class="text-center d-flex flex-column" color="primary">
        <div>
          <icon-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" size="large" />
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
          interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed
          massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi
          vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
          sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div>{{ new Date().getFullYear() }} — <strong>Dash UI</strong></div>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
