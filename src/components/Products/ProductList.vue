<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Products</h1>
        <v-card
          class="elevation-10 mb-13"
          v-for="(product, i) in myProducts"
          :key="i"
        >
          <v-layout>
            <v-flex xs4>
              <v-img
                height="250"
                :src="product.imageSrc"
              ></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ product.title }}</h2>
                <p>{{ product.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/product/' + product.id"
                >Open
                </v-btn>
              </v-card-actions>

            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    products () {
      return this.$store.getters.products
    },
    myProducts () {
      return this.$store.getters.myProducts
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
