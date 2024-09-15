<script setup>
import { LoadMore } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="load-more">
    <GlobalsIntro title="Load more">
      When using <code>manual</code> mode you can customize the action required to load more content
      with the <code>load-more</code> slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="LoadMore">
      <v-infinite-scroll height="400" @load="load" mode="manual">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
        <template v-slot:load-more="{ props }">
          <v-btn icon="tabler-refresh" variant="text" size="small" v-bind="props"></v-btn>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
