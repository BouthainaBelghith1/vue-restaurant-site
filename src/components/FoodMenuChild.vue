<template>
    <div v-for="(food, index) in foods" :key="index" class="card">
        <img :src="require(`@/assets/${food.image}`)" class="img">
        <div class="card__content">
            <h5 class="card__title">{{ food.name }}</h5>
            <p class="card__description">{{ food.p }}</p>
            <div class="nborder">
                <button v-if="food.nborder > 0" v-on:click="del(food)">-</button>
                <button v-else style="cursor: no-drop;">-</button>
                <span>{{ food.nborder }}</span>
                <button v-on:click="add(food)">+</button>
            </div>
            <button v-if="food.nborder > 0" class="add_to_order" v-on:click="update(food)">add to order</button>
            <button v-else class="add_to_order" style="cursor: no-drop;">add to order</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "FoodMenuChild",
    emits: ['add', 'del', 'update-carte'],
    props: {
        foods: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {};
    },
    methods: {
        add(food) {
            //console.log(food.nborder);
            //food.nborder++;
            this.$emit('add', food);
        },
        del(food) {
            this.$emit('del', food);
        },
        update(food) {
            //console.log("Update method in FoodMenuChild.vue called:", food);
            this.$emit('update-carte', food);
        },

    }
};
</script>

<style scoped>
.card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    transform: rotateX(0deg);
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card:hover svg {
    scale: 0;
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
}

.add_to_order {
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
    top: 23px;
    left: 170px;
}

.add_to_order:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #a29bfe;
}

.nborder {
    display: grid;
    grid-template-columns: 25px 25px 15px;
    font-size: 20px;
    position: relative;
    top: 60px;
    left: 95px;
}

.nborder button {
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.nborder button:nth-child(1) {
    margin-top: -5px;
}

.nborder span {
    padding-left: 2px;
}
</style>