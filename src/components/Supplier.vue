<template>

<tr>
    <td>
        {{ name }}
    </td>


    <td>
        {{ formatage }}
    </td>

    <td class="dispo" v-if="status === true">
        Disponible en stock
    </td>
    <td class="rupture" v-else>
       Rupture de stock
    </td>
</tr>

</template>

<script>

    import {format} from 'timeago.js';

    export default {
        name: 'suppliers',
        components: '',
        props: ['supplier', 'id',
            'name',
            'date',
            'status',
            'latitude',
            'longitude',

        ],

        computed: {
            formatage() {
                return format(this.date)
            },
        }
    }
</script>

<style scoped>
.dispo{
    color:green;
}
.rupture{
    color: red;
}
</style>