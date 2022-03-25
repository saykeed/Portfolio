export const state = () => ({
    products: null
})

export const getters =  {
  getProducts (state) {
    return state.products
  },
  getProductById: (state) => (id) => {
    return state.products.find(item => item.id == id)
  }
}


export const mutations = {
  updateProducts(state, data) {
    state.products = data
  }
}


export const actions = {
  async fetchAllProducts(context) {
    await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => context.commit('updateProducts', data))
    .catch(err => console.log('shit',err.message))
  }
}

