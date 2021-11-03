<template>
  <div id="banner">
    <img id="logo" src="./images/seaweb-logo2.png" alt="">
  </div>
  <div class="m-4">
    <nav id="navbar" class="sticky-top shadow navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">Menu</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/Home">Home</router-link>
            <router-link class="nav-item nav-link" to="/SuppliersList">Fournisseurs</router-link>
            <router-link class="nav-item nav-link" to="/ResellersList">Revendeurs</router-link>
            <router-link class="nav-item nav-link" to="/CustomersList">Clients</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <router-view/>
</template>

<style>
#navbar {
  padding-top: 0;
  padding-bottom: 0;
  position: sticky;
}

body {
  margin: 0;
}

.navbar-nav a:hover {
  transition-duration: 3s !important;
  color: white !important;
  background-color: cadetblue;
}

.navbar-nav a.router-link-exact-active {
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

#banner {
  display: flex;
  justify-content: center;
}
</style>
