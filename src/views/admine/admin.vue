<template>
    <div class="admin">
        <div class="menu">
            <nav>
                <p><img src="@/assets/icons/tachometer-alt-solid.svg" alt="Dashboard Icon">Dashboard</p>
                <p><router-link to="diagramm">Access Diagramm</router-link></p>
                <p><router-link to="orderList">Liste reservation commande</router-link></p>
            </nav>
        </div>
        <div class="charts">
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3 color">
                        <div class="ounded d-flex align-items-center justify-content-between p-4">
                            <img src="@/assets/icons/chart-line-solid.svg">
                            <div class="ms-3">
                                <p class="mb-2">total reservation</p>
                                <h6 class="mb-0">{{this.reservation.length}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3 color">
                        <div class="rounded d-flex align-items-center justify-content-between p-4">
                            <img src="@/assets/icons/chart-bar-solid.svg">
                            <div class="ms-3">
                                <p class="mb-2">total order</p>
                                <h6 class="mb-0">{{ this.commandes.length }}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3 color">
                        <div class="rounded d-flex align-items-center justify-content-between p-4">
                            <img src="@/assets/icons/chart-area-solid.svg">
                            <div class="ms-3">
                                <p class="mb-2">Profits</p>
                                <h6 class="mb-0">{{ this.total }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-md-6 col-xl-4" style="margin-bottom:20px;">
                        <div class="h-100 color rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">To Do List</h6>
                            </div>
                            <div class="d-flex mb-2">
                                <input class="form-control bg-dark border-0" type="text" placeholder="Enter task">
                                <button type="button" class="btn btn-primary ms-2">Add</button>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox" checked>
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>Short task goes here...</del></span>
                                        <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    name: "admin",
    data() {
        return {
            commandes:[],
            reservation:[],
        }
    },
    mounted(){
        this.commandes=this.loadDataFromLocalStoragecommande();
        this.reservation=this.loadDataFromLocalStoragereservation();
    },
    methods:{
        loadDataFromLocalStoragecommande() {
            const jsonData = localStorage.getItem("commande");
            return jsonData ? JSON.parse(jsonData) : [];
        },
        loadDataFromLocalStoragereservation() {
            const jsonData = localStorage.getItem("reservation");
            return jsonData ? JSON.parse(jsonData) : [];
        },
        
    },
    computed: {
        total() {
            let sum = 0;
            for (let i = 0; i < this.commandes.length; i++) {
                for (let j = 0; j < this.commandes[i].commande.length; j++) {
                    sum += this.commandes[i].commande[j].prix * this.commandes[i].commande[j].nborder;
                }
            }
            return sum;
        }
    }

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