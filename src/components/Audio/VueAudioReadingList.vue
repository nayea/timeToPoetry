<template>

    <div class="mainReading-poetry">


    <paginate name="newPoetrys" :list="newPoetrys" :per="5" ref="paginator" class="paginate-list">
      <div class="tableTitle"><div class="tableTitle-content1"><span class="shareBtn-title">공유</span><span class="dayInfo-title">업로드 날짜</span></div>
      <div class="tableTitle-content2"><span class="content-font2">아이디</span><span class="content-font poet-info">제목</span><span class="content-font3 content-margin">시인</span></div></div>
      <li v-for="(poet, index) in paginated('newPoetrys')">
       <div class="mainReading-list clearfix">
          <div class="saveDay">
            <button class="shareBtn" type="button" v-clipboard:copy="poet.x_soundURL" v-clipboard:success="onCopy" v-clipboard:error="onError"></button>
            <span class="dayInfo">{{poet.x_voiceID}}</span>
          </div>
        <router-link :to="{name: 'mainReadingImage', params: {id: poet.x_poetryID}}" tag="button" exact class="tap-link" active-class="my-active-class">
            <div @click="changeSource([poet.x_soundURL, true])" class="song" v-bind:url-value="poet.x_soundURL" v-bind:picture-value="poet.x_artworkURL">
            <span class="icon-play3"></span>
            <h3 class="content-font2">{{poet.x_voiceName}}</h3>
            <div class="poet-info">
              <h3 class="content-font">{{poet.x_poetryTitle}}</h3><h3 class="content-font3 content-margin">{{poet.x_authorName}}</h3>
            </div>
            </div>
        </router-link>
          </div>
        <router-view></router-view>
      </li>
    </paginate>

    <paginate-links for="newPoetrys"
      :show-step-links="true"
      :limit="5"
      :step-links="{
        next: '>',
        prev: '<'
      }"
    ></paginate-links>
    <!-- <paginate-links for="poetrys" :simple="{
      next: 'Next »',
      prev: '« Back'
    }"></paginate-links> -->
    <!-- <span v-if="$refs.paginator">
      Viewing {{$refs.paginator.pageItemsCount}} results
    </span>  -->


      <!-- <paginate-links for="poetrys" :show-step-links="true" :limit="5"></paginate-links> -->
      </div>
</template>


<script>
import axios from 'axios';
import { bus } from '../../main.js';
import VuePaginate from 'vue-paginate'
import VueClipboard from 'vue-clipboard2'


export default {
  // name: 'vue-audio',
  name: 'VueAudio',
  props: {
    currentSong: {
      type : String
    },
    currentImage: {
      type : Boolean
    },
    currentAudio: {
      // type : HTMLAudioElement
    }
  },
  computed: {
    poetrysFilter (){
      return this.poetrys.filter(function(item){
        return item.id < 6
      })
    },
  },
  data () {
    return {
      poetrys:[],
      newPoetrys:[],
      click: false,
      paginate: ['newPoetrys']
    }
  },
  methods: {
     getData: function(){
       axios.post(
        ' http://inf.timeforpoetry.com/tfp_getweatherpoetry',{
      "request": "member",
      "get_todaylist":
      [
          { "key": "r_weather", "value": "SKY_A08" },
          { "key": "r_temperature", "value": "cold" },
          { "key": "r_orderby", "value": "id" },
          { "key": "r_sort", "value": "ASC" }
        ]
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
       this.newPoetrys = this.poetrys[0];
        // var poetrysReady = result.data.map(function(post){
        //   return post
        // })
        // this.poetrys = poetrysReady
        // console.log(this.newPoetrys)
      })
      .catch(error => {
        console.log(error)
      })
    },
    changeSource : function(e) {
      // let songValue = e.target.attributes[1].value;
      let songValue = e[0];
      let songImage = e[1];
      // let songImage = e.target.attributes[2].value;
      this.$emit('updateData', [songValue, songImage]);
      bus.$emit('reload');
      this.click = true;
      console.log(e);
    },
    onCopy: function (e) {
      alert(e.text + ' 이 복사되었습니다.' )
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }

  },
  mounted: function () {
      this.getData()

  }

}



</script>

<style lang="scss">
@import '../scss/common.sass';
@import '../scss/help.scss';
// .app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   font-size: 20px;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1,
// h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// .paginate-list {
//   width: 159px;
//   margin: 0 auto;
//   text-align: left;
//   li {
//     display: block;
//     &:before {
//       content: '⚬ ';
//       font-weight: bold;
//       color: slategray;
//     }
//   }
// }

