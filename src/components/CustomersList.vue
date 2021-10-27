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
            <div id="perso-table" class="table-responsive table">
                <table class="table table-striped">
                    <tr class="table-dark" id="full-info">
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>eMail</th>
                        <th>tél.</th>
                    </tr>
                    <customers v-for="customer in customers" :key="customer.id"
                               :lastName="customer.lastName"
                               :firstName="customer.firstName"
                               :email="customer.email"
                               :phoneNumber="customer.phoneNumber"
                               :longitude="customer.longitude">

                    </customers>
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
    import customers from "@/components/Customer.vue";
    // import Suppliers from "@/components/Supplier";


    export default {
        components: {customers},
        props: {
            msg: String
        },
        data() {
            return {
                customers: [],
                loading: false,
                errored: null,
            }
        },
        mounted() {

            this.loading = true;
            axios
                .get('https://heroku-campus-suppliers.herokuapp.com/api/customers')
                .then(response => {
                    this.customers = response.data.data;
                    console.log(this.customers);
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
