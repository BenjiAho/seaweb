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
        <td>
            {{ status }}
        </td>
    </tr>
</template>

<script>
    import { format} from 'timeago.js';
    export default {
        name: 'resellers',
        props: [
            'id',
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

    #fournisseurs p {
        font-family: Verdana;
        text-decoration: underline;
        font-weight: 900;
    }
</style>