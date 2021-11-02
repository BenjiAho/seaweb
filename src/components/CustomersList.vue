<template>
    <div>

        <h1>LISTE DES CLIENTS</h1>
        <h2>Informations Clients </h2>
        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez
                réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <div id="loading-text" v-if="loading">Chargement...</div>

          <!--appel component remove-->
          <Remove :data="customers.data" @delete="removeButton"/>

          <!--appel SearchBar-->
          <label>Filter field:</label>
          <input class="form-control" type="text" v-model="searchBar" placeholder="Search for a FirstName"/>

            <div id="perso-table" class=" table">
                <table class="table table-striped">
                    <tr class="table-dark" id="full-info">
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>eMail</th>
                        <th>tél.</th>
                    </tr>
                    <customers v-for="customer in filteredSuppliers" :key="customer.id"
                               :lastName="customer.lastName"
                               :firstName="customer.firstName"
                               :email="customer.email"
                               :phoneNumber="customer.phoneNumber"
                               :longitude="customer.longitude">

                    </customers>
                </table>

            </div>

        </section>
      <Pagination :links="customers.links" @url="newPagination"/>

        <div id="test">

        </div>

    </div>
</template>

<script>



    import axios from "axios";
    import customers from "@/components/Customer.vue";
    import Pagination from "@/components/Pagination";
    import Remove from "@/components/deleteById";


    export default {
        components: {customers, Pagination, Remove},
        props: {
            msg: String
        },
        data() {
            return {
                customers: [],
                loading: false,
                errored: null,
              searchBar: '',
              url: 'https://heroku-campus-suppliers.herokuapp.com/api/customers',
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
                this.customers = response.data;
                this.loading = false;
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
        },
        removeSuppliersById(id){
          const data = this.customers.data.filter((element) => element.id !== id)
          this.customers = {...this.customers, data}
        },

        removeButton(e) {
          this.remove(e)
        },
        remove(e) {
          axios
              .get(`https://heroku-campus-suppliers.herokuapp.com/api/customers/${e}`)
              .then(response=> {
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
        filteredSuppliers() {
          if (this.searchBar) {
            return this.customers.data.filter((item) => {
              return this.searchBar.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v))
            })
          } else {
            return this.customers.data
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
</style>
