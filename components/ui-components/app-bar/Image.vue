<script setup>
import { Image } from "./__code";
</script>

<template>
  <div id="image">
    <GlobalsIntro title="Image">
      <code>v-app-bar</code> can contain background images. You can set source via the
      <code>image</code> prop. If you need to customize the <code>v-img </code> properties, the
      app-bar provides you with an image slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Image">
      <v-layout>
        <v-main>
          <v-app-bar color="primary" image="https://picsum.photos/1920/1080?random">
            <template #image>
              <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
            </template>

            <template #prepend>
              <icon-btn class="ml-2">
                <v-icon icon="tabler-menu-2" size="24" />
              </icon-btn>
            </template>

            <v-app-bar-title>Background Image</v-app-bar-title>

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
