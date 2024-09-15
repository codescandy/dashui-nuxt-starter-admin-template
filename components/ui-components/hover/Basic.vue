<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      <code>v-hover</code> is a renderless component that uses the default slot to provide scoped
      access to its internal model; as well as mouse event listeners to modify it. To explicitly
      control the internal state, use the <code>model-value</code> property.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            v-bind="props"
            :color="isHovering ? 'primary' : undefined"
            title="Hover over me"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
          />
        </template>
      </v-hover>
    </GlobalsCodePre>
  </div>
</template>
