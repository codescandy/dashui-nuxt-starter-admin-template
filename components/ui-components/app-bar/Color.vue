<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use <code>color</code> prop to create various background <code>v-app-bar</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-layout>
        <v-main>
          <v-app-bar color="primary">
            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Primary</v-app-bar-title>

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
