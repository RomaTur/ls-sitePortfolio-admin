<template lang="pug">
  .content
    h2.title Страница &laquo;Мои работы&raquo;
    .works
      addWork(
        @addWork='addWork'
      )
      Works(
        :works='works'
        @removeWork='removeWork'
      )
    pre {{works}}
</template>

<script>
export default {
  data: () => ({
    works: []
  }),
  created() {
    fetch('/src/components/Works/data.json')
      .then(response => {
        return response.json()
      }, response => {
        console.error(response)
      })
      .then(data => {
        this.works = data
      })
  },
  methods: {
    addWork(work) {
      this.works.push(work)
    },
    removeWork(workId) {
      this.works = this.works.filter(work => { return work.id !== workId })
    }
  },
  components: {
    addWork: require('./addWork'),
    Works: require('./Works')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


