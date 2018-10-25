<template>
  <div id="mainReading" class="wrapper clearfix">
    <h1 class="menu-title">읽<br>는<br>시<br>간</h1>
    <div class="content-wrapper">
      <h2 class="title">시,<br>당신의 목소리로<br>읽어주세요.</h2>
       <!-- <ul class="mainReading-poetry">

      <li v-for="poet in poetrysFilter" v-bind:key="poet.id"> -->
            <!-- <router-link :to="{name: 'LandingImage', params: {id: poet.id}}" tag="button" exact class="tap-link" active-class="my-active-class"> -->
            <!-- <div class="poetry-info02"><span class="border-circle content-number"><span class="Landing-number" v-bind:id="numberClass + poet.id">{{poet.id}}.</span></span></div> -->

            <!-- </router-link> -->
            <!-- <VueAudioReading file="http://ozo3wlmi6.bkt.clouddn.com/first.mp3" v-bind:id="'ReadigPoet-' + (poet.id-1)"></VueAudioReading> -->
            <!-- <VueAudioReading v-bind:src="{{poet.id}}" v-bind:id="'ReadigPoet-' + (poet.id-1)"></VueAudioReading> -->


            <!-- <div class="poet-info">
              <div class="poetry-info01"><span class="circle"></span><h3 class="content-font">{{poet.title}}</h3></div>
              <div class="poetry-info03"><span class="circle"></span><h3 class="content-font">{{poet.url}}</h3></div>
             </div> -->
        <!-- </li>


    </ul> -->
    </div>
    <div class="mainReading-poetry">
     <musicframe v-bind:currentSong="currentSong"></musicframe>
      <playlist v-bind:currentSong="currentSong" @updateData="swapData($event)"></playlist>
      </div>
  </div>
</template>



<script>
import VueAudioReading from '../Audio/VueAudioReading.vue';
import axios from 'axios';
import musicframe from '../Audio/musicFrame'
import playlist from '../Audio/playList'

export default {
  name: 'mainReading',
  data() {
    return {
      color: true,
      poetrys:[],
      numberClass: 'Landing-number',
      poetInfo : undefined,
       currentSong : '',
       currentImage : ''
    };
  },
  components: {
   VueAudioReading,
   musicframe,
   playlist
  },
  methods:{
     getData: function(){
      const baseURI = 'https://jsonplaceholder.typicode.com';
      axios.get(`${baseURI}/photos`)
      .then((result) => {
        // this.poetrys = result.data
        var poetrysReady = result.data.map(function(post){
          return post
        })
        this.poetrys = poetrysReady
      })
    },
    reload (){
      this.$router.go(this.$router.currenRoute)
    },
    getButton: function () {
      return this.$el.querySelectorAll("ul");
    },
    swapData: function(data) {
     this.currentSong = data[0];
     this.currentImage = data[1];
    }
  },
  computed:{
    poetrysFilter (){
      return this.poetrys.filter(function(item){
        return item.id < 6
      })
    },
  },
  mounted: function(){
     this.getData();

     this.poetInfo = this.getButton();
     console.log(this.poetInfo);

  },
};
</script>

<style lang="sass" scoped>


@import '../scss/help.scss'
@import '../scss/common.sass'



.title
  +respond-to(desktop)
    .now-time
      left: px2vw(126px, $break-large)

.reload-btn
  +respond-to(desktop)
    top: 0
    left: px2vw(370px, $break-large)

.more-btn
  +respond-to(desktop)
    bottom: px2vw(-80px, $break-large)
    right: px2vw(60px, $break-large)

.mainReading-poetry
  position: relative
  +respond-to(desktop)
    // margin-top: px2vw(244px, $break-large)
  li
    +respond-to(desktop)
      margin-left: px2vw(294px, $break-large)
      margin-bottom: px2vw(40px, $break-large)
    // display: inline-block
    // margin-right: px2vw(20px, $break-large)
  li:last-of-type
    margin-bottom: 0
  .tap-link
    cursor: pointer
  .poet-info
    position: relative
    top: -27px
    display: inline-block
    +respond-to(desktop)
      margin-left: px2vw(65px, $break-large)

.poetry-info01
  position: relative
  display: inline-block
  +respond-to(desktop)
      width: px2vw(140px, $break-large)
      // margin-top: px2vw(10px, $break-large)

.pink
  background: $pink

.blue
  background: $blue

// .poetry-info02
//   display: inline-block
//   vertical-align: top

.poetry-info03
  display: inline-block
  position: relative
  +respond-to(desktop)
    width: px2vw(250px, $break-large)
    margin-left: px2vw(65px, $break-large)

.circle
  position: absolute
  left: px2vw(-10px, $break-large)


.content-font
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap




// .vue-sound-wrapper .vue-sound__player .vue-sound__playback-time-wrapper .vue-sound__playback-time-indicator
//   background: $blue !important

</style>
