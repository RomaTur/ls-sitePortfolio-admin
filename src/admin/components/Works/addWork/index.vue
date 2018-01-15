<template lang="pug">
  .input__area
    h3.title Добавить работу
    input.input(
      v-model='title' 
      placeholder="Название проекта" 
      :error="validation.hasError('title')"
      )
    input.input(v-model='tech' placeholder="Технологии")
    input.input(v-model='href' placeholder="Ссылка")
    label.input.input__file(for='files')
      .input__file-logo
      .input__file-text Загрузить Картинку
      input#files(type='file' name='files[]' v-on:change='fileSelect')
    output#list
    button.input__add(@click='addWork') Добавить
    //- .div {{imgSrc}}
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
    href: '',
    img: ''
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
          href: this.href,
          img: this.img
        })
        this.title = ''
        this.tech = ''
        this.href = ''
        this.img = ''
      })
    },
    fileSelect(evt) {
      var f = evt.target.files // FileList object
      // Loop through the FileList and render image files as thumbnails.
      // files.forEach(f => {
      //   // Only process image files.
      if (!f[0].type.match('image.*')) {
        // continue
        console.log('not match')
      }
      var reader = new FileReader()
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          const list = document.getElementById('list')
          list.innerHTML = ['<img src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('')
          // var imgSrc = e.target.result
        }
      })(f)
      // Read in the image file as a data URL.
      reader.readAsDataURL(f[0])
      console.log(f[0])
      // })
    }
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


