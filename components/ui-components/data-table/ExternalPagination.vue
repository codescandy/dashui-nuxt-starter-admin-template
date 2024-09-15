<script setup>
import { ExternalPagination } from "./__code";
import { data } from "./__demo";
const { avatarText } = useFormatters();

const userList = ref([]);

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [""],
  sortDesc: [false],
});

// headers
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

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data));
});
</script>

<template>
  <div id="external-pagination">
    <GlobalsIntro title="External Pagination" />
    <GlobalsCodePre :code="ExternalPagination">
      <v-data-table
        :headers="headers"
        :items="userList"
        :items-per-page="options.itemsPerPage"
        :page="options.page"
        :options="options"
      >
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

        <!-- status -->
        <template #item.status="{ item }">
          <v-chip
            :color="resolveStatusVariant(item.status).color"
            class="font-weight-medium"
            size="small"
          >
            {{ resolveStatusVariant(item.status).text }}
          </v-chip>
        </template>

        <template #bottom>
          <v-card-text class="pt-2">
            <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
              <v-text-field
                v-model="options.itemsPerPage"
                label="Rows per page:"
                type="number"
                min="-1"
                max="15"
                hide-details
                variant="underlined"
                style="max-inline-size: 8rem; min-inline-size: 5rem"
              />

              <v-pagination
                v-model="options.page"
                :total-visible="$vuetify.display.smAndDown ? 3 : 5"
                :length="Math.ceil(userList.length / options.itemsPerPage)"
              />
            </div>
          </v-card-text>
        </template>
      </v-data-table>
    </GlobalsCodePre>
  </div>
</template>
