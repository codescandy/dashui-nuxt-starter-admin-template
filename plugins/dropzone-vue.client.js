import { defineNuxtPlugin } from "#app";
import Dropzone from "dropzone-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Dropzone);
});
