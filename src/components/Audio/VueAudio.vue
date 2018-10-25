<template>
  <div :class="`${classes}-wrapper`">
    <div :class="`${classes}__player`">
      <div class="audioBtn">
      <a @click="stop()" title="Play" class="icon-pause2" :class="paused? 'blue': 'write'"></a>
      <a @click="play()" title="Play" class="icon-play3" :class="paused? 'write': 'blue'"></a>
      </div>
      <div v-on:click="setPosition" :class="`${classes}__playback-time-wrapper`" title="Time played : Total time">
          <div v-bind:style="progressStyle" :class="`${classes}__playback-time-indicator`">
            <img src="../../assets/images/audiPlayerCirclePlaying.svg" alt="">
          </div>
          <span :class="`${classes}__playback-time-current`">{{currentTime}}</span>
          <!-- <span :class="`${classes}__playback-time-separator`"></span>
          <span :class="`${classes}__playback-time-total`">{{duration}}</span> -->
      </div>

    </div>
    <audio v-bind:id="playerId" :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display:none;" autoplay="true"></audio>
  </div>
</template>

<script src="./vueaudio.plugin.js"></script>

<style lang="scss" scoped>
@import '../scss/help.scss';

$prefixCls: "vue-sound";

.#{$prefixCls}-wrapper {
  .#{$prefixCls}__player {
    line-height: 30px;

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



        .#{$prefixCls}__playback-time-separator::after {
            content:' | ';
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
        }
    }
  }
</style>

<style lang="sass" scoped>
@import '../scss/common.sass'
@import '../scss/help.scss'

.vue-sound__playback-time-wrapper
  position: relative
  background: url('../../assets/images/audiPlayerCircleBack.svg') no-repeat
  +respond-to(desktop)
    margin-top: px2vw(59px, $break-large)
    +size(px2vw(389px, $break-large) px2vw(12px, $break-large))

.vue-sound__playback-time-total, .vue-sound__playback-time-current, .vue-sound__playback-time-separator
  font-weight: 700
  +respond-to(desktop)
    color: $blue
    font-size: px2vw(20px, $break-large)


.vue-sound__playback-time-indicator img
  +respond-to(desktop)
    +size(px2vw(389px, $break-large) px2vw(12px, $break-large))

.vue-sound__playback-time-current
  font-size: px2vw(15px, $break-large)
  display: inline-block
  float: right
  +respond-to(desktop)
    margin-top: px2vw(47px, $break-large)





.audioBtn
  position: absolute
  bottom: px2vw(-32px, $break-large)
  right: px2vw(133px, $break-large)

.icon-play3 , .icon-pause2
  color: #fff
  font-size: px2vw(20px, $break-large)

.icon-play3:hover , .icon-pause2:hover
  color: $blue

.blue
  color: $blue

.write
  color: #fff

</style>

