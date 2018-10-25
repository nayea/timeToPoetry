<template>
  <div id="up" v-bind:style="backStyle">
    <a href="/" class="logo" alt="시를 듣는 시간"><img src="../assets/images/icon-logo.svg"></a>
    <header>
    <div class="side-search">
      <!-- <img src="../assets/images/icon-search.svg" alt="검색">
      <input id="input" type="text" v-focus="focused" @focus="focused = true" @blur="focused = false" >
      <a role="button" href="/" :class="[ focused ? 'search-active' : 'search-none' ]"><span>검색하기</span></a> -->
    </div>
     <div class="side-user">
      <div class="side-user-info-wrapper">
      <!-- <img src="../assets/images/icon-user.svg" alt="로그인 버튼"> -->
       <div class="user-info">
          <!-- <a href="" class="side-user-login">로그인</a>
         <span class="side-user-dot"></span>

         <a href="/SignUp" class="side-user-signup">회원가입</a> -->
       </div>
       </div>
       <div class="size-myPoetry-wrapper">
         <!-- <a href=""><img src="../assets/images/icon-myPoetry.svg" alt="나의 시집 버튼" @mouseover="mouseoverMyPoetry()" @mouseleave="mouseleaveMyPoetry()"></a>
         <span :class="buttonMyPoetry? 'myPoetry-active': 'myPoetry-none'">나의 시집</span> -->
       </div>
    </div>
    </header>

    <div class="mobile-menu" @click="mobileMenuSelect()">
      <button>메뉴</button>
    </div>
    <ul :class="menuOn? 'menu-active': 'menu-none'" >
      <li><router-link :to="{ name: 'Landing'}" active-class="my-active-class" exact>시간이란?</router-link></li>
      <!-- <li><router-link :to="{ name: 'mainMonthly'}">월간 몇시</router-link></li>
      <li><router-link :to="{ name: 'mainAttention'}">주목. 몇시</router-link></li>
      <li><router-link :to="{ name: 'mainReading'}">읽는 시간</router-link></li> -->
      <li><router-link :to="{ name: 'mainNews'}">시간.소식</router-link></li>
      <li><router-link :to="{ name: 'mainQuestion'}">시간.문의</router-link></li>
      <!-- <li><router-link :to="{ name: 'mainVoucher'}">이용권구매</router-link></li> -->
    </ul>

    </div>

</template>



<script>
import { focus } from 'vue-focus';
export default {
  directives: { focus: focus },
  data(){
    return{
      buttonSearch: true,
      buttonMyPoetry: false,
      focused: false,
      inputReset: null,
      url: null,
      urlPara: null,
      backStyle: '',
      menuOn: false
    }
  },
   created () {
    this.backgroundStyle()
  },
  watch: {
    '$route': 'backgroundStyle',
  },
   methods: {
     mouseoverMyPoetry: function(){
       this.buttonMyPoetry = true;
     },
      mouseleaveMyPoetry: function(){
       this.buttonMyPoetry = false;
     },
     backgroundStyle: function(){
       this.url = window.location.pathname;
       this.urlPara = this.url.split('/').reverse();
       if(this.urlPara[0] === 'SignUp'){
         this.backStyle = `background: #FFD8CB;`
       }
       else{
         this.backStyle = `background: #DFE0E5;`
       }
     },
      mobileMenuSelect: function(){
       this.menuOn = !this.menuOn;
    }
  },
  mounted: function(){
  }
};
</script>

<style lang="sass" scoped>
@import './scss/help.scss'

.menu-active
  display: block

.menu-none
  display: none



#up
  position: fixed
  top: 0
  left: 0
  z-index: 48
  width: 100%
  ul
    +respond-to(desktop)
      position: relative
      display: inline-block
      +flexboxJustify(center)
      top: px2rem(-19px)
      padding-right: px2rem(90px)
    +respond-to(mobile)
      position: relative
      top: px2rem(-10px)
      left: 0
      background-color: $light-gray
      width: percentage(260px/$break-small)
      margin-left: percentage(95px/$break-small)
      padding-top: percentage(20px/$break-small)
      padding-bottom: percentage(20px/$break-small)
  li
    +respond-to(desktop)
      margin-right: px2rem(50px)
    +respond-to(mobile)
      margin-bottom: percentage(45px/$break-small)
      text-align: center
  li a
    color: $black
    font-weight: 700
    +respond-to(desktop)
      font-size: px2vw(15px, $break-large)
      letter-spacing:px2rem(-0.3px)
    +respond-to(mobile)
      font-size: px2vw(24px, $break-small)
     


