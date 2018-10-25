<template>
  <div id="mainReading" class="wrapper clearfix">
    <h1 class="menu-title">읽<br>는<br>시<br>간</h1>
    <div class="content-wrapper">
      <h2 class="title">시,<br>당신의 목소리로<br>읽어주세요.</h2>
       <ul class="mainReading-poetry">

      <li v-for="poet in poetrysFilter" v-bind:key="poet.id">

            <!-- <VueAudioReading file="http://ozo3wlmi6.bkt.clouddn.com/first.mp3" v-bind:id="'ReadigPoet-' + (poet.id-1)"></VueAudioReading> -->
            <!-- <VueAudioReading v-bind:src="{{poet.id}}" v-bind:id="'ReadigPoet-' + (poet.id-1)"></VueAudioReading> -->


            <div class="poet-info">
              <div class="poetry-info01"><span class="circle"></span><h3 class="content-font">{{poet.title}}</h3></div>
              <div class="poetry-info03"><span class="circle"></span><h3 class="content-font">{{poet.url}}</h3></div>
             </div>

           <!-- <div :class="`${classes}-wrapper`">
              <div :class="[`${classes}__player`, [ paused ? 'none-audio' : 'active-audio' ]]" v-bind:style="totalTimeNumber">
              <div v-on:click="setPosition" :class="`${classes}__playback-time-wrapper`" title="Time played : Total time">
              <div v-bind:style="progressStyle" :class="`${classes}__playback-time-indicator`">
                  <img src="../../assets/images/audioPlayerCircleBlue.svg" alt="">
          </div>
              <span :class="`${classes}__playback-time-total`">{{duration}}</span>

            </div></div> -->
         <div class="playBtn-group">
            <a @click="pause()" title="Play" :class="[ paused ? 'icon-play3' : 'icon-pause2' ]"></a>
            <a @click="download()" class="icon-download"></a>
          </div>
        <!-- </div> -->
        </li>
    </ul>
    <!-- <audio v-bind:id="playerId" :loop="innerLoop" ref="audiofile" src="http://ozo3wlmi6.bkt.clouddn.com/first.mp3" preload="auto" style="display:none;"></audio> -->
    </div>
  </div>
</template>



<script>

import axios from 'axios';

export const baseVolumeValue = 7.5
let audio, uuid

export const prefixCls = 'vue-sound'

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    let v, r
    r = Math.random() * 16 | 0; v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
  return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss
}


export default {
  name: 'mainReading',
  data() {
    return {
      color: true,
      poetrys:[],
      numberClass: 'Landing-number',
      poetInfo : undefined,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: true,
      progressStyle: '',
      currentTime: '00:00',
      uuid: '0',
      innerLoop: undefined,
      audio: undefined,
      totalDuration: 0,
      hideVolumeSlider: false,
      volumeValue: baseVolumeValue,
      totalTimeNumber: false
    };
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
    setPosition: function name (e) {
      let tag = e.target
      if (this.paused) return

      if (e.target.tagName === 'SPAN') {
        return
      }
      const pos = tag.getBoundingClientRect()
      const seekPos = (e.clientX - pos.left) / pos.width
      this.audio.currentTime = parseInt(this.audio.duration * seekPos)
    },
    stop: function () {
      this.playing = false
      this.paused = true
      this.audio.pause()
      this.audio.currentTime = 0
    },
    play: function () {
      if (this.playing && !this.paused) return
      this.paused = false
      this.audio.play()
      this.playing = true
      this.totalTimeNumber = true
    },
    pause: function () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause() : this.audio.play()
      this.totalTimeNumber = false
    },
    changeLoop: function () {
      this.innerLoop = !this.innerLoop
    },
    download: function () {
      this.stop()
      window.open(this.file, 'download')
    },
    mute: function () {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 75
    },
    _handleLoaded: function () {
      if (this.audio.readyState >= 2) {
        if (this.autoPlay) this.play()

        this.loaded = true
        this.totalDuration = parseInt(this.audio.duration)
      } else {
        throw new Error('Failed to load sound file')
      }
    },
    _handlePlayingUI: function (e) {
      let currTime = parseInt(this.audio.currentTime)
      let percentage = parseInt((currTime / this.totalDuration) * 100)
      this.progressStyle = `width:${percentage}%;`
      this.currentTime = convertTimeHHMMSS(currTime)
    },
    _handlePlayPause: function (e) {
      if (e.type === 'pause' && this.playing === false) {
        // this.progressStyle = `width:0%;`
        // this.currentTime = '00:00'
        this.paused = true
      }
    },
    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI)
      this.audio.addEventListener('loadeddata', this._handleLoaded)
      this.audio.addEventListener('pause', this._handlePlayPause)
      this.audio.addEventListener('play', this._handlePlayPause)
    },
    getAudio: function () {
      return this.$el.querySelectorAll('audio')[0]
    }
  },
  computed:{
    poetrysFilter (){
      return this.poetrys.filter(function(item){
        return item.id < 6
      })
    },
    duration: function () {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : ''
    },
    playerId: function () {
      return 'player-' + this.uuid
    },
    classes: function () {
      return prefixCls
    }
  },
  mounted: function(){
     this.getData();

    this.uuid = generateUUID()
    this.audio = this.getAudio()
    this.innerLoop = this.loop
    this.init()

  },
   beforeDestroy: function () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
  }
};
</script>


