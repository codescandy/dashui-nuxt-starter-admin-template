<script setup>
import { MediaWithText } from "./__code";
import card9 from "/images/components/card/9.jpg";
</script>

<template>
  <div id="media-with-text">
    <GlobalsIntro title="Media with text">
      Apply a specific background image to the Card.
    </GlobalsIntro>
    <GlobalsCodePre :code="MediaWithText">
      <v-card class="mx-auto" max-width="400" color="background">
        <v-img class="align-end text-white" height="200" :src="card9" cover>
          <v-card-title class="text-white">Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

        <v-card-text>
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" variant="flat"> Share </v-btn>
          <v-btn color="secondary"> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
