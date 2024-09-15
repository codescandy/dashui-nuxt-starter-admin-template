<script setup>
import { RowSelection } from "./__code";
import { data } from "./__demo";
const { avatarText } = useFormatters();

const headers = [
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
    title: "SALARY",
    key: "salary",
  },
  {
    title: "AGE",
    key: "age",
  },
  {
    title: "STATUS",
    key: "status",
  },
];

const resolveStatusVariant = (status) => {
  if (status === 1)
    return {
      color: "primary",
      text: "Current",
    };
  else if (status === 2)
    return {
      color: "success",
      text: "Professional",
    };
  else if (status === 3)
    return {
      color: "error",
      text: "Rejected",
    };
  else if (status === 4)
    return {
      color: "warning",
      text: "Resigned",
    };
  else
    return {
      color: "info",
      text: "Applied",
    };
};
</script>

<template>
  <div id="row-selection">
    <GlobalsIntro title="Row Selection">
      The show-select prop will render a checkbox in the default header to toggle all rows, and a
      checkbox for each row.
    </GlobalsIntro>

    <GlobalsCodePre :code="RowSelection">
      <v-data-table :headers="headers" :items="data" :items-per-page="5" show-select>
        <!-- full name -->
        <template #item.full_name="{ item }">
          <div class="d-flex align-center">
            <v-avatar
              size="32"
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <v-img v-if="item.avatar" :src="item.avatar" />
              <span v-else>{{ avatarText(item.full_name) }}</span>
            </v-avatar>
            <div class="d-flex flex-column ms-3">
              <span class="d-block font-weight-medium text-high-emphasis">{{
                item.full_name
              }}</span>
              <small>{{ item.post }}</small>
            </div>
          </div>
        </template>

        <template #item.status="{ item }">
          <v-chip
            :color="resolveStatusVariant(item.status).color"
            class="font-weight-medium"
            size="small"
          >
            {{ resolveStatusVariant(item.status).text }}
          </v-chip>
        </template>
      </v-data-table>
    </GlobalsCodePre>
  </div>
</template>
