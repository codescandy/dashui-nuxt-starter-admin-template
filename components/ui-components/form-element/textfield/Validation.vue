<script setup>
import { Validation } from "./__code";
const rules = {
  required: (value) => !!value || "Email field is required",
};

const email = ref("");
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      Vuetify includes simple validation through the <code>rules</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Validation">
      <global-text-field
        v-model="email"
        :rules="[rules.required]"
        placeholder="johnedoe@email.com"
        label="E-mail"
      />
    </GlobalsCodePre>
  </div>
</template>
