<script setup>
import { Height, FlexHeight } from "./__code";

const items = Array.from({ length: 1000 }, (k, v) => v + 1);
</script>

<template>
  <div id="height">
    <!-- Height -->
    <div>
      <GlobalsIntro title="Height">
        The <code>v-virtual-scroll</code> component does not have any initial height set on
        itself.<br />
        The following code snippet uses the <code>height</code> prop.
      </GlobalsIntro>
      <GlobalsCodePre :code="Height">
        <v-virtual-scroll :height="200" :items="items">
          <template v-slot:default="{ item }"> Virtual Item {{ item }} </template>
        </v-virtual-scroll>
      </GlobalsCodePre>
    </div>
    <!-- Flex Height -->
    <div>
      <GlobalsIntro>
        Another way of making sure that the component has height is to place it inside an element
        with <code>display: flex</code>.
      </GlobalsIntro>
      <GlobalsCodePre :code="FlexHeight">
        <div style="display: flex; height: 200px">
          <v-virtual-scroll :items="items">
            <template v-slot:default="{ item }"> Virtual Item {{ item }} </template>
          </v-virtual-scroll>
        </div>
      </GlobalsCodePre>
    </div>
  </div>
</template>
