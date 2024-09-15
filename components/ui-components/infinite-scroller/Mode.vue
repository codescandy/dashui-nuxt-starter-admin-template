<script setup>
import { Mode } from "./__code";

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1));

    done("ok");
  }, 1000);
};
</script>

<template>
  <div id="mode">
    <GlobalsIntro title="Mode">
      The default behaviour of the component is to try to load more content automatically when the
      scrollbar gets close to the end. However a manual mode is also supported, where the user needs
      to do some interaction to load the content. By default this a button, but it can be customized
      with a slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Mode">
      <v-infinite-scroll height="300" mode="manual" @load="load">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['px-2', index % 2 === 0 ? 'bg-background' : '']">
            Item number {{ item }}
          </div>
        </template>
      </v-infinite-scroll>
    </GlobalsCodePre>
  </div>
</template>
