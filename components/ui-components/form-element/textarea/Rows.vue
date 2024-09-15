<script setup>
import { Rows } from "./__code";
</script>

<template>
  <div id="rows">
    <GlobalsIntro title="Rows">
      The <code>rows</code> prop allows you to define how many rows the textarea has, when combined
      with the <code>row-height</code> prop you can further customize your rows by defining their
      height.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Rows">
      <global-textarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
      <global-textarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
      <global-textarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
      <global-textarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </GlobalsCodePre>
  </div>
</template>
