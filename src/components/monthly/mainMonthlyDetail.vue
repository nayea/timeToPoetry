<template>
<div class="mainMonthly-detail">
  <div class="btn-wrapper">
    <button class="btn-time">시간순</button>
    <button class="btn-tone">높은톤</button>
    <button class="btn-tone">낮은톤</button>
    <button class="btn-select">선택하기</button>
  </div>
  <div class="table-wrapper">
    <table>
      <tr v-for="(poet, index) in poetrysFilter">
        <td class="mainMonthly-detail-date">
           <span>2018.05.02</span>
        </td>
        <td class="mainMonthly-detail-title"  @mouseover="mouseOverimageControl(poet.artwork_url, poet.content_name, poet.voice_name , poet.music_name, poet.artwork_name)" @mouseleave="mouseLeaveimageControl()">
            <h3>{{poet.content_name}}</h3>
            <span>{{poet.author_name}}</span>
        </td>
         <td class="mainMonthly-detail-btn">
           <div>
            <a role="button" class="btn-plus" title="담기"><img src="../../assets/images/icon-add-w.svg" alt="담기"></a>
            <a role="button" class="btn-like" title="좋은시간"><img src="../../assets/images/icon-like-w.svg" alt="좋은시간"></a>
            <router-link :to="{name: 'mainMonthlyPopup', params: {id: poet.id, number: index, poetry: [poet.voice_name,poet.content_name], contents: [{'title':poet.author_name,'msg':poet.author_name},
              {'title':poet.voice_name,'msg':poet.voice_name},
              {'title':poet.music_name,'msg':poet.music_name}, 
              {'title':poet.artwork_name,'msg':poet.artwork_name}]}}" tag="button" class="btn-info" active-class="my-active-class" title="정보">
              <img src="../../assets/images/icon-q-w.svg" alt="정보"></router-link>
           </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="mainMonthly-Image-wrapper" :class="imageControl? 'image-active': 'image-none'">
    <div class="image-background"></div>
    <img v-bind:src="imgSrcRec" alt="imgcontentName">
    <div class="image-font-wrapper">
      <div class="image-font"><span>낭독자: </span><span class="image-font2">{{imgvoiceName}}</span></div>
      <div class="image-font"><span>BGM: </span><span class="image-font2">{{imgmusicName}}</span></div>
      <div class="image-font"><span>표지: </span><span class="image-font2">{{imgartworkName}}</span></div>
    </div> 
  </div>
  <router-view></router-view>
</div>
</template>

<script>

import axios from 'axios';
import {thisMonth} from '../js/common.js'
import {thisYear} from '../js/common.js'

export default {
name: 'mainMonthlyDetail',
 props: {
    month: {
      type : Number
    },
     number: {
      type : Number
    },
   
  },
  data() {
    return {
      loadig: false,
      poetrys:[],
      newPoetrys: [],
      imageControl: false,
      imgSrcRec: "",
      imgcontentName: "",
      imgvoiceName: "",
      imgmusicName: "",
      imgartworkName: ""
    };
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
  },
  methods:{
    getData: function(){
      axios.post(
      'http://52.78.230.145/api/v1/contents/get/monthly',{
	          "year":"2018",
          	"month":"5",
	          "sortby":"DESC",
          	"orderby":"month"
        },
        {
          headers: {
           'Access-Control-Allow-Origin': '*',
           'Content-Type': 'application/json',
        },
        }
      )
      .then((result) => {
        this.poetrys = result.data
        this.newPoetrys = this.poetrys[201];
   
      })
      .catch(error => {
        console.log(error)
      })
    },
    fetchData () {
      this.loading = true
      this.newPoetrys = this.poetrys[201];
      
     },
     mouseOverimageControl(imgSrc, contentName, voiceName, musicName, artworkName){
        
      
         if(voiceName == 'n/a'){
          this.imgvoiceName = "정보없음";
        }
        else{this.imgvoiceName = voiceName; }
         if(musicName == 'n/a'){
          this.imgmusicName = "정보없음";
        }else{ this.imgmusicName = musicName;}
         if(artworkName == 'n/a'){
          this.artworkName = "정보없음";
        }else{this.imgartworkName = artworkName;}
        if(imgSrc == 'n/a'){
          this.imgSrcRec = 'https://s3.ap-northeast-2.amazonaws.com/timeforpoetry.contnet.public/image/artwork/G0021front.jpg';
        }else{ this.imgSrcRec = imgSrc;}

        this.imageControl = true;
        this.imgcontentName = contentName;
    
     },
     mouseLeaveimageControl(){
       this.imageControl = false;
     },
     reload (){
      this.$router.go(this.$router.currenRoute)
    },
 
  }, 
  computed:{
    poetrysFilter(){
       return this.newPoetrys
    },
    
  },
  mounted: function () {
       this.getData()
       this.mouseOverimageControl()
       this.mouseLeaveimageControl()
  
    },
};

