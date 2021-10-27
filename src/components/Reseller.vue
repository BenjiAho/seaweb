<template>
    <tr>
        <td>
            {{ name }}
        </td>
        <td>
            {{ description }}
        </td>
        <td>
            {{formatage}}
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
    import { format} from 'timeago.js';
    export default {
        name: 'resellers',
        props: [
            'name',
            'status',
            'description',
            'date',
        ],

        computed: {
            formatage(){
                return format(this.date)
            }
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