<script setup>
import { Height } from "./__code";
import image1 from "/images/components/image/1.jpg";
</script>

<template>
  <div id="height">
    <GlobalsIntro title="Height">
      <code>v-img</code> will automatically grow to the size of its <code>src</code>, preserving the
      correct aspect ratio. You can limit this with the <code>height</code> and
      <code>max-height</code> props.
    </GlobalsIntro>
    <GlobalsCodePre :code="Height">
      <v-container class="fill-height" fluid style="min-height: 434px">
        <v-fade-transition mode="out-in">
          <v-row>
            <v-col cols="6">
              <v-card class="my-3">
                <v-img :src="image1" height="125" class="bg-background"></v-img>
                <v-card-title class="text-h6"> height </v-card-title>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="my-3">
                <v-img :src="image1" height="125" cover class="bg-background"></v-img>
                <v-card-title class="text-h6"> height with cover </v-card-title>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="my-3">
                <v-img :src="image1" max-height="125" class="bg-background"></v-img>
                <v-card-title class="text-h6"> max-height </v-card-title>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="my-3">
                <v-img :src="image1" max-height="125" cover class="bg-background"></v-img>
                <v-card-title class="text-h6"> max-height with cover </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>
    </GlobalsCodePre>
  </div>
</template>
