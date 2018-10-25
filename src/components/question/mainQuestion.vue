<template>
<div id="mainQuestion">
  <div class="wrapper clearfix">
    <h1 class="menu-title">
        <div><span>시</span><span>간</span></div>
        <div class="menu-title-bottom">.</div>
        <div><span>문</span><span>의</span></div></h1>

    <div class="content-wrapper">
      <h1 class="title">시간<br>문의</h1>
      <div class="mainQuestion-menu">
       <span class="circle-w"></span><h2>자주 묻는 문의사항</h2>
        <span class="circle-w-r"></span><router-link :to="{ name: 'mainQuestionWriting'}">글쓰기</router-link>

      </div>
      
      <div class="accordion"><AccordionMenu :contents="contents"></AccordionMenu></div>
      <!-- <span class="circle-w-c"></span>
      <span class="circle-w-c"></span>
      <span class="circle-w-c"></span>
      <span class="circle-w-c"></span> -->

    
    </div>

  </div>
</div>
</template>

<script>

import Vue from 'vue'
import { AccordionMenu } from 'vue-accordion-menu'

Vue.component('AccordionMenu', AccordionMenu)
export default {

  name: 'mainNews',
  data() {
    return {
      poetrys:[],
      newPoetrys: [],
       contents: [
    {
      title: '어떻게 원하는 시를 찾죠?',
      msg: '안녕하세요. 일단 시간 앱을 다운받아주셔서 고맙습니다. 죄송하게도 아직 앱에는 검색기능이 추가되어 있지 않습니다. 현재 시간 웹사이트 개발 중으로, 홈페이지가 오픈되면 앱도 함께 업그레이드 될 예정입니다. 업그레이드 사항 중 검색기능도 포함되어 있으니 지금은 불편하시겠지만 조금만 기다려주시면 열심히 개발해 소식 전하겠습니다. 고맙습니다.',
    },
    {
      title: '무료로 듣는거예요?',
      msg: '네, 지금 앱에 올라와있는 시 낭독음원은 모두 무료로, 무제한 스트리밍하실 수 있어요 :-) 시간은 현재 활발하게 활동하시는 시인분들의 신작시를 인디뮤지션 그리고 성우학과 낭독자와 협업해 시 낭독음원으로 들려드립니다. 음악처럼 편하게 시를 들으면서 즐길 수 있는 시간 되겠습니다. 고맙습니다.',
    },
    {
      title: '개인이 녹음해서 올리는 건 어떻게 하나요?',
      msg: '낭독 업로드에 관한 문의 답변드립니다. 현재 시간 앱에서 발행하는 음원은 시간에서 자체 제작한 것입니다. 시간팀 낭독자, 한국방송예술교육진흥원 성우학과 재학생 및 졸업생들이 교육을 받고 참여하고 있습니다. 현재 서비스에서는 저작권 관리를 위해 아쉽게도 개인 업로드가 불가능한 상태입니다. 다만 개발 중인 웹사이트에서는 개인 계정으로도 업로드할 수 있도록 준비 중 입니다. 시간의 앱에 올라오는 시는 모두 시인으로부터 저작권 이용 허락을 받은 후 등록됩니다. 시간에서 시를 듣고 즐겨주셔서 고맙습니다.',
    },
    ],
    };
  },
   methods:{
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
  },
  computed:{

  },
  mounted: function(){

  }
  };
</script>


<style lang="sass" scoped>
@import '../scss/help.scss'
@import '../scss/common.sass'


.accordion
  width: 80%
  position: absolute
  top: px2vw(190px, $break-large)
  left: px2vw(127px, $break-large)
  background: $light-gray



.faq-description .faq-number
  display: none !important

.content-wrapper
  padding-top: px2vw(100px, $break-large)


.title::before
  font-weight: 700


.title
  float: left
  +respond-to(desktop)
    font-size: px2vw(55px, $break-large)



.mainQuestion-menu
  float: left
  position: relative
  top: 50%
  +transform(translateY(-100%))
  width: 80%
  border-bottom: 3px solid $blue
  margin-left: px2vw(30px, $break-large)
  h2
    display: inline-block
    position: relative
    font-size: px2vw(25px, $break-large)
    color: $black
    margin-bottom: px2vw(15px, $break-large)
  a
    position: absolute
    top: 0
    right: 0
    font-size: px2vw(25px, $break-large)
    color: $black
    font-weight: 700
    margin-bottom: px2vw(15px, $break-large)



.circle-w
  position: relative
  top: px2vw(-5px, $break-large)
  left: px2vw(20px, $break-large)
  +respond-to(desktop)
    +size(px2vw(30px, $break-large))

.circle-w-r
  position: relative
  top: px2vw(-5px, $break-large)
  left: px2vw(410px, $break-large)
  +respond-to(desktop)
    +size(px2vw(30px, $break-large))


.circle-w-c
  position: absolute
  top: px2vw(230px, $break-large)
  left: px2vw(200px, $break-large)
  +respond-to(desktop)
    +size(px2vw(30px, $break-large))


.menu-title
  z-index: 1
  +respond-to(desktop)
    bottom: px2vw(40px, $break-large)
  span
    display: block
    position: relative
    top: -10px
  span:nth-of-type(1)
    top: 0

.menu-title-bottom
  position: absolute
  top: px2vw(45px, $break-large)
  left: px2vw(11px, $break-large)

.menu-title::after
  +respond-to(desktop)
    top: px2rem(170px)
    left: px2vw(60px, $break-large)


</style>

<style>


.faq-container {

  margin: 0 auto;
}
.faq-question {
  padding: 0px;
  transition: all 0.3s;
}
.faq-content {
  padding: 10px;
  width: 83%;
  margin-left: 7%;
  font-size: 20px;
  font-weight: 200;
  /* position: relative;
  top: 0;
  right: 0; */
  border: 3px solid #567bb0;
}
@media (min-width: 1240px) {
/* .faq-description::before{
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: 20px;
  background: #fff;
  border-radius: 50px;
  width: 30px;
  height: 30px;

} */
.faq-description {
  font-size: 25px;
  position: relative;
  color: #333333;
  font-weight: 700;
  letter-spacing: -1.03px;
  padding: 15px 100px 15px 40px;
  /* border-top: 1px solid #d1d3d4; */
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
}
}

.faq-description span:last-child {
  /* display: none; */
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  position: absolute;
  right: 20px;
  top: 0px;
  color: #979797;
  font-size: 2em;
}

.faq-description .faq-number {
  display: none;
  width: 30px;
  height: 30px;
  line-height: 28px;
  /* border: 1px solid black; */
  background: #fff;
  padding-right: 1px;
  /* display: inline-block; */
  text-align: center;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  margin-right: 10px;
  font-size: 20px;
  color: transparent;
  letter-spacing: -0.86px;
  position: absolute;
  top: 20px;
  left: 30px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: normal;
}
.faq-question.open {
  /* background: #f7f7f7; */
}
.faq-question.open .faq-description {
  font-weight: 600;
}
.faq-question.open .faq-description .faq-number {
  display: none;
  /* color: white;
  background: #4a4a4a; */
}
.faq-question.open .faq-description span:last-child {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  font-weight: normal;
}
@media (max-width: 767px) {
.faq-container {
    width: 100%;
    border-radius: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #D9D9D9;
    padding: 0;
}
.content-title {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
}
.faq-description {
    font-size: 18px;
}
.faq-question .faq-description span:last-child {
    top: 8px;
}
}


</style>