</script>



<style lang="sass" scoped>
@import '../scss/common.sass'
@import '../scss/help.scss'

.btn-wrapper
  +respond-to(desktop)
    margin-top: px2vw(22px, $break-large)

.table-wrapper
  overflow-y: scroll
  +respond-to(desktop)
    margin-top: px2vw(18px, $break-large)
    height: px2vw(365px, $break-large)

.table-wrapper::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(5px, $break-large)

.table-wrapper::-webkit-scrollbar-thumb
  background-color: $blue
  border: 1px solid $blue

table
  width: 100%
  border-collapse: collapse
  h3,a
    display: inline-block
  .mainMonthly-detail-date
    +respond-to(desktop)
      +size(px2vw(130px, $break-large) px2vw(63px, $break-large))
      padding-left: px2vw(19px, $break-large)
    span
      color: #fff
      font-weight: 700
      display: inline-block
      +respond-to(desktop)
        font-size: px2rem(19px)
  .mainMonthly-detail-title
    width: px2vw(550px, $break-large)
    h3, span
      color: $blue
      font-weight: 700
      vertical-align: middle
    h3
      overflow: hidden 
      text-overflow: ellipsis
      white-space: nowrap
      text-align: left
      +respond-to(desktop)
        font-size: px2rem(30px)
        margin-left: px2vw(30px, $break-large)
        width: px2vw(350px, $break-large)
    span
      float: right
      +respond-to(desktop)
        font-size: px2rem(24px)
        margin-right: px2vw(10px, $break-large)
  .mainMonthly-detail-title:hover
    background: #fff
    cursor: pointer
  .mainMonthly-detail-btn
    // position: relative
    +respond-to(desktop)
      width: px2vw(140px, $break-large)
    div
      // position: absolute
      // top: 50%
      // left: 50%
      // +transform(translate(-50%,-50%))
      +respond-to(desktop)
        padding-left: px2vw(15px, $break-large)
        padding-right: px2vw(15px, $break-large)
    a, .btn-info
      vertical-align: middle
      +respond-to(desktop)
        +size(px2vw(22px, $break-large))
        margin-left: px2vw(2px, $break-large)
        margin-right: px2vw(2px, $break-large)

table, td
  border: 5px solid #fff

.mainMonthly-Image-wrapper
  position: absolute
  top: px2vw(340px, $break-large)
  left: px2vw(150px, $break-large)
  img
    position: absolute
    top: 0
    left: 0
  img, .image-background
    +respond-to(desktop)
      +size(px2vw(205px, $break-large))
  .image-background
    background: $blue
    position: relative
    top: px2vw(5px, $break-large)
    left: px2vw(5px, $break-large)
  .image-font-wrapper
    float: right
    +respond-to(desktop)
      margin-top: px2vw(20px, $break-large)
  .image-font
    span
      color: $blue
      font-weight: 700
      +respond-to(desktop)
        font-size: px2vw(14px, $break-large)
  .image-font2
    float: right
    +respond-to(desktop)
        margin-left: px2vw(10px, $break-large)
    
    
.image-active
  display: block
.image-none 
  display: none 



.btn-time, .btn-tone, .btn-select
  font-weight: 700
  +respond-to(desktop)
    font-size: px2vw(12px, $break-large)
    padding-left: px2vw(16px, $break-large)
    padding-right: px2vw(16px, $break-large)
    padding-top: px2vw(5px, $break-large)
    padding-bottom: px2vw(5px, $break-large)

.btn-time,.btn-tone
  +respond-to(desktop)
    margin-right: px2vw(9px, $break-large)

.btn-select
  float: right

.btn-time
  background: $blue
  color: #fff

.btn-tone, .btn-select
  background: #fff
  color: $blue

</style>
