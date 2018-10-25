<template>
<div id="mainAttention">
  <div class="main-wrapper main-height clearfix">

    <div class="content-wrapper">
      <h2 class="main-title">실시간,<br>주목받고 있는<br>시를 들려드립니다.
        <span class="now-time">{{ msg }}</span>
      </h2>
      <ul class="mainAttention-poetry">
          <li v-for="(poet, index) in poetrysFilter" :key="index" @mouseover="mouseoverList(index)" @mouseleave="mouseleaveList(index)" >
            <div class="poetry-info02"><span class="content-number">{{index + 1}}.</span></div>
            <div class="poetry-info03"><h3 class="content-font">{{poet.content_name}}</h3></div>
            <div class="poetry-info01"><h3 class="content-font">{{poet.author_name}}</h3></div>
            <div class="image-wrapper">
              <a role="button" class="btn-plus" title="담기"><img src="../../assets/images/icon-add.svg" alt="담기"></a>
              <a role="button" class="btn-like" title="좋은시간"><img src="../../assets/images/icon-like.svg" alt="좋은시간"></a>
              <a role="button" class="btn-info" title="정보"><img src="../../assets/images/icon-q.svg" alt="정보"></a>
              <!-- <router-link :to="{name: 'mainAttentionImage', params: {id: poet.id, number: index, poetry: [poet.voice_name,poet.content_name], contents: [{'title':poet.author_name,'msg':poet.author_name},
              {'title':poet.voice_name,'msg':poet.voice_name},
              {'title':poet.music_name,'msg':poet.music_name}, 
              {'title':poet.artwork_name,'msg':poet.artwork_name}]}}" tag="button" class="tap-link btn-info" active-class="my-active-class" title="정보">
              <img src="../../assets/images/icon-q.svg" alt=""></router-link> -->
            </div>
          </li>
          <router-view></router-view>
      </ul>



    </div>
     <router-link :to="{name: 'mainAttention'}" tag="button">
          <button class="reload-btn" @click="reload">새로고침</button>
      </router-link>
  </div>
</div>
</template>

<script>

import {todayTimeFliter} from '../js/common.js'
import axios from 'axios'


export default {

  name: 'mainAttention',
  data() {
    return {
      msg: todayTimeFliter,
      poetrys:[],
      newPoetrys: [],
      ListStyle: false,
      content : [false,false,false],
      activePage: ''
    };
  },
   methods:{
   getData: function(){
      axios.post(
        'http://52.78.230.145/api/v1/contents/get/ranking',{
          "type":"poetry",
        	"rank":"5",
	        "sortby":"DESC",
	        "orderby":"request"
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
     isActivePage(index){
      return  this.content[index] == false
    },
    mouseoverList: function(index){
      if(index == 0){
        this.content[index] = true
      }
     },
    mouseleaveList: function(index){
      if(index == 0){
        this.content[index] = false
      }
    }
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


.main-wrapper
  // position: absolute
  // top: 60%
  // left: 0
  // +transform(translateY(-60%))
  +respond-to(desktop)
    padding-top: px2vw(170px, $break-large)
    margin-left: px2vw(104px, $break-large)




.now-time
  text-shadow: none
  position: absolute
  color: #fff
  font-size: px2vw(49px, $break-large)
  letter-spacing: 2px
  +respond-to(desktop)
    top: px2vw(-2px, $break-large)
    left: px2vw(158px, $break-large)



.reload-btn
  +respond-to(desktop)
    bottom: px2vw(32px, $break-large)
    left: px2vw(445px, $break-large)




.mainAttention-poetry
  position: relative
  display: inline-block
  width: 68%
  border-left: 9px solid #fff
  box-sizing: border-box
  +respond-to(desktop)
    top: px2vw(27px, $break-large)
    left: px2vw(60px, $break-large)
    li:hover
      background: #fff
      color: $blue
      text-shadow: none
    li
      padding-left: px2vw(42px, $break-large)
      padding-top: px2vw(3px, $break-large)
      padding-bottom: px2vw(3px, $break-large)
      margin-bottom: px2vw(40px, $break-large)
      div
        display: inline-block
        vertical-align: middle
    li:last-of-type
      margin-bottom: 0


.image-wrapper
  a, .btn-info
    +size(px2vw(22px, $break-large))
    display: inline-block
    vertical-align: middle
    cursor: pointer
    +respond-to(desktop)
      margin-right: px2vw(15px, $break-large)
    // background: url(../../assets/images/icon-add.svg)

.poetry-info01
  +respond-to(desktop)
    font-size: px2vw(20px, $break-large)
    width: px2vw(100px, $break-large)
  h3
    +respond-to(desktop)
      font-size: px2vw(20px, $break-large)



.poetry-info03
  +respond-to(desktop)
    width: px2vw(360px, $break-large)
    margin-left: px2vw(28px, $break-large)
  h3
    +respond-to(desktop)
      font-size: px2vw(25px, $break-large)

.content-font
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  text-align: left




.b-write
  background: #fff

.b-transparent
  background: transparent

.f-blue
  color: $blue
  text-shadow: none

.f-white
  color: #fff
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue

</style>



