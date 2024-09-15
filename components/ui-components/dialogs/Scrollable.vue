<script setup>
import { Scrollable } from "./__code";

const countryList = [
  {
    label: "Bahamas, The",
    value: "bahamas",
  },
  {
    label: "Bahrain",
    value: "bahrain",
  },
  {
    label: "Bangladesh",
    value: "bangladesh",
  },
  {
    label: "Barbados",
    value: "barbados",
  },
  {
    label: "Belarus",
    value: "belarus",
  },
  {
    label: "Belgium",
    value: "belgium",
  },
  {
    label: "Belize",
    value: "belize",
  },
  {
    label: "Benin",
    value: "benin",
  },
  {
    label: "Bhutan",
    value: "bhutan",
  },
  {
    label: "Bolivia",
    value: "bolivia",
  },
  {
    label: "Bosnia and Herzegovina",
    value: "bosnia",
  },
  {
    label: "Botswana",
    value: "botswana",
  },
  {
    label: "Brazil",
    value: "brazil",
  },
  {
    label: "Brunei",
    value: "brunei",
  },
  {
    label: "Bulgaria",
    value: "bulgaria",
  },
  {
    label: "Burkina Faso",
    value: "burkina",
  },
];
const selectedCountry = ref("");
const scrollableDialogs = ref(false);
</script>

<template>
  <div id="scrollable">
    <GlobalsIntro title="Scrollable">
      Use <code>scrollable</code> prop to create scrollable dialog.
    </GlobalsIntro>
    <GlobalsCodePre :code="Scrollable">
      <v-dialog v-model="scrollableDialogs" scrollable max-width="350">
        <!-- Activator -->
        <template #activator="{ props }">
          <v-btn v-bind="props"> Open Dialog</v-btn>
        </template>

        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Select Country
            <icon-btn @click="scrollableDialogs = !scrollableDialogs">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>

          <v-divider />

          <v-card-text style="block-size: 300px">
            <v-radio-group v-model="selectedCountry" :inline="false">
              <v-radio
                v-for="country in countryList"
                :key="country.label"
                :label="country.label"
                :value="country.value"
                color="primary"
              />
            </v-radio-group>
          </v-card-text>

          <v-divider />

          <v-card-text class="d-flex justify-end flex-wrap gap-3 pt-5">
            <v-btn
              color="secondary"
              variant="tonal"
              class="ma-1"
              @click="scrollableDialogs = false"
            >
              Close
            </v-btn>
            <v-btn class="ma-1" @click="scrollableDialogs = false"> Save </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
