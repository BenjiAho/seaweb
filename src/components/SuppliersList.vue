<template>
  <div>

    <h1>LISTE DES FOURNISSEURS</h1>
    <h2>Informations Fournisseurs </h2>
    <section v-if="errored">
      <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment.
        Veuillez
        réessayer ultérieurement.</p>
    </section>
    <section v-else>
      <div id="loading-text" v-if="loading">Chargement...</div>
      <div id="perso-table" class="table-responsive table">
        <table class="table table-striped">
          <tr class="table-dark" id="full-info">
            <th>Le nom</th>
            <th>Last UpDate</th>
            <th>status</th>
          </tr>
          <suppliers
              v-for="supplier in suppliers.data" :key="supplier.id"
              :supplier="supplier"
              :name="supplier.name"
              :date="supplier.updated_at"
              :status="supplier.status">
          </suppliers>
        </table>
      </div>
    </section>
    <Pagination :links="suppliers.links" @url="newPagination"/>
  </div>
</template>

<script>


import suppliers from "@/components/Supplier.vue";
import axios from "axios";
import Pagination from "@/components/Pagination.vue";


export default {
  components: {suppliers, Pagination},
  props: {
    msg: String
  },
  data() {
    return {
      suppliers: [], // au début la liste des villes est vide
      loading: false,
      errored: null,
      url: 'https://heroku-campus-suppliers.herokuapp.com/api/suppliers',
    }
  },
  methods: {
    newPagination(e){
      this.getPage(e)
    },
    getPage(url) {
      this.loading = true;
      axios
          .get(url)
          .then(response => {
            this.suppliers = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    },
  },
  created() {
        this.getPage(this.url)
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
}

tr:hover {
  transition-duration: 1s;
  background-color: cadetblue;
  color: white;
}

.table-striped > tr:nth-child(even) {
  background-color: lightcyan;
}

.table-striped > tr:nth-child(even):hover {
  transition-duration: 1s;
  background-color: cadetblue;
  color: white;
}
</style>
