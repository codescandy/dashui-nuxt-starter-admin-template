<script setup>
import { ActivatorAndTooltip } from "./__code";

const items = [
  {
    title: "Option 1",
    value: "Option 1",
  },
  {
    title: "Option 2",
    value: "Option 2",
  },
  {
    title: "Option 3",
    value: "Option 3",
  },
];
</script>
<template>
  <div id="activator-and-tooltip">
    <GlobalsIntro title="Activator and tooltip">
      With the new <code>v-slot</code> syntax, nested activators such as those seen with a
      <code>v-menu</code>
      and <code>v-tooltip</code> attached to the same activator button, need a particular setup in
      order to function correctly
    </GlobalsIntro>
    <GlobalsCodePre :code="ActivatorAndTooltip">
      <v-menu location="top">
        <template #activator="{ props: menuProps }">
          <v-tooltip location="top">
            <template #activator="{ props: tooltipProps }">
              <v-btn v-bind="mergeProps(menuProps, tooltipProps)"> Dropdown w/ Tooltip </v-btn>
            </template>
            <span>I am a Tooltip</span>
          </v-tooltip>
        </template>

        <v-list :items="items" />
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
