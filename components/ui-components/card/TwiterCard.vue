<script setup>
import { TwiterCard } from "./__code";
import avatar4 from "/images/avatar/avatar-4.jpg";
</script>

<template>
  <div id="twiter-card">
    <GlobalsIntro title="Twiter Card">
      The <code>v-card</code> component has multiple children components that help you build complex
      examples without having to worry about spacing. This example is comprised of the
      <code>v-card-title</code>, <code>v-card-text</code> and
      <code>v-card-actions</code> components.
    </GlobalsIntro>
    <GlobalsCodePre :code="TwiterCard">
      <v-card class="mx-auto" color="dark" theme="dark" max-width="400" title="Twitter">
        <template #prepend>
          <v-icon size="x-large" color="white" icon="tabler-brand-twitter" />
        </template>

        <v-card-text class="py-2">
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases
          are type invalid as well."
        </v-card-text>

        <v-card-actions>
          <v-list-item class="w-100">
            <template #prepend>
              <v-avatar color="grey-darken-3" :image="avatar4"></v-avatar>
            </template>

            <v-list-item-title>Jon Dey</v-list-item-title>

            <v-list-item-subtitle>Vue Developer</v-list-item-subtitle>

            <template #append>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="tabler-heart"></v-icon>
                <span class="subheading me-2">256</span>
                <span class="me-1">·</span>
                <v-icon class="me-1" icon="tabler-share"></v-icon>
                <span class="subheading">45</span>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
