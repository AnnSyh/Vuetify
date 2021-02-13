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
        imageSrc: 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
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
        imageSrc: 'https://lh3.googleusercontent.com/proxy/PS72IZTyXX89qCn-61vv1OwiXalRF0hbWFEshueT9_fc3L8qAnjjFH-xXqD9vO_4w6vY8YBivI0AQde9C9O6MpM8Uw',
        // imageSrc: require('../assets/images/1196306_v01_b.jpg'),
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    products (state) {
      return state.products
    },
    promoProducts (state) {
      return state.products.filter(product => {
        return product.promo
      })
    },
    productById (state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}
