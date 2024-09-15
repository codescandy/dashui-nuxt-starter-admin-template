<script setup>
import { LabelSlot } from "./__code";

const radios = ref("DuckDuckGo");
</script>

<template>
  <div id="label-slot">
    <GlobalsIntro title="Label slot">
      Radio Group labels can be defined in <code>label</code> slot - that will allow to use HTML
      content.
    </GlobalsIntro>
    <GlobalsCodePre :code="LabelSlot">
      <v-radio-group v-model="radios">
        <template #label>
          <div>Your favorite <strong>search engine</strong></div>
        </template>

        <v-radio value="Google">
          <template #label>
            <div>Of course it's <span class="text-success"> Google </span></div>
          </template>
        </v-radio>

        <v-radio value="DuckDuckGo">
          <template #label>
            <div>Definitely <span class="text-primary"> DuckDuckGo </span></div>
          </template>
        </v-radio>
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
