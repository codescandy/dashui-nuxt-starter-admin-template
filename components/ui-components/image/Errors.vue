<script setup>
import { Errors } from "./__code";
</script>

<template>
  <div id="error">
    <GlobalsIntro title="Error">
      <code>v-img</code> has an <code>error</code> slot that can be used to display alternative
      content if an error occurs while loading your source image. A common use for this slot is to
      load a fallback image if your original image is not available.
    </GlobalsIntro>
    <GlobalsCodePre :code="Errors">
      <v-img class="mx-auto" height="300" max-width="500" src="https://bad.src/not/valid">
        <template v-slot:error>
          <v-img
            class="mx-auto"
            height="300"
            max-width="500"
            src="https://picsum.photos/500/300?image=232"
          ></v-img>
        </template>
      </v-img>
    </GlobalsCodePre>
  </div>
</template>
