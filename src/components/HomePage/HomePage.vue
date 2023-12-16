<template>
  <div class="main-wrapper">
		<section id="billboard">
			<div class="container text-center">
				<div class="text-content heading text-center light">
					<div class="overlay"></div>
					<div class="text">
						<div class="wrapper">
							<div id="L" class="letter">P</div>
							<div class="shadow">P</div>
						</div>
						<div class="wrapper">
							<div id="I" class="letter">R</div>
							<div class="shadow">R</div>
						</div>
						<div class="wrapper">
							<div id="G" class="letter">E</div>
							<div class="shadow">E</div>
						</div>
						<div class="wrapper">
							<div id="H" class="letter">S</div>
							<div class="shadow">S</div>
						</div>
						<div class="wrapper">
							<div id="T" class="letter">T</div>
							<div class="shadow">T</div>
						</div>
						<div class="wrapper">
							<div id="N" class="letter">I</div>
							<div class="shadow">I</div>
						</div>
						<div class="wrapper">
							<div id="E" class="letter">G</div>
							<div class="shadow">G</div>
						</div>
						<div class="wrapper">
							<div id="S" class="letter">E</div>
							<div class="shadow">E</div>
						</div>
					</div>
				</div>
			</div><!----billboard-content----->
		</section>
	</div><!--billboard-->
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body {
  position: relative;
  width: 100%;
  height: 100%;
}
html {
  font-size: 100%;
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  font-style: normal;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility
}
section {
  display: block;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

*, *::before, *::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  box-sizing: border-box;
}
body {
  font-size: 17px;
  line-height: 1.5;
  color: #333;
}
::selection {
  background: rgba(0,120,212,0.8);
  color: #fff;
  text-shadow: none;
}
::-moz-selection {
  background: rgba(0,120,212,0.8);
  color: #fff;
  text-shadow: none;
}
::-webkit-input-placeholder {
  color: #000;
  -webkit-transition: color .2s;
  transition: color .2s;
}
::-moz-placeholder {
  color: #000; 
  -webkit-transition: color .2s;
  transition: color .2s;
}
:-ms-input-placeholder {
  color: #000;
  -webkit-transition: color .2s;
  transition: color .2s;
}

.container::before,
.container::after {
  content: "";
  display: table;
  line-height: 0;
}
.container::after {
  clear: both;
}
.light div {
  color: #fff;
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1180px;
  }
}
#billboard{
    position: relative;
    background: url(../../assets/images/main-banner.jpg) no-repeat;
    background-size: cover;
    height: 936px;
}
#billboard:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
#billboard .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    margin-top: 200px;
}

@media screen and (max-width: 575px){
  #billboard {
    height: 655px;
  }
  #billboard .container {
    background: rgba(0, 0, 0, 0.6);
    margin-top: 118px;
    padding: 30px;
  }
  #billboard:before {
    background: rgba(0, 0, 0, 0);
  }
}

.overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 30vh;
	z-index: 100;
}

.text {
	font-family: "Yanone Kaffeesatz";
	font-size: 100px;
	display: flex;
	position: absolute;
	bottom: 50vh;
	left: 50%;
	transform: translateX(-50%);
	user-select: none;

	.wrapper {
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
		.letter {
			transition: ease-out 1s;
			transform: translateY(40%);
		}
		.shadow {
			transform: scale(1, -1);
			color: #999;
			transition: ease-in 5s, ease-out 5s;
		}
		&:hover {
			.letter {
				transform: translateY(-200%);
			}
			.shadow {
				opacity: 0;
				transform: translateY(200%);
			}
		}
	}
}
</style>