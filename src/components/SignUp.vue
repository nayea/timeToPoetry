<template>
  <div id="signUp">
    <div class="main-wrapper clearfix">
      <div class="signUp-background">
        <div class="signUP-body"></div>
        <div class="signUP-head"></div>
      </div>
      <h2 class="signUp-title">회원가입</h2>
      <div class="signUpTable-wrapper">
      <form name="contact-form" role="form" method="post" action="">
        <table>
          <tr>
            <td>
              <input required type="text" maxlenth="200" name="subject" placeholder="아이디" class="signup-id" pattern = "/^[A-Za-z]{1}[A-Za-z0-9]{5,12}$/">
              <button class="table-btn">중복확인</button>
            </td>
          </tr>
          <tr>
            <td><input type="password" placeholder="비밀번호" class="signup-input" pattern="/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,}$/"></td>
          </tr>
          <tr>
            <td><input type="password" placeholder="비밀번호확인" class="signup-input"></td>
          </tr>
          <tr>
            <td> <input type="text" placeholder="이름" class="signup-input" pattern="/^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/"></td>
          </tr>
          <tr>
            <td class="signup-td"><label for="">이메일</label><div class="signup-content-wrapper"><input type="text" class="signup-email"><span>@</span><input type="text" class="signup-email"></div></td>
          </tr>
          <tr>
            <td class="signup-td"><label for="">생일</label>
           <div class="signup-data-wrapper">
            <span>
                  <select name="year" class="signup-date">
                    <option v-for="(yearcount, index) in yearFilter" :key="index" v-bind:value="yearcount">{{yearcount}}</option>
                  </select>
              </span>
              <span class="signup-date-font">년</span>
              <span>
                <select name="month" class="signup-date">
                    <option value="January">1</option>
                    <option value="February">2</option>
                    <option value="March">3</option>
                    <option value="April">4</option>
                    <option value="May">5</option>
                    <option value="June">6</option>
                    <option value="July">7</option>
                    <option value="August">8</option>
                    <option value="September">9</option>
                    <option value="October">10</option>
                    <option value="November">11</option>
                    <option value="December">12</option>
                  </select> 
              </span>
              <span class="signup-date-font">월</span>
              <span>
                  <select name="day" class="signup-date">
                     <option v-for="(daycount, index) in dayFilter" :key="index" v-bind:value="daycount">{{daycount}}</option>
                   </select>
              </span>
              <span class="signup-date-font">일</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="signup-td"><label for="">핸드폰</label><div class="signup-content-wrapper sign-tel-wrapper"><input class="signup-tel" type="tel" pattern="[0-9]{3}"><span>-</span><input class="signup-tel" type="tel" pattern="[0-9]{4}"><span>-</span><input class="signup-tel" type="tel" pattern="[0-9]{4}"></div>
            <button class="table-btn">인증요청</button></td>
          </tr>
        </table>
        <div class="signup-agree"><input type="checkbox" value="agreement" id="agree"><label for="agree"><span class="signup-policy01">이용약관</span>과 <span class="signup-policy02">개인정보취급방침</span>에 동의 합니다.</label></div>
        <button class="summit-btn" type="submit">가입하기</button>
      </form>
      </div>
    </div>
    <div class="sns-login-wrapper">
        <button class="k-login"><span>카카오톡 아이디로 가입하기</span></button>
        <button class="f-login"><span>페이스북 아이디로 가입하기</span></button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sign',
 data() {
    return {
      yearnum: 2014,
      year: [],
      yearcount: 0,
      count: 0,
      count2: 0,
      day: [],
      daycount: 0,
    };
  },
  computed:{
    yearFilter(){
       for(var i = 1930; i<=this.yearnum; i++){
         this.year[this.count] = i;
         this.count++;
       }
       return this.year;
    },
    dayFilter(){
       for(var j = 1; j<=31; j++){
         this.day[this.count2] = j;
         this.count2++;
       }
       return this.day;
    },
  },
};
</script>

<style lang="sass" scoped>
@import './scss/help.scss'
@import './scss/common.sass'



#signUp
  background-color: $pink

button
  font-size: px2vw(12px, $break-large)
  font-weight: 700
  cursor: pointer

select
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none 

select::-ms-expand
  display: none

