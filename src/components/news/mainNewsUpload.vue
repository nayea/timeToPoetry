<template>

 <div class="mainNewsWe-faq-container">
    <div class="mainNewsWe-faq-question" v-for="(poet, index) in poetrysFilter" :key="index"> 
      <router-link :to="{name: 'mainNewsDetail', params: {id: poet.id, number: index, poetry: [instantUrl,poet.question],menu: menuTitle}}">
      <div class="mainNewsWe-faq-description" v-on:click="toggle(index)"><span class="circle-w"></span><h2>{{poet.title}}</h2><span class="btn-plus">+</span></div>
      </router-link>
      <div class="mainNewsWe-faq-content" style="display: none;">
          <router-view></router-view>
      
   </div>
   
  </div> 

</div>

 
</template>


<script>


import axios from 'axios'
import VuePaginate from 'vue-paginate'

export default {

  name: 'mainNewsWe',
  data() {
    return {
      poetrys:[],
      numberClass: 'mainNewsWe-number',
      newPoetrys: [],
      popup: false,
      menuTitle: ['업','로','드','소','식'],
      instantUrl: "https://s3.ap-northeast-2.amazonaws.com/timeforpoetry.contnet.public/image/artwork/G0021front.jpg"
    };
  },

   methods:{
     setPage(newPage){
      this.activePage = newPage
    },
   getData: function(){
      axios.post(
        'http://52.78.230.145/api/v1/contents/notice',{
	        "type":"notice",
	        "id":"",
	        "sortby":"DESC",
	        "orderby":"id"
          },
         {
          headers: {
           'Access-Control-Allow-Origin': '*',
           'Content-Type': 'application/json',
        },
        }
      )
      .then((result) => {
        this.poetrys = result.data
       this.newPoetrys = this.poetrys[201];

      })
      .catch(error => {
        console.log(error)
      })
    },
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
    toggle: function (num) {
      
      if (this.$el.children[num].classList.contains('open')) {
        this.$el.children[num].classList.remove('open')
        this.$el.children[num].querySelectorAll('.mainNewsWe-faq-content')[0].style.display = 'none'
      } else {
        var prevFaqQuestion = this.$el.querySelectorAll('.open')
        if (prevFaqQuestion.length !== 0) {
          prevFaqQuestion[0].classList.remove('open')
          prevFaqQuestion[0].querySelectorAll('.mainNewsWe-faq-content')[0].style.display = 'none'
        }
        this.$el.children[num].classList.add('open')
        this.$el.children[num].querySelectorAll('.mainNewsWe-faq-content')[0].style.display = ''
      }
    },
    popupControl : function(){
      this.popup = !this.popup;
    },
  },
  computed:{
    poetrysFilter(index){
       return this.newPoetrys.splice(index,5)
    },
  },
  mounted: function(){
     this.getData()
  }
  };
</script>

<style lang="sass" scoped>
@import '../scss/help.scss'
@import '../scss/common.sass'

.circle-w
  position: relative
  +respond-to(desktop)
    top: 0
    left: 0
    +size(px2vw(30px, $break-large))


.mainNewsWe-faq-container 
  background: $light-gray
  position: relative
  +respond-to(desktop)
    width: px2vw(1000px, $break-large)
    top: px2vw(30px, $break-large)
    left: px2vw(-10px, $break-large)
    padding-right: px2vw(10px, $break-large)
    padding-top: px2vw(30px, $break-large)
    padding-bottom: px2vw(0px, $break-large)


.mainNewsWe-faq-question 
  padding: 0px
  margin: 0
  transition: all 0.3s

.mainNewsWe-faq-content 
  background: $pink
  color: $black
  border: 1px solid $black
  overflow-y: scroll
  +respond-to(desktop)
    padding-left: px2vw(15px, $break-large)
    padding-right: px2vw(15px, $break-large)
    padding-top: px2vw(15px, $break-large)
    padding-bottom: px2vw(15px, $break-large)
    margin-top: px2vw(-15px, $break-large)
    margin-bottom: px2vw(15px, $break-large)
    +size(100% px2vw(200px, $break-large))
    font-size: px2vw(13px, $break-large)

.mainNewsWe-faq-content::-webkit-scrollbar, .mainNewsPopup::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.mainNewsWe-faq-content::-webkit-scrollbar-thumb, .mainNewsPopup::-webkit-scrollbar-thumb
  background-color: $black
  border: 1px solid $black

.mainNewsWe-faq-description::before
  display: inline-block
  color: $black
  position: relative
  +respond-to(desktop)
    width: px2vw(200px, $break-large)
    padding-bottom: px2vw(5px, $break-large)
    font-size: px2vw(30px, $break-large)
    top: px2vw(-14px, $break-large)
    left: 0

.mainNewsWe-faq-question.open .mainNewsWe-faq-description span:last-child 
  -moz-transform: rotate(45deg)
  -ms-transform: rotate(45deg)
  -webkit-transform: rotate(45deg)
  -o-transform: rotate(45deg)
  transform: rotate(45deg)
  font-weight: normal

.mainNewsWe-faq-description 
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  transition: all 0.3s
  cursor: pointer
  +respond-to(desktop)
    margin-bottom: px2vw(30px, $break-large)
    position: relative
    top: 0
    left: 0

.content-info
  float: left
  width: px2vw(630px, $break-large)

.mainNewsImage
  float: left
  position: relative
  margin-left: px2vw(20px, $break-large)
  margin-top: px2vw(20px, $break-large)
  img
    +size(px2vw(196px, $break-large))
  button
    position: absolute
    cursor: pointer
    top: px2vw(-10px, $break-large)
    left: px2vw(-10px, $break-large)
    z-index: 6
    +size(px2vw(25px, $break-large))
    background: url("../../assets/images/icon-plus.svg") no-repeat

.mainNewsWe-faq-description h2
  color: $black
  font-weight: 700
  position: absolute
  +respond-to(desktop)
    top: px2vw(0px, $break-large)
    left: px2vw(10px, $break-large)
    font-size: px2vw(30px, $break-large)

.mainNewsWe-faq-description .btn-plus
  cursor: pointer
  -webkit-transition: all 0.3s
  -moz-transition: all 0.3s
  transition: all 0.3s
  position: absolute
  color: $pink
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  +respond-to(desktop)
    right: px2vw(100px, $break-large)
    top: px2vw(0px, $break-large)
    font-size: px2vw(30px, $break-large)




</style>
