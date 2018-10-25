<template>
<div>
  <!-- <h1 class="voucher-page-title">이<br>용<br>권<br>구<br>매</h1> -->
   <div class="voucher-wrapper clearfix">
     
     <div>
     <h2 class="title">공연 입장권</h2>
     <div class="main-content-wrapper">
       <div></div>
       <div class="main-content-explain"></div>
      </div>
      <div class="option-content-wrapper">
       <div @click="optionChange01()" v-bind:style="clickStyle01"><span class="option-title">옵션1</span><span class="option-content">유료 스트리밍 1개월 이용권</span><span class="option-price">+ 4000원</span></div>
       <div @click="optionChange02()" v-bind:style="clickStyle02" ><span class="option-title">옵션3</span><span class="option-content">엽서</span><span class="option-price">+ 2000원</span></div>
       <div @click="optionChange03()" v-bind:style="clickStyle03" ><span class="option-title">옵션3</span><span class="option-content">엽서 + 식음료</span><span class="option-price">+ 5000원</span></div>
      </div>
      <div class="price-wrapper">
        <div class="price-flex01">
        <span class="price-title">상품 가격</span>
        <span>13,000원</span>
        </div>

        <div @click="optionChange01Fal()" :class="buttonOption01? 'display-active': 'display-none'" >
        <div class="price-flex">
        <span class="price-title">옵션 선택</span>
        <span>+ 4000원</span>
        </div>
        </div>

        <div @click="optionChange02Fal()" :class="buttonOption02? 'display-active': 'display-none'">
        <div class="price-flex">
        <span class="price-title">옵션 선택</span>
        <span>+ 2000원</span>
        </div>
        </div>

        <div @click="optionChange03Fal()" :class="buttonOption03? 'display-active': 'display-none'">
        <div class="price-flex">
        <span class="price-title">옵션 선택</span>
        <span>+ 5000원</span>
        </div>
        </div>
      </div>
      <div class="pay-wrapper">
        <button>결제하기</button>
        <span>13,000원</span>
      </div>
    </div>

    <div class="voucher-content-wrapper">
     <h2 class="title">웰컴 패키지 + 유료 스트리밍 3개월 이용권</h2>
      <div class="voucher-option-content"></div>
      <div class="pay-wrapper">
        <button>결제하기</button>
        <span>13,000원</span>
      </div>
    </div>

    <div class="voucher-content-wrapper">
     <h2 class="title">공연 1회 + 유료 스트리밍 3개월 이용권</h2>
       <div class="voucher-option-content"></div>
        <div class="pay-wrapper">
        <button type="submit">문의하기</button>
        <div class="pay-wrapper-userinfo">
          <div>
          <label for="input text">성함 : </label>
          <input required type="text" maxlenth="200" name="name" class="name">
          </div>
          <div>
          <label for="input tel">연락처 : </label>
          <input required type="tel" maxlenth="11" name="tel" title="tel" pattern="[0-9]{11}">
          </div>
        </div>
      </div>
    </div>

     <div class="voucher-content-wrapper">
       <h3 class="buy-title">상품 구매 안내</h3>
       <ul>
        <li>- 등록 상품 구매 시 부가세 10%가 별도로 청구됩니다.</li>
        <li>- 구입하신 상품 및 이용권은 마이페이지에서 확인할 수 있습니다.</li>
        <li>- 모든 상품은 국내에서만 구매 가능합니다.</li>
        <li>- 기타 자세한 상품 별 안내는 구매 페이지에서 확인 가능합니다.</li>
        <li>- 본 이용권은 이용 시작일 기준 7일 이내 청약철회 가능한 이용권입니다. </li>
        <li>- 단, 이용내역이 있는 경우 이용금액 공제, 쿠폰 혜택을 받으신 경우 해당 금액 공제 후 환불 합니다.</li>
        <li>- 이용 시작일 기준 7일 경과 후에는 이용금액 공제 후 해지 가능합니다. </li>
        <li>- 이용 금액은 이미 경과된 기간(실제 사용 여부 불문)에 상응하는 금액, 이미 다운로드 받거나 다운로드 
        기간이 경과되어 이용할 수 없게 된 부분에 상응하는 금액을 말합니다.  </li>
        <li>- 미성년자가 법정대리인 동의 없이 계약을 체결한 경우, 미성년자 또는 법정대리인이 이를 취소할 수 있습니다.</li>
       </ul>
    </div>
  

  </div>
</div>
</template>

<script>


