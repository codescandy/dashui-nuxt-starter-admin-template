<script setup>
import { Side } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="side">
    <GlobalsIntro title="Side">
      By default the <code>v-infinite-scroll</code> component assumes that new content will be
      appearing at the end of existing content. But it also supports content being added to the
      start, and content appearing both at the start and the end.<br /><br />
      When using the <code>start</code> side for content, the scrolllbar will start at the bottom of
      the content.
    </GlobalsIntro>
    <GlobalsCodePre :code="Side">
      <v-infinite-scroll height="300" side="start" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
