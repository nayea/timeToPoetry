<template>
<div id="whatIsTimeToPoetry">
  <div class="whatIsTimeToPoetry-wrapper">

    <div class="white-area">
      <div @mouseover="mouseoverWhite(), mouseleaveWhole()" @mouseleave="mouseleaveWhite(), mouseoverWhole()"><span class="white-circle-shape white-circle-1"></span><h1>시간 이란?</h1></div>
      <div :class="buttonWhole ? 'whole-active': 'whole-none'">
      <span class="white-circle-shape white-circle-small-size white-circle-2"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-3"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-4"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-5"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-6"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-7"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-8"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-9"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-10"></span>
      </div>
      <div :class="buttonWhite ? 'white-active': 'white-none'">
      <span class="white-circle-shape white-circle-small-size white-circle-2"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-3"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-4"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-5"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-6"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-7"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-8"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-9"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-10"></span>
      </div>
    </div>
    
    <!-- <div class="white-area" :class="buttonWhole ? 'whole-active': 'whole-none'">
      <span class="white-circle-shape white-circle-1"></span><h1>시간 이란?</h1>
      <span class="white-circle-shape white-circle-small-size white-circle-2"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-3"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-4"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-5"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-6"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-7"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-8"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-9"></span>
      <span class="white-circle-shape white-circle-small-size white-circle-10"></span>
    </div> -->
    <div class="white-area-text" :class="buttonWhite ? 'white-active': 'white-none' " >
      <p>시를 듣는 시간</p>
      <p>시간은 우리의 일상을 그려낸 다양한 시를 읽어드립니다.<br>
        하루의 시작, 이동 중, 휴식 그리고 마무리 시간에<br> 
        시 낭독음원을 들어보는 건 어떨까요?</p>
      <p>감미로운 목소리, 인디 뮤지션의 bgm 그리고 일러스트가<br>
          만난 시 낭독 음원<br>
          시인들의 신작 시를 시집이 아닌 작품별로 골라보며 언제 어디서나<br>
          편하게 즐겨보세요.</p>
    </div>

    <div class="pink-area wrapper-position" :class="buttonPink? 'pink-active': 'pink-none'">
      <span class="pink-circle-shape circle-position pink-circle-1 "></span>
      <span class="pink-circle-shape circle-position pink-circle-3 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-2 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-9 "></span>
      <span class="pink-circle-shape circle-position pink-circle-4 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-5 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-6 "></span>
      <span class="pink-circle-shape circle-position pink-circle-7 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-8 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-10 "></span>
    </div>
     <div class="pink-area wrapper-position" :class="buttonWhole ? 'whole-active': 'whole-none'">
      <span class="pink-circle-shape circle-position pink-circle-1 "></span>
      <span class="pink-circle-shape circle-position pink-circle-3 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-2 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-9 "></span>
      <span class="pink-circle-shape circle-position pink-circle-4 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-5 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-6 "></span>
      <span class="pink-circle-shape circle-position pink-circle-7 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-8 circle-shape-border"></span>
      <span class="pink-circle-shape circle-position pink-circle-10 "></span>
    </div>
    <div class="pink-area-text wrapper-position" :class="buttonPink? 'pink-active': 'pink-none'">
        <p>'나의 시집' 에 듣고 싶은 작품을 담아</p>
        <p>나만의 시집을 만들어 보세요.</p>
    </div>

    <div class="gray-area wrapper-position" :class="buttonGray ? 'gray-active': 'gray-none'">
      <span class="gray-circle-shape circle-position gray-circle-1 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-2 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-3 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-4 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-5 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-6 "></span>
      <span class="gray-circle-shape circle-position gray-circle-7 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-8 "></span>
      <span class="gray-circle-shape circle-position gray-circle-9 "></span>
    </div>
     <div class="gray-area wrapper-position" :class="buttonWhole ? 'whole-active': 'whole-none'">
      <span class="gray-circle-shape circle-position gray-circle-1 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-2 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-3 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-4 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-5 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-6 "></span>
      <span class="gray-circle-shape circle-position gray-circle-7 circle-shape-border"></span>
      <span class="gray-circle-shape circle-position gray-circle-8 "></span>
      <span class="gray-circle-shape circle-position gray-circle-9 "></span>
    </div>
    <div class="gray-area-text wrapper-position" :class="buttonGray ? 'gray-active': 'gray-none' ">
        <p>그리고 마음에 드는 작품에는 '좋은 시간'</p>
        <p class="gray-area-text-second">버튼을 눌러주세요.</p>
    </div>

    <div class="blue-area wrapper-position" :class="buttonBlue ? 'blue-active': 'blue-none'" >
      <span class="blue-circle-shape circle-position blue-circle-1 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-2 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-11 "></span>
      <span class="blue-circle-shape circle-position blue-circle-3 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-4 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-5 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-8 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-7 "></span>
      <span class="blue-circle-shape circle-position blue-circle-6 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-9 "></span>
      <span class="blue-circle-shape circle-position blue-circle-10 "></span>
      <span class="blue-circle-shape circle-position blue-circle-12 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-13 "></span>
      <span class="blue-circle-shape circle-position blue-circle-14 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-15 "></span>
      <span class="blue-circle-shape circle-position blue-circle-16 "></span>
      <span class="blue-circle-shape circle-position blue-circle-17 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-18 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-19 "></span>
      <span class="blue-circle-shape circle-position blue-circle-20 "></span>
      <span class="blue-circle-shape circle-position blue-circle-21 circle-shape-border"></span>
    </div>

    <div class="blue-area wrapper-position" :class="buttonWhole ? 'whole-active': 'whole-none'">
      <span class="blue-circle-shape circle-position blue-circle-1 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-2 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-11 "></span>
      <span class="blue-circle-shape circle-position blue-circle-3 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-4 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-5 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-8 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-7 "></span>
      <span class="blue-circle-shape circle-position blue-circle-6 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-9 "></span>
      <span class="blue-circle-shape circle-position blue-circle-10 "></span>
      <span class="blue-circle-shape circle-position blue-circle-12 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-13 "></span>
      <span class="blue-circle-shape circle-position blue-circle-14 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-15 "></span>
      <span class="blue-circle-shape circle-position blue-circle-16 "></span>
      <span class="blue-circle-shape circle-position blue-circle-17 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-18 circle-shape-border"></span>
      <span class="blue-circle-shape circle-position blue-circle-19 "></span>
      <span class="blue-circle-shape circle-position blue-circle-20 "></span>
      <span class="blue-circle-shape circle-position blue-circle-21 circle-shape-border"></span>
    </div>
    <div class="blue-area-text wrapper-position" :class="buttonBlue ? 'blue-active': 'blue-none'">
      <div class="blue-area-text-first">
        <p>'지금 몇 시'를 통해 지금 날씨에</p>
        <p>어울리는 작품을 추천해드립니다.</p>
      </div>
      <div class="blue-area-text-second circle-position">
        <p>'월간 몇 시'를 통해 매월 새로운</p>
        <p>시 낭독 음원을 전달해드립니다.</p>
      </div>
    </div> 




    <div class="btn-wrapper circle-position">
      <span class="blue-circle-shape circle-shape-border" @mouseover="mouseoverBlue(), mouseleaveWhole()" @mouseleave="mouseleaveBlue(), mouseoverWhole()"></span>
      <span class="pink-circle-shape circle-shape-border" @mouseover="mouseoverPink(), mouseleaveWhole()" @mouseleave="mouseleavePink(), mouseoverWhole()"></span>
      <span class="gray-circle-shape circle-shape-border" @mouseover="mouseoverGray(), mouseleaveWhole()" @mouseleave="mouseleaveGray(), mouseoverWhole()"></span>
    </div>


  </div>
