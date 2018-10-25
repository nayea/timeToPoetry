<template>


<div id="mainNewsInfo">
    <div class="content-info">
        <p>{{text}}</p>
    </div>
 <div class="mainNewsImage">
      <button @click="popupControl()"></button>
      <img v-bind:src="Imageurl" v-bind:alt="title">
  </div>

   <h1 class="menu-title-news" v-if="length == 5 ">
        <div class="menu-title-up"><span>{{menu[0]}}</span><span>{{menu[1]}}</span><span>{{menu[2]}}</span></div>
        <div class="menu-title-dot">.</div> 
        <div class="menu-title-down"><span>{{menu[3]}}</span><span>{{menu[4]}}</span></div></h1>
   
    <h1 class="menu-title-news-other" v-else>
        <div class="menu-title-up-other"><span>{{menu[0]}}</span><span>{{menu[1]}}</span></div>
        <div class="menu-title-dot-other">.</div> 
        <div class="menu-title-down-other"><span>{{menu[2]}}</span><span>{{menu[3]}}</span></div></h1>

  <div class="mainNewsPopup" v-bind:style="popupStyle" :class="popup? 'popup-active': 'popup-none'">
      <div class="content-image">
      <button @click="popupControl()"></button>
      <img v-bind:src="Imageurl" v-bind:alt="title">
      </div>
  </div>
   <div class="black" v-bind:style="popupStyle" :class="popup? 'popup-active': 'popup-none'"></div>

</div>


</template>

<script>

import axios from 'axios';


export default {
  name: 'mainNewsBottom',
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
    menu: {
      type: Array
    }
  },
  data() {
    return {
      loadig: false,
      bottomWidth : null,
      bottomHeight : null,
      popupStyle : '',
      popup: false,
      Imageurl: '',
      title: '',
      length : null,
      text: '',
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
      this.Imageurl = this.poem[0]
      // this.title = this.poem[1]
      this.length =this.menu.length
      this.text = this.poem[1]
      
     },
     reload (){
      this.$router.go(this.$router.currenRoute)
    },
     sizeControl: function(){
       let bottomWidth = window.screen.width;
        // let height = window.screen.height ;
        // let bottomHeight = height - 550;
        // this.boxStyle = `width:2000px; height:${bottomHeight}px; background: #FFD8CB; position: absolute; left: -140px; top: 100%;`
        // this.scrollStyle = `height:17.7159vw;`
        this.popupStyle = `width:${bottomWidth + 50}px; height:200vh;`
    },
    popupControl : function(){
      this.popup = !this.popup;
    },
  isTheOne(poet){
      return poet.id === this.id
   }
  },
  mounted: function () {
       this.sizeControl();
    
    
    },
};

</script>



<style lang="sass" scoped>
@import '../scss/help.scss'

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
    right: px2vw(-10px, $break-large)
    z-index: 6
    +size(px2vw(25px, $break-large))
    background: url("../../assets/images/icon-plus.svg") no-repeat


.menu-title-news
  z-index: 1
  position: relative
  display: inline-block
  color: $pink
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  +respond-to(desktop)
    font-size: px2rem(30px)
    top: px2vw(50px, $break-large)
    left: px2vw(30px, $break-large)
  span
    display: block
    position: relative
    top: -10px
  .menu-title-up span:nth-of-type(3), .menu-title-down span:nth-of-type(2)
    top: -20px
  .menu-title-up span:nth-of-type(1)
    top: 0px




.menu-title-news::after
  content: ')'
  display: inline-block
  position: absolute
  +respond-to(desktop)
    top: px2rem(120px)
    left: px2vw(30px, $break-large)


.menu-title-dot
  position: absolute
  top: px2vw(42px, $break-large)
  left: px2vw(8px, $break-large)


.menu-title-news-other
  z-index: 1
  position: relative
  display: inline-block
  color: $pink
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  +respond-to(desktop)
    font-size: px2rem(30px)
    top: px2vw(80px, $break-large)
    left: px2vw(30px, $break-large)
  span
    display: block
    position: relative
    top: -10px
  span:nth-of-type(1)
    top: 0px



.menu-title-news-other::after
  content: ')'
  display: inline-block
  position: absolute
  +respond-to(desktop)
    top: px2rem(93px)
    left: px2vw(30px, $break-large)


.menu-title-dot-other
  position: absolute
  top: px2vw(27px, $break-large)
  left: px2vw(8px, $break-large)




.mainNewsPopup
  display: none
  +transform(translate(-20%, 0))
  position: absolute
  top: -20%
  left: 50%
  z-index: 50
  .contet-info
    float: left
    width: px2vw(466px, $break-large)
    margin-left: px2vw(40px, $break-large)
    margin-top: px2vw(68px, $break-large)
.content-image
  position: absolute
  margin-top: px2vw(68px, $break-large)
  margin-left: px2vw(50px, $break-large)
  img
    +size(px2vw(428px, $break-large))
  button
    position: absolute
    cursor: pointer
    top: px2vw(20px, $break-large)
    right: px2vw(20px, $break-large)
    z-index: 2
    +size(px2vw(25px, $break-large))
    background: url("../../assets/images/icon-close.svg") no-repeat

.popup-active
  display: block

.popup-none
  display: none

.black
  z-index: 49
  background: rgba(0,0,0,0.5)
  position: absolute
  top: px2vw(-230px, $break-large)
  left: px2vw(-97px, $break-large)


</style>

