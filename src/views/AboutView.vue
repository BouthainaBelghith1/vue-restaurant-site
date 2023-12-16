<template>
  <section class="presentation">
    <div>
      <h1 id="titre">About Us</h1>
      <p>
        Welcome to Prestige du Goût, an exceptional culinary experience dedicated to awakening your taste buds and you
        to discover the quintessence of gastronomy. Since our opening, we have strived to create a place where
        refinement, creativity and passion come together to offer an unforgettable experience to our guests.
      </p>
      <p>
        At Prestige du Goût, each dish is a work of art carefully prepared by our talented chefs who
        share a common vision: to elevate cuisine to a level of excellence. We believe that every ingredient has
        its importance, and this is why we favor fresh, local and highest quality products to
        create flavors that transport you.
      </p>
      <p>
        Our dedicated team is committed to providing you with attentive and personalized service. Whether for an evening
        romantic, a special celebration or simply for a gastronomic experience, we are here to make
        each visit a celebration of gastronomy and pleasure.
      </p>
    </div>
    <img src="@/assets/images/chef.png">
  </section>
  <section class="chefs">
    <h1>Our Golden Chefs</h1>
    <div class="cadres">
      <AboutViewChild></AboutViewChild>
    </div>
  </section>
  <section class="story">
    <h4 class="diagramme">Daily Table Reservation Metrics: Tracking Demand Trends at Our Restaurant</h4>
    <div>
      <canvas id="myChart" style="margin: 200px;"></canvas>
    </div>
  </section>
</template>

<script>
import AboutViewChild from "@/components/AboutViewChild.vue";
import Chart from 'chart.js/auto';

export default {
  name: "AboutView",
  components: {
    AboutViewChild,
  },
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    // Call the calculreservation method when the component is mounted
    this.calculreservation();
  },
  methods: {
    loadDataFromLocalStorage() {
      const jsonData = localStorage.getItem("reservation");
      return jsonData ? JSON.parse(jsonData) : [];
    },
    countReservationsForDay(dayName) {
      const reservations = this.loadDataFromLocalStorage();
      const dayReservations = reservations.filter(reservation => {
        const reservationDay = new Date(reservation.date).toLocaleDateString('en-US', { weekday: 'long' });
        return reservationDay.toLowerCase() === dayName.toLowerCase();
      });
      return dayReservations.length;
    },
    calculreservation() {
      const reservationsMonday = this.countReservationsForDay('Monday');
      const reservationsTuesday = this.countReservationsForDay('Tuesday');
      const reservationsWednesday = this.countReservationsForDay('Wednesday');
      const reservationsThursday = this.countReservationsForDay('Thursday');
      const reservationsFriday = this.countReservationsForDay('Friday');
      const reservationsSaturday = this.countReservationsForDay('Saturday');
      const reservationsSunday = this.countReservationsForDay('Sunday');

      // Destroy the old chart
      if (this.myChart) {
        this.myChart.destroy();
      }

      // Create a new chart with updated data
      const ctx = document.getElementById('myChart');
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: '# Reservation per day',
            data: [reservationsMonday, reservationsTuesday, reservationsWednesday, reservationsThursday, reservationsFriday, reservationsSaturday, reservationsSunday],
            backgroundColor: 'rgba(255, 181, 52)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
            y: {
              beginAtZero: true
            }
          }
        },
      });

      // Log the updated data
      //console.log(this.myChart.data.datasets[0].data);
    }
  }
};
</script>


<style>
#titre {
  text-align: center;
  color: #F28D35;
  padding-bottom: 100px;
}

.presentation {
  display: grid;
  grid-template-columns: 500px auto;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;
  margin-top: 50px;
}

.presentation img {
  height: 500px;
  width: 500px;
  margin-top: -50px;
}

.presentation h1 {
  font-size: 35px;
  color: #F28D35;
  margin-bottom: -70px;
}

.presentation p {
  text-align: justify;
  line-height: 1.2;
}

.chefs h1 {
  text-align: center;
  font-size: 50px;
  color: #F28D35;
  margin-bottom: 50px;
}

.diagramme {
  text-align: center;
  font-size: 30px;
  color: #F28D35;
  margin-bottom: 50px;
}

.cadres {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 50px;
  margin-top: 70px;
  margin-bottom: 150px;
  padding: 30px;
}

.cadre {
  text-align: center;
  box-shadow: 20px;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
}

.cadre img {
  padding: 20px;
  width: 200px;
  height: 300px;
  background-color: white;
}

.cadre p,
h2 {
  background-color: white;
}

.cadre h2 {
  color: #F2B035;
}

.story {
  text-align: center;
  margin-bottom: 150px;
}

.story h1 {
  font-size: 50px;
  color: #F28D35;
  margin-bottom: 50px;
}

.story p {
  font-size: 15px;
  text-align: center;
  margin-left: 100px;
  text-align: justify;
  margin-right: 100px;
}
</style>