<style lang="scss" scoped>
  $prefixCls: "vue-sound";
  .#{$prefixCls}-wrapper {
    display: inline-block;
    // position: absolute;
    // top: 0;
    // left: 0;
    .#{$prefixCls}__player {
      display: none;
      a {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
      }

      .#{$prefixCls}__extern-wrapper {
        display: inline-block;
        margin-left: 10px;

        > a {
          margin-right: 5px;
          vertical-align: 0;
        }

        .volume-toggle {
          position: relative;

          .volume-slider {
            cursor: pointer;
            position: absolute;
            top: 0;
            width: 80px;
            left: 24px;
          }
        }
      }
      // .#{$prefixCls}__playback-time-wrapper img{
      //    width:500px;
      //   height: 50px;
      // }

      .#{$prefixCls}__playback-time-wrapper {
        position: absolute;
        top: 0;
        left: 10px;
        background: url('../../assets/images/audioPlayerCircle.svg');
        width: 500px;
        height: 8px;
        position: relative;
        // width: 250px;
        display: inline-block;
        // background: #ffd0b8;
        // height: 3px;
        cursor: pointer;
        font-size: 14px;
        vertical-align: middle;


        .#{$prefixCls}__playback-time-separator::after {
            content:' : ';
        }

        .#{$prefixCls}__playback-time-total {

        }

        .#{$prefixCls}__playback-time-indicator {
            background: transparent;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            overflow: hidden;
        }
        .#{$prefixCls}__playback-time-indicator img{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 500px;
            height: 8px;
        }
      }
    }
  }
</style>

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

.active-audio
  display: block !important

.none-audio
  display: none !important

.playBtn-group
  position: relative
  +respond-to(desktop)
    width: px2vw(640px, $break-large)
    // margin-left: px2vw(294px, $break-large)

.vue-sound__player
  position: absolute
  left: px2vw(10px, $break-large)
  +respond-to(desktop)
    top: px2vw(-160px, $break-large)


.vue-sound__playback-time-wrapper
  +respond-to(desktop)
    +size(px2vw(369px, $break-large) px2vw(5px, $break-large))
    margin-left: px2vw(50px, $break-large)

.vue-sound__playback-time-total
  position: absolute
  font-weight: 700
  +respond-to(desktop)
    color: $pink
    font-size: px2vw(20px, $break-large)
    top: px2vw(-10px, $break-large)
    right: px2vw(-80px, $break-large)

.icon-play3::before
  color: $pink
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black
  // position: absolute
  // top: 50%
  // left: 50%
  // +transform(translate(-50%,-50%))
  +respond-to(desktop)
    font-size: px2vw(24px, $break-large)

.icon-play3, .icon-pause2
  display: inline-block
  vertical-align: middle
  position: relative
  top: 0
  left: 0


.icon-pause2::before
  color: $blue
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black
  // position: absolute
  // top: 50%
  // left: 50%
  // font-weight: 100
  // +transform(translate(-50%,-50%))
  +respond-to(desktop)
    font-size: px2vw(24px, $break-large)


.icon-download
  display: inline-block
  vertical-align: middle
  position: absolute
  top: 0
  right: 0

.icon-download::before
  +respond-to(desktop)
    font-size: px2vw(25px, $break-large)
  // position: relative
  // top: 0
  // right: 0


// .vue-sound-wrapper .vue-sound__player .vue-sound__playback-time-wrapper .vue-sound__playback-time-indicator
//   background: $blue !important

</style>


