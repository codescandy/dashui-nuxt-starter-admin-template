<script setup>
import { Type } from "./__code";
</script>

<template>
  <div id="type">
    <GlobalsIntro title="Type">
      The <code>type</code> property is used to define the type of skeleton loader. Types can be
      combined to create more complex skeletons. For example, the <code>card</code> type is a
      combination of the <code>image</code> and <code>heading</code> types.
    </GlobalsIntro>
    <GlobalsCodePre :code="Type">
      <v-row>
        <v-col cols="12" md="6">
          <v-skeleton-loader class="mx-auto border-1" max-width="300" type="card-avatar, actions" />
        </v-col>

        <v-col cols="12" md="6">
          <v-skeleton-loader class="mx-auto border-1" max-width="300" type="image, article" />
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
