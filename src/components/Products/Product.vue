<template>
  <v-container>

      <v-layout wrap row>
        <v-flex xs12 lg6>
          <img
            :src="product.imageSrc"
            class="product_img"
          >
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product_info">
            <h5 class="product_title">{{ product.title }}</h5>
            <p class="product_category title">
              <span class="product_title">Vendor: </span> {{ product.vendor }}
            </p>
            <p class="product_price title">
              <span class="product_title">Price: </span> {{ product.price }}
            </p>
            <p class="product_color title">
              <span class="product_title">Color: </span>
              <span
                :title="product.color"
                :style="{ backgroundColor: product.color }"
                class="product_color__bg"
              ></span>
            </p>
            <p class=title>
              <span class="product_title">Material: </span>{{ product.material }}
            </p>
            <div class="title mb-5">
              <p class="product_title mb-2">Description:</p>{{ product.description }}
            </div>
            <v-btn color="primary" class="headline mr-3">Edit</v-btn>
            <v-btn color="primary" class="headline">Buy</v-btn>
          </div>
        </v-flex>
      </v-layout>

  </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    product () {
      const id = this.id
      return this.$store.getters.productById(id)
    },
  }
}
</script>
