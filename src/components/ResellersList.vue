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
                    <resellers v-for="reseller in resellers" :key="reseller.id"
                               :name="reseller.name"
                               :description="reseller.description"
                               :updated_at="reseller.updated_at"
                               :status="reseller.supplier.status">

                    </resellers>
                </table>

            </div>

        </section>


        <div id="test">

        </div>

    </div>
</template>

<script>


    // import suppliers from "@/components/Supplier.vue";
    import axios from "axios";
    import resellers from "@/components/Reseller.vue";
    // import Suppliers from "@/components/Supplier";


    export default {
        components: {resellers},
        props: {
            msg: String
        },
        data() {
            return {
                resellers:[],
                loading: false,
                errored: null,
            }
        },
        mounted() {

            this.loading = true;
            axios
                .get('https://heroku-campus-suppliers.herokuapp.com/api/resellers')
                .then(response => {
                    this.resellers = response.data.data;
                    console.log(this.resellers);
                    this.loading = false;

                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
