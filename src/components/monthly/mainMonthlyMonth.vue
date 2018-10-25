<template>
<div class="mainMonthly-month">
  <ul>
    <li v-for="(thismonth, index) in monthFliter" :key="index">
        <router-link :to="{name: 'mainMonthlyDetail', params: {month: thismonth, number: index}}" tag="button" class="mainMonthly-month-style" active-class="my-active-class"> 
          {{thismonth}}
        </router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>

import axios from 'axios';
import {thisMonth} from '../js/common.js'
import {thisYear} from '../js/common.js'

export default {
name: 'mainMonthlyMonth',
 props: {
    year: {
      type : Number
    },
     number: {
      type : Number
    },
   
  },
  data() {
    return {
      loadig: false,
      monthCount: [],
      count: 0,
      nyear: 0,
      month: 0
      
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
       this.nyear = thisYear
       this.month = thisMonth
       this.count = 0
       this.monthCount = []
     },
     reload (){
      this.$router.go(this.$router.currenRoute)
    },
 
  }, 
  computed:{
   monthFliter(){
     if(this.year == this.nyear){
       for(var i = 1; i<=this.month; i++){
         this.monthCount[this.count] = i;
         this.count++;
       }
     }
     else{
       for(var i = 1; i<=12; i++){
         this.monthCount[this.count] = i;
         this.count++;
       }
     }
     return this.monthCount;
       
    },
    
  },
  mounted: function () {
       
    },
};

</script>



<style lang="sass" scoped>
@import '../scss/common.sass'
@import '../scss/help.scss'

.mainMonthly-month
  float: left
  +respond-to(desktop)
    width: 70%
    margin-left: px2vw(32px, $break-large)
  li
    display: inline-block
    +respond-to(desktop)
      margin-left: px2vw(13px, $break-large)
      margin-right: px2vw(13px, $break-large)
  li:nth-of-type(1)
    margin-left: 0
  li:nth-last-of-type(1)
    margin-right: 0
  .mainMonthly-month-style
    font-weight: 700
    color: #fff
    cursor: pointer
    +respond-to(desktop)
      font-size: px2vw(50px, $break-large)


.my-active-class
  display: inline-block
  color: $blue !important
  font-size: px2rem(50px)

.my-active-class::after
  content: '월'
  position: relative
  top: 0
  left: px2vw(-8px, $break-large)



</style>
