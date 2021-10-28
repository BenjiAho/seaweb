<template>
  <nav class="d-flex flex-row justify-content-center">
    <div  v-for="link in links" :key="link.label">
      <button class="btn btn-outline-dark" v-on:click="$emit('url',link.url)" v-html="link.label"></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props:["links"],
}
</script>