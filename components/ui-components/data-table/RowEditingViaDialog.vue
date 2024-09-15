<script setup>
import { RowEditingViaDialog } from "./__code";
const { avatarText } = useFormatters();
import { data } from "./__demo";

const editDialog = ref(false);
const deleteDialog = ref(false);

const defaultItem = ref({
  responsiveId: "",
  id: -1,
  avatar: "",
  full_name: "",
  post: "",
  email: "",
  city: "",
  start_date: "",
  salary: -1,
  age: "",
  experience: "",
  status: -1,
});

const editedItem = ref(defaultItem.value);
const editedIndex = ref(-1);
const userList = ref([]);

// status options
const selectedOptions = [
  {
    text: "Current",
    value: 1,
  },
  {
    text: "Professional",
    value: 2,
  },
  {
    text: "Rejected",
    value: 3,
  },
  {
    text: "Resigned",
    value: 4,
  },
  {
    text: "Applied",
    value: 5,
  },
];

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
  {
    title: "ACTIONS",
    key: "actions",
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

const editItem = (item) => {
  editedIndex.value = userList.value.indexOf(item);
  editedItem.value = { ...item };
  editDialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = userList.value.indexOf(item);
  editedItem.value = { ...item };
  deleteDialog.value = true;
};

const close = () => {
  editDialog.value = false;
  editedIndex.value = -1;
  editedItem.value = { ...defaultItem.value };
};

const closeDelete = () => {
  deleteDialog.value = false;
  editedIndex.value = -1;
  editedItem.value = { ...defaultItem.value };
};

const save = () => {
  if (editedIndex.value > -1) Object.assign(userList.value[editedIndex.value], editedItem.value);
  else userList.value.push(editedItem.value);
  close();
};

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1);
  closeDelete();
};

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data));
});
</script>

<template>
  <div id="row-editing-via-dialog">
    <GlobalsIntro title="Row Editing via Dialog">
      The following are a collection of examples that demonstrate more advanced and real world use
      of the <code>v-data-table</code> component.
    </GlobalsIntro>
    <GlobalsCodePre :code="RowEditingViaDialog">
      <!-- 👉 Datatable  -->
      <v-data-table :headers="headers" :items="userList" :items-per-page="5">
        <!-- full name -->
        <template #item.full_name="{ item }">
          <div class="d-flex align-center">
            <!-- avatar -->
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
          <v-chip :color="resolveStatusVariant(item.status).color" size="small">
            {{ resolveStatusVariant(item.status).text }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <div class="d-flex gap-1">
            <icon-btn @click="editItem(item.raw)">
              <v-icon icon="tabler-edit" />
            </icon-btn>
            <icon-btn @click="deleteItem(item.raw)">
              <v-icon icon="tabler-trash" />
            </icon-btn>
          </div>
        </template>
      </v-data-table>

      <!-- 👉 Edit Dialog  -->
      <v-dialog v-model="editDialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Item</span>
          </v-card-title>

          <v-card-text>
            {{ editedItem?.full_name }}
            <v-container>
              <v-row>
                <!-- fullName -->
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.full_name" label="User name" />
                </v-col>

                <!-- email -->
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.email" label="Email" />
                </v-col>

                <!-- salary -->
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.salary"
                    label="Salary"
                    prefix="$"
                    type="number"
                  />
                </v-col>

                <!-- age -->
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.age" label="Age" type="number" />
                </v-col>

                <!-- start date -->
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.start_date" label="Date" />
                </v-col>

                <!-- status -->
                <v-col cols="12" sm="6" md="4">
                  <v-select readonly label="Select" :items="selectedOptions"></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn color="error" variant="outlined" @click="close"> Cancel </v-btn>

            <v-btn color="success" variant="elevated" @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- 👉 Delete Dialog  -->
      <v-dialog v-model="deleteDialog" max-width="500px">
        <v-card>
          <v-card-title> Are you sure you want to delete this item? </v-card-title>

          <v-card-actions>
            <v-spacer />

            <v-btn color="error" variant="outlined" @click="closeDelete"> Cancel </v-btn>

            <v-btn color="success" variant="elevated" @click="deleteItemConfirm"> OK </v-btn>

            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
