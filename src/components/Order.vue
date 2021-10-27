<template>
    <tr>
        <td>
            {{number}}
        </td>
        <td>
            {{formatage}}
        </td>
        <td>
            {{email}}
        </td>
        <td>
            {{price}}
        </td>
        <td>
            {{phoneNumber}}
        </td>
        <!--                {{formatage()}}-->
    </tr>
</template>

<script>
    // import { format} from 'timeago.js';
    import {format} from "timeago.js";

    export default {
        name: 'orders',
        props: ['id',
            'number',
            'date',
            'email',
            'price',
            'phoneNumber',
        ],

        computed: {
            formatage() {
                return format(this.date)
            }
        }
    }
</script>

<style scoped>

    #fournisseurs p {
        font-family: Verdana;
        text-decoration: underline;
        font-weight: 900;
    }



</style>