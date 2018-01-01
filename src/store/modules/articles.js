const posts = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    articles: ({ data }) => (data)
  },
  mutations: {
    addArticle(state, article) {
      state.data.push(article)
    }
  },
  actions: {
  }
}

export default posts
