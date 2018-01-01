<template lang="pug">
    .content
        h2.title Страница &laquo;Обо мне&raquo;
        .skills__list
          skillsList(
            v-for='(skillType, index) in skillTypes'
            :skillGroup='skillType'
            :skills='skills'
            :key='index'
            @removeSkill="removeSkill"
            @addSkill="addSkill"
            @changePercents='changePercents'
          )
        pre {{skills}}
</template>

<script>
export default {
  data: () => ({
    skillTypes: ['Frontend', 'Backend', 'Workflow'],
    skills: []
  }),
  created() {
    fetch('/src/components/About/data.json')
      .then(response => {
        return response.json()
      }, response => {
        console.error(response)
      })
      .then(data => {
        this.skills = data
      })
  },
  methods: {
    removeSkill(skillId) {
      this.skills = this.skills.filter(function(skills) { return skills.id !== skillId })
    },
    addSkill(newSkill) {
      console.log(newSkill)
      this.skills.push(newSkill)
    },
    changePercents(newPercent, skillId) {
      this.skills.forEach(skill => {
        skill.percents = (skill.id === skillId) ? newPercent : skill.percents
      })
    }
  },
  components: {
    skillsList: require('./skills-list')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>
