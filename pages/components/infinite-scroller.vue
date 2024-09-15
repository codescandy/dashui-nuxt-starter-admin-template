<script setup>
import Mode from "@/components/ui-components/infinite-scroller/Mode.vue";
import Direction from "@/components/ui-components/infinite-scroller/Direction.vue";
import Side from "@/components/ui-components/infinite-scroller/Side.vue";
import BothSide from "@/components/ui-components/infinite-scroller/BothSide.vue";
import Color from "@/components/ui-components/infinite-scroller/Color.vue";
import Loading from "@/components/ui-components/infinite-scroller/Loading.vue";
import LoadMore from "@/components/ui-components/infinite-scroller/LoadMore.vue";
import Empty from "@/components/ui-components/infinite-scroller/Empty.vue";
import Errors from "@/components/ui-components/infinite-scroller/Errors.vue";
import VirtualizedInfiniteScroller from "@/components/ui-components/infinite-scroller/VirtualizedInfiniteScroller.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Mode",
    to: "mode",
  },
  {
    name: "Direction",
    to: "direction",
  },
  {
    name: "Side",
    to: "side",
  },
  {
    name: "Both side",
    to: "both-side",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Loading",
    to: "loading",
  },
  {
    name: "Load more",
    to: "load-more",
  },
  {
    name: "Empty",
    to: "empty",
  },
  {
    name: "Error",
    to: "error",
  },
  {
    name: "Virtualized infinite scroller",
    to: "virtualized-infinite-scroller",
  },
];

useSeoMeta({
  title: "Infinite scrolle",
  ogTitle: "Infinite scrolle",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col lg="9" md="12">
        <!-- Intro -->
        <div id="intro">
          <GlobalsIntro
            page-intro
            title="Infinite scroller"
            subtitle="The v-infinite-scroll component displays a potentially infinite list, by loading more items of the list when scrolling. It supports either vertical or horizontal scrolling."
          />
        </div>

        <GlobalsIntro title="Guide">
          The <code>v-infinite-scroll</code> component is a container that allows you to react to a
          user reaching the end of content area. It is useful when you need to display an unknown
          but large number of items, and you don’t want to load them all at once.
        </GlobalsIntro>

        <GlobalsIntro title="Props">
          The <code>v-infinite-scroll</code> component has a number of props that can be used to
          customize its behaviour.
        </GlobalsIntro>

        <Mode />
        <Direction />
        <Side />
        <BothSide />
        <Color />
        <Loading />
        <LoadMore />
        <Empty />
        <Errors />

        <GlobalsIntro title="Examples">
          The following are a collection of examples that demonstrate more advanced and real world
          use of the <code>v-infinite-scroll</code> component.
        </GlobalsIntro>

        <VirtualizedInfiniteScroller />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
