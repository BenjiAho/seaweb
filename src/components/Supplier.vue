<template>

<tr>
    <td>
        {{ name }}
    </td>


    <td>
        {{ formatage }}
    </td>


    <td>
        {{ status }}
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
            }
        }
    }
</script>

<style scoped>

</style>