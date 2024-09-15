<script setup>
import { Empty } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    done("empty");
  }, 1000);
};
</script>

<template>
  <div id="empty">
    <GlobalsIntro title="Empty">
      You can customize the empty message with the <code>empty</code> slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Empty">
      <v-infinite-scroll height="400" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
        <template v-slot:empty>
          <v-alert type="info">No more items!</v-alert>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
