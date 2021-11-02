<template>
    <div id="banner">
        <img id="logo" src="./images/seaweb-logo2.png" alt="">
    </div>

    <nav id="navbar" class="sticky-top shadow navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">

            <ul class="navbar-nav">



                <li class="nav-item">
                    <router-link class="nav-link" to="/Home">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/SuppliersList">Fournisseurs</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ResellersList">Revendeurs</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/CustomersList">Clients</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/OrdersList">Commandes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/OnMapClick">Interactive Map</router-link>
                </li>

            </ul>
        </div>
    </nav>


    <router-view/>
</template>

<style>
    #navbar{
        padding-top: 0;
        padding-bottom: 0;
      position: sticky;
    }
    body {
        margin: 0;
    }

    nav ul li a:hover {
        transition-duration: 3s !important;
        color: white !important;
        background-color: cadetblue;
    }
    nav ul li a.router-link-exact-active {
        color: white !important;
        background-color: cadetblue;
      font-weight: bold;
    }

    #logo {

    }

    h1, h2 {
        text-align: center;
    }

    #loading-text {
    text-align: center;
        font-size: xxx-large;
        color: darkgreen;
        font-weight: bold;
    }
    #banner{
        display: flex;
        justify-content: center;
    }
</style>
