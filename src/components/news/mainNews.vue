<template>
<div id="mainNews">
  <div class="mainNews-wrapper clearfix">
      <ul class="title">
        <li v-for = "(page, index) in pages" :key="index" :class="isActivePage(page) ? 'active' : ' ' ">
          <h2><a @click="setPage(page)" v-bind:id="dotName + (index+1)">{{pageName[index]}}</a></h2>
        </li>
      </ul>
      <h2 class="titleAfter">소식을 알려드립니다.</h2>
      
      <component :is="activePage"></component>
    </div>
</div>
</template>

<script>


import axios from 'axios'
import mainNewsPerformance from './mainNewsPerformance';
import mainNewsUpload from './mainNewsUpload';
import mainNewsWe from './mainNewsWe';

export default {

  name: 'mainNews',
  data() {
    return {
      poetrys:[],
      newPoetrys: [],
      pages: [
        'mainNewsWe',
        'mainNewsPerformance',
        'mainNewsUpload'
      ],
      activePage : 'mainNewsWe',
      pageName:[
        '시간',
        '공연',
        '업로드'
      ],
      dotName: 'dot',
    };
  },
  components:{
    mainNewsPerformance,
    mainNewsUpload,
    mainNewsWe
  },
   methods:{
    setPage(newPage){
      this.activePage = newPage
    },
    isActivePage(page){
      return this.activePage == page
    },
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
  },
  computed:{
    poetrysFilter(index){
       return this.newPoetrys.splice(index,5)
    },
  },
  mounted: function(){

  }
  };
</script>


<style lang="sass" scoped>
@import '../scss/help.scss'
@import '../scss/common.sass'

.mainNews-wrapper
  +respond-to(desktop)
    margin-top: px2vw(130px, $break-large)
    margin-left: px2vw(97px, $break-large)

.title::before
  font-weight: 700

.titleAfter
  display: inline-block

.title
  display: inline-block
  h2
    +respond-to(desktop)
      font-size: px2vw(50px, $break-large)
  li
    display: inline-block
  a
    cursor: pointer
    color: $blue
    text-shadow: none
    margin-right: 30px


#dot1::after, #dot2::after
  content: "."
  position: relative
  color: $blue
  text-shadow: none
  top: px2vw(-15px, $break-large)
  left: px2vw(15px, $break-large)
  +size(px2vw(5px, $break-large) px2vw(5px, $break-large))


.active
  a
    color: #fff
    text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue



.circle-w
  position: relative
  +respond-to(desktop)
    +size(px2vw(30px, $break-large))

.use-info
  font-size: px2vw(25px, $break-large)
  font-weight: 700
  display: inline-block
  color: $black
  position: absolute
  +respond-to(desktop)
    top: px2vw(30px, $break-large)
    right: px2vw(175px, $break-large)

    


</style>



