<script setup>
const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Mock API Example",
    to: "mock-api-example",
  },
];

useSeoMeta({
  title: "Consume Api",
  ogTitle: "Consume Api",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});

const { data: data } = await useFetch("https://dummyjson.com/products/1");
</script>

<template>
  <v-container>
    <div class="mt-lg-6 pt-lg-6">
      <v-row>
        <v-col offset-lg="2" lg="6" md="12">
          <div id="intro" class="mb-6">
            <h1 class="text-h1">Using Axios to Consume APIs</h1>
            <p class="text-grey-500 intro-font">
              An API can be consumed and displayed many times when building web applications.
              Several methods can be used to do this, but <code>axios</code> is one of the most
              popular.
            </p>
          </div>

          <div id="mock-api-example">
            <h1 class="text-h1">Mock API Example</h1>
            <p class="text-grey-500 intro-font mb-6">
              In this exercise, we have used the
              <code
                ><a href="https://dummyjson.com/" target="_blank">https://dummyjson.com/</a></code
              >
              dummy API to represent mock API example using axios.
              <br />
            </p>

            <GlobalsCodePre
              :code="`<script>
              const { data: data } = await useFetch('https://dummyjson.com/products/1');
</script>

<template>
  {{ data }}
</template>`"
            >
              <pre>{{ data }}</pre>
            </GlobalsCodePre>
          </div>
        </v-col>
        <v-col lg="3" class="d-none d-lg-block">
          <GlobalsContentList :list="contantList" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
