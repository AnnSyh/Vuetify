<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 mt-3>
          <v-carousel
            delimiter-icon="stop"
            prev-icon="fa-angle-left"
            next-icon="fa-angle-right"
          >
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
<!-- -->
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12 sm6 md4
          v-for="(product, i) in products"
          :key="i"
        >
          <v-card
            class="mx-auto my-12"
            max-width="374"
          >
            <router-link
              :aria-label="product.title"
              :to="'/product/' + product.id"
            >
              <v-img
                height="250"
                :src="product.imageSrc"
              ></v-img>
            </router-link>


            <v-card-title primary-title>
              <div>
                <h3 class="heading card-heading">{{ product.title }}</h3>
                <div class="card-description">
                  <p class="subheading">{{ product.description.substring(0, 60) }}...</p>
                  <p class="subheading card_price"><span class="title">Price:</span>${{ product.price }}</p>
                </div>
              </div>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark color="deep-purple"
                :to="'/product/' + product.id"
              >Description
              </v-btn>
              <v-btn
                dark color="deep-purple"
              >Add to card
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
<!-- -->
  </div>
</template>
<script>
export default {

  computed: {
    promoProducts () {
      return this.$store.getters.promoProducts
    },
    products () {
      return this.$store.getters.products
    },
    // loading () {
    //   return this.$store.getters.loading
    // }
  }
}
</script>
<style scoped>

</style>
