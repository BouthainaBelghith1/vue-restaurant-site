<template>
	<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-cta">
						<h1>Make Your Reservation</h1>
					</div>
					<div class="booking-form">
						<form id="contactForm" @submit.prevent="saveDataToLocalStorage">
							<div class="information">
								<div class="col-md">
									<div class="form-group">
										<span class="form-label">Full Name</span>
										<input class="form-control" v-model="Full_name" type="text"
											placeholder="Enter your full name">
									</div>
								</div>
								<div class="col-md">
									<div class="form-group">
										<span class="form-label">Adult</span>
										<select class="form-control" v-model="adults">
											<option v-for="number in options" :key="number" :value="number">{{ number }}
											</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
								<div class="col-md">
									<div class="form-group">
										<span class="form-label">Children</span>
										<select class="form-control" v-model="Children">
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
							</div>
							<div class="date">
								<div class="col-md">
									<div class="form-group">
										<span class="form-label">Check In</span>
										<input class="form-control" v-model="date" type="date">
									</div>
								</div>
								<div class="col-md">
									<div class="form-group">
										<span class="form-label">Time</span>
										<input class="form-control" v-model="time" type="time">
									</div>
								</div>
								<div class="col-md">
									<div class="form-btn">
										<button class="submit-btn">Check availability</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'reservation',
	props: {

	},
	data() {
		return {
			Full_name: null,
			adults: 1,
			Children: '0',
			options: [1, 2, 3, 4],
			date: '',
			time: '',
		};
	},
	methods: {
		loadDataFromLocalStorage() {
			const jsonData = localStorage.getItem("reservation");
			if (jsonData) {
				return JSON.parse(jsonData);
			} else {
				return [];
			}
		},
		saveDataToLocalStorage() {
			try {
				if (!this.Full_name || !this.date || !this.time) {
					alert("Please fill in all required fields.");
					return;
				}
				const selectedDate = new Date(this.date);
				const nextWeekStartDate = new Date();
				nextWeekStartDate.setDate(nextWeekStartDate.getDate() + (7 - nextWeekStartDate.getDay())); // First day of the next week
				const nextWeekEndDate = new Date(nextWeekStartDate);
				nextWeekEndDate.setDate(nextWeekEndDate.getDate() + 6); // Last day of the next week
				if (selectedDate < nextWeekStartDate || selectedDate > nextWeekEndDate) {
					// Display an error message or take appropriate action
					alert("Please select a date within the next week.");
					return;
				}
				const selectedTime = this.time.split(":");
				const selectedHour = parseInt(selectedTime[0]);
				const selectedMinute = parseInt(selectedTime[1]);

				if (selectedHour > 23 || (selectedHour === 23 && selectedMinute >= 30) || selectedHour < 12) {
					// Display an error message or take appropriate action
					alert("Please select a time between 12:00 and 23:30.");
					return;
				}
				let data = this.loadDataFromLocalStorage();
				let jsonData = {
					name: this.Full_name,
					adults: this.adults,
					Children: this.Children,
					date: this.date,
					time: this.time
				};
				data.push(jsonData);
				localStorage.removeItem("reservation");
				localStorage.setItem("reservation", JSON.stringify(data));
				this.resetForm();
				window.scrollTo({
					top: 0,
					behavior: "smooth", // Optional, smooth scrolling animation
				});
			} catch (error) {
				console.error("Error saving data to localStorage:", error);
			}
		},
		resetForm() {
			document.getElementById("contactForm").reset();
			this.Full_name = '';
			this.adults = 1;
			this.Children = '0';
			this.date = '';
			this.time = '';
		}
	},
}


</script>

<style>
.section {
	display: flex;
	flex-wrap: wrap;
	/* Permet le retour à la ligne des éléments si l'espace est insuffisant */
	justify-content: space-between;
	align-items: center;
	position: relative;
	height: 100vh;
}

.section .section-center {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	text-align: center;
}

#booking {
	background-image: url("../assets/images/bizerte.jpg");
	background-size: cover;
	background-position: center;
}

.booking-form .form-group {
	position: relative;
	height: 80px;
	margin-bottom: 10px;
	margin-right: -10px;
	margin-left: -10px;
	padding-right: 20px;
}

.booking-form .form-control {
	background-color: transparent;
	border: none;
	height: 80px;
	-webkit-box-shadow: none;
	box-shadow: none;
	font-size: 25px;
	color: #333;
	font-weight: 600;
	background: rgba(255, 255, 255, 0.85);
	padding-top: 30px;
	-webkit-transition: 0.2s background;
	font-family: 'Poppins', sans-serif;
}

.booking-form .form-control:focus {
	background: rgba(255, 255, 255, 1);
	-webkit-box-shadow: none;
	box-shadow: none;
}

.booking-form .form-control::-webkit-input-placeholder {
	color: rgba(51, 51, 51, 0.3);
}

.booking-form .form-control:-ms-input-placeholder {
	color: rgba(51, 51, 51, 0.3);
}

.booking-form .form-control::placeholder {
	color: rgba(51, 51, 51, 0.3);
}

.booking-form input[type="date"].form-control:invalid {
	color: rgba(51, 51, 51, 0.3);
}

.booking-form select.form-control {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.booking-form select.form-control+.select-arrow {
	position: absolute;
	right: 0px;
	bottom: 0px;
	text-align: center;
	pointer-events: none;
	background: rgba(255, 255, 255, 0.3);
	height: 80px;
	line-height: 80px;
}

.booking-form select.form-control+.select-arrow:after {

	display: block;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
	color: #333;
	font-size: 14px;
}

.booking-form .form-label {
	color: #8c5d28;
	display: block;
	font-weight: 700;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	letter-spacing: 0.6px;
	position: absolute;
	left: 10px;
	top: 0px;
}

.booking-form .form-btn {
	height: 80px;
	margin-right: -10px;
	margin-left: -10px;
	margin-bottom: 10px;
}

.booking-form .submit-btn {
	background: #8c5d28;
	border: none;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.6px;
	height: 80px;
	border-radius: 7px;
	font-size: 18px;
	width: 93%;
	color: #fff;
}

.booking-cta {
	text-align: center;
}

.booking-cta {
	margin-bottom: 30px;
}

.booking-cta h1 {
	color: #fff;
	margin: 0px;
	font-size: 52px;
	font-weight: 700;
}

.information {
	display: grid;
	grid-template-columns: 7fr 2fr 2fr;
	gap: 10px;
}

.date {
	display: grid;
	grid-template-columns: 5fr 5fr 6fr;
	gap: 10px;
}
</style>