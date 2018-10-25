<template>
  <div id="app">
 
    <Up></Up>
   
    <transition enter-active-class="animated FadeInLeft">
        <router-view></router-view>
     </transition>

  <down></down>
    
    <!-- <div class="mobile">
        <h1 class="ready">준비중입니다.</h1>
    </div> -->

  </div>
</template>

<script>




import Up from './components/Header.vue'
import Down from './components/Footer.vue'


import Vue from 'vue';




export default {
  name: 'app',
  components: {
    Up,
    Down
  },
  mounted: function(){

  
  }

}
</script>



<style>
  #app[class*="show-"]{
    position: relative;
    width: 1240px;
    margin-right: auto;
    margin-left: auto;
  }

  #app[class*="show-"]::before{
    content: '';
    position: absolute;
    z-index: 1000;
    top: 0;
    min-height: 300vh;
    width: 100%
  }

  #app.show-grid::before{
    background: linear-gradient(transparent 9px, #33ebe2 9px), linear-gradient(90deg, transparent 10px, hsla(162, 64%, 49%, 0.2) 8px, hsla(162, 64%, 49%, 0.2) 93px, transparent 93px);
    background-size: 1px 10px, 103px 1px;
  }
</style>

<style lang="sass">


@import './components/scss/help.scss'


.ready
  color: $blue
  position: absolute
  top: 50%
  left: 50%
  +transform(translate(-50%,-50%))

.desktop
  +respond-to(desktop)
    display: block
  +respond-to(mobile)
    display: none

.mobile
  +respond-to(desktop)
    display: none
  +respond-to(mobile)
    display: block



#app
  font-family: 'Spoqa Han Sans'
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: $light-gray
  // height: 100vh
  overflow: hidden
  line-height: 1.2
  // z-index: -10

.container
  width: px2rem(1366px)
  margin-left: auto
  margin-right: auto


ul,li,ol,input,body,html,div,h1,h2,h3,p,span,a,button
  margin: 0
  padding: 0
  border: 0
  outline: 0

button
  background-color: transparent

ul
  list-style-type: none

a
  text-decoration: none




.fade-enter, .fade-leave-to
  opacity: 0

.fade-enter-active, .fade-leave-active
  transition: opacity 3s

.fade-enter-to, .fade-leave
  opacity: 0.8

</style>



<style>

@font-face {
  font-family: 'Spoqa Han Sans';
  font-weight: 700;
  src: local('Spoqa Han Sans Bold'),
       url('./assets/font/Spoqa Han Sans Bold.woff2') format('woff2'),
       url('./assets/font/Spoqa Han Sans Bold.woff') format('woff'),
       url('./assets/font/Spoqa Han Sans Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Spoqa Han Sans';
  font-weight: 400;
  src: local('Spoqa Han Sans Regular'),
       url('./assets/font/Spoqa Han Sans Regular.woff2') format('woff2'),
       url('./assets/font/Spoqa Han Sans Regular.woff') format('woff'),
       url('./assets/font/Spoqa Han Sans Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Spoqa Han Sans';
  font-weight: 300;
  src: local('Spoqa Han Sans Light'),
       url('./assets/font/Spoqa Han Sans Light.woff2') format('woff2'),
       url('./assets/font/Spoqa Han Sans Light.woff') format('woff'),
       url('./assets/font/Spoqa Han Sans Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Spoqa Han Sans';
  font-weight: 100;
  src: local('Spoqa Han Sans Thin'),
       url('./assets/font/Spoqa Han Sans Thin.woff2') format('woff2'),
       url('./assets/font/Spoqa Han Sans Thin.woff') format('woff'),
       url('./assets/font/Spoqa Han Sans Thin.ttf') format('truetype');
}

@font-face {
  font-family: 'icomoon';
  src: url('./assets/font/icomoon.eot');
  src: url('./assets/font/icomoon.eot') format('embedded-opentype'),
    url('./assets/font/icomoon.ttf') format('truetype'),
    url('./assets/font/icomoon.woff') format('woff'),
    url('./assets/font/icomoon.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}



</style>

