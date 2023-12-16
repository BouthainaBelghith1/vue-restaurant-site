<template>
    <section class="light notice-board-wrap mt-5">
		<div class="container">
			<div class="notice-board">
				<div class="content text-center heading ">
					<h2 class="section-title"><strong>Time </strong>open at</h2>
					<div class="divider mb-4">
						<div class="icon-wrap">
							<i class="icon icon-spoon"></i>
						</div>
					</div>
					<div class="notice">
						<ul class="list-unstyled colored-light col-md-6">
							<li><strong>Monday-Friday</strong></li>
							<li>7am - 11am(Breakfast)</li>
							<li>11am - 10am(Lunch/Dinner)</li>
						</ul>
						<ul class="list-unstyled colored-light col-md-6">
							<li><strong>Saturday-Sunday</strong></li>
							<li>8am - 11am(Breakfast)</li>
							<li>11am - 10am(Lunch/Dinner)</li>
						</ul>
					</div>
					<div class="contact-info color-primary">
						<span>+216 25 438 004</span>
						<a href="#" class="btn btn-pill btn-outline-light light hvr-sweep-to-right"><router-link to="Reservation">Book Your Table</router-link></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "timeView",
  props: {
    msg: String,
  },
};
</script>

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
a {
  background-color: transparent;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  -webkit-text-decoration-skip: objects;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
strong {
  font-weight: bolder;
}
h2, ul, li {
  padding: 0;
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
a {
  color: #daa556;
}
a:hover {
  color: #111;
  text-decoration: none;
}
.light a {
  color: #fff;
}
.light a:hover,
.light a:active,
.light a:focus {
  color: #d3a153;
}
.light strong {
  color: #fff;
}
ul {
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 0;
  padding: 0;
}
ul li {
  margin-bottom: 5px;
  outline: 0;
}
ul li:last-child {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
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

h2 {
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
  color: #333;
}
h2 {
  margin: 0;
}
h2 {
  font-size: 1.8em;
  line-height: 1.2;
}
.light h2, .light span, .light div, .light ul {
  color: #fff;
}
i {
  font-style: italic;
}
.color-primary {
  color: #cc9b4e !important;
}
.color-primary span {
  color: #cc9b4e !important;
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin: 10px;
}
.colored-light li>strong {
  color: #c5b49a !important;
  text-transform: uppercase;
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
.heading .divider{
    position: relative;
    width: 300px;
    margin: 0 auto;
}
.divider i.icon {
    font-size: 30px;
}
.divider .icon-wrap:before,
.divider .icon-wrap:after{
    content: "";
    position: absolute;
    border-bottom: 1px solid #fff;
    width: 120px;
    height: 17px;
}
.divider .icon-wrap:before{
    left: 0px;
}
.divider .icon-wrap:after{
    right: 0px;
}

a.btn {
  background-image: none;
  background: none;
  text-decoration: none !important;
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  border-radius: 0;
  padding: 0.5em 1.5em;
  font-size: 15px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  z-index: 1;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:hover,
.btn:focus {
  text-decoration: none;
  outline: 0;
}
.light .btn:hover {
  color: #fff;
}
.btn:last-child {
  margin-right: 0;
}
.btn:active,
.btn.btn-outline-light:active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
}
.btn.btn-pill,
.btn.btn-pill::after {
  border-radius: 2em;
}
.btn.btn-outline-light {
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.btn.btn-outline-light:hover::after {
  background-color: transparent;
}
.btn.btn-outline-light {
  border-color: rgba(255,255,255,0.5);
  color: #fff;
}
.btn.btn-outline-light:hover {
  background: transparent;
  border-color: #fff;
  color: #121212;
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

.col-md-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}
.mt-5 { margin-top: 5px; }
.hvr-sweep-to-right {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
.hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #171413;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}

.light.hvr-sweep-to-right:before {
    background: #fff;
    border-radius: 2em;
}
.light.hvr-sweep-to-right:hover:before, 
.hvr-sweep-to-right:focus:before, 
.hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}
.section-title {
    font-size: 2em;
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
}
.section-title strong {
  font-size: 1em;
  font-family: "Great Vibes", Merienda One, sans-serif;
  color: #c59d5f;
  display: block;
  text-transform: none;
}

.notice-board-wrap{
    background-image: url(../../assets/images/time.jpg);
    padding: 60px;
    background-size: cover;
}
.notice-board-wrap .notice-board{
    background-color: #171413;
    padding: 30px;
}
.notice-board .content {
    background: #171413;
    border: 1px dotted #c59d5f;
    padding: 25px 0 70px;
}
.notice-board .notice {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
}

@media screen and (max-width: 575px){
  .notice-board-wrap{
    padding: 30px;
  }
  .notice-board .notice ul {
    text-align: left;
    font-size: 14px;
  }
}
</style>