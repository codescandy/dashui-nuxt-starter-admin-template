<script setup>
import { KitchenSink } from "./__code";
import { productList } from "./__demo";

const search = ref("");

// headers
const headers = [
  {
    title: "PRODUCT",
    key: "product.name",
  },
  {
    title: "DATE",
    key: "date",
  },
  {
    title: "CATEGORY",
    key: "product.category",
  },
  {
    title: "BUYERS",
    key: "buyer.name",
  },
  {
    title: "PAYMENT",
    key: "payment",
    sortable: false,
  },
  {
    title: "STATUS",
    key: "status",
    sortable: false,
  },
  {
    title: "DELETE",
    key: "delete",
    sortable: false,
  },
];

const deleteItem = (itemId) => {
  const index = productList.value.findIndex((item) => item.product.id === itemId);

  productList.value.splice(index, 1);
};

const categoryIcons = [
  {
    name: "Mouse",
    icon: "tabler-mouse",
    color: "warning",
  },
  {
    name: "Glass",
    icon: "tabler-eyeglass",
    color: "primary",
  },
  {
    name: "Smart Watch",
    icon: "tabler-device-watch",
    color: "success",
  },
  {
    name: "Bag",
    icon: "tabler-briefcase",
    color: "info",
  },
  {
    name: "Storage Device",
    icon: "tabler-device-audio-tape",
    color: "warning",
  },
  {
    name: "Bluetooth",
    icon: "tabler-bluetooth",
    color: "error",
  },
  {
    name: "Gaming",
    icon: "tabler-device-gamepad-2",
    color: "warning",
  },
  {
    name: "Home",
    icon: "tabler-home",
    color: "error",
  },
  {
    name: "VR",
    icon: "tabler-badge-vr",
    color: "primary",
  },
  {
    name: "Shoes",
    icon: "tabler-shoe",
    color: "success",
  },
  {
    name: "Electronics",
    icon: "tabler-cpu",
    color: "info",
  },
  {
    name: "Projector",
    icon: "tabler-theater",
    color: "warning",
  },
  {
    name: "IPod",
    icon: "tabler-device-airpods",
    color: "error",
  },
  {
    name: "Keyboard",
    icon: "tabler-keyboard",
    color: "primary",
  },
  {
    name: "Smart Phone",
    icon: "tabler-device-mobile",
    color: "success",
  },
  {
    name: "Smart TV",
    icon: "tabler-device-tv",
    color: "info",
  },
  {
    name: "Google Home",
    icon: "tabler-brand-google",
    color: "warning",
  },
  {
    name: "Mac",
    icon: "tabler-brand-apple",
    color: "error",
  },
  {
    name: "Headphone",
    icon: "tabler-headphones",
    color: "primary",
  },
  {
    name: "IMac",
    icon: "tabler-device-imac",
    color: "success",
  },
  {
    name: "IPhone",
    icon: "tabler-brand-apple",
    color: "warning",
  },
];

const resolveStatusColor = (status) => {
  if (status === "Confirmed") return "primary";
  if (status === "Completed") return "success";
  if (status === "Cancelled") return "error";
};

const categoryIconFilter = (categoryName) => {
  const index = categoryIcons.findIndex((category) => category.name === categoryName);
  if (index !== -1)
    return [
      {
        icon: categoryIcons[index].icon,
        color: categoryIcons[index].color,
      },
    ];

  return [
    {
      icon: "tabler-help",
      color: "primary",
    },
  ];
};
</script>

<template>
  <div id="kitchen-sink">
    <GlobalsIntro title="Kitchen Sink" />
    <GlobalsCodePre :code="KitchenSink">
      <v-card-text>
        <v-row>
          <v-col cols="12" offset-md="8" md="4">
            <global-text-field
              v-model="search"
              density="compact"
              placeholder="Search"
              append-inner-icon="tabler-search"
              single-line
              hide-details
              dense
              outlined
            />
          </v-col>
        </v-row>
      </v-card-text>

      <!-- 👉 Data Table  -->
      <v-data-table
        :headers="headers"
        :items="productList"
        :search="search"
        :items-per-page="5"
        class="text-no-wrap"
      >
        <!-- product -->
        <template #item.product.name="{ item }">
          <div class="d-flex align-center">
            <div>
              <v-img :src="item.product.image" height="40" width="40" />
            </div>
            <div class="d-flex flex-column ms-3">
              <span class="d-block font-weight-medium text--primary">{{ item.product.name }}</span>
              <span class="text-body-2">{{ item.product.brand }}</span>
            </div>
          </div>
        </template>

        <!-- category -->
        <template #item.product.category="{ item }">
          <div class="d-flex align-center">
            <v-avatar
              v-for="(category, index) in categoryIconFilter(item.product.category)"
              :key="index"
              size="26"
              :color="category.color"
              variant="tonal"
            >
              <v-icon size="20" :color="category.color" class="rounded-0">
                {{ category.icon }}
              </v-icon>
            </v-avatar>
            <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
          </div>
        </template>

        <!-- buyer -->
        <template #item.buyer.name="{ item }">
          <div class="d-flex align-center">
            <v-avatar
              size="1.875rem"
              :color="!item.avatar ? 'primary' : undefined"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <v-img v-if="item.buyer.avatar" :src="item.buyer.avatar" />
              <span v-else>{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
            </v-avatar>
            <span class="text-no-wrap font-weight-medium text--primary ms-2">{{
              item.buyer.name
            }}</span>
          </div>
        </template>

        <!-- Payment -->
        <template #item.payment="{ item }">
          <div class="d-flex flex-column">
            <div class="d-flex align-center">
              <span class="font-weight-medium">Rs.{{ item.payment.paid_amount }}</span>
              <span class="text-body-2" v-if="item.payment.paid_amount !== item.payment.total"
                >/{{ item.payment.total }}</span
              >
            </div>
            <span class="text-body-2 text-no-wrap">{{ item.payment.received_payment_status }}</span>
          </div>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <v-chip
            :color="resolveStatusColor(item.payment.status)"
            :class="`text-${resolveStatusColor(item.payment.status)}`"
            size="small"
            class="font-weight-medium"
          >
            {{ item.payment.status }}
          </v-chip>
        </template>

        <!-- Delete -->
        <template #item.delete="{ item }">
          <icon-btn @click="deleteItem(item.product.id)">
            <v-icon icon="tabler-trash" />
          </icon-btn>
        </template>
      </v-data-table>
    </GlobalsCodePre>
  </div>
</template>