// .paginate-links{
//   user-select: none;
//   a {
//     cursor: pointer;
//   }
//   li .active a {
//     font-weight: bold !important;
//   }
//   li.next:before {
//     content: ' | ';
//     margin-right: 13px;
//     color: #ddd;
//   }
//   li.disabled a {
//     color: #ccc;
//     cursor: no-drop;
//   }
// }

// a {
//   color: #42b983;
// }

.paginate-links{
  position: absolute;
  user-select: none;
  @include respond-to(desktop){
    font-size: px2vw(20px, $break-large);
    top: px2vw(-100px, $break-large);
    right: px2vw(260px, $break-large);
  }
}

.paginate-links a{
   cursor: pointer;
}
.paginate-links .active{
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: $blue;
}

.paginate-links .left-arrow{
    position: absolute;
    font-weight: normal;
    @include respond-to(desktop){
      font-size: px2vw(30px, $break-large);
      top: px2vw(-7px, $break-large);
      left: px2vw(-20px, $break-large);
    }
}
.paginate-links .right-arrow{
    position: absolute;
    font-weight: normal;
    @include respond-to(desktop){
      font-size: px2vw(30px, $break-large);
      bottom: px2vw(-4px, $break-large);
      right: px2vw(-20px, $break-large);
    }
}

</style>

<style lang="sass" scoped>
@import '../scss/common.sass'
@import '../scss/help.scss'



.mainReading-poetry
  +respond-to(desktop)
    top: px2vw(20px, $break-large)
    left: px2vw(0px, $break-large)

.tableTitle span
  color: $blue
  font-weight: 700
  font-size: px2vw(15px, $break-large)

.tableTitle-content1, .tableTitle-content2
  display: inline-block
  border-bottom: 2px solid $blue
  +respond-to(desktop)
    padding-bottom: px2vw(13px, $break-large)

.tableTitle-content1
  vertical-align: middle
  +respond-to(desktop)
    width: px2vw(216px, $break-large)


.tableTitle-content2
  vertical-align: middle
  +respond-to(desktop)
    margin-left: px2vw(264px, $break-large)


.poet-info
  display: inline-block
  +respond-to(desktop)
    margin-left: px2vw(50px, $break-large)

.content-font,
.content-font2,
.content-font3
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  display: inline-block
  text-align: left

.content-font
  +respond-to(desktop)
    width: px2vw(315px, $break-large)

.content-font2
  +respond-to(desktop)
    width: px2vw(160px, $break-large)

.content-font3
  +respond-to(desktop)
    width: px2vw(100px, $break-large)



.content-margin
  +respond-to(desktop)
    margin-left: px2vw(50px, $break-large)



.tap-link
  cursor: pointer
  float: left
  +respond-to(desktop)
    margin-left: px2vw(172px, $break-large)
    padding-top: px2vw(20px, $break-large)
    padding-bottom: px2vw(20px, $break-large)


.saveDay
  float: left
  +respond-to(desktop)
    width: px2vw(216px, $break-large)
    padding-top: px2vw(20px, $break-large)
    padding-bottom: px2vw(20px, $break-large)

.icon-play3::before
  color: #fff
  text-shadow: -1px 0 $blue, 0 1px $blue, 1px 0 $blue, 0 -1px $blue
  // position: absolute
  // top: 50%
  // left: 50%
  // +transform(translate(-50%,-50%))
  +respond-to(desktop)
    font-size: px2vw(24px, $break-large)

.icon-play3
  display: inline-block
  vertical-align: bottom
  +respond-to(desktop)
    margin-right: px2vw(65px, $break-large)
    +size(px2vw(24px, $break-large))
  // position: relative
  // top: 0
  // left: 0

.my-active-class
  .icon-play3::before
    content: ""
    color: transparent



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

.pink
  background: $pink

.blue
  background: $blue

.shareBtn
  background: url('../../assets/images/icon-share.svg') no-repeat
  background-size: contain
  cursor: pointer
  +respond-to(desktop)
    +size(px2vw(16px, $break-large) px2vw(23px, $break-large))

.shareBtn, .shareBtn-title
  float: left
    // margin-left: px2vw(20px, $break-large)

.dayInfo, .dayInfo-title
  float: right
  vertical: middle
  color: $blue



// .paginate-links
//   li
//     color: $pink !important
// .song:last-of-type
//     margin-bottom: 0

</style>
