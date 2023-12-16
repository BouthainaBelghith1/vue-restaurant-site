<template>
    <div class="admin">
        <div class="menu">
            <nav>
                <p><img src="@/assets/icons/tachometer-alt-solid.svg" alt="Dashboard Icon">Dashboard</p>
                <p><router-link to="admin">Home Page</router-link></p>
                <p><router-link to="diagramm">Access Diagramm</router-link></p>
            </nav>
        </div>
        <div class="charts">

            <div class="container-fluid  px-4 color">
                <div class=" text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Table Reservation</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Adult</th>
                                    <th scope="col">Children</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(customer,index) in reservations" :key="index">
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>{{ customer.date }}</td>
                                    <td>{{ customer.time }}</td>
                                    <td>{{ customer.name }}</td>
                                    <td>{{ customer.adults }}</td>
                                    <td>{{ customer.Children }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="container-fluid px-4 color">
                <div class="text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Food Commander</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"></th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Adress</th>
                                    <th scope="col">Foods</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(commande, index) in commandes" :key="index">
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>{{ commande.name }}</td>
                                    <td>{{ commande.tel }}</td>
                                    <td>{{ commande.adress }}</td>
                                    <td><select>
                                            <option value="" disabled selected>Select Food</option>
                                            <option v-for="(food, foodIndex) in commande.commande" :key="foodIndex">{{
                                                food.name }}</option>
                                        </select>
                                    </td>
                                    <td>{{ Quantity(commande.commande) }}</td>
                                    <td>{{ total(commande.commande) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>



export default {
    name: "orderList",
    data() {
        return {
            commandes: [],
            reservations: [],
            selectedFood: "",
        }
    },
    mounted() {
        this.commandes = this.loadDataFromLocalStoragecommande();
        this.reservations = this.loadDataFromLocalStoragereservation();
    },
    methods: {
        loadDataFromLocalStoragecommande() {
            const jsonData = localStorage.getItem("commande");
            if (jsonData) {
                return JSON.parse(jsonData);
            } else {
                return [];
            }
        },
        loadDataFromLocalStoragereservation() {
            const jsonData = localStorage.getItem("reservation");
            if (jsonData) {
                return JSON.parse(jsonData);
            } else {
                return [];
            }
        },
        Quantity(food) {
            let qantiter = 0;
            for (let i = 0; i < food.length; i++) {
                qantiter += food[i].nborder;
            }
            return qantiter;
        },
        total(food) {
            let montants = 0;
            for (let i = 0; i < food.length; i++) {
                montants += (food[i].prix * food[i].nborder);
            }
            return montants;
        }
    },
};


</script>
<style scoped>
.admin {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1.5fr 7fr;
}
.color{
    background:#F38D20;
    margin:20px;
    margin-right:20px;
    border-radius:10px;
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

.d-flex{
    background: #F38D20;
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