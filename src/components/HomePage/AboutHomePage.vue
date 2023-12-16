<template>
    <section class="company-intro pt-60">
		<div class="container">
			<div class="row">
				<div class="section-image col-md-7">
					<img src="../../assets/images/food1.jpg" class="introImg">
				</div>
				<div class="text-content text-center heading dark col-md-5">
					<h2 class="section-title">
						<strong>About Us </strong>The best Tunisian restaurant
					</h2>
					<div class="divider dark mb-4">
						<div class="icon-wrap">
							<i class="icon icon-spoon"></i>
						</div>
					</div>
					<p>Discover an exquisite culinary experience at our restaurant,  
					   where passion for flavors meets exceptional service. Our chefs 
					   meticulously craft each dish, using only the finest and freshest 
					   ingredients to create a symphony of tastes that will delight your 
					   palate. Whether you're savoring our signature dishes or exploring 
					   our diverse menu, every bite is a journey through a world of 
					   culinary excellence. Immerse yourself in the inviting ambiance, 
					   where the warmth of hospitality and the artistry of cuisine come 
					   together to create unforgettable moments. Welcome to a dining 
					   experience like no other, where every meal is a celebration of 
					   taste and refinement</p>
				</div>
			</div>
        </div>
	</section>
</template>

<script>
export default {
  name: "AboutHomePage",
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
strong {
  font-weight: bolder;
}
h2 {
  padding: 0;
}
img {
  border: 0;
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
img {
  display: inline-block;
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
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
.container::after,
.row::before,
.row::after {
  content: "";
  display: table;
  line-height: 0;
}
.container::after,
.row::after {
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
p {
  margin: 0 0 .75em;
}
i {
  font-style: italic;
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
.heading .divider,
.heading .divider.dark{
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
.divider.dark .icon-wrap:before,
.divider.dark .icon-wrap:after{
    content: "";
    position: absolute;
    border-bottom: 1px solid #000;
    width: 120px;
    height: 17px;
}
.divider .icon-wrap:before,
.divider.dark .icon-wrap:before{
    left: 0px;
}
.divider .icon-wrap:after,
.divider.dark .icon-wrap:after{
    right: 0px;
}

img.introImg {
    width: 580px;  
    height: 400px;
    object-fit: cover;
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

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-5, .col-md-7 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .col-md-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}
.pt-60 { padding-top: 60px; }
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


@media screen and (max-width: 575px){
  .text-content p {
    font-size: 0.9rem;
  }
}

.section-image {
    position: relative;
}

</style>