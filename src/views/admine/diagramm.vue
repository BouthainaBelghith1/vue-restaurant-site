<template>
  <div class="admin">
    <div class="menu">
      <nav>
        <p><img src="@/assets/icons/tachometer-alt-solid.svg" alt="Dashboard Icon">Dashboard</p>
        <p><router-link to="admin">Home Page</router-link></p>
        <p><router-link to="orderList">Liste reservation commande</router-link></p>
      </nav>
    </div>
    <div class="charts">

      <div class="container-fluid pt-7 px-7">
        <div class=" text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Today's Table Reservation Metrics: Tracking Demand Trends in Our Restaurant</h6>
          </div>
          <div class="table-responsive">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      <h1>Food Chart</h1>
      <div class="container-fluid pt-7 px-7">
        <div class=" text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Today's Table Reservation Metrics: Tracking Demand Trends in Our Restaurant</h6>
          </div>
          <div class="table-responsive">
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Chart from 'chart.js/auto';

export default {
  name: "diagramm",
  data() {
    return {
      commands: [],
      myChart: null,
      myChart2: null,
    }
  },
  mounted() {
    this.calculreservation();
    this.calculCommandesChart();
  },
  methods: {
    loadDataFromLocalStoragecommande() {
      const jsonData = localStorage.getItem("commande");
      return jsonData ? JSON.parse(jsonData) : [];
    },
    loadDataFromLocalStoragereservation() {
      const jsonData = localStorage.getItem("reservation");
      return jsonData ? JSON.parse(jsonData) : [];
    },
    countReservationsForDay(dayName) {
      const reservations = this.loadDataFromLocalStoragereservation();
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
      if (this.myChart) {
        this.myChart.destroy();
      }
      const ctx = document.getElementById('myChart');
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: '# Reservation per day',
            data: [reservationsMonday, reservationsTuesday, reservationsWednesday, reservationsThursday, reservationsFriday, reservationsSaturday, reservationsSunday],
            backgroundColor: 'rgba(255, 181, 52)',
            borderWidth: 3
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
    },
    counttotaleNBCommandeFood(id) {
      this.commands = this.loadDataFromLocalStoragecommande();
      let Quantiter = 0;
      for (let i = 0; i < this.commands.length; i++) {
        for(let j=0;j<this.commands[i].commande.length;j++){
          if (id == this.commands[i].commande[j].id) {
            Quantiter += this.commands[i].commande[j].nborder;
          }
        }
      }
      return Quantiter;
    },
    calculCommandesChart() {
      //console.log('Calculating Commandes Chart');
      const food1 = this.counttotaleNBCommandeFood(0);
      const food2 = this.counttotaleNBCommandeFood(1);
      const food3 = this.counttotaleNBCommandeFood(2);
      const food4 = this.counttotaleNBCommandeFood(3);
      const food5 = this.counttotaleNBCommandeFood(4);
      const food6 = this.counttotaleNBCommandeFood(5);
      const food7 = this.counttotaleNBCommandeFood(6);
      const food8 = this.counttotaleNBCommandeFood(7);
      const food9 = this.counttotaleNBCommandeFood(8);
      const food10 = this.counttotaleNBCommandeFood(9);
      const food11 = this.counttotaleNBCommandeFood(10);
      const food12 = this.counttotaleNBCommandeFood(11);
      console.log(food1);
      if (this.myChart2) {
        this.myChart2.destroy();
      }
      const ctx2 = document.getElementById('myChart2');
      //console.log(ctx2);
      this.myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Food1', 'Food2', 'Food3', 'Food4', 'Food5', 'Food6', 'Food7', 'Food8', 'Food9', 'Food10', 'Food11', 'Food12'],
          datasets: [{
            label: '# Reservation per day',
            data: [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12],
            backgroundColor: 'rgba(255, 255, 255)',
            color: 'rgba(255, 255, 255)',
            borderColor: 'rgba(255, 128, 0)',
            borderWidth: 2
          }]
        },
      });
    },
  }
};

</script>

<style scoped>
h1 {
  text-align: center;
  color: #F28D35;
  padding-bottom: 50px;
  padding-top: 50px
}

#myChart {
  margin-left: 80px;
  margin-right: 80px;
  padding-bottom: 100px;
  padding-top: 30px;
}

#mySecondChart {
  margin-left: 150px;
  margin-right: 100px;
  padding-bottom: 150px;
  padding-top: 30px;
}

.admin {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1.5fr 7fr;
}

.menu {
    padding: 20px;
    height: auto;
    background: #F38D20;
}

.charts {
    padding: 20px;
}
img{
    width: 35px;
    height: 35px;
}

.bg-secondary {
    background: #F38D30;
}

p {
    font-family: 'Your Preferred Font', sans-serif; /* Choisissez votre police de caractères préférée */
    font-size: 16px; /* Taille de police */
    color: #333; /* Couleur du texte */
    margin-bottom: 10px; /* Marge en bas du paragraphe */
  }

  a {
    text-decoration: none; /* Supprimer la décoration du lien par défaut */
    color: #FFFFFF; /* Couleur du lien */
    font-weight: bold; /* Gras */
  }

  a:hover {
    text-decoration: underline; /* Souligner le lien au survol */
  }
</style>