<template>
<div id="mainMonthly">
  <div class="monthly-wrapper main-height clearfix">
      
     
      <div class="year-control-wrapper" @click="yearSelect()">
      <span class="mainMonthly-title-style mainMonthly-title-position">{{selectyear}}년</span>
      <button class="year-control-btn2"></button>
      </div>
      <div class="mainMonthly-year" :class="yearcon? 'popup-active': 'popup-none'" @click="yearSelect()">
        <button class="year-control-btn" ></button>
      <ul>
          <li v-for="(thisyear, index) in yearFliter" :key="index" @click="yearControl(thisyear)">
             
               <router-link :to="{name: 'mainMonthlyMonth', params: {year: thisyear, number: index}}" tag="button" class="mainMonthly-li-style" active-class="my-active-class">
              {{thisyear}}년
              </router-link>
              
            </li>
      </ul>
      </div>
      <h2 class="mainMonthly-title-style">새로운 시를<br> 들려드립니다.</h2>  
      
    </div>
  <router-view></router-view>
</div>
</template>
<script>
import {thisMonth} from '../js/common.js'
import {thisYear} from '../js/common.js'

import axios from 'axios'

export default {
  name: 'mainMonthly',
  data() {
    return {
      month: thisMonth,
      year: thisYear,
      yearCount : [],
      thisyear: "",
      count: 0,
      yearstyle: "",
      yearcon: "",
      selectyear: thisYear
    };
  },
  methods:{
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
  
    yearControl : function(nyear){
      this.selectyear = nyear
    },
    yearSelect: function(){
       this.yearcon = !this.yearcon;
    }
  },
  // watch: {
  //   '$route': 'yearControl',
  // },
  computed:{
   yearFliter(){
       for(var i = this.year; i>=2016; i--){
         this.yearCount[this.count] = i;
         this.count++;
       }
       
       return this.yearCount;
    },
    
  },
  mounted: function(){
    this.selectyear;

  }
};
</script>



<style lang="sass" scoped>

@import '../scss/help.scss'
@import '../scss/common.sass'

#mainMonthly
  // position: relative
  +respond-to(desktop)
    margin-top: px2vw(150px, $break-large)
    margin-left: px2vw(97px, $break-large)

.mainMonthly-year
  position: absolute
  top: px2vw(150px, $break-large)
  left: px2vw(97px, $break-large)
  width: px2vw(200px, $break-large)
  overflow: hidden
  background: $light-gray
  outline: none

.year-control-wrapper
  cursor: pointer




.mainMonthly-title-style
  color: $blue
  font-size: px2vw(45px, $break-large)
  font-weight: 700

.mainMonthly-li-style  
  color: #fff
  font-size: px2vw(45px, $break-large)
  font-weight: 700

.mainMonthly-li-style:hover
  color: $blue
  cursor: pointer

.mainMonthly-title-position
  display: inline-block
  vertical-align: middle
  margin-bottom: px2vw(13px, $break-large)

  

.monthly-wrapper
  float: left


.btn-info
  z-index: 2

.year-control-btn  
  position: absolute
  cursor: pointer
  +respond-to(desktop)
    top: px2vw(25px, $break-large)
    right: px2vw(10px, $break-large)
    +size(px2vw(29px, $break-large) px2vw(18px, $break-large))
  background: url("../../assets/images/icon-arrow.svg") no-repeat 95% 50%
  

.year-control-btn2
  vertical-align: middle
  background: url("../../assets/images/icon-arrow.svg") no-repeat 
  +transform(rotateX(180deg))
  +size(px2vw(29px, $break-large) px2vw(18px, $break-large))
  +respond-to(desktop)
    margin-left: px2vw(15px, $break-large)

.popup-none
  height: 0
  border: 0
  padding: 0

.popup-active
  height: px2vw(170px, $break-large)
  border: 5px solid #fff
  padding: px2vw(10px, $break-large)

</style>



