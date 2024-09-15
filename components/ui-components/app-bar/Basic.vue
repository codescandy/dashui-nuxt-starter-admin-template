<script setup>
import { Basic } from "./__code";
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-app-bar</code>component is used for application-wide actions and information.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-layout>
        <v-main>
          <v-app-bar elevation="10">
            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Default</v-app-bar-title>

            <template #append>
              <icon-btn>
                <v-icon icon="tabler-heart" size="24" />
              </icon-btn>
              <icon-btn>
                <v-icon icon="tabler-search" size="24" />
              </icon-btn>
              <icon-btn>
                <v-icon icon="tabler-dots-vertical" size="24" />
              </icon-btn>
            </template>
          </v-app-bar>
        </v-main>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