</div>
</template>

<script>


export default {

  name: 'mainNews',
  data() {
    return {
     pinkBtn: true,
     blueBtn: true,
     grayBtn: true,
     whiteBtn: false,
     buttonBlue: false,
     buttonPink: false,
     buttonGray: false,
     buttonWhite: false,
     buttonWhole: true,
    };
  },
  methods:{
     mouseoverWhole: function(){
       this.buttonWhole = true;
     },
      mouseleaveWhole: function(){
       this.buttonWhole = false;
     },
     mouseoverBlue: function(){
       this.buttonBlue = true;
     },
      mouseleaveBlue: function(){
       this.buttonBlue = false;
     },
     mouseoverPink: function(){
       this.buttonPink = true;
     },
     mouseleavePink: function(){
       this.buttonPink = false;
     },
     mouseoverGray: function(){
       this.buttonGray = true;
     },
     mouseleaveGray: function(){
       this.buttonGray = false;
     },
     mouseoverWhite: function(){
       this.buttonWhite = true;
     },
     mouseleaveWhite: function(){
       this.buttonWhite = false;
     },
    pinkChange: function(){
        this.pinkBtn = !this.pinkBtn;
     },
     blueChange: function(){
        this.blueBtn = !this.blueBtn;
     },
    grayChange: function(){
        this.grayBtn = !this.grayBtn;
     },
    whiteChange: function(){
        this.whiteBtn = !this.whiteBtn;
     },
  },
  computed:{
   
  },
  mounted: function(){

  }
  };
