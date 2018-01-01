<template lang="pug">
  .content
    h2.title Страница &laquo;Блог&raquo;
    .articles
      addArticle(
        @addArticle='addArticle'
      )
      Articles(
        :articles='articles'
        @removeArticle='removeArticle'
        )
</template>

<script>
export default {
  data: () => ({
    articles: [
      {
        id: 1,
        title: 'Статья',
        date: '31.12.17',
        text: 'Пусть все будет классно в новом году'
      }
    ]
  }),
  methods: {
    addArticle(article) {
      this.articles.push(article)
    },
    removeArticle(articleId) {
      this.articles = this.articles.filter(article => { return article.id !== articleId })
    }
  },
  components: {
    addArticle: require('./AddArticle'),
    Articles: require('./Articles')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


