<script setup>
import { VirtualizedInfiniteScroller } from "./__code";

const size = ref(300);
const virtualLength = ref(12);
const cards = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

const createRange = (length, start) => {
  return Array.from({ length }).map((_, i) => i + start);
};

const load = ({ side, done }) => {
  const halfVirtualLength = virtualLength.value / 2;
  if (side === "start") {
    const arr = createRange(halfVirtualLength, cards.value[0] - halfVirtualLength);
    cards.value = [...arr, ...cards.value.slice(0, halfVirtualLength)];
  } else {
    const arr = createRange(halfVirtualLength, cards.value.at(-1) + 1);
    cards.value = [...cards.value.slice(halfVirtualLength), ...arr];
  }

  done("ok");
};
</script>

<template>
  <div id="virtualized-infinite-scroller">
    <GlobalsIntro title="Virtualized infinite scroller">
      If the items in your infinite list are of a uniform size, you can quite easily virtualize the
      list to only render a small amount of items regardless of how far you scroll in either
      direction.
    </GlobalsIntro>
    <GlobalsCodePre :code="VirtualizedInfiniteScroller">
      <v-infinite-scroll ref="infinite" height="500" side="both" @load="load">
        <div>
          <template v-for="card in cards" :key="card">
            <v-sheet
              :color="card % 2 === 0 ? 'primary' : card % 4 === 0 ? 'secondary' : 'warning'"
              :height="size"
              class="d-flex align-center justify-center"
            >
              <div>{{ card }}</div>
            </v-sheet>
          </template>
        </div>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