</script>


<style lang="sass" scoped>
@import './scss/help.scss'
@import './scss/common.sass'

.pink-none,
.gray-none,
.blue-none,
.white-none,
.whole-none
  display: none

.pink-active,.gray-active,.blue-active,.white-active, .whole-active
  display: block

.circle-shape-border
  border: 1px solid $black



.whatIsTimeToPoetry-wrapper
  position: relative
  +respond-to(desktop)
    height: px2vw(430px, $break-large)
    padding-top: px2vw(100px, $break-large)
    margin-left: px2vw(190px, $break-large)

.circle-position
  position: absolute

.wrapper-position
  position: absolute
  +respond-to(desktop)
    margin-top: px2vw(100px, $break-large)

.white-circle-shape
  display: inline-block
  border: 1px solid $black
  border-radius: 50%

.blue-circle-shape
  display: inline-block
  border-radius: 50%
  background: $light-blue

.pink-circle-shape
  display: inline-block
  border-radius: 50%
  background: $pink

.gray-circle-shape
  display: inline-block
  border-radius: 50%
  background: $gray

.btn-wrapper
  left: px2vw(530px, $break-large)
  bottom: px2vw(-50px, $break-large)
  span
    display: inline-block
    cursor: pointer
    +respond-to(desktop)
      +size(px2vw(29px, $break-large))
      margin-left: px2vw(20px, $break-large)





.gray-area-text
  z-index: 1
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  color: $gray
  +respond-to(desktop)
    top: px2vw(200px, $break-large)
    left: px2vw(60px, $break-large)
  p
    text-align: right
    +respond-to(desktop)
      font-size: px2vw(40px, $break-large)
      margin-bottom: px2vw(31px, $break-large)
  .gray-area-text-second
    position: relative
    left: px2vw(105px, $break-large)

.gray-area
  top: 0
  left: 0
  .gray-circle-1
    top: px2vw(210px, $break-large)
    left: px2vw(80px, $break-large)
    +size(px2vw(41px, $break-large))
  .gray-circle-2
    top: px2vw(140px, $break-large)
    left: px2vw(165px, $break-large)
    +size(px2vw(123px, $break-large))
  .gray-circle-3
    top: px2vw(165px, $break-large)
    left: px2vw(250px, $break-large)
    +size(px2vw(140px, $break-large))
  .gray-circle-4
    top: px2vw(150px, $break-large)
    left: px2vw(300px, $break-large)
    +size(px2vw(38px, $break-large))
  .gray-circle-5
    top: px2vw(205px, $break-large)
    left: px2vw(360px, $break-large)
    +size(px2vw(57px, $break-large))
  .gray-circle-6
    top: px2vw(160px, $break-large)
    left: px2vw(410px, $break-large)
    +size(px2vw(140px, $break-large))
  .gray-circle-7
    top: px2vw(195px, $break-large)
    left: px2vw(500px, $break-large)
    +size(px2vw(140px, $break-large))
  .gray-circle-8
    top: px2vw(185px, $break-large)
    left: px2vw(640px, $break-large)
    +size(px2vw(78px, $break-large))
  .gray-circle-9
    top: px2vw(220px, $break-large)
    left: px2vw(700px, $break-large)
    +size(px2vw(140px, $break-large))


