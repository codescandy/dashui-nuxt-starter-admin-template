<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      The <code>density</code> prop decreases the height of the <code>v-app-bar</code> based upon 1
      of 4 levels of density. <code>default</code>, <code>prominent</code>,
      <code>comfortable</code> and <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <!-- default -->
      <v-layout>
        <v-main>
          <v-app-bar color="primary">
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

      <!-- prominent -->
      <v-layout>
        <v-main>
          <v-app-bar color="secondary" density="prominent">
            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Prominent</v-app-bar-title>

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

      <!-- comfortable -->
      <v-layout>
        <v-main>
          <v-app-bar color="error" density="comfortable">
            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Comfortable</v-app-bar-title>

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

      <!-- compact -->
      <v-layout>
        <v-main>
          <v-app-bar color="warning" density="compact">
            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Compact</v-app-bar-title>

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
