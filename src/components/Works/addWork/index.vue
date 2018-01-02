<template lang="pug">
  .input__area
    h3.title Добавить проект
    input.input.title(
      v-model='title' 
      placeholder="Название" 
      :error="validation.hasError('title')"
      )
    input.input.tech(v-model='tech' placeholder="Технологии")
    input.input.href(v-model='href' placeholder="Ссылка")
    .input__file
      .input__file-logo pic
      .input__file-text Загрузить Картинку
    button.input__add(@click='addWork') Добавить
</template>

<script>
import { Validator } from 'simple-vue-validator'
export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    title: (value) => {
      return Validator.value(value).required('Название не может быть пустым')
    }
  },
  data: () => ({
    title: '',
    tech: '',
    href: ''
  }),
  methods: {
    addWork() {
      this.$validate().then(success => {
        console.log('click')
        if (!success) return
        this.$emit('addWork', {
          title: this.title,
          id: Math.round(Math.random() * 1000000),
          tech: this.tech,
          href: this.href
        })
        this.title = ''
        this.tech = ''
        this.href = ''
      })
    }
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


