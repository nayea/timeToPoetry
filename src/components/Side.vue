<template>
  <div id="side">
    <div class="side-search">
      <button @click="clickSearch()" :class="[ buttonSearch ? 'search-none' : 'search-active' ]"></button>
      <input type="text" :class="[ buttonSearch ? 'display-none' : 'display-active-S' ]" v-model="inputReset">
    </div>
    <div class="side-user">
       <button @click="clickLogin()" :class="[ buttonLogin ? 'login-none' : 'login-active' ]"></button>
      <!-- <img src="../assets/images/icon-user.svg" alt="로그인 버튼"> -->
       <div class="user-info" :class="[ buttonLogin ? 'display-none' : 'display-active-L' ]">
         <span class="side-user-id">아이디</span>
         <span class="side-user-link">내정보</span>
         <span class="side-user-link">로그아웃</span>
       </div>
    </div>

  </div>
</template>



<script>

export default {
  data(){
    return{
      buttonSearch: true,
      buttonLogin: true,
      inputReset: null
    }
  },
   methods: {
     clickSearch: function(){
       this.buttonSearch = !this.buttonSearch;
       this.inputReset = null;
     },
     clickLogin: function(){
       this.buttonLogin = !this.buttonLogin;
     }
  }
};
</script>

<style lang="sass" scoped>
@import './scss/help.scss'



#side
  position: fixed
  top: px2rem(31px)
  left: px2rem(35px)
  // background: $pink
  +respond-to(desktop)
    +size(px2rem(130px) 100%)
  z-index: 20

.side-search
  position: relative
  button
    position: relative
    top: 0
    left: 0
    z-index: 1
    cursor: pointer
    +respond-to(desktop)
      +size(px2rem(24px) px2rem(33px))
  input
    position: absolute
    top: 0
    left: 0
    background: transparent
    color: $blue
    font-weight: 700
    +respond-to(desktop)
      padding-left: px2rem(33px)
      padding-bottom: px2rem(8px)
      +size(px2rem(100) px2rem(33px))
      font-size: px2rem(15px)


.search-none
  background: url(../assets/images/icon-search.svg)

.search-active
  background: url(../assets/images/icon-search-h.svg)

.login-none
  background: url(../assets/images/icon-user.svg)

.login-active
  background: url(../assets/images/icon-user-t.svg)

.display-none
  display: none

.display-active-S
  display: block
  border-bottom: 4px solid $blue

.display-active-L
  display: block
  border-bottom: 4px solid $pink

.side-user
  margin-top: px2rem(35)
  margin-bottom: px2rem(35)
  position: relative
  button
    cursor: pointer
    background-size: cover
    display: block
    +respond-to(desktop)
      +size(px2rem(29px) px2rem(35px))
      // padding-bottom: px2rem(8px)

.user-info
  color: $pink
  font-weight: 700
  position: relative
  top: 0
  right: 0
  +respond-to(desktop)
    font-size: px2rem(12px)

.side-user-link
  position: relative
  top: px2rem(22px)
  right: px2rem(-50px)

.side-user-id
  position: absolute
  top: px2rem(-20px)
  margin-left: px2rem(33px)
  +respond-to(desktop)
    font-size: px2rem(15px)

</style>

