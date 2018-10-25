<template>
<div id="mainQuestionWriting">
 <div class="wrapper clearfix">
	<h1 class="menu-title">
		<div><span>시</span><span>간</span></div>
		<div class="menu-title-bottom">.</div>
		<div><span>문</span><span>의</span></div></h1>

	<div class="content-wrapper">
	  <h1 class="title">시간<br>문의</h1>
	 
	  <div class="form-wrapper">
				<form name="contact-form" role="form" method="post" action="">
					<legend class="readable-hidden">contact form</legend>
					<div class="category-wrapper">
					<select required name="category" id="" class="form-control">
							<option value="" disabled selected>어떤 문의가 있으십니까?</option>
							<option value="결제">결제</option>
							<option value="계정">계정</option>
							<option value="작품">작품</option>
							<option value="참여">참여</option>
							<option value="기능 오류">기능 오류</option>
							<option value="기타 의견">기타 의견</option>
					</select>
					<input required type="text" name="email" title="email" placeholder="답변을 드릴 이메일을 적어주세요." pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" class="email">
					<input required type="tel" maxlenth="11" name="tel" title="tel" placeholder="답변을 받으실 연락처를 적어주세요." pattern="[0-9]{11}">
					<a role="button" href="">첨부파일</a>
					</div>
					<div class="message-wrapper">
					<!-- <label for="input subject">제목</label> -->
					<input required type="text" maxlenth="200" name="subject" placeholder="제목" class="subject">
					<!-- <span class="circle-w"></span> -->
					<label for="input message">내용</label>
					<textarea required type="text" name="message" id="message" cols="40" row="10"></textarea>
					</div>
					<div class="button-wrapper">
						<span class="circle-w-r"></span><button type="submit">문의하기</button>
					</div>
				</form>
		</div>
   <!-- <span class="circle-w-r"></span><a href="">글쓰기</a> -->
	</div>
 </div>

</div>
</template>

<script>

import Vue from 'vue'

export default {

  name: 'mainNews',
  data() {
	return {
	   
	};
  },
   methods:{
	reload (){
	  this.$router.go(this.$router.currenRoute)
	},
  },
  computed:{

  },
  mounted: function(){

  }
  };
</script>


<style lang="sass" scoped>
@import '../scss/help.scss'
@import '../scss/common.sass'

.readable-hidden
  overflow: hidden
  width: 1px
  height: 1px
  margin: -1px
  border: 0
  padding: 0

.form-wrapper
	+respond-to(desktop)
		margin-left: px2vw(36px, $break-large)
		margin-top: px2vw(80px, $break-large)


select 
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none 
  width: px2vw(205px, $break-large)
  background: url("../../assets/images/icon-arrow2.svg") no-repeat 98% 50%
  background-size: 18px 18px
  border: 0
  border-radius: 0px



select::-ms-expand
  display: none



.category-wrapper
	border: 3px solid $blue
	background: #fff
	+flexboxJustify(center)
	margin-left: px2vw(70px, $break-large)
	input,select,a
		color: $black
		+respond-to(desktop)
			font-weight: 700
			font-size: px2vw(18px, $break-large)
	input
		+respond-to(desktop)
			width: px2vw(240px, $break-large)
			padding: px2vw(2px, $break-large)
		background: #fff
		border-right: 3px solid $blue
	.email
		border-left: 3px solid $blue
	a
		+respond-to(desktop)
			padding-top: px2vw(2px, $break-large)
			padding-bottom: px2vw(2px, $break-large)
			padding-left: px2vw(5px, $break-large)


.message-wrapper
	+respond-to(desktop)
		margin-left: px2vw(70px, $break-large)
		margin-top: px2vw(20px, $break-large)
	.subject, label
		font-weight: 700
		font-size: px2vw(18px, $break-large)
		display: block
		padding: px2vw(10px, $break-large)
		color: $black
	.subject
		width: 97%
		background-color: $light-gray
		border-bottom: 3px solid $blue
	textarea
		resize: none
		+size(97% px2vw(150px, $break-large))
		background-color: $light-gray
		font-size: px2vw(18px, $break-large)
		padding: px2vw(10px, $break-large)
		border-color: transparent
		outline: none

.button-wrapper
	// float: right
	position: relative
	width: 98%
	button 
		position: absolute
		top: 0
		right: 0
		cursor: pointer
		+respond-to(desktop)
			font-size: px2vw(18px, $break-large)
			font-weight: 700

.content-wrapper
  padding-top: px2vw(100px, $break-large)


.title::before
  font-weight: 700


.title
  float: left
  +respond-to(desktop)
	 font-size: px2vw(55px, $break-large)



.mainQuestion-menu
  float: left
  position: relative
  top: 50%
  +transform(translateY(-100%))
  width: 80%
  border-bottom: 3px solid $blue
  margin-left: px2vw(30px, $break-large)
  h2
	 display: inline-block
	 position: relative
	 font-size: px2vw(25px, $break-large)
	 color: $black
	 margin-bottom: px2vw(15px, $break-large)
  a
	 position: absolute
	 top: 0
	 right: 0
	 font-size: px2vw(25px, $break-large)
	 color: $black
	 font-weight: 700
	 margin-bottom: px2vw(15px, $break-large)



.circle-w
  position: relative
  top: px2vw(-5px, $break-large)
  left: px2vw(20px, $break-large)
  +respond-to(desktop)
	 +size(px2vw(30px, $break-large))

.circle-w-r
  position: relative
  top: px2vw(-5px, $break-large)
  left: px2vw(770px, $break-large)
  +respond-to(desktop)
	 +size(px2vw(30px, $break-large))


.circle-w-c
  position: absolute
  top: px2vw(230px, $break-large)
  left: px2vw(200px, $break-large)
  +respond-to(desktop)
	 +size(px2vw(30px, $break-large))


.menu-title
  z-index: 1
  +respond-to(desktop)
    bottom: px2vw(40px, $break-large)
  span
    display: block
    position: relative
    top: -10px
  span:nth-of-type(1)
    top: 0

.menu-title-bottom
  position: absolute
  top: px2vw(45px, $break-large)
  left: px2vw(11px, $break-large)

.menu-title::after
  +respond-to(desktop)
	 top: px2rem(170px)
	 left: px2vw(60px, $break-large)


</style>



