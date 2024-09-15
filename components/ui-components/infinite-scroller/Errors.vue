<script setup>
import { Errors } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    done("error");
  }, 2000);
};
</script>

<template>
  <div id="error">
    <GlobalsIntro title="Error">
      The <code>error</code> slot is shown if the status <code>'error'</code> is returned from the
      <code>done</code> callback.
    </GlobalsIntro>
    <GlobalsCodePre :code="Errors">
      <v-infinite-scroll height="400" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
        <template v-slot:error="{ props }">
          <v-alert type="error">
            <div class="d-flex justify-space-between align-center">
              Something went wrong...
              <v-btn color="white" variant="outlined" size="small" v-bind="props"> Retry </v-btn>
            </div>
          </v-alert>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
