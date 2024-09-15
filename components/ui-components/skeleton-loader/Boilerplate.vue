<script setup>
import { Boilerplate } from "./__code";
</script>

<template>
  <div id="boilerplate">
    <GlobalsIntro title="Boilerplate">
      The <code>v-skeleton-loader</code> can be used as boilerplate designs when creating mockups.
      Mix and match various pre-defined options or create your own unique implementations. In this
      example, we use a custom <code>data</code> property to apply the same props to multiple
      <code>v-skeleton-loader</code>’s at once.
    </GlobalsIntro>
    <GlobalsCodePre :code="Boilerplate">
      <v-skeleton-loader
        boilerplate
        class="mx-auto"
        elevation="2"
        max-width="360"
        type="card-avatar, article, actions"
      />
    </GlobalsCodePre>
  </div>
</template>
