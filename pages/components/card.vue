<script setup>
import Basic from "@/components/ui-components/card/Basic.vue";
import CardBody from "@/components/ui-components/card/CardBody.vue";
import Variant from "@/components/ui-components/card/Variant.vue";
import Color from "@/components/ui-components/card/Color.vue";
import Elevation from "@/components/ui-components/card/Elevation.vue";
import Hover from "@/components/ui-components/card/Hover.vue";
import Href from "@/components/ui-components/card/Href.vue";
import Link from "@/components/ui-components/card/Link.vue";
import Disabled from "@/components/ui-components/card/Disabled.vue";
import Image from "@/components/ui-components/card/Image.vue";
import Slots from "@/components/ui-components/card/Slots.vue";
import CardReveal from "@/components/ui-components/card/CardReveal.vue";
import ContentWraping from "@/components/ui-components/card/ContentWraping.vue";
import CustomActions from "@/components/ui-components/card/CustomActions.vue";
import Grids from "@/components/ui-components/card/Grids.vue";
import HorizontalCards from "@/components/ui-components/card/HorizontalCards.vue";
import MediaWithText from "@/components/ui-components/card/MediaWithText.vue";
import TwiterCard from "@/components/ui-components/card/TwiterCard.vue";
import WeatehrCard from "@/components/ui-components/card/WeatehrCard.vue";
import Loading from "@/components/ui-components/card/Loading.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Basic Example",
    to: "basic-example",
  },
  {
    name: "Card Body",
    to: "card-body",
  },
  {
    name: "Variant",
    to: "variant",
  },
  {
    name: "Color",
    to: "color",
  },
  {
    name: "Elevation",
    to: "elevation",
  },
  {
    name: "Hover",
    to: "hover",
  },
  {
    name: "Href",
    to: "href",
  },
  {
    name: "Link",
    to: "link",
  },
  {
    name: "Disabled",
    to: "disabled",
  },
  {
    name: "Image",
    to: "image",
  },
  {
    name: "Slots",
    to: "slots",
  },
  {
    name: "Card Reveal",
    to: "card-reveal",
  },
  {
    name: "Content wraping",
    to: "content-wraping",
  },
  {
    name: "Custom actions",
    to: "custom-actions",
  },
  {
    name: "Grids",
    to: "grids",
  },
  {
    name: "Horizontal cards",
    to: "horizontal-cards",
  },
  {
    name: "Media with text",
    to: "media-with-text",
  },
  {
    name: "Twiter card",
    to: "twiter-card",
  },
  {
    name: "Weather card",
    to: "weather-card",
  },
  {
    name: "Loading",
    to: "loading",
  },
];

useSeoMeta({
  title: "Card",
  ogTitle: "Card",
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
            title="Card"
            subtitle="DashUI cards provide a flexible and extensible content container with multiple variants and options."
          />
        </div>
        <Basic />
        <CardBody />
        <Variant />
        <Color />
        <Elevation />
        <Hover />
        <Href />
        <Link />
        <Disabled />
        <Image />
        <Slots />
        <CardReveal />
        <ContentWraping />
        <CustomActions />
        <Grids />
        <HorizontalCards />
        <MediaWithText />
        <TwiterCard />
        <WeatehrCard />
        <Loading />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