.main-wrapper
  position: absolute
  top: 0
  left: 40%
  +transform(translateX(-50%))
  +respond-to(desktop)
    padding-top: px2vw(140px, $break-large)
    margin-left: auto
    margin-right: auto
  .signUP-head
    border: px2vw(4px, $break-large) solid $black
    border-radius: 50%
    background: $dark-pink
    position: relative
    +respond-to(desktop)
      top: px2vw(0px, $break-large)
      left: px2vw(-15px, $break-large)
      +size(px2vw(135px, $break-large))
  .signUP-body
    position: absolute
    +respond-to(desktop)
      top: px2vw(250px, $break-large)
      left: px2vw(-30px, $break-large)
      +size(px2vw(190px, $break-large) px2vw(380px, $break-large)) 
      background: url("../assets/images/signup-back.svg") no-repeat
      background-size: contain
  .signUp-title
    position: relative
    +respond-to(desktop)
      top: px2vw(-50px, $break-large)
      left: px2vw(172px, $break-large)
      font-size: px2vw(35px, $break-large)
  .signUpTable-wrapper
    position: absolute
    top: px2vw(320px, $break-large)
  table
    border-collapse: collapse
    background: $dark-pink
    font-weight: 700
    +respond-to(desktop)
      width: px2vw(300px, $break-large)
      font-size: px2vw(11px, $break-large)
    input
      font-weight: 700
      font-size: px2vw(11px, $break-large)
  table,td
    border: 3px solid $black
  .signup-input,.signup-id
    +respond-to(desktop)
      padding: px2vw(10px, $break-large)
  .signup-td
    +respond-to(desktop)
      padding-left: px2vw(10px, $break-large)
      padding-right: px2vw(10px, $break-large)
      padding-top: px2vw(4px, $break-large)
      padding-bottom: px2vw(4px, $break-large)
    input, select
      background: $pink
      border: 1px solid $black
      border-radius: 0px
      +respond-to(desktop)
        padding: px2vw(6px, $break-large)
  .table-btn
    background: $pink
    border: 1px solid $black
    vertical-align: middle
    +respond-to(desktop)
      margin-left: px2vw(7px, $break-large)
      padding-top: px2vw(5px, $break-large)
      padding-bottom: px2vw(5px, $break-large)
      padding-left: px2vw(15px, $break-large)
      padding-right: px2vw(15px, $break-large)
  .signup-id
    background: $dark-pink
    +respond-to(desktop)
      width: px2vw(178px, $break-large)
  .signup-input
    background: $dark-pink
    +respond-to(desktop)
      width: 92%
  .signup-content-wrapper
    display: inline-block
    +respond-to(desktop)
      margin-left: px2vw(13px, $break-large)
    span
      +respond-to(desktop)
        margin-left: px2vw(5px, $break-large)
        margin-right: px2vw(5px, $break-large)
  .signup-email
    +respond-to(desktop)
      width: px2vw(90px, $break-large)
  .signup-data-wrapper
    display: inline-block
    +respond-to(desktop)
      margin-left: px2vw(21px, $break-large)
  .signup-date-font
    +respond-to(desktop)
      margin-right: px2vw(12px, $break-large)
  .signup-date-font:nth-of-type(6)
    margin-right: 0
  .signup-date
    +respond-to(desktop)
      width: px2vw(53px, $break-large)
  .signup-tel
    +respond-to(desktop)
      width: px2vw(24px, $break-large)
  .sign-tel-wrapper
    input
      +respond-to(desktop)
        font-size: px2vw(9px, $break-large)
  .summit-btn
    width: 100%
    background: $dark-pink
    border: 3px solid $black
    +respond-to(desktop)
      padding-top: px2vw(5px, $break-large)
      padding-bottom: px2vw(5px, $break-large)
  .signup-agree
    +respond-to(desktop)
      font-size: px2vw(13px, $break-large)
      padding-top: px2vw(17px, $break-large)
      padding-bottom: px2vw(17px, $break-large)
  input[type="checkbox"] 
    display: none
  input[type="checkbox"] + label
    display: inline-block
    position: relative
    width: 93%
    font-weight: 700
    +respond-to(desktop)
      margin-left: px2vw(10px, $break-large)  
    span::after
      content: ""
      position: absolute
      bottom: px2vw(-7px, $break-large)
      height: px2vw(1px, $break-large)
      border: 1px solid $black
    .signup-policy01::after
      +respond-to(desktop)
        left: 0px
        width: px2vw(46px, $break-large)
    .signup-policy02::after
      +respond-to(desktop)
        left: px2vw(62px, $break-large)
        width: px2vw(95px, $break-large)
  input[type="checkbox"] + label:before
    display: inline-block
    position: absolute
    right: 0
    border: 1px solid $black
    content: ""
    +respond-to(desktop)
      +size(px2vw(17px, $break-large))
  input[type="checkbox"]:checked + label:before
    background: url("../assets/images/icon-check.svg") no-repeat 98% 50%
    background-size: 70%
    background-position: center
    +respond-to(desktop)
      +size(px2vw(17px, $break-large))


.sns-login-wrapper
  position: absolute
  top: px2vw(410px, $break-large)
  left: px2vw(810px, $break-large)
  .k-login, .f-login
    display: block
    +respond-to(desktop)
      padding-top: px2vw(10px, $break-large)
      padding-bottom: px2vw(10px, $break-large)
      padding-left: px2vw(45px, $break-large)
      padding-right: px2vw(23px, $break-large)
  .k-login
    background: #ffe617
    color: #47292a
  .k-login:before, .f-login:before
    content: ""
    display: inline-block
    position: absolute
    left: px2vw(21px, $break-large)
    +size(px2vw(15px, $break-large) px2vw(13px, $break-large))
    background-position: center
    vertical-align: top
  .k-login:before
    background: url("../assets/images/icon-kakao.svg") no-repeat 
  .f-login
    background: #3c599a
    color: #fff
    +respond-to(desktop)
      margin-top: px2vw(10px, $break-large)
  .f-login:before
    background: url("../assets/images/icon-facebook-signup.svg") no-repeat 




</style>




