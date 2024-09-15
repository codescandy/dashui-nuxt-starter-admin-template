<script setup>
import { BothSide } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="both-side">
    <GlobalsIntro>
      When using <code>both</code> sides for content, the scrollbar will start in the middle of the
      content.
    </GlobalsIntro>
    <GlobalsCodePre :code="BothSide">
      <v-infinite-scroll height="300" side="both" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
