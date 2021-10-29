<template>
    <div>

        <h1>LISTE DES COMMANDES</h1>
        <h2>Informations Commandes </h2>
        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez
                réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <div id="loading-text" v-if="loading">Chargement...</div>
          <!--appel component remove-->
          <Remove :data="orders.data" @delete="removeButton"/>

          <!--appel SearchBar-->
          <label>Filter field:</label>
          <input class="form-control" type="text" v-model="searchBar" placeholder="Search for a number"/>

            <div id="perso-table" class="table-responsive table">
                <table class="table table-striped table-hover">
                    <tr class="table-dark" id="full-info">
                        <th>N°Commande</th>
                        <th>Date commande</th>
                        <th>Email-Client</th>
                        <th>Prix</th>
                        <th>N°tél Client</th>
                    </tr>


                    <orders v-for="order in filteredSuppliers" :key="order.id"
                            :number="order.number"
                            :date="order.date"
                            :price="order.price"
                            :email="order.customer.email"
                            :phoneNumber="order.customer.phoneNumber"
                    >

                    </orders>
                </table>

            </div>

        </section>
      <Pagination :links="orders.links" @url="newPagination"/>

        <div id="test">

        </div>

    </div>
</template>

<script>



    import axios from "axios";
    import orders from "@/components/Order.vue";
    import Pagination from "@/components/Pagination";
    import Remove from "@/components/deleteById";


    export default {
        components: {orders, Pagination, Remove},
        props: {
            msg: String
        },
        data() {
            return {
                orders: [],
                loading: false,
                errored: null,
              searchBar: '',
              url: 'https://heroku-campus-suppliers.herokuapp.com/api/orders',
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
                this.orders = response.data;
                this.loading = false;
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
        },
        removeSuppliersById(id){
          const data = this.orders.data.filter((element) => element.id !== id)
          this.orders = {...this.orders, data}
        },

        removeButton(e) {
          this.remove(e)
        },
        remove(e) {
          axios
              .get(`https://heroku-campus-suppliers.herokuapp.com/api/orders/${e}`)
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
        //Fonction pour la searchbar
        filteredSuppliers() {
          if (this.searchBar) {
            return this.orders.data.filter((item) => {
              return this.searchBar.toLowerCase().split(' ').every(v => item.number.toLowerCase().includes(v))
            })
          } else {
            return this.orders.data
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
</style>
