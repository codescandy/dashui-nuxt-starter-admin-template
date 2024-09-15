<script setup>
import Basic from "@/components/ui-components/data-table/Basic.vue";
import Dense from "@/components/ui-components/data-table/Dense.vue";
import CellSlot from "@/components/ui-components/data-table/CellSlot.vue";
import RowSelection from "@/components/ui-components/data-table/RowSelection.vue";
import FixedHeader from "@/components/ui-components/data-table/FixedHeader.vue";
import ExpandableRows from "@/components/ui-components/data-table/ExpandableRows.vue";
import GroupingRows from "@/components/ui-components/data-table/GroupingRows.vue";
import RowEditingViaDialog from "@/components/ui-components/data-table/RowEditingViaDialog.vue";
import ExternalPagination from "@/components/ui-components/data-table/ExternalPagination.vue";
import KitchenSink from "@/components/ui-components/data-table/KitchenSink.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Basic",
    to: "basic",
  },
  {
    name: "Dense",
    to: "dense",
  },
  {
    name: "Cell Slot",
    to: "cell-slot",
  },
  {
    name: "Row Selection",
    to: "row-selection",
  },
  {
    name: "Fixed Header",
    to: "fixed-header",
  },
  {
    name: "Expandable Rows",
    to: "expandable-rows",
  },
  {
    name: "Grouping Rows",
    to: "grouping-rows",
  },
  {
    name: "Row Editing via Dialog",
    to: "row-editing-via-dialog",
  },
  {
    name: "External Pagination",
    to: "external-pagination",
  },
  {
    name: "Kitchen Sink",
    to: "kitchen-sink",
  },
];

useSeoMeta({
  title: "Data table",
  ogTitle: "Data table",
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
            title="Data table"
            subtitle="The data table component is used for displaying tabular data in a way that is easy for users to scan. It includes sorting, searching, pagination and selection."
          />
        </div>
        <Basic />
        <Dense />
        <CellSlot />
        <RowSelection />
        <FixedHeader />
        <ExpandableRows />
        <GroupingRows />
        <RowEditingViaDialog />
        <ExternalPagination />
        <KitchenSink />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