header
  +flexboxJustify(space-between)
  vertical-align: middle
  +respond-to(desktop)
    margin-top: px2rem(50px)
    // margin-top: px2rem(28px)

.logo
  display: inline-block
  position: absolute
  top: 0
  left: 50%
  +transform(translateX(-50%))
  +respond-to(desktop)
    margin-top: px2rem(18px)
  +respond-to(mobile)
    margin-top: px2rem(30px)



.logo img
  +respond-to(desktop)
    +size(px2vw(110px, $break-large) px2vw(40px, $break-large))
  +respond-to(mobile)
    +size(px2vw(86px, $break-small) px2vw(30px, $break-small))
 


.my-active-class::before
  content: '('
  display: inline-block
  margin-right: px2rem(9px)
  color: #ffffff
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px $black
  font-size: px2rem(17px)

.my-active-class::after
  content: ')'
  display: inline-block
  margin-left: px2rem(9px)
  color: #ffffff
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px $black
  font-size: px2rem(17px)


.mobile-menu
  position: relative
  +respond-to(desktop)
    display: none
  +respond-to(mobile)
    width: percentage(295px/$break-small)
    margin-left: auto
    margin-right: auto
    margin-top: percentage(40px/$break-small)
  button
    cursor: pointer
    +respond-to(mobile)
      font-size: px2vw(16px, $break-small)
      font-weight: 700
.mobile-menu::after
  +respond-to(mobile)
    content: ""
    width: 88%
    height: 1px
    display: inline-block
    background: $black
    position: absolute
    top: 50%
    right: 0
    +transform(translateY(-50%))
 

.side-search
  position: relative
  order: 0
  +respond-to(desktop)
    margin-left: px2vw(50px, $break-large)
  +respond-to(mobile)
    margin-top: px2vw(30px, $break-small)
    margin-left: px2vw(30px, $break-small)
  input
    display: block
    float: left
    background: $light-blue
    vertical-align: middle
    +respond-to(desktop)
      padding-left: px2rem(33px)
      +size(px2vw(145px, $break-large) px2vw(28px, $break-large))
      font-size: px2rem(15px)
    +respond-to(mobile)
      display: none
  img
    position: absolute
    z-index: 1
    +respond-to(desktop)
      +size(px2vw(15px, $break-large) px2vw(23px, $break-large))
      top: px2vw(3px, $break-large)
      left: px2vw(2px, $break-large)
    +respond-to(mobile)
      +size(px2vw(12px, $break-small) px2vw(18px, $break-small))
    


.search-none
  display: none

.search-active
  float: left
  position: relative
  background: $light-blue
  vertical-align: middle
  +respond-to(desktop)
    +size(px2vw(90px, $break-large) px2vw(28px, $break-large))
  span
    position: absolute
    top: 50%
    left: 50%
    color: $black
    font-weight: 700
    +transform(translate(-50%,-50%))
    +respond-to(desktop)
      font-size: px2rem(12px)




.side-user
  margin-right: px2vw(108px, $break-large)
  position: relative
  order: 2
  z-index: 1
  img
    display: inline-block
    vertical-align: top
    +respond-to(desktop)
      margin-right: px2vw(16px, $break-large)
      +size(px2rem(20px) px2rem(23px))

.user-info
  font-weight: 700
  display: inline-block
  +respond-to(desktop)
    font-size: px2rem(12px)
  a
    color: $black



.side-user-dot
  display: inline-block
  background: $black
  border-radius: 50px
  vertical-align: middle
  +respond-to(desktop)
    +size(px2vw(5px, $break-large))
    margin-left: px2vw(4px, $break-large)
    margin-right: px2vw(4px, $break-large)

.size-myPoetry-wrapper
  +respond-to(desktop)
    margin-top: px2vw(23px, $break-large)
  img
    +respond-to(desktop)
      +size(px2vw(20px, $break-large) px2vw(23px, $break-large))

.myPoetry-active
  display: inline-block
  position: relative
  top: px2vw(5px, $break-large)
  left: 0
  font-size: px2rem(15px)
  font-weight: 700
  color: $black



.myPoetry-none
  display: none

</style>

