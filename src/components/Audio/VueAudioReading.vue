<template>

<div id="VueAudioReading">

<div :class="`${classes}-wrapper`">
    <div :class="`${classes}__player`" v-bind:style="totalTimeNumber">
      <div v-on:click="setPosition" :class="`${classes}__playback-time-wrapper`" title="Time played : Total time">
          <div v-bind:style="progressStyle" :class="`${classes}__playback-time-indicator`">
            <img src="../../assets/images/audioPlayerReadingPlaying.svg" alt="">
          </div>
          <span :class="`${classes}__playback-time-current`">{{currentTime}}</span>
          <span :class="`${classes}__playback-time-separator`"></span>
          <span :class="`${classes}__playback-time-total`">{{duration}}</span>

      </div>
    </div>
</div>


<div id="controls" >

  <audio ref="audio" v-bind:id="playerId" :loop="innerLoop" preload="auto" style="display:block;">
  <source v-bind:src="currentSong">
    Your browser does not support the audio element.
  </audio>
  <a id="audio-click" @click="pause()" title="Play" :class="[ paused ? 'icon-play3' : 'icon-pause2' ]"></a>


</div>





</div>

</template>

<script>

import { bus } from '../../main';


// export const baseVolumeValue = 7.5
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
  name: 'VueAudioReading',

props : {

 currentSong: {
  type : String
 },

 currentImage: {
  type : Boolean
 }

  },
  data () {
    return {

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
      totalTimeNumber: false,
      support: undefined
    }
  },
  computed: {
    duration: function () {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : ''
    },
    playerId: function () {
      return 'player-' + this.uuid
    },
    classes: function () {
      return prefixCls
    },
  },
  methods: {
    audioFunction: function(e){
      let value = e.target.innerText;
      switch(value) {
        case "Play" : {
              this.$refs.audio.play();
              break;
        }
        case "Pause" : {
              this.$refs.audio.pause();

              break;
        }
      }
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
    toggleVolume: function () {
      this.hideVolumeSlider = true
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
    },
    supportAudio: function(){
      // let songAudio = this.getAudio();
      let songAudio = this.$el.querySelectorAll('#audio-click')
      return this.$emit('updateData', [songAudio]);
    }
  },
  created(){
    bus.$on('reload', () => {
    this.$refs.audio.load();
    this.$refs.audio.play();
    this.paused = false;
    })
  },
   mounted: function () {
    this.uuid = generateUUID()
    this.audio = this.getAudio()
    this.innerLoop = this.loop
    this.init()

    this.support = this.supportAudio()
    // console.log(this.support)
  },
   beforeDestroy: function () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
  }
}
</script>

<style <style lang="sass" scoped>
button
  padding: 10px
  border: 1px solid #000


@import '../scss/common.sass'
@import '../scss/help.scss'

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
  +respond-to(desktop)
    top: px2vw(76px, $break-large)
    left: px2vw(484px, $break-large)


.vue-sound__playback-time-wrapper
  background: url('../../assets/images/audioPlayerReadingBack.svg') no-repeat
  +respond-to(desktop)
    +size(px2vw(557px, $break-large) px2vw(11px, $break-large))


.vue-sound__playback-time-indicator img
  +respond-to(desktop)
    +size(px2vw(557px, $break-large) px2vw(11px, $break-large))

.vue-sound__playback-time-total,.vue-sound__playback-time-current
  position: absolute
  font-weight: 700
  display: inline-block
  color: #fff
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  +respond-to(desktop)
    font-size: px2vw(15px, $break-large)
    top: px2vw(-4px, $break-large)


.vue-sound__playback-time-total
  +respond-to(desktop)
    right: px2vw(-120px, $break-large)

.vue-sound__playback-time-current
  +respond-to(desktop)
    right: px2vw(-60px, $break-large)

.vue-sound__playback-time-separator
  position: absolute
  font-weight: 200
  display: inline-block
  color: $blue
  // text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  +respond-to(desktop)
    font-size: px2vw(26px, $break-large)
    right: px2vw(-75px, $break-large)
    top: px2vw(-10px, $break-large)

.icon-play3::before
  color: #fff
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
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
  text-shadow: none
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

.circle-wrapper
  position: relative
  cursor: pointer
  +respond-to(desktop)
    width: px2vw(480px, $break-large)
    top: px2vw(157px, $break-large)
    left: px2vw(366px, $break-large)

.circle-wrapper div
  +respond-to(desktop)
    margin-bottom: px2vw(42px, $break-large)
    z-index: 10

.circle
  display: inline-block
  border: 1px solid #000
  vertical-align: top
  position: relative
  // left: 15px

.circle-2
  +respond-to(desktop)
    margin-left: px2vw(136px, $break-large)

.pink
  background: $pink

.blue
  background: $blue


#audio-click
  margin-top: px2vw(37px, $break-large)
  margin-left: px2vw(380px, $break-large)

#audio-click::before
  font-size: px2vw(46px, $break-large)

</style>

<style lang="scss" scoped>
  $prefixCls: "vue-sound";
  .#{$prefixCls}-wrapper {
    display: inline-block;
    // position: absolute;
    // top: 0;
    // left: 0;
    .#{$prefixCls}__player {
      // display: none;
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


      .#{$prefixCls}__playback-time-wrapper {
        .#{$prefixCls}__playback-time-separator::after {
            content:' / ';
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
            // top: -1;
            // left: 0;
            // bottom: 0;
            // box-sizing: none
        }
      }
    }
  }
</style>
