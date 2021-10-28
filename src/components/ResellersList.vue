<template>
    <div>

        <h1>LISTE DES REVENDEURS</h1>
        <h2>Informations Revendeurs </h2>
        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez
                réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <div id="loading-text" v-if="loading">Chargement...</div>
            <div id="perso-table" class="table-responsive table">
                <table class="table table-striped">
                    <tr class="table-dark" id="full-info">
                        <th>Nom Revendeur</th>
                        <th>Description</th>
                        <th>Mis à jour</th>
                        <th>Status</th>
                    </tr>
                    <resellers v-for="reseller in resellers.data" :key="reseller.id"
                               :name="reseller.name"
                               :description="reseller.description"
                               :date="reseller.updated_at"
                               :status="reseller.supplier.status">

                    </resellers>
                </table>

            </div>

        </section>
      <Pagination :links="resellers.links" @url="newPagination"/>

        <div id="test">

        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import resellers from "@/components/Reseller.vue";
    import Pagination from "@/components/Pagination.vue";

    export default {
        components: {resellers, Pagination},
        props: {
            msg: String
        },
        data() {
            return {
                resellers:[],
                loading: false,
                errored: null,
              url: 'https://heroku-campus-suppliers.herokuapp.com/api/resellers',
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
                this.resellers = response.data;
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
