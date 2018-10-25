<template>
  <div id="mypage">
    <div class="user-Id">
      <div>
        <span>WooWWooooWWoo</span>
        <button @click="popupControl()">회원탈퇴</button>
    </div>
    </div>
    <div class="withdraw-membership" :class="popup? 'popup-active': 'popup-none'">
      <div class="withdraw-checkbox-wrapper clearfix">
        <div class="withdraw-checkbox"><input type="checkbox" value="agreement" id="agree1"><label for="agree1"><span class="withdraw-option">콘텐츠 불만족</span></label></div>
        <div class="withdraw-checkbox"><input type="checkbox" value="agreement" id="agree2"><label for="agree2"><span class="withdraw-option">서비스 불만족</span></label></div>
        <div class="withdraw-checkbox"><input type="checkbox" value="agreement" id="agree3"><label for="agree3"><span class="withdraw-option">이용범위 및 유/무료 정책 불만족</span></label></div>
        <div class="withdraw-checkbox"><input type="checkbox" value="agreement" id="agree4"><label for="agree4"><span class="withdraw-option">기타</span></label></div>
        <div class="withdraw-checkbox"><input type="checkbox" value="agreement" id="agree5"><label for="agree5"><span class="withdraw-option">이용빈도 낮음</span></label></div>
      </div>
      <div class="withdraw-checkbox-info"><input type="checkbox" value="agreement" id="agree6" required ><label for="agree6"><span class="withdraw-checkbox-confirm">회원탈퇴 정보처리 방침</span> 확인</label></div>
      <textarea type="text" name="message" id="message" cols="40" row="10" placeholder="의견을 남겨주세요."></textarea>
      <div class="withdraw-password-wrapper">
        <label for="input message">비밀번호 확인</label>
        <input type="password" placeholder="비밀번호를 입력해주세요" class="withdraw-password" pattern="/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,}$/">
        <button class="summit-btn" type="submit">가입하기</button>
      </div>
      <button class="close-btn" @click="popupControl()"></button>
    </div>

    <div class="main-wrapper clearfix">
     <div class="mypage-box-wrapper">
      <div class="mypage-box-style">
        <h3>정보</h3>
        <div class="mypage-box-info-wrapper">
          <div class="mypage-box-info"><span class="font-weight-style">비밀번호</span><span class="font-gray-style">*********</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">이메일</span><span class="font-gray-style">wo***@naver.com</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">핸드폰</span><span class="font-gray-style">010-3333-0000</span></div>
        </div>
        <button>수정하기</button>
      </div>
      <div class="mypage-box-style">
        <h3>추가 정보</h3>
        <div class="mypage-box-info-wrapper">
          <div class="mypage-box-info"><span class="font-weight-style">좋아하는 계절</span><span class="font-gray-style">가을</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">좋아하는 시인</span><span class="font-gray-style">백 석</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">좋아하는 작품</span><span class="font-gray-style">고야</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">좋아하는 음악</span><span class="font-gray-style">조용한 음악</span></div>
        </div>
        <button>수정하기</button>
      </div>
      
    </div>
    <div class="mypage-box-wrapper">
     <div class="mypage-box-style">
       <h3>결제</h3>
       <div class="mypage-box-info-wrapper">
          <div class="mypage-box-info"><span class="font-weight-style">한 달 결제</span><span class="font-gray-style">자동 결제</span></div>
          <div class="mypage-box-info"><span class="font-weight-style">결제 정보</span><span class="font-gray-style">wo***</span></div>
          <div class="mypage-box-info"><span class="font-center-style">156일 째 시를 듣는 중</span></div>
        </div>
        <button>수정하기</button>
    </div>
     <div class="mypage-box-style">
       <h3>읽는 시간</h3>
       <div class="mypage-box-info-wrapper">
          <div class="mypage-box-info"><span class="font-weight-style title-width-style">플라스틱 러브</span><span class="font-gray-style">배지영</span></div>
          <div class="mypage-box-info"><span class="font-weight-style title-width-style">조용하고 안전한 나만의</span><span class="font-gray-style">임승유</span></div>
          <div class="mypage-box-info"><span class="font-weight-style title-width-style">부음</span><span class="font-gray-style">박시우</span></div>
        </div>
        <button>더보기</button>
     </div>
    </div>
    
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'mypage',
 data() {
    return {
     popup: false,
    };
  },
  computed:{
   
  },
  methods:{
     popupControl : function(){
      this.popup = !this.popup;
    },
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
  +transform(translate(-50%, -55%))
  
.mypage-box-wrapper
  +flexboxJustify(space-between)
  z-index: 1
  +respond-to(desktop)
    margin-top: px2vw(20px, $break-large)
    width: px2vw(635px, $break-large)

.mypage-box-style
  background: $pink
  border: 1px solid $black
  +respond-to(desktop)
    +size(px2vw(300px, $break-large) px2vw(250px, $break-large))
  h3
    text-align: center
    +respond-to(desktop)
      font-size: px2vw(23px, $break-large)
      color: #000
      margin-top: px2vw(20px, $break-large)
  .mypage-box-info-wrapper
    +flexboxDirection(column)
    +flexboxJustify(space-between)
    +respond-to(desktop)
      height: px2vw(100px, $break-large)
      margin-top: px2vw(26px, $break-large)
      margin-left: px2vw(45px, $break-large)
      margin-right: px2vw(45px, $break-large)
  .mypage-box-info
    +flexboxJustify(space-between)
  button
    font-weight: 700
    border: 2px solid $black
    background: $dark-pink
    position: relative
    top: 0
    left: 50%
    +respond-to(desktop)
      +transform(translateX(-50%))
      font-size: px2vw(12px, $break-large)
      margin-top: px2vw(26px, $break-large)
      padding-top: px2vw(5px, $break-large)
      padding-bottom: px2vw(5px, $break-large)
      padding-left: px2vw(20px, $break-large)
      padding-right: px2vw(20px, $break-large)

.user-Id
  position: absolute
  top: 40%
  left: 0
  // +transform(translate(-50%, -55%))
  // +transform(rotateZ(335deg))
  color: #fff
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  font-weight: 700
  +respond-to(desktop)
    font-size: px2vw(130px, $break-large)
  div
    position: absolute
    top: 0
    left: 0
    +transform(rotateZ(340deg))
    span
      display: inline-block
    button
      color: #fff
      text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
      font-weight: 700
      position: absolute
      cursor: pointer
      +respond-to(desktop)
        font-size: px2vw(25px, $break-large)
        bottom: px2vw(-25px, $break-large)
        right: px2vw(25px, $break-large)


.font-gray-style
  color: #666666

.font-weight-style
  font-weight: 700

.font-center-style
  display: inline-block
  position: relative
  top: 0
  left: 50%
  color: $black
  +respond-to(desktop)
    +transform(translateX(-50%))

.font-center-style::before
  content: '('
  display: inline-block
  margin-right: px2rem(9px)
  color: #ffffff
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  font-size: px2rem(20px)

.font-center-style::after
  content: ')'
  display: inline-block
  margin-left: px2rem(9px)
  color: #ffffff
  text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  font-size: px2rem(20px)    

.title-width-style
  overflow: hidden 
  text-overflow: ellipsis
  white-space: nowrap
  text-align: left
  +respond-to(desktop)
    width: px2vw(120px, $break-large)

.withdraw-membership
  background: $pink
  border: 1px solid $black
  z-index: 10
  position: absolute
  top: 60%
  left: 50%
  +transform(translate(-50%, -55%))
  +respond-to(desktop)
    +size(px2vw(560px, $break-large) px2vw(505px, $break-large))
    padding-top: px2vw(30px, $break-large)
    padding-bottom: px2vw(17px, $break-large)
    padding-left: px2vw(80px, $break-large)
    padding-right: px2vw(100px, $break-large)


.withdraw-checkbox-wrapper


.withdraw-checkbox
  color: $black
  +respond-to(desktop)
    font-size: px2vw(36px, $break-large)
    width: 40%
    float: right
    text-align: right
    margin-right: px2vw(50px, $break-large) 
  input[type="checkbox"] 
    display: none
  input[type="checkbox"] + label
    display: inline-block
    position: relative
    width: 100%
    font-weight: 700
    +respond-to(desktop)
      margin-left: px2vw(10px, $break-large)  
  input[type="checkbox"] + label:before
    display: inline-block
    position: absolute
    right: px2vw(-50px, $break-large)  
    top: px2vw(5px, $break-large)  
    border: 2px solid $black
    background: $dark-pink
    content: ""
    +respond-to(desktop)
      +size(px2vw(30px, $break-large))
  input[type="checkbox"]:checked + label:before
    background: url("../assets/images/icon-check.svg") no-repeat 98% 50%
    background-size: 70%
    background-position: center
    +respond-to(desktop)
      +size(px2vw(30px, $break-large))

.withdraw-checkbox:nth-of-type(2),.widthdraw-checkbox:nth-of-type(5)
  +respond-to(desktop)
    margin-right: px2vw(60px, $break-large) 
.withdraw-checkbox:nth-of-type(3)
  width: 100%
.withdraw-checkbox:nth-of-type(3), .withdraw-checkbox:nth-of-type(4), .withdraw-checkbox:nth-of-type(5)
  +respond-to(desktop)
    margin-top: px2vw(40px, $break-large) 

.withdraw-checkbox-info
  position: relative
  top: px2vw(0px, $break-large)
  right: px2vw(-185px, $break-large)
  +respond-to(desktop)
    font-size: px2vw(25px, $break-large)
    margin-top: px2vw(30px, $break-large)
    margin-bottom: px2vw(30px, $break-large)
  input[type="checkbox"] 
    display: none
  input[type="checkbox"] + label
    display: inline-block
    position: relative
    width: 60%
    font-weight: 700
    span::after
      content: ""
      position: absolute
      bottom: px2vw(-7px, $break-large)
      height: px2vw(1px, $break-large)
      border: 1px solid $black
    .withdraw-checkbox-confirm::after
      +respond-to(desktop)
        left: 0px
        width: px2vw(190px, $break-large)
  input[type="checkbox"] + label:before
    display: inline-block
    position: absolute
    right: px2vw(-50px, $break-large) 
    border: 2px solid $black
    background: $dark-pink
    content: ""
    +respond-to(desktop)
      +size(px2vw(30px, $break-large))
  input[type="checkbox"]:checked + label:before
    background: url("../assets/images/icon-check.svg") no-repeat 98% 50%
    background-size: 70%
    background-position: center
    +respond-to(desktop)
      +size(px2vw(30px, $break-large))

textarea
	resize: none
	+size(98% px2vw(120px, $break-large))
	background-color: $dark-pink
	font-size: px2vw(15px, $break-large)
	padding: px2vw(10px, $break-large)
	border-color: transparent
	outline: 2px solid $black

.withdraw-password-wrapper
  width: 102%
  +flexboxJustify(space-between)
  margin-top: px2vw(18px, $break-large)
  label
    position: relative
    top: px2vw(5px, $break-large)
    font-weight: 700
    +respond-to(desktop)
      font-size: px2vw(18px, $break-large)
  .withdraw-password
    background: $dark-pink
    border: 2px solid $black
    +respond-to(desktop)
      +size(px2vw(293px, $break-large) px2vw(24px, $break-large))
      padding-top: px2vw(3px, $break-large)
      padding-bottom: px2vw(3px, $break-large)
      padding-left: px2vw(10px, $break-large)
      padding-right: px2vw(10px, $break-large)
      font-size: px2vw(15px, $break-large)
  button
    background: $dark-pink
    border: 2px solid $black
    font-weight: 700
    cursor: pointer
    +respond-to(desktop)
      padding-top: px2vw(3px, $break-large)
      padding-bottom: px2vw(3px, $break-large)
      padding-left: px2vw(10px, $break-large)
      padding-right: px2vw(10px, $break-large)
      font-size: px2vw(18px, $break-large)

.close-btn
  position: absolute
  cursor: pointer
  top: px2vw(20px, $break-large)
  right: px2vw(20px, $break-large)
  z-index: 2
  +size(px2vw(25px, $break-large))
  background: url("../assets/images/icon-close.svg") no-repeat

.popup-active
  display: block

.popup-none
  display: none
</style>




