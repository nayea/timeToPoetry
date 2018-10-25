<template>

<!-- <VueAudio file="http://ozo3wlmi6.bkt.clouddn.com/first.mp3"></VueAudio> -->
<div>
<img v-bind:src="poet.x_artworkURL" v-bind:alt="poet.x_poetryTitle" v-bind:id="numberClass + number" v-bind:class="['fadeInLeft' + number,contentImageStyle + number]">
<VueAudio v-bind:file="poet.x_soundURL" class="player-style"></VueAudio>
</div>

<!-- <VueAudio></VueAudio> -->
</template>

<script>

import axios from 'axios';
import VueAudio from './Audio/VueAudio.vue';

export default {
  name: 'LandingImage',
  props: {
     id: {
      type : String
    },
     number: {
      type : Number
    },
  },
  data() {
    return {
      poet:{},
      numberClass: 'content-imageAni-',
      contentImageStyle: 'content-image',
      loadig: false
    };
  },
  components: {
   VueAudio
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
  },
  methods:{
     fetchData () {
      this.loading = true
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
      .then((result, index) => {
        this.poetrys = result.data
       this.newPoetrys = this.poetrys[0];

      let idFormat = this.id

       function findPoet(element){
         return element.x_poetryID == idFormat
       }
    
      this.poet = this.newPoetrys.find(findPoet);
    
      
      
      })
      .catch(error => {
        console.log(error)
      })
      // axios.get('https://jsonplaceholder.typicode.com/photos').then(result => {
      //   this.poet = result.data[this.id]

   
     },
     reload (){
      this.$router.go(this.$router.currenRoute)
    },
  isTheOne(poet){
      return poet.id === this.id
   }
  },
  mounted: function () {
       
    },
};

</script>

<style lang="css" scoped>




</style>

<style lang="sass" scoped>
@import './scss/help.scss'

.content-image0,.content-image1,.content-image2
  position: absolute
  box-shadow: 10px 10px 20px $pink
  +respond-to(desktop)
    +size(px2vw(290px, $break-large))
    right: px2vw(50px, $break-large)
    top: px2vw(-410px, $break-large)

.player-style
  position: absolute
  +respond-to(desktop)
    top: px2vw(-190px, $break-large)
    left: 0

</style>
