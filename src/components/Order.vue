<template>
    <tr>
        <td>
            {{ number }}
        </td>
        <td>
            {{ date }}
        </td>
        <td>
            {{ email }}
        </td>
        <td>
            {{ price }}
        </td>
        <td>
            {{ phoneNumber }}
        </td>
        <!--                {{formatage()}}-->
    </tr>
</template>

<script>
    // import { format} from 'timeago.js';
    export default {
        name: 'orders',
        props: ['id',
            'number',
            'date',
            'email',
            'price',
            'phoneNumber',
        ],

        methods: {
            // formatage(){
            //     return format(this.all.updatedAt)
            // }
        }
    }
</script>

<style scoped>
    #revendeurs {
        width: 65%;
        height: 50%;
        list-style: none;
        box-shadow: 13px 10px 5px 0px rgba(161, 161, 161, 0.75);
        -webkit-box-shadow: 13px 10px 5px 0px rgba(161, 161, 161, 0.75);
        -moz-box-shadow: 13px 10px 5px 0px rgba(161, 161, 161, 0.75);
        margin: auto;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }

    #revendeurs:hover {
        background-color: rebeccapurple;
        color: white;
        transition-duration: 1s;
        border-color: azure;
    }

    #fournisseurs p {
        font-family: Verdana;
        text-decoration: underline;
        font-weight: 900;
    }

    .border {
        font-size: 1.6rem;
        display: grid;
        place-items: center;
        min-height: 200px;
        border: 8px solid;
        padding: 1rem;
        border-radius: 50px;
    }

    .full {
        border-color: rebeccapurple;
    }

</style>