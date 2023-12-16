<template>
    <nav>
        <img src="@/assets/images/Prestige du Goût.png">
        <div class="menu">
            <router-link to="/" class="custom-link">Home</router-link>
            <router-link to="/About" class="custom-link">About</router-link>
            <router-link to="/FoodMenu" class="custom-link">Food Menu</router-link>
            <router-link to="/Reservation" class="custom-link">Reservation</router-link>
        </div>
        <div class="icon">
            <router-link to="/" class="custom-link"><img src="@/assets/icons/house-chimney-1.png"></router-link>
            <img src="@/assets/icons/search-alternate.png">
        </div>
    </nav>
    <hr>
</template>

<script>
export default {
    name: "navbar",
};

</script>
<style scoped>
a {
    text-decoration: none;
}

nav {
    display: grid;
    grid-template-columns: 3fr 4fr 1.5fr;

    background-color: #F38D35;
    padding-top: 20px;
}

nav img {
    height: 100px;
    width: 120px;
    margin-left: 50px;
    margin-top: -20px;
    padding-bottom: -10px;
}

.icon img {
    height: 22px;
    width: 22px;
    margin-top: 10px;
}

.menu {
    display: grid;
    grid-template-columns: 50px 50px 120px 50px;
    gap: 70px;
    font-size: 20px;
    color: black;
    margin-top: 10px;
}

.custom-link {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
}

.custom-link:hover {
    color: #F5EDA2;
    transform: scale(1.1);
}

hr {
    margin-top: -10px;
    margin-bottom: -10px;
    border: 2px solid #F28D35;
}

@media screen and (max-width : 1040px) {
    nav {
        display: grid;
        grid-template-columns: 3fr 4fr 1.5fr;
        padding: 20px;
        margin-bottom: -20px;
        gap: 20px;
    }

    nav img {
        height: 70px;
        width: 80px;
        margin-left: 50px;
        padding-bottom: -10px;
    }

    .icon img {
        height: 15px;
        width: 15px;
        margin-top: 10px;
    }

    .menu {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr;
        gap: 30px;
        font-size: 15px;
        color: black;
        margin-top: 10px;
    }
}
</style>