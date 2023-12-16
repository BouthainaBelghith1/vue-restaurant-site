<template>
    <section id="contact">
        <div class="footer">
            <div class="main">
                <div class="list">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Abous us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Tour</a></li>
                    </ul>
                </div>
                <div class="list">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Abous us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Tour</a></li>
                    </ul>
                </div>
                <div class="list">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><a href="#">Bizerte 7000</a></li>
                        <li><a href="#">Tunisie</a></li>
                        <li><a href="#">+216 25 438 004</a></li>
                        <li><a href="mailto:#">prestige@gmail.com</a></li>
                    </ul>
                </div>
                <div class="social">
                    <h4>Connect</h4>
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bx-link'></i></a>
                </div>
            </div>
        </div>
        <div class="end-text">
            <p>Copiright All rights reserved | Made with ❤️ by Mourad Soltan and Bouthaina Belghith, DSI21.</p>
        </div>
    </section>
</template>

<style scoped>
ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}

#contact {
    background-color: #F38D35;
    padding: 50px;
}

.main {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
}

.footer {
    padding: 20px 0;
}

.list h4 {
    font-size: 21px;
    color: #fff;
    margin-bottom: 30px;
    position: relative;
}

.list h4:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 60px;
    left: 0;
    bottom: -10px;
    background-color: #fff;
}

.list ul li {
    margin-bottom: 16px;
}

ul {
    padding: 0;
    margin: 0;
}

.social,
.list ul li a {
    color: #ffffffbf;
    font-size: 18px;
    display: block;
    transition: .3s;
}

.social,
.list ul li a:hover {
    color: #fff;
    transform: translateX(14px);
}

.social a {
    height: 40px;
    width: 40px;
    background-color: #fff;
    color: #F38D35;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    border-radius: 15px;
    transition: .3s;
    margin-right: 10px;
}

.social a:hover {
    transform: scale(1.1);
}

.end-text {
    text-align: center;
    padding-top: 90px;
    color: #221314;
    font-size: 14px;
    letter-spacing: 2px;
    margin-top: -30px;
}



@media screen and (max-width : 1040px) {
    .list {
        width: 50%;
        margin-bottom: 12px;
    }

    .main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

}

@media screen and (max-width : 950px) {

    .main {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
    }

}

@media screen and (max-width : 700px) {
    .list {
        width: 100%;
    }

    .main {
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
    }
}
</style>