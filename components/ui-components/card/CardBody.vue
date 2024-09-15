<script setup>
import { CardBody } from "./__code";
</script>

<template>
  <div id="card-body">
    <GlobalsIntro title="Card Body">
      The building block of a card is the <code>text</code> prop. Use it whenever you need a padded
      section within a card.
    </GlobalsIntro>
    <GlobalsCodePre :code="CardBody">
      <v-card color="background" elevation="0" text="This is some text within a card body." />
    </GlobalsCodePre>
  </div>
</template>
