<script setup>
import { CustomActions } from "./__code";
import card3 from "/images/components/card/3.jpg";

const show = ref(false);
</script>

<template>
  <div id="custom-actions">
    <GlobalsIntro title="Custom actions">
      With a simple conditional, you can easily add supplementary text that is hidden until opened.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomActions">
      <v-card color="background" class="mx-auto" max-width="344">
        <v-img :src="card3" height="200px" cover />

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'tabler-chevron-up' : 'tabler-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You
              won't have time for sleeping, soldier, not with all the bed making you'll be doing.
              Then we'll go with that data file! Hey, you add a one and two zeros to that or we
              walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
