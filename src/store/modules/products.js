export default {
  state: {
    products: [
      {
        id: '1',
        title: 'Lenovo njknsds',
        vendor: 'Lenovo',
        color: 'black',
        material: 'metal/plastic',
        description: 'dff,ef njohuh ju9h9h89 in9uh98h9hunjihbubii  ijoio',
        price: 784,
        promo: 'false',
        imageSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        // imageSrc: require('../assets/images/1196306_v01_b.jpg'),
      },
      {
        id: '2',
        title: 'Lenovo-2 njknsds',
        vendor: 'Lenovo',
        color: 'black',
        material: 'metal/plastic',
        description: 'dff,ef njohuh ju9h9h89 in9uh98h9hunjihbubii  ijoio',
        price: 784,
        promo: 'true',
        imageSrc: 'https://mmoguider.ru/wp-content/uploads/2018/08/treyler-igry-rf-online-900x506.jpg',
        // imageSrc: require('../assets/images/1196306_v01_b.jpg'),
      },
      {
        id: '3',
        title: 'Lenovo-3 njknsds',
        vendor: 'Lenovo',
        color: 'black',
        material: 'metal/plastic',
        description: 'dff,ef njohuh ju9h9h89 in9uh98h9hunjihbubii  ijoio',
        price: 784,
        promo: 'true',
        imageSrc: 'https://mmoguider.ru/wp-content/uploads/2018/08/treyler-igry-rf-online-900x506.jpg',
        // imageSrc: require('../assets/images/1196306_v01_b.jpg'),
      }
    ]
  },
  mutations: {
    createProduct(state, payload){
      state.products.push(payload)
    }
  },
  actions: {
    createProduct ({commit},payload) {
      payload.id = 'jbjhj,'
      commit('createProduct', payload)
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    myProducts(state) {
      return state.products
    },
    promoProducts(state) {
      return state.products.filter(product => {
        return product.promo
      })
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}
