<script setup>
import { Loading } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="loading">
    <GlobalsIntro title="Loading">
      You can customize the loading message with the <code>loading</code> slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loading">
      <v-infinite-scroll height="400" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
        <template v-slot:loading> This is taking a very long time... </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
