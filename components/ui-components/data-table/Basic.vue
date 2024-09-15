<script setup>
import { Basic } from "./__code";
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
  <div id="basic">
    <GlobalsIntro title="Basic" />
    <GlobalsCodePre :code="Basic">
      <v-data-table :headers="headers" :items="data" :items-per-page="5" />
    </GlobalsCodePre>
  </div>
</template>
