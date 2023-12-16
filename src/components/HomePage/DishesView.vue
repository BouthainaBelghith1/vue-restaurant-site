<template>
<section>
		<div class="container">
			<div class="heading text-center" >
				<h2 class="section-title text-center">Some of our dishes</h2>
				<div class="divider dark mb-4">
					<div class="icon-wrap">
						<i class="icon icon-spoon"></i>
					</div>
				</div>
			</div>
			<div class="dark price-list">

				<div class="row">
					<table class="col-md-6">
						<tr v-for="(Dishe,index) in Dishes1" :key="index">
							<td>
								<img :src="Dishe.image" class="menuImg"/>
								<div class="title">
									<strong>{{Dishe.strong}}</strong>
									<em>{{Dishe.em}}</em>
								</div>
							</td>
							<td class="color-primary"><strong>{{Dishe.prix}}</strong></td>
						</tr>
					</table>

					<table class="col-md-6">
						<tr v-for="(Dish,index) in Dishes2" :key="index">
							<td>
								<img :src="Dish.image" class="menuImg">
								<div class="title">
									<strong>{{Dish.strong}}</strong>
									<em>{{Dish.em}}</em>
								</div>
							</td>
							<td class="color-primary"><strong>{{Dish.prix}}</strong></td>
						</tr>
					</table>

				</div>

			</div>

			<div class="pix_btn text-center">
        <router-link to="/FoodMenu" class="button btn-effect mt-5">View full menu</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "DishesView",
  data() {
    return {
      Dishes1: [
        {
          id:1,
          image: require("../../assets/images/food2.jpg"),
          strong: "Shrimp",
          em: "with soldiers",
          prix: "80 DT",
        },
        {
          id:2,
          image: require("../../assets/images/food3.jpg"),
          strong: "Paned chicken",
          em: "with soldiers",
          prix: "20 DT",
        },
        {
          id:3,
          image: require("../../assets/images/food4.jpg"),
          strong: "Pancake",
          em: "with soldiers",
          prix: "12 DT",
        },
        {
          id:4,
          image: require("../../assets/images/food5.jpg"),
          strong: "Salad",
          em: "with soldiers",
          prix: "15 DT",
        },
        {
          id:5,
          image: require("../../assets/images/food6.jpg"),
          strong: "Egg Sauce",
          em: "with soldiers",
          prix: "17 DT",
        },
        {
          id:6,
          image: require("../../assets/images/food7.jpg"),
          strong: "Roast Chicken",
          em: "with soldiers",
          prix: "25 DT",
        } ],
    Dishes2:[
        {
          id:7,
          image: require("../../assets/images/food8.jpg"),
          strong: "Roast Chicken",
          em: "with soldiers",
          prix: "25 DT",
        },
        {
          id:8,
          image: require("../../assets/images/food9.jpg"),
          strong: "Salad",
          em: "with soldiers",
          prix: "15 DT",
        },
        {
          id:9,
          image: require("../../assets/images/food10.jpg"),
          strong: "Egg Sauce",
          em: "with soldiers",
          prix: "17 DT",
        },
        {
          id:10,
          image: require("../../assets/images/food11.jpg"),
          strong: "Soup",
          em: "with soldiers",
          prix: "14 DT",
        },
        {
          id:11,
          image: require("../../assets/images/food12.jpg"),
          strong: "Egg Sauce",
          em: "with soldiers",
          prix: "21 DT",
        },
        {
          id:12,
          image: require("../../assets/images/food13.jpg"),
          strong: "Salad",
          em: "with soldiers",
          prix: "12 DT",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
td {
  padding: 0;
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
em, i {
  font-style: italic;
}
.color-primary {
  color: #cc9b4e !important;
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
img.menuImg {
    width: 60px; 
    height: 60px;
    border-radius: 50%;
    margin-right: 5px;
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

.mt-5 {
  margin-top: 3rem !important;
}
table, td {
  vertical-align: middle;
}
tr {
  line-height: 2em;
}
table {
  display: table;
  margin-bottom: 25px;
  padding: 0;
  width: 100%;
}
table:last-child {
  margin-bottom: 0;
}
table tbody tr:hover {
  background-color: rgba(197,157,95,0.3);
}
table td {
  padding: 10px;
}
.mt-5 { margin-top: 5px; }

.button {
    padding: 12px 20px;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
}
.btn-effect {
    color: #fff;
    border: 2px solid #c59d5f;
    background-image: -webkit-linear-gradient(30deg, #c59d5f 50%, transparent 50%);
    background-image: linear-gradient(30deg, #c59d5f 50%, transparent 50%);
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: 0%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;
}
.btn-effect:hover {
    background-position: 100%;
    color: #c59d5f;
}
.section-title {
    font-size: 2em;
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
}
.price-list tr {
    line-height: 2em;
    display: flex;
    justify-content: space-between;
}
.price-list td {
    display: flex;
}
.price-list .title {
    padding-left: 10px;
    line-height: 1.5;
}
.price-list em {
    display: block;
    color: #dadada;
}
.dark.price-list em {
    color: #000;
}
</style>