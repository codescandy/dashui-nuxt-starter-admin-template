<script setup>
import { Color } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      The default load more button and loading spinner can be colored with the
      <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-infinite-scroll color="secondary" mode="manual" height="400" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
