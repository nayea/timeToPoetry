<template>
<div>
<div id="landing">
   <div class="main-wrapper main-height clearfix">

      <h2 class="main-title">지금,</h2>
      <h2 class="now-time">{{ msg }}</h2>
      <h2 class="main-title">어울리는 시를 들려드립니다.</h2>

      <div class="landing-content clearfix" v-for="(poet, index) in poetrysFilter" :key="index">
       <img v-bind:src="poet.artwork_url" v-bind:alt="poet.content_name" class="content-image">
       <div id="landing-poetryInfo">
         <span class="authoName">{{poet.author_name}}</span>
         <div v-if="titleLength >11">
           <marquee id="poetryTitle">{{poet.content_name}}</marquee>
         </div>
         <div v-else>
           <h3 id="poetryTitle">{{poet.content_name}}</h3>
           </div>

       <VueAudio v-bind:file="poet.voice_url[0].att_url" class="player-style"></VueAudio>
       </div>

       <router-link :to="{name: 'Landing'}" tag="button">
          <button class="reload-btnLanding" @click="reload">새로고침</button>
      </router-link>
      </div>

    </div>
   
</div>
  <whatIsTimeToPoetry></whatIsTimeToPoetry>
</div>
</template>

<script>

import VueAudio from './Audio/VueAudio.vue';
import whatIsTimeToPoetry from './whatIsTimeToPoetry';

import {todayTimeFliter} from './js/common.js'
import axios from 'axios'



export default {
  name: 'landing',
  data() {
    return {
      msg: todayTimeFliter,
      color: true,
      poetrys:[],
      numberClass: 'Landing-number',
      newPoetrys: [],
      titleNumber: null
    };
  },
  methods:{
     getData: function(){
      axios.post(
        'http://52.78.230.145/api/v1/contents/now',{
	          "gps":"35.675049,125.977320",
	          "recommended":"5",
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
        this.title = this.newPoetrys[0].content_name.length
        // console.log(this.newPoetrys[0].content_name);
      })
      .catch(error => {
        console.log(error)
      })
    },
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
  },
  components: {
   VueAudio,
   whatIsTimeToPoetry
  },
  computed:{
    poetrysFilter(index){
       return this.newPoetrys.splice(index,1)

    },
    titleLength(){
      return this.title
    }

  },
  mounted: function(){
     this.getData()

  }
};



</script>


<style lang="sass" scoped>


@import './scss/help.scss'
@import './scss/common.sass'


.main-wrapper
  position: absolute
  top: 60%
  left: 50%
  +transform(translate(-50%, -60%))
h2
  display: inline-block
  vertical-align: bottom
  font-weight: 700


.main-title
  color: $blue
  font-size: px2vw(39px, $break-large)
  vertical-align: middle

.now-time
  color: #fff
  font-size: px2vw(66px, $break-large)
  letter-spacing: 2px
  background: $light-gray
  z-index: 
  +respond-to(desktop)
    padding-left: px2vw(20px, $break-large)
    padding-right: px2vw(20px, $break-large)

.authoName
  font-size: px2vw(20px, $break-large)

.reload-btnLanding
  color: #fff
  position: absolute
  cursor: pointer
  font-weight: 700
  +respond-to(desktop)
    bottom: px2vw(-34px, $break-large)
    right: 0
    font-size: px2vw(20px, $break-large)

.reload-btnLanding:hover
  color: $blue

.landing-content
  width: px2vw(909px, $break-large)
  border: 5px solid #fff
  box-sizing: border-box
  position: relative

.content-image
  float: left
  +respond-to(desktop)
    margin-top: px2vw(55px, $break-large)
    margin-bottom: px2vw(55px, $break-large)
    margin-left: px2vw(77px, $break-large)
    +size(px2vw(260px, $break-large))

#landing-poetryInfo
  float: left
  color: $blue
  font-weight: 700
  +respond-to(desktop)
    margin-top: px2vw(55px, $break-large)
    margin-left: px2vw(100px, $break-large)
  .authorName
    font-size: px2vw(20px, $break-large)
    letter-spacing: 0.4px
  #poetryTitle
    font-size: px2vw(43px, $break-large)
    letter-spacing: 0.9px
    text-align: center
    +respond-to(desktop)
      margin-top: px2vw(55px, $break-large)
      width: px2vw(389px, $break-large)


</style>

