export const Basic = `<template>
  <v-sheet :height="200" :width="200"></v-sheet>
</template>`;

export const Elevation = `<script setup>
  const elevations = [0, 4, 8, 12, 16, 20]
</script>

<template>
  <v-row justify="space-around">
    <v-col v-for="elevation in elevations" :key="elevation" cols="12" md="4">
      <v-sheet class="pa-12" color="background">
        <v-sheet :elevation="elevation" class="mx-auto" height="100" width="100"></v-sheet>
      </v-sheet>
    </v-col>
  </v-row>
</template>`;

export const Rounded = `<template>
  <v-row justify="space-around">
    <v-col v-for="rounded in [false, true, 'xl']" :key="String(rounded)" cols="12" md="4">
      <v-sheet class="pa-12" color="background">
        <div></div>
        <v-sheet :rounded="rounded" class="mx-auto" height="100" width="100"></v-sheet>
        <div></div>
      </v-sheet>
    </v-col>
  </v-row>
</template>`;

export const Congratulations = `<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="250"
    rounded
    max-width="800"
    width="100%"
    >
    <div>
      <h2 class="text-h4 font-weight-black text-primary">Congratulations!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You are officially a part of the DashUi Community!
      </div>

      <p class="text-body-1 mb-4">
        Please head over to your inbox/spam or others folder to find our verificaiton email.
      </p>

      <v-btn>Go to Login</v-btn>
    </div>
  </v-sheet>
</template>`;

export const ReconcileNotification = `<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon class="mb-5" color="success" icon="tabler-circle-check-filled" size="112"></v-icon>

    <h2 class="text-h5 mb-6">You reconciled this account</h2>

    <p class="mb-4 text-medium-emphasis text-body-1">
      To see a report on this reconciliation, click
      <a href="#" class="text-decoration-none text-info">View reconciliation report.</a>

      <br />

      Otherwise, you're done!
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn class="text-none" color="success" rounded variant="flat" width="90"> Done </v-btn>
    </div>
  </v-sheet>
</template>`;

export const PrivacyPolicy = `<template>
  <v-sheet border="md" class="pa-6 text-white mx-auto" color="#141518" max-width="400">
    <h4 class="text-h5 font-weight-bold mb-4 text-white">Your Privacy</h4>

    <p class="mb-8">
      This business determines the use of personal data collectied on our media properties and
      across the internet. We may collect data that you submit to us directly or data that we
      collect automatically including from cookies (such as device information or IP address).

      <br />
      <br />

      Please read our <a href="#" class="text-error">Privacy Policy</a> to learn about our
      privacy practices or click "Your Preferences" to exercise control over your data.
    </p>

    <v-btn block class="mb-4" color="error" size="x-large" variant="flat"> Accept </v-btn>

    <v-btn block color="error" size="x-large" variant="outlined"> Your Preferences </v-btn>
  </v-sheet>
</template>`;

export const ReferralProgram = `<script setup>
  import placeholder from '/images/placeholder/placeholder-img.jpg'
</script>

<template>
  <v-sheet border="lg opacity-12" class="text-body-1 mx-auto" max-width="550">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3">
          <v-img :src="placeholder" height="88" cover></v-img>
        </v-col>

        <v-col cols="12" md="9">
          <p class="mb-4">
            This is part of our <a href="#">Most Comprehenseive Guide to Referral Programs</a> >
            <a href="#">Do I Need A Referral Program?</a> section. You may enjoy other related
            articles:
          </p>

          <ul class="ps-4 mb-6">
            <li>
              <a href="#">5 Ways to See if Referral Programs Can Work for You</a>
            </li>
            <li>
              <a href="#">The 6 Key Benefits of Referral Marketing</a>
            </li>
            <li>
              <a href="#">Leading Indicators of Referral Program Success</a>
            </li>
            <li>
              <a href="#">Debunking the Top 5 Worst Referral Program Myths</a>
            </li>
          </ul>

          <v-btn block class="text-none" color="info" rounded="0" variant="flat">
            <span class="hidden-sm-and-down"> Explore our 38+ Referral Program Resources </span>

            <span class="hidden-md-and-up"> Explore Referral Resources </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>`;
