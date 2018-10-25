
<template>
<div id="mainReading">

   <h1 class="ready">준비중입니다.</h1>
</div>
  <!-- <div id="mainReading" class="main-wrapper clearfix">
    <div class="content-wrapper">
      <h2 class="main-title">시, 당신의 목소리로<br>읽어주세요.</h2>

            <VueAudioReading v-bind:currentSong="currentSong"  @updateData="swapAudio($event)"></VueAudioReading>
            <VueAudioReadingList v-bind:currentSong="currentSong" v-bind:currentAudio="currentAudio" @updateData="swapData($event)"></VueAudioReadingList>
    </div>
  </div> -->
</template>



<script>
import VueAudioReading from '../Audio/VueAudioReading.vue';
import VueAudioReadingList from '../Audio/VueAudioReadingList.vue';
import axios from 'axios';

export default {
  name: 'mainReading',
  data() {
    return {
      currentSong : '',
      currentImage : '',
      currentAudio: ''
    };
  },
  components: {
   VueAudioReading,
   VueAudioReadingList
  },
  methods:{
    swapData: function(data) {
     this.currentSong = data[0];
     this.currentImage = data[1];
    },
    swapAudio: function(data) {
     this.currentAudio = data[0];
    }
  },
  mounted: function(){


  },
};
</script>

<style lang="sass" scoped>


@import '../scss/help.scss'
@import '../scss/common.sass'

.ready
  color: $blue
  position: absolute
  top: 50%
  left: 50%
  +transform(translate(-50%,-50%))

.main-wrapper
  +respond-to(desktop)
    margin-top: px2vw(192px, $break-large)
    margin-left: px2vw(103px, $break-large)

#VueAudioReading
  position: absolute
  top: 0
  left: 0

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



