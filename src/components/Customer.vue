<template>
        <tr>
            <td>
                {{ firstName }}
            </td>
            <td>
                {{ lastName }}
            </td>
            <td>
                {{ email }}
            </td>
            <td>
                {{ phoneNumber }}
            </td>
        </tr>
        <!--                {{formatage()}}-->
</template>

<script>
    // import { format} from 'timeago.js';
    export default {
        name: 'customers',
        props: ['id',
            'firstName',
            'email',
            'phoneNumber',
            'lastName',
        ],

        methods: {
            // formatage(){
            //     return format(this.all.updatedAt)
            // }
        }
    }
</script>

<style scoped>


</style>