.pink-area-text
  z-index: 1
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  color: $pink
  +respond-to(desktop)
    top: px2vw(85px, $break-large)
    left: px2vw(110px, $break-large)
  p
    text-align: right
    +respond-to(desktop)
      font-size: px2vw(40px, $break-large)
      margin-bottom: px2vw(20px, $break-large)

.pink-area
  top: 0
  left: 0
  .pink-circle-1
    top: px2vw(80px, $break-large)
    left: px2vw(30px, $break-large)
    +size(px2vw(56px, $break-large))
  .pink-circle-2
    top: px2vw(60px, $break-large)
    left: px2vw(97px, $break-large)
    +size(px2vw(92px, $break-large))
  .pink-circle-3
    top: px2vw(10px, $break-large)
    left: px2vw(163px, $break-large)
    +size(px2vw(140px, $break-large))
  .pink-circle-4
    top: px2vw(30px, $break-large)
    left: px2vw(360px, $break-large)
    +size(px2vw(113px, $break-large))
  .pink-circle-5
    top: px2vw(70px, $break-large)
    left: px2vw(555px, $break-large)
    +size(px2vw(28px, $break-large))
  .pink-circle-6
    top: px2vw(0px, $break-large)
    left: px2vw(555px, $break-large)
    +size(px2vw(69px, $break-large))
  .pink-circle-7
    top: px2vw(120px, $break-large)
    left: px2vw(630px, $break-large)
    +size(px2vw(140px, $break-large))
  .pink-circle-8
    top: px2vw(180px, $break-large)
    left: px2vw(610px, $break-large)
    +size(px2vw(48px, $break-large))
  .pink-circle-9
    top: px2vw(80px, $break-large)
    left: px2vw(400px, $break-large)
    +size(px2vw(193px, $break-large))
  .pink-circle-10
    top: px2vw(140px, $break-large)
    left: px2vw(180px, $break-large)
    +size(px2vw(108px, $break-large))


.blue-area-text
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  color: $light-blue
  +respond-to(desktop)
    top: px2vw(-30px, $break-large)
    left: px2vw(280px, $break-large)
  p
    +respond-to(desktop)
      font-size: px2vw(40px, $break-large)
      margin-bottom: px2vw(20px, $break-large)
  .blue-area-text-second
    +respond-to(desktop)
      top: px2vw(270px, $break-large)
      left: px2vw(-170px, $break-large)
    p
      margin-bottom: px2vw(33px, $break-large)





