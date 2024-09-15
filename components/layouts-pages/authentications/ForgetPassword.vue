<script setup>
const { requiredValidator, emailValidator } = useValidators();

const refVForm = ref();
const email = ref("");

const errors = ref({
  email: undefined,
});

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) alert("Check your mail");
  });
};
</script>
<template>
  <v-card elevation="4">
    <v-card-item class="pa-6">
      <div class="mb-6">
        <NuxtLink to="/" class="d-flex mb-2">
          <img src="/images/brand/logo/logo-light.svg" height="30px" />
        </NuxtLink>
        <p class="text-body-1">Don't worry, we'll send you an email to reset your password.</p>
      </div>

      <v-form ref="refVForm" @submit.prevent="onSubmit">
        <GlobalsTextField
          v-model="email"
          label="Email"
          type="email"
          autofocus
          placeholder="Email address here"
          :rules="[requiredValidator, emailValidator]"
          :error-messages="errors.email"
          class="mb-3"
        />

        <v-btn type="submit" block> Reset Password </v-btn>
        <div class="mt-4 d-flex align-center justify-space-between ga-2 flex-wrap">
          <p class="text-body-1">
            Don't have an account?
            <NuxtLink to="sign-up" class="font-weight-5 text-primary"> sign up </NuxtLink>
          </p>
        </div>
      </v-form>
    </v-card-item>
  </v-card>
</template>
