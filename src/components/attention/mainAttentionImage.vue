<template>

  <div class="mainAttention-faq-container">
    <div class="mainAttention-faq-question" v-on:click="toggle(index)" v-for="(item, index) in contents" :key="index">
      <div class="mainAttention-faq-description">{{item.title}}<span>+</span></div>
      <div class="mainAttention-faq-content" style="display: none;">
        <p>{{item.msg}}</p>
      </div>
    </div>

     <!-- <div class="time-info">{{title}} 초 동안 재생됩니다.</div> -->
  </div>
  

</template>

<script>

import Vue from 'vue'

export default {
  name: 'mainAttentionImage',
  props: {
     id: {
      type : Number
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

<style lang="css" scoped>
/*
#content-imageAni-1,#content-imageAni-2,#content-imageAni-3,#content-imageAni-4,#content-imageAni-5{
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
#content-imageAni-1{
  -webkit-animation-name: fadeInLeft-1;
  animation-name: fadeInLeft-1;
}
#content-imageAni-2{
  -webkit-animation-name: fadeInLeft-2;
  animation-name: fadeInLeft-2;
}
#content-imageAni-3{
  -webkit-animation-name: fadeInLeft-3;
  animation-name: fadeInLeft-3;
}
#content-imageAni-4{
  -webkit-animation-name: fadeInLeft-4;
  animation-name: fadeInLeft-4;
}
#content-imageAni-5{
  -webkit-animation-name: fadeInLeft-5;
  animation-name: fadeInLeft-5;
}



@-webkit-keyframes fadeInLeft-2{
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft-2 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes fadeInLeft-1 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft-1 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes fadeInLeft-3{
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft-3 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes fadeInLeft-4{
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft-4 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes fadeInLeft-5{
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft-5 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft1, .fadeInLeft2, .fadeInLeft3, .fadeInLeft3, .fadeInLeft5 {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
} */


</style>

<style lang="sass" scoped>
@import '../scss/help.scss'

.time-info
  float: right
  color: $pink
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  font-weight: 700
  +respond-to(desktop)
    font-size: px2vw(17px, $break-large)
    margin-bottom: px2vw(20px, $break-large)


.mainAttention-faq-container 
  position: absolute
  background: $light-gray
  border: 3px solid $blue
  +respond-to(desktop)
    padding-left: px2vw(10px, $break-large)
    padding-right: px2vw(10px, $break-large)
    padding-top: px2vw(30px, $break-large)
    padding-bottom: px2vw(0px, $break-large)
    left: px2vw(-420px, $break-large)
    top: px2vw(150px, $break-large)

.mainAttention-faq-question 
  padding: 0px
  margin: 0
  transition: all 0.3s

.mainAttention-faq-content 
  background: $pink
  color: $blue
  border: 1px dashed $blue
  overflow-y: scroll
  direction: rtl
  position: relative
  +respond-to(desktop)
    padding-left: px2vw(0px, $break-large)
    padding-right: px2vw(10px, $break-large)
    padding-top: px2vw(10px, $break-large)
    padding-bottom: px2vw(10px, $break-large)
    +size(px2vw(198px, $break-large) px2vw(30px, $break-large))
    font-size: px2vw(13px, $break-large)
    top: px2vw(-25px, $break-large)
    left: 0


.mainAttention-faq-content p
  direction: ltr

.mainAttention-faq-content::-webkit-scrollbar, .mainNewsPopup::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.mainAttention-faq-content::-webkit-scrollbar-thumb, .mainNewsPopup::-webkit-scrollbar-thumb
  background-color: $blue
  border: 1px solid $blue

.mainAttention-faq-description::before
  display: inline-block
  border-bottom: 1px dashed $blue
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  color: $pink
  position: relative
  +respond-to(desktop)
    width: px2vw(200px, $break-large)
    padding-left: px2vw(10px, $break-large)
    padding-bottom: px2vw(5px, $break-large)
    margin-right: px2vw(20px, $break-large)
    font-size: px2vw(17px, $break-large)
    top: px2vw(-14px, $break-large)
    left: 0

.mainAttention-faq-question:nth-of-type(1) .mainAttention-faq-description::before
  content: '시를 씁니다.'

.mainAttention-faq-question:nth-of-type(2) .mainAttention-faq-description::before
  content: '시를 읽어드립니다.'

.mainAttention-faq-question:nth-of-type(3) .mainAttention-faq-description::before
  content: '시를 연주합니다'

.mainAttention-faq-question:nth-of-type(4) .mainAttention-faq-description::before
  content: '시를 보여드립니다.'

.mainAttention-faq-description 
  color: $pink
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  font-weight: 700
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  transition: all 0.3s
  cursor: pointer
  +respond-to(desktop)
    font-size: px2vw(17px, $break-large)
    padding-top: px2vw(0px, $break-large)
    padding-bottom: px2vw(10px, $break-large)
    position: relative
    top: 0
    left: 0


.mainAttention-faq-description span
  cursor: pointer
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  transition: all 0.3s
  position: absolute
  color: $pink
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  +respond-to(desktop)
    right: px2vw(55px, $break-large)
    top: px2vw(0px, $break-large)
    font-size: px2vw(20px, $break-large)


</style>
