<template>
  <h1 id="titre">Food Menu</h1>
  <section class="FoodMenu">
    <FoodMenuChild :foods="foods" @add="add" @del="del" @update-carte="update"></FoodMenuChild>
  </section>
  <section class="panier" v-if="paniers.length > 0">
    <div class="head">
      <h5>FOODS</h5>
      <h5>PRIX</h5>
      <h5>QUANTITÉ</h5>
      <h5>TOTAL</h5>
    </div>
    <hr>
    <br>
    <div v-for="(panier, index) in paniers" :key="index">
      <div class="body" v-if="panier.nborder > 0">
        <div class="profileFood">
          <img :src="require(`@/assets/${panier.image}`)">
          <h5>{{ panier.name }}</h5>
        </div>
        <h4>{{ panier.prix }}</h4>
        <div class="quatite">
          <h5>{{ panier.nborder }}</h5>
          <div class="add_del">
            <button v-on:click="add(panier)">+</button>
            <button v-if="panier.nborder > 0" v-on:click="del(panier)">-</button>
            <button v-else style="cursor: no-drop;">-</button>
          </div>
        </div>
        <h4>{{ calculatePrice(panier) }}</h4>
      </div>
    </div>
    <div class="Valide">
      <span>TOTAL : {{ tolat }}</span>
      <button class="add_to_order" @click="toggleModal">Valider La Commande</button>
    </div>
  </section>
  <div class="modal-container" :class="{ active: isModalActive }">
    <div class="overlay modal-trigger"></div>
    <div class="modal1">
      <button aria-label="close modal" class="close-modal modal-trigger" @click="toggleModal(false)">X</button>
      <h1 id="modalTitle">Personal informations</h1>
      <form id="contactForm" @submit.prevent="saveDataToLocalStorage">
        <div class="m-4">
          <label for="name1">First and last name</label>
          <input type="text" id="name1" class="form-control mt-3" v-model="user_name">
          <label for="Numero">Phone number</label>
          <input type="tel" id="Numero" class="form-control mt-3" v-model="tel">
          <label for="adresse">Address</label>
          <input type="text" name="t4" id="adresse" class="form-control mt-3" v-model="adress">
        </div>
        <div class="m-4">
          <input type="submit" @click="toggleModal(false)" class="button modal-trigger" value="Save Contact">
          <button type="reset" @click="toggleModal(false), resetForm()" class="btn btn-light modal-trigger">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import FoodMenuChild from "@/components/FoodMenuChild.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "FoodMenu",
  emits: ['add', 'del', 'update-carte'],
  components: {
    FoodMenuChild,
  },
  data() {
    return {
      isModalActive: false,
      foods: [],
      paniers: [],
      user_name: null,
      tel: null,
      adress: null,

    };
  },
  methods: {
    add(food) {
      //console.log(food.nborder);
      food.nborder++;
    },
    del(food) {
      //console.log(food.nborder);
      food.nborder--;
      if (food.nborder == 0) {
        for (let i = 0; i < this.paniers.length; i++) {
          if (this.paniers[i].id == food.id) {
            this.paniers.splice(i, 1);
          }
        }
      }
    },
    update(food) {
      for (let i = 0; i < this.paniers.length; i++) {
        if (this.paniers[i].id == food.id) {
          this.paniers.splice(i, 1);
        }
      }
      this.paniers.push(food);
      //console.log(this.paniers);
    },
    calculatePrice(food) {
      return food.nborder * food.prix;
    },
    toggleModal(open) {
      if (open) {
        this.isModalActive = true;
      } else {
        this.isModalActive = false;
      }
    },
    loadDataFromLocalStorage() {
      const jsonData = localStorage.getItem("commande");
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return [];
      }
    },
    saveDataToLocalStorage() {
      try {
        let data = this.loadDataFromLocalStorage();
        let jsonData = {
          name: this.user_name,
          tel: this.tel,
          adress: this.adress,
          commande: this.paniers
        };
        data.push(jsonData);
        localStorage.removeItem("commande");
        localStorage.setItem("commande", JSON.stringify(data));
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
      EventService.getEvents()
        .then((response) => {
          this.foods = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      document.getElementById("contactForm").reset();
      this.user_name = null;
      this.tel = null;
      this.adress = null;
      this.paniers = [];
    }
  },
  computed: {
    tolat() {
      let montants = 0;
      for (let i = 0; i < this.paniers.length; i++) {
        montants += (this.paniers[i].prix * this.paniers[i].nborder);
      }
      return montants
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.foods = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

</script>

<style scoped>
#titre {
  text-align: center;
  color: #F28D35;
  padding-bottom: 100px;
  margin-top: 50px;
}

.FoodMenu {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 40px;
  justify-content: center;
  padding-bottom: 100px;
}

.details {
  position: absolute;
  right: 0;
  bottom: 5px;
  height: 60px;
  text-align: center;
  text-transform: uppercase;
  background: #fff;
  bottom: 30px;
}

/*Image*/
.imgbox {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222;
  transition: 0.5s;
  z-index: 1;
}

.img {
  background: #4158D0;
  background-image: linear-gradient(45deg, #4158D0, #C850C0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*Text*/
.title {
  font-weight: 600;
  font-size: 20px;
  color: #F2B035;
  background: #fff;
}

.head {
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: -10px;
}

.panier {
  margin: 50px;
  padding: 20px;
  background-color: #ccc;
  border-radius: 20px;
}

.panier hr {
  border: 1px solid black;
  margin-bottom: 20px;
}

.body {
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  margin-top: -20px;
  gap: 50px;
}

.body h4 {
  margin-top: 10px;
}

.body img {
  width: 100px;
  border-radius: 20px;
}

.profileFood {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
}

.profileFood h5 {
  margin-top: 20px;
}

.quatite {
  display: grid;
  grid-template-columns: 15px 20px;
  gap: 5px;
  padding-left: 30px;
  margin-top: 10px;
}

.add_del {
  display: grid;
  grid-template-rows: 30px 5px;
  margin-top: -20px;
}

.add_del button {
  border: none;
  background-color: #ccc;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
}

.Valide button {
  border: none;
  outline: none;
  background-color: #F28D35;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #FFE36B;
  position: relative;
  left: 82%;
}

.Valide button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}

.Valide span {
  position: relative;
  left: 80%;
}

.modal-container {
  visibility: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: visibility 0.4s;
  z-index: 1;
  /* Added z-index */
}

.modal-container.active {
  visibility: visible;
}

.overlay {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  transition: opacity 0.4s 0.2s ease-out;
  z-index: 1;
  /* Added z-index */
}

.modal-container.active .overlay {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal1 {
  opacity: 0;
  width: 95%;
  max-width: 500px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  z-index: 2;
  /* Increased z-index */
}

.modal-container.active .modal1 {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out, transform 0.4s 0.2s ease-out;
}

.close-modal {
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: #ff365e;
  color: #fff;
}

.modal1 h1 {
  margin-bottom: 10px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
}

.modal1 p {
  line-height: 1.4;
  margin-bottom: 5px;
}

.button {
  border: none;
  outline: none;
  background-color: #F28D35;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #FFE36B;
  margin-right: 20px;
}

.button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}

@media screen and (max-width : 1200px) {
  .FoodMenu {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }

  .Valide button {
    left: 70%;
  }

  .Valide span {
    left: 65%;
  }

  .panier * {
    font-size: 20px;
  }

  .add_del button {
    font-size: 20px;
  }


}

@media screen and (max-width : 600px) {

  .FoodMenu {
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
  }

  .Valide button {
    left: 50%;
  }

  .Valide span {
    left: 45%;
  }

  .panier * {
    font-size: 15px;
  }

  .add_del button {
    font-size: 15px;
  }

  .profileFood h5 {
    margin-top: 10px;
  }
}
</style>