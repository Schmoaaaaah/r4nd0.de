<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center my-12">
          <LogoComp />
        </div>
        <v-card class="my-12">
          <v-card-title class="headline"> We’ll be back soon! </v-card-title>
          <v-card-text>
            <p>
              Sorry for the inconvenience but we’re performing some maintenance
              at the moment. If you need to you can always contact us, otherwise
              we’ll be back online shortly!
            </p>
            <p>— The Team</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/about"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title> In the mean time... </v-card-title>
          <v-card-text>
            <p>You may want to join us on Discord?</p>
            <iframe
              src="https://ptb.discord.com/widget?id=435056107371888640&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LogoComp from "../components/LogoComp.vue";
export default {
  components: {
    LogoComp,
  },
};
</script>
