<script setup>
import { Dense } from "./__code";
import { data } from "./__demo";

const headers = [
  {
    title: "ID",
    sortable: false,
    key: "id",
  },
  {
    title: "NAME",
    key: "full_name",
  },
  {
    title: "EMAIL",
    key: "email",
  },
  {
    title: "DATE",
    key: "start_date",
  },
  {
    title: "EXPERIENCE",
    key: "experience",
  },
  {
    title: "AGE",
    key: "age",
  },
];
</script>

<template>
  <div id="dense">
    <GlobalsIntro title="Dense">
      You can show a dense version of the table by using the <code>density</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Dense">
      <v-data-table :headers="headers" :items="data" :items-per-page="5" density="compact" />
    </GlobalsCodePre>
  </div>
</template>