export default {
  name: 'mainVoucher',
  data() {
    return {
      buttonOption01: false,
      buttonOption02: false,
      buttonOption03: false,
      clickStyle01: "",
      clickStyle02: "",
      clickStyle03: "",
      buttonYear: false,

    };
  },
  methods:{
     optionChange01: function(){
       this.buttonOption01 = true;
       this.clickStyle01 = `background: #fff`;
     },
     optionChange01Fal: function(){
       this.buttonOption01 = false;
       this.clickStyle01 = `background: #DFE0E5`;
     },
     mouseOverOption01: function(){
       this.clickStyle01 = `background: #fff`;
     },
     mouseleaveOption01: function(){
       this.clickStyle01 = `background: #DFE0E5`;
     },
     optionChange02: function(){
       this.buttonOption02 = true;
       this.clickStyle02 = `background: #fff`;
     },
     optionChange02Fal: function(){
       this.buttonOption02 = false;
       this.clickStyle02 = `background: #DFE0E5`;
     },
     optionChange03: function(){
       this.buttonOption03 = true;
       this.clickStyle03 = `background: #fff`;
     },
     optionChange03Fal: function(){
       this.buttonOption03 = false;
       this.clickStyle03 = `background: #DFE0E5`;
     },
   
  },
  mounted: function(){
 

  }
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>


@import '../scss/help.scss'
@import '../scss/common.sass'


.voucher-wrapper
  padding-top: px2vw(160px, $break-large)
  padding-left: px2vw(170px, $break-large)
  padding-right: px2vw(170px, $break-large)
  margin-bottom: px2vw(100px, $break-large)

.voucher-page-title
  position: absolute
  bottom: 0
  right: 0

.voucher-content-wrapper
  +respond-to(desktop)
    margin-top: px2vw(90px, $break-large)

.voucher-option-content
  border: 7px solid $blue
  +respond-to(desktop)
    +size(99% px2vw(400px, $break-large))
    margin-top: px2vw(34px, $break-large)

.main-content-wrapper
  +flexboxJustify(space-between)
  +respond-to(desktop)
    margin-top: px2vw(34px, $break-large)
  div
    border: 7px solid $blue
    +respond-to(desktop)
      +size(px2vw(400px, $break-large))

.main-content-explain::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.main-content-explain::-webkit-scrollbar-thumb
  background-color: $blue
  border: 1px solid $blue
  

.option-content-wrapper
  +flexboxJustify(space-between)
  +respond-to(desktop)
    margin-top: px2vw(25px, $break-large)
  div
    border: 7px solid $blue
    position: relative
    cursor: pointer
    +respond-to(desktop)
      +size(px2vw(250px, $break-large))
  .option-title, .option-content, .option-price
    color: $blue
  .option-title, .option-price
    font-weight: 700
    +respond-to(desktop)
      font-size: px2rem(22px)
  .option-content
    +respond-to(desktop)
      font-size: px2rem(20px)
  .option-title
    position: absolute
    top: px2vw(15px, $break-large)
    left: px2vw(15px, $break-large)
  .option-price
    position: absolute
    bottom: px2vw(15px, $break-large)
    right: px2vw(15px, $break-large)
  .option-content
    position: absolute
    top: 50%
    left: 50%
    +transform(translate(-50%, -50%))

.price-wrapper
  border-top: 3px solid $blue
  border-bottom: 3px solid $blue
  +respond-to(desktop)
    margin-top: px2vw(30px, $break-large)
    padding-top: px2vw(15px, $break-large)
    padding-bottom: px2vw(15px, $break-large)
  .price-flex, .price-flex01
    +flexboxJustify(space-between)
    position: relative
  .price-flex
    cursor: pointer
  .price-flex::before
    position: absolute
    top: px2vw(7px, $break-large)
    left: 0
    content: ""
    +size(px2vw(28px, $break-large))
    background: url("../../assets/images/icon-minus.svg") no-repeat
  span
    font-weight: 700
    color: $blue
    +respond-to(desktop)
      font-size: px2rem(40px)
  .price-title
    +respond-to(desktop)
      margin-left: px2vw(40px, $break-large)

.pay-wrapper
  +flexboxJustify(space-between)
  +respond-to(desktop)
    margin-top: px2vw(40px, $break-large)
  button, span
    font-weight: 700
    color: $blue
  button
    color: #fff
    background: $blue
    cursor: pointer
    +respond-to(desktop)
      font-size: px2rem(80px)
      padding-left: px2vw(20px, $break-large)
      padding-right: px2vw(20px, $break-large)
  button:hover
    color: $blue
    background: #fff

  span
    +respond-to(desktop)
      font-size: px2rem(100px)


.pay-wrapper-userinfo
  border: 7px solid $blue   
  label, input
    color: $blue
    +respond-to(desktop)
      font-size: px2rem(30px)
      padding: px2vw(10px, $break-large)
  input
    background: $light-gray

h3
  color: $blue
  +respond-to(desktop)
    font-size: px2rem(25px)

li
  font-weight: 200
  color: $blue
  +respond-to(desktop)
    font-size: px2rem(19px)
    margin-top: px2vw(30px, $break-large)


.display-active 
  display: block


.display-none
  display: none



</style>