.blue-area
  top: 0
  left: 0
  .blue-circle-1
    top: px2vw(-70px, $break-large)
    left: px2vw(240px, $break-large)
    +size(px2vw(98px, $break-large))
  .blue-circle-2
    top: px2vw(-35px, $break-large)
    left: px2vw(343px, $break-large)
    +size(px2vw(70px, $break-large))
  .blue-circle-3
    top: px2vw(-5px, $break-large)
    left: px2vw(435px, $break-large)
    +size(px2vw(30px, $break-large))
  .blue-circle-4
    top: px2vw(-21px, $break-large)
    left: px2vw(540px, $break-large)
    +size(px2vw(61px, $break-large))
  .blue-circle-5
    top: px2vw(-45px, $break-large)
    left: px2vw(630px, $break-large)
    +size(px2vw(38px, $break-large))
  .blue-circle-6
    top: px2vw(-55px, $break-large)
    left: px2vw(710px, $break-large)
    +size(px2vw(84px, $break-large))
  .blue-circle-7
    top: px2vw(5px, $break-large)
    left: px2vw(730px, $break-large)
    +size(px2vw(114px, $break-large))
  .blue-circle-8
    top: px2vw(25px, $break-large)
    left: px2vw(685px, $break-large)
    +size(px2vw(86px, $break-large))
  .blue-circle-9
    top: px2vw(20px, $break-large)
    left: px2vw(610px, $break-large)
    +size(px2vw(86px, $break-large))
  .blue-circle-10
    top: px2vw(40px, $break-large)
    left: px2vw(570px, $break-large)
    +size(px2vw(69px, $break-large))
  .blue-circle-11
    top: px2vw(10px, $break-large)
    left: px2vw(430px, $break-large)
    +size(px2vw(122px, $break-large))
  .blue-circle-12
    top: px2vw(33px, $break-large)
    left: px2vw(266px, $break-large)
    +size(px2vw(65px, $break-large))
  .blue-circle-13
    top: px2vw(33px, $break-large)
    left: px2vw(200px, $break-large)
    +size(px2vw(52px, $break-large))
  .blue-circle-14
    top: px2vw(190px, $break-large)
    left: px2vw(30px, $break-large)
    +size(px2vw(30px, $break-large))
  .blue-circle-15
    top: px2vw(185px, $break-large)
    left: px2vw(83px, $break-large)
    +size(px2vw(108px, $break-large))
  .blue-circle-16
    top: px2vw(290px, $break-large)
    left: px2vw(65px, $break-large)
    +size(px2vw(65px, $break-large))
  .blue-circle-17
    top: px2vw(260px, $break-large)
    left: px2vw(210px, $break-large)
    +size(px2vw(177px, $break-large))
  .blue-circle-18
    top: px2vw(270px, $break-large)
    left: px2vw(366px, $break-large)
    +size(px2vw(78px, $break-large))
  .blue-circle-19
    top: px2vw(190px, $break-large)
    left: px2vw(420px, $break-large)
    +size(px2vw(78px, $break-large))
  .blue-circle-20
    top: px2vw(180px, $break-large)
    left: px2vw(480px, $break-large)
    +size(px2vw(213px, $break-large))
  .blue-circle-21
    top: px2vw(320px, $break-large)
    left: px2vw(470px, $break-large)
    +size(px2vw(70px, $break-large))

.white-area-text
  position: relative
  top: 0
  left: 0
  p
    font-weight: 700
    color: $black
    +respond-to(desktop)
      font-size: px2vw(26px, $break-large)
      margin-bottom: px2vw(30px, $break-large)

.white-area
  cursor: pointer
  position: relative
  h1
    color: $light-gray
    position: absolute
    top: 0
    left: 0
    text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
    +respond-to(desktop)
      font-size: px2vw(56px, $break-large)
  .white-circle-small-size
    position: absolute
    +size(px2vw(30px, $break-large))
  .white-circle-1
    position: relative
    top: px2vw(-30px, $break-large)
    left: px2vw(-50px, $break-large)
    +size(px2vw(115px, $break-large))
  .white-circle-2
    top: px2vw(120px, $break-large)
    left: px2vw(-5px, $break-large)
  .white-circle-3
    top: px2vw(180px, $break-large)
    left: px2vw(-5px, $break-large)
  .white-circle-4
    top: px2vw(180px, $break-large)
    left: px2vw(384px, $break-large)
  .white-circle-5
    top: px2vw(213px, $break-large)
    left: px2vw(75px, $break-large)
  .white-circle-6
    top: px2vw(213px, $break-large)
    left: px2vw(432px, $break-large)
  .white-circle-7
    top: px2vw(335px, $break-large)
    left: px2vw(50px, $break-large)
  .white-circle-8
    top: px2vw(365px, $break-large)
    left: px2vw(-5px, $break-large)
  .white-circle-9
    top: px2vw(365px, $break-large)
    left: px2vw(150px, $break-large)
  .white-circle-10
    top: px2vw(365px, $break-large)
    left: px2vw(205px, $break-large)


    


</style>



