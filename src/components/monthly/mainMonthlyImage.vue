<template>

  <div class="mainAttention-faq-container">
    <div class="mainAttention-faq-question" v-on:click="toggle(index)" v-for="(item, index) in contents" :key="index">
      <div class="mainAttention-faq-description">{{item.title}}<span>+</span></div>
      <div class="mainAttention-faq-content" style="display: none;">
        <p>{{item.msg}}</p>
      </div>
    </div>

     
  </div>
  

</template>

<script>

import Vue from 'vue'

export default {
  name: 'mainAttentionImage',
  props: {
     name: {
      type : String
    },
     number: {
      type : Number
    },
    poetry:{
      type: Array
    },
    contents: {
      type: Array,
    },
  },
  data() {
    return {
      numberClass: 'content-imageAni-',
      contentImageStyle: 'content-image',
      loadig: false,
      poem: [],
      title: null,
      
    };
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
  },
  methods:{
     fetchData () {
      this.loading = true
      this.poem = this.poetry
      this.title = this.poem[1]

     },
     reload (){
      this.$router.go(this.$router.currenRoute)
    },
  isTheOne(poet){
      return poet.id === this.id
   },
   toggle: function (num) {

      if (this.$el.children[num].classList.contains('open')) {
        this.$el.children[num].classList.remove('open')
        this.$el.children[num].querySelectorAll('.mainAttention-faq-content')[0].style.display = 'none'
      } else {
        var prevFaqQuestion = this.$el.querySelectorAll('.open')
        if (prevFaqQuestion.length !== 0) {
          prevFaqQuestion[0].classList.remove('open')
          prevFaqQuestion[0].querySelectorAll('.mainAttention-faq-content')[0].style.display = 'none'
        }
        this.$el.children[num].classList.add('open')
        this.$el.children[num].querySelectorAll('.mainAttention-faq-content')[0].style.display = ''
      }
    },
  },
  mounted: function () {
       
    },
};

</script>


<style lang="sass" scoped>
@import '../scss/common.sass'
@import '../scss/help.scss'

</style>
