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


        <div class="form-outline flex flex-row-reverse align-items-center">
          <!--appel component remove-->
          <Remove :data="suppliers.data" @delete="removeButton"/>

          <!--appel component add-->
          <Add :data="suppliers.data" @add="addRow"/>

          <!--appel fonction SearchBar-->
          <input class="form-control w-25 h-25 m-" type="text" v-model="searchBar" placeholder="Search for a name"/>
          <label>Filter field:</label>



        </div>


      <div id="perso-table" class="table">
        <table class="table table-striped">
          <tr class="table-dark" id="full-info">
            <th>Le nom</th>
            <th>Last UpDate</th>
            <th>status</th>
          </tr>
          <suppliers
              v-for="supplier in filteredSuppliers" :key="supplier.id"
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
import Remove from "@/components/deleteById";
import Add from "@/components/AddRow.vue";

export default {
  components: {Remove, suppliers, Pagination, Add},
  props: {
    msg: String
  },
  data() {
    return {
      suppliers: [], // au début la liste des villes est vide
      // testAdd: [],
      loading: false,
      errored: null,
      id:'',
      name: '',
      status:'',
      updated_at:'',
      // users:[{name:'',status:'',updated_at:''}],
      searchBar: '',
      url: 'https://heroku-campus-suppliers.herokuapp.com/api/suppliers',
    }
  },
  methods: {
    newPagination(e) {
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

    //ajout de ligne
    addRow(e) {
      this.suppliers.data.push(e)
    },




    removeSuppliersById(id) {
      const data = this.suppliers.data.filter((element) => element.id !== id)
      this.suppliers = {...this.suppliers, data}
    },

    removeButton(e) {
      this.remove(e)
    },
    remove(e) {
      axios
          .get(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers/${e}`)
          .then(response => {
            this.removeSuppliersById(response.data.id)
          })
          .catch(error => {
            console.log(error);
            this.errored = error
          })
    },

  },
  created() {
    this.getPage(this.url)
  },
  computed: {
    //Fonction pour la searchbar
    filteredSuppliers() {
      if (this.searchBar) {
        return this.suppliers.data.filter((item) => {
          return this.searchBar.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.suppliers.data
      }
    },


  }

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
#perso-table{
  width: 100%;
}
.form-outline{
  /*display: flex;*/
 }
</style>
