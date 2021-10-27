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
            <div id="perso-table" class="table-responsive table">
                <table class="table table-striped">
                    <tr class="table-dark" id="full-info">
                        <th>N°Commande</th>
                        <th>Date commande</th>
                        <th>Email-Client</th>
                        <th>Prix</th>
                        <th>N°tél Client</th>
                    </tr>


                    <orders v-for="order in orders" :key="order.id"
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


        <div id="test">

        </div>

    </div>
</template>

<script>


    // import suppliers from "@/components/Supplier.vue";
    import axios from "axios";
    import orders from "@/components/Order.vue";
    // import Suppliers from "@/components/Supplier";


    export default {
        components: {orders},
        props: {
            msg: String
        },
        data() {
            return {
                orders: [],
                loading: false,
                errored: null,
            }
        },
        mounted() {

            this.loading = true;
            axios
                .get('https://heroku-campus-suppliers.herokuapp.com/api/orders')
                .then(response => {
                    this.orders = response.data.data;
                    console.log(this.orders);
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
