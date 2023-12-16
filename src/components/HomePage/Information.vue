<template>
<section class="latest-blogs">
		<div class="container">
			<div class="heading text-center">
				<h2 class="section-title text-center"><strong>Check </strong>our information</h2>
				<div class="divider dark mb-4">
					<div class="icon-wrap">
						<i class="icon icon-spoon"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6 post-item">
					<figure class="zoom-effect">
						<img :src="location.image" alt="food3" class="blogImg">
					</figure>
					<div class="post-content pt-4">
						<h3 class="post-title"><a href="#">{{location.title}}</a></h3>
						<div class="meta-tags">
							<em class="meta-date">{{location.date}}</em>
						</div>
						<p>{{location.text}}</p>
					</div>
				</div>

				<div class="col-md-6 post-item">
					<figure class="zoom-effect">
						<img :src="service.image" alt="asparagus" class="blogImg">
					</figure>
					<div class="post-content pt-4">
						<h3 class="post-title"><a href="#">{{service.title}}</a></h3>
						<p>{{service.text}}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
        location: {
            image: require("../../assets/images/bizerte.jpg"),
            title: "Our Location",
            date: "December 08, 2023",
            text: "Discover our restaurant conveniently situated in the heart of the charming city of Bizerte, Tunisia. Nestled amidst bustling streets and historical landmarks, our location offers an exceptional culinary experience in a picturesque setting. Enjoy the proximity to the Mediterranean and savor exquisite dishes while taking in breathtaking views of the sea. Our restaurant in Bizerte embodies the essence of Tunisian cuisine, providing diners with a memorable gastronomic escapade amid this city rich in history and traditions. Whether you're a local resident or a visitor, our prime location invites you to explore the culinary diversity of Bizerte while soaking in its warm and welcoming ambiance",
        },
        service: {
            image: require("../../assets/images/service.jpg"),
            title: "Our Services",
            text: "At Prestige Du Goût, our commitment to excellence is reflected in every aspect of our outstanding service. Our dedicated team is here to create a memorable culinary experience for each of our guests. From the moment you step through our doors, you'll be greeted with attentive and professional service. We take pride in offering a warm and inviting atmosphere, where our skilled staff is ready to cater to your every need. Our thoughtfully curated menu showcases the richness of [Tunisian or other] cuisine with dishes prepared with passion and expertise. Whether you're seeking a casual culinary getaway or a sophisticated dining experience, our team is determined to provide impeccable service at every stage of your meal. We believe that every visit to Prestige Du Goût should be a memorable experience, where the quality of our cuisine seamlessly combines with the attention to every detail of our service. We're delighted to welcome you and to make every meal a celebration of gastronomy and hospitality",
        },
    };
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
figure, section {
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
h2, h3 {
  padding: 0;
}
img {
  border: 0;
}
figure {
  margin: 1em 40px;
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
figure {
  margin: 0;
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

h2, h3 {
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
  color: #333;
}
h2, h3 {
  margin: 0;
}
h2 {
  font-size: 1.8em;
  line-height: 1.2;
}
h3 {
  font-size: 1.4em;
  line-height: 1.25;
  font-weight: 600;
}
h3 a {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
}
h3 a:hover {
  color: #cc9b4e;
}
p {
  margin: 0 0 .75em;
}
em, i {
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
img.blogImg {
    width: 580px; 
    height: 345px;
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

.pt-4 {
  padding-top: 1.5rem !important;
}


.zoom-effect {
    overflow: hidden;
    cursor: pointer;
}
.zoom-effect img {
  transition: transform .2s;
}
.zoom-effect img:hover {
  transform: scale(1.5);
}

.post-content h3>a {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: linear-gradient(to right, #d98748, #b96e33 50%, #171413 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
  } 

.post-content h3>a:hover {
    background-position: 0 100%;
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
.post-item .meta-tags {
    padding-bottom: 15px;
}
</